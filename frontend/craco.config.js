const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          modifyVars: {
            '@primary-color': '#5e74ff'
          },
          javascriptEnabled: true,
        },
      },
    },
  ],
};
