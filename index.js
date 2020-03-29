module.exports = function() {
  return {
    presets: [
      ['react-app', { 'flow': false, 'typescript': true }],
      'mobx',
      '@emotion/babel-preset-css-prop'
    ],
    plugins: [
      'emotion',
      'macros',
      '@babel/plugin-transform-runtime',
      '@babel/plugin-proposal-export-default-from',
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-proposal-export-namespace-from',
      '@babel/plugin-proposal-throw-expressions',
      'mobx-deep-action',
    ].filter(Boolean),
  };
};
