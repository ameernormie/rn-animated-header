module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.', 'app'],
        extensions: ['.ts', '.tsx', '.js', '.json', '.ios.tsx', '.android.tsx'],
      },
    ],
  ],
};
