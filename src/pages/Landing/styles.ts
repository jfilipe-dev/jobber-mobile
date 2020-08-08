import { StyleSheet } from 'react-native';

import colors from '../../assets/global';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.color4,
    justifyContent: 'center',
    padding: 40,
  },

  banner: {
    width: '100%',
    height: '33%',
    // resizeMode: 'contain',
    // borderWidth: 1,
    // borderColor: '#fff',
  },

  title: {
    fontFamily: 'Poppins_400Regular',
    color: colors.colorTextLight,
    fontSize: 20,
    lineHeight: 30,
    marginTop: 80
  },

  titleBold: {
    fontFamily: 'Poppins_600SemiBold',
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between'
  },

  icon: {
    width: 30,
    height: 30,
  },

  button: {
    height: 150,
    width: '48%',
    borderRadius: 8,
    padding: 24,
    justifyContent: "space-between",
  },

  buttonPromote: {
    backgroundColor: colors.color1
  },

  buttonSearch: {
    backgroundColor: colors.color3
  },

  buttonText: {
    fontFamily: 'Archivo_700Bold',
    color: colors.colorTextLight,
    fontSize: 20
  },

  heartIcon: {
    width: 15,
    height: 15
  },

  totalConnections: {
    fontFamily: 'Poppins_400Regular',
    color: colors.colorTextLight,
    fontSize: 12,
    lineHeight: 20,
    maxWidth: 140,
    marginTop: 40,
  }
});

export default styles;