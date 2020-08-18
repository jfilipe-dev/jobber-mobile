import { StyleSheet } from 'react-native';

import colors from '../../assets/global';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  favoriteList: {
    marginTop: -40,
  },

  emptyList: {
    alignItems: 'center',
    marginTop: 60
  },

  opsTitle: {
    marginTop: 10,
    fontFamily: 'Archivo_700Bold',
    fontSize: 26,
    color: colors.colorText
  },

  opsTitleText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    width: 300,
    textAlign: 'center',
    marginTop: 10,
    color: colors.colorText,
  },
});

export default styles;