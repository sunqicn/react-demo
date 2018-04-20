/*
* @Author: Frank
* @Date:   2018-04-20 13:02:29
* @Last Modified by:   Frank
* @Last Modified time: 2018-04-20 13:16:30
*/

const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
  // do stuff with the webpack config...

 config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);
  config = rewireLess.withLoaderOptions({
    modifyVars: { "@primary-color": "#1DA57A" },
  })(config, env);
  return config;
};