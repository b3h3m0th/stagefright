import { GLSL, Shaders, ShadersSheet } from 'gl-react';

export const shaders: ShadersSheet = Shaders.create({
  rainbow: {
    frag: GLSL`
      precision highp float;
      varying vec2 uv;
      void main() {
        gl_FragColor = vec4(uv.x, uv.y, 0.5, 1.0);
      }
    `,
  },
});
