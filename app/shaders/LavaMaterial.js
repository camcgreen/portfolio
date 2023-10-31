import { extend } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'

const LavaMaterial = shaderMaterial(
  {
    uTime: null,
  },
  `
  uniform vec2 uOffset;
  varying vec2 vUv;
  varying vec3 vPosition;
  void main() {
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  }
  `,
  `
  uniform float uTime;
  varying vec2 vUv;
  varying vec3 vPosition;

  float mod289(float x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
  vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
  vec4 perm(vec4 x){return mod289(((x * 34.0) + 1.0) * x);}
  
  float noise(vec3 p){
      vec3 a = floor(p);
      vec3 d = p - a;
      d = d * d * (3.0 - 2.0 * d);
  
      vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);
      vec4 k1 = perm(b.xyxy);
      vec4 k2 = perm(k1.xyxy + b.zzww);
  
      vec4 c = k2 + a.zzzz;
      vec4 k3 = perm(c);
      vec4 k4 = perm(c + 1.0);
  
      vec4 o1 = fract(k3 * (1.0 / 41.0));
      vec4 o2 = fract(k4 * (1.0 / 41.0));
  
      vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);
      vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);
  
      return o4.y * d.y + o4.x * (1.0 - d.y);
  }

  float lines(vec2 uv, float offset) {
    return smoothstep(
      0.0, 0.5 + offset * 0.5, abs(0.5 * (sin(uv.x * 30.0) + offset * 2.0))
    );
  }

  mat2 rotate2D(float angle) {
    return mat2(
      cos(angle), -sin(angle), sin(angle), cos(angle)
    );
  }

  void main() {
    vec3 baseFirst = vec3(120.0 / 255.0, 158.0 / 255.0, 113.0 / 255.0);
    vec3 accent = vec3(0.0, 0.0, 0.0);
    vec3 baseSecond = vec3(224.0 / 255.0, 148.0 / 255.0, 66.0 / 255.0);
    // vec3 baseThird = vec3(232.0 / 255.0, 201.0 / 255.0, 73.0 / 255.0);
    float n = noise(vPosition + uTime);
    vec3 color1 = vec3(1.0, 0.0, 0.0);
    vec3 color2 = vec3(0.0, 1.0, 0.0);
    vec3 color3 = vec3(0.0, 0.0, 1.0);

    vec2 baseUV = rotate2D(n) * vPosition.xy * 0.01;
    float basePattern = lines(baseUV, 0.75);
    // control day and night
    float daylight = sin(uTime * 1.0);
    float remappedDaylight = mix(0.3, 0.65, (daylight + 1.0) * 0.65);
    float secondPattern = lines(baseUV, remappedDaylight);

    vec3 baseColor = mix(baseSecond, baseFirst, basePattern);
    vec3 secondBaseColor = mix(baseColor, accent, secondPattern);

    gl_FragColor = vec4(vec3(secondBaseColor), 1.0);
  }
   `
)
extend({ LavaMaterial })
