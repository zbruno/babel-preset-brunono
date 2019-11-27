module.exports = function() {
  return {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
      'mobx',
    ],
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      '@babel/plugin-transform-runtime',
      '@babel/plugin-proposal-export-default-from',
      '@babel/plugin-proposal-nullish-coalescing-operator',
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-proposal-export-namespace-from',
      '@babel/plugin-proposal-throw-expressions',
      '@babel/plugin-syntax-dynamic-import',
      'mobx-deep-action',
    ].filter(Boolean),
  };
};
