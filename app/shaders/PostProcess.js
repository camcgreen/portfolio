import React, { forwardRef, useMemo } from 'react'
import { Uniform, Vector2 } from 'three'
import { Effect } from 'postprocessing'
import { BlendFunction } from 'postprocessing'

export class DotScreenEffect extends Effect {
  constructor({
    blendFunction = BlendFunction.NORMAL,
    angle = 1.57,
    scale = 1.0,
    center = new Vector2(0.5, 0.5),
    tSize = new Vector2(256, 256),
  } = {}) {
    super(
      'DotScreenEffect',
      `
      uniform vec2 center;
      uniform float angle;
      uniform float scale;
      uniform vec2 tSize;
      
      float pattern() {
        float s = sin(angle), c = cos(angle);
        vec2 tex = vUv * tSize - center;
        vec2 point = vec2(c * tex.x - s * tex.y, s * tex.x + c * tex.y) * scale;
        return (sin(point.x) * sin(point.y)) * 4.0;
      }
      
      float random(vec2 p) {
        vec2 k1 = vec2(23.14069263277926, 2.665144142690225);
        return fract(cos(dot(p, k1)) * 12345.6789) - 0.5;
      }
      
      void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
        vec2 uvrandom = uv;
        uvrandom.y *= random(vec2(uvrandom.y, 0.4));
        vec3 color = inputColor.rgb + random(uvrandom) * 0.1;
        outputColor = vec4(color, inputColor.a);
      }
    `,
      {
        blendFunction,
        uniforms: new Map([
          ['angle', new Uniform(angle)],
          ['scale', new Uniform(scale)],
          ['center', new Uniform(center)],
          ['tSize', new Uniform(tSize)],
        ]),
      }
    )
  }

  get angle() {
    return this.uniforms.get('angle').value
  }

  set angle(value) {
    this.uniforms.get('angle').value = value
  }

  get scale() {
    return this.uniforms.get('scale').value
  }

  set scale(value) {
    this.uniforms.get('scale').value = value
  }

  get center() {
    return this.uniforms.get('center').value
  }

  set center(value) {
    this.uniforms.get('center').value = value
  }

  get tSize() {
    return this.uniforms.get('tSize').value
  }

  set tSize(value) {
    this.uniforms.get('tSize').value = value
  }
}

export const CustomDotScreen = forwardRef(({ param }, ref) => {
  const effect = useMemo(() => new DotScreenEffect(param), [param])
  return <primitive ref={ref} object={effect} dispose={null} />
})
