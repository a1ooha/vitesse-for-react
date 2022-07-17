export default {
  locales: ['zh', 'en', 'ja'],
  sourceLocale: 'en',
  catalogs: [
    {
      path: '<rootDir>/locales/{locale}/messages',
      include: ['<rootDir>'],
      exclude: ['**/node_modules/**']
    }
  ],
  format: 'po',
  orderBy: 'origin',
  compileNamespace: 'es',
  extractBabelOptions: {
    presets: ['@babel/preset-typescript']
  }
};
