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
  }

});

export default styles;