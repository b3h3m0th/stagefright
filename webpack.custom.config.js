const path = require('path');
const nrwlConfig = require('@nrwl/react/plugins/webpack.js');

module.exports = (config) => {
  nrwlConfig(config);

  return {
    ...config,
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.(glsl|vs|fs)$/,
          loader: 'ts-shader-loader',
        },
      ],
    },
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        theme: path.join(__dirname, 'libs/shared/theme/index.scss'),
        'theme:variables': path.join(
          __dirname,
          'libs/shared/theme/src/lib/variables/index.scss'
        ),
        'theme:mixins': path.join(
          __dirname,
          'libs/shared/theme/src/lib/mixins/index.scss'
        ),
        'theme:defaultStyles': path.join(
          __dirname,
          'libs/shared/theme/src/lib/styles/index.scss'
        ),
      },
    },
    node: {
      fs: 'empty',
      ...config.node,
    },
  };
};
