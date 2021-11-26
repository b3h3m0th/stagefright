import { GLSL, Shaders, ShadersSheet } from 'gl-react';

// import rainbowFragment from './glsl/rainbow/fragment.glsl';

// console.log('hi', fragment);

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
  bendDistortion: {
    frag: GLSL`
      uniform sampler2D uTexture;
      uniform float uAlpha;
      uniform vec2 uOffset;
      varying vec2 vUv;

      vec3 rgbShift(sampler2D textureimage, vec2 uv, vec2 offset ){
        float r = texture2D(textureimage, uv + offset).r;
        vec2 gb = texture2D(textureimage, uv).gb;
        return vec3(r, gb);
      }

      void main(){
        // vec3 color = texture2D(uTexture, vUv).rgb;
        vec3 color = rgbShift(uTexture, vUv, uOffset);
        gl_FragColor = vec4(color, uAlpha);
      }
    `,
    vert: GLSL`
    uniform sampler2D uTexture;
      uniform vec2 uOffset;
      varying vec2 vUv;

      float M_PI = 3.141529;

      vec3 deformationCurve(vec3 position, vec2 uv, vec2 offset){
        position.x = position.x + (sin(uv.y * M_PI) * offset.x);
        position.y = position.y + (sin(uv.x * M_PI) * offset.y);
        return position;
      }

      void main(){
        vUv = uv;
        vec3 newPosition = deformationCurve(position, uv, uOffset);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
      }
    `,
  },
});
