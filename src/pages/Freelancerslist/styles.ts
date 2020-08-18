import { StyleSheet } from 'react-native';

import colors from '../../assets/global';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  freelancerList: {
    marginTop: -40,
  },

  searchForm: {
    marginBottom: 24,
  },

  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  inputBlock: {
    width: '48%'
  },

  label: {
    color: colors.colorTextLight,
    fontFamily: 'Poppins_400Regular'
  },

  input: {
    color: colors.colorText
  },

  picker: {
    backgroundColor: colors.colorTextLight,
    borderRadius: 8,
    padding: 3,
    marginTop: 4,
  },

  submitButton: {
    backgroundColor: colors.color3,
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '4%'
  },

  submitButtonText: {
    color: colors.colorTextLight,
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
  },

  emptyList: {
    alignItems: 'center',
    marginTop: 60
  },

  sadIcon: {
    width: 50,
    height: 50
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

  loading: {
    marginTop: 60,
    fontFamily: 'Archivo_700Bold',
    fontSize: 26,
    color: colors.colorText,
    textAlign: 'center',
  }

});

export default styles;