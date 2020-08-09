import React from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';

import backIcon from '../../assets/img/icons/back.png';
import logoImg from '../../assets/img/logo.png';

import styles from './styles';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate('Landing')
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backIcon} style={styles.backButtonImg} />
        </BorderlessButton>

        <Image source={logoImg} style={styles.logoImg} />
      </View>

      <Text style={styles.title}>{ title }</Text>
    </View>
  );
}

export default PageHeader;