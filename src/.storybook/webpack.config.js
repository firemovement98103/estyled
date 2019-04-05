const path = require('path');

module.exports = async ({ config }) => {
  // Remove rule that overrides the svgr rule, need to add icon/font loading rule back if we want URL-loader
  config.module.rules = config.module.rules.filter(({ test }) => !test.test('sample.svg'));
  config.module.rules.push(
    { test: /.svg$/, loader: '@svgr/webpack', options: { configFile: path.resolve(__dirname, '..', '..', '.svgrrc') } },
  );
  return config;
}