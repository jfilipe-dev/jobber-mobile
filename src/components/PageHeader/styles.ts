import { StyleSheet } from 'react-native';

import colors from '../../assets/global';

const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingTop: 60,
    backgroundColor: colors.color4
  },

  topBar: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between"
  },

  backButtonImg: {
    resizeMode: 'contain',
    width: 30,
    height: 20,
  },

  logoImg: {
    resizeMode: 'contain',
    width: 60,
    height: 20,
  },

  title: {
    fontFamily: 'Archivo_700Bold',
    color: colors.colorTextLight,
    fontSize: 24,
    lineHeight: 32,
    maxWidth: 160,
    marginVertical: 40
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});

export default styles;