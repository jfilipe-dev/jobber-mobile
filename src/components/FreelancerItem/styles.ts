import { StyleSheet } from 'react-native';

import colors from '../../assets/global';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.colorTextLight,
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden'
  },

  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.color7,
  },

  profileInfo: {
    marginLeft: 16
  },

  name: {
    fontFamily: 'Archivo_700Bold',
    color: colors.colorTextDark,
    fontSize: 20
  },

  service: {
    fontFamily: 'Poppins_400Regular',
    color: colors.colorText,
    fontSize: 12,
    marginTop: 4
  },

  bio: {
    marginHorizontal: 24,
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    lineHeight: 24,
    color: colors.colorText,
    textAlign: 'justify'
  },

  footer: {
    backgroundColor: colors.color6,
    padding: 24,
    alignItems: 'center',
    marginTop: 24,
    borderTopColor: colors.color7,
    borderTopWidth: 1
  },

  price: {
    fontFamily: 'Poppins_400Regular',
    color: colors.colorText,
    fontSize: 16
  },

  priceValue: {
    fontFamily: 'Archivo_700Bold',
    color: colors.color3,
    fontSize: 16
  },

  contactButtonIcon: {
    resizeMode: 'contain',
    height: 20,
    width: 20
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 16
  },

  favoriteButton: {
    backgroundColor: colors.color3,
    width: 56,
    height: 56,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8
  },

  favorited: {
    backgroundColor: colors.color1
  },

  contactButton: {
    backgroundColor: colors.color5,
    flex: 1,
    width: 56,
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8
  },

  contactButtonText: {
    color: colors.colorTextLight,
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    marginLeft: 16
  }
});

export default styles;