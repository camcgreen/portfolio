import { extend } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'

const LavaMiniMaterial = shaderMaterial(
  {
    uTime: null,
    tCube: 0.0,
  },
  `
  // uniform float uTime;
  // varying vec2 vUv;
  // varying vec3 vPosition;
  // uniform vec2 pixels;
  // float PI = 3.141592653589793238;
  
  varying vec3 vReflect;
  varying vec3 vRefract[3];
  varying float vReflectionFactor;
  
  uniform float mRefractionRatio;
  uniform float mFresnelBias;
  uniform float mFresnelScale;
  uniform float mFresnelPower;
  
  void main() {
    float mRefractionRatio = 1.02;
    float mFresnelBias = 0.1;
    float mFresnelScale = 2.0;
    float mFresnelPower = 1.0;

    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
  
    vec3 worldNormal = normalize(mat3(modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz) * normal);
  
    vec3 I = worldPosition.xyz - cameraPosition;
  
    vReflect = reflect(I, worldNormal);
    vRefract[0] = refract(normalize(I), worldNormal, mRefractionRatio);
    vRefract[1] = refract(normalize(I), worldNormal, mRefractionRatio * 0.99);
    vRefract[2] = refract(normalize(I), worldNormal, mRefractionRatio * 0.98);
    vReflectionFactor = mFresnelBias + mFresnelScale * pow(1.0 + dot(normalize(I), worldNormal), mFresnelPower);
  
    gl_Position = projectionMatrix * mvPosition;
  }
  `,
  `
  uniform samplerCube tCube;
  varying vec3 vPosition;

  varying vec3 vReflect;
  varying vec3 vRefract[3];
  varying float vReflectionFactor;

  void main() {
    vec4 reflectedColor = textureCube(tCube, vec3(-vReflect.x, vReflect.yz));
    vec4 refractedColor = vec4(1.0);

    refractedColor.r = textureCube(tCube, vec3(vRefract[0].x, vRefract[0].yz)).r;
    refractedColor.g = textureCube(tCube, vec3(vRefract[1].x, vRefract[1].yz)).g;
    refractedColor.b = textureCube(tCube, vec3(vRefract[2].x, vRefract[2].yz)).b;

    gl_FragColor = mix(refractedColor, reflectedColor, clamp(vReflectionFactor, 0.0, 1.0));
    // gl_FragColor = vec4(vec3(vReflectionFactor),1.);
    // gl_FragColor = reflectedColor;
  }
  `
)
extend({ LavaMiniMaterial })
