// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
// };

module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      'module:metro-react-native-babel-preset',
      'module:react-native-dotenv',
      '@babel/preset-flow',
    ],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.js', '.ios.js', '.android.js'],
          alias: {
            api: './src/api',
            assets: './src/assets',
            services: './src/services',
            styles: './src/styles',
            components: './src/components',
            app: './src',
          },
        },
      ],
      ['transform-class-properties'],
    ],
  };
};
