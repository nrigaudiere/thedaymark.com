/* global require, exports, __dirname */

const _ = require('lodash');
const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        '@daymark/components': path.resolve(__dirname, 'src/components'),
        '@daymark/pages': path.resolve(__dirname, 'src/pages'),
        '@daymark/helpers': path.resolve(__dirname, 'src/helpers'),
        '@daymark/data': path.resolve(__dirname, 'src/data'),
      },
    },
  });
};
