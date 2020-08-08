import { StyleSheet } from 'react-native';

import colors from '../../assets/global';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.color4,
    justifyContent: 'center',
    padding: 40,
  },

  icon: {
    width: 30,
    height: 30,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 40
  },

  title: {
    fontFamily: 'Archivo_700Bold',
    color: colors.colorTextLight,
    fontSize: 32,
    lineHeight: 37,
    maxWidth: 180,
  },

  description: {
    marginTop: 24,
    color: colors.colorTextLight,
    fontSize: 16,
    lineHeight: 26,
    fontFamily: 'Poppins_400Regular',
    width: 240,
  },

  okButton: {
    marginVertical: 40,
    backgroundColor: colors.color1,
    height: 58,
    alignItems: 'center',
    justifyContent: "center",
    borderRadius: 8
  },

  okButtonText: {
    color: colors.colorTextLight,
    fontSize: 16,
    fontFamily: 'Archivo_700Bold'
  }
});

export default styles;