/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    /* resolver options */
   // eslint-disable-next-line prettier/prettier
   sourceExts: ['jsx','js', 'ts', 'tsx'] // add tsx if its not yet defined
  },
};
