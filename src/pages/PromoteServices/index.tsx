import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import imageBackground from '../../assets/img/background.png';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';

function PromoteServices() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground resizeMode="contain" source={imageBackground} style={styles.content}>
        <Text style={styles.title}>Quer ser um Jobber?</Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como freelancer na nossa plataforma web.
        </Text>
      </ImageBackground>

      <RectButton onPress={navigation.goBack} style={styles.okButton}>
        <Text style={styles.okButtonText}>Tudo bem</Text>
      </RectButton>
    </View>
  );
}

export default PromoteServices;