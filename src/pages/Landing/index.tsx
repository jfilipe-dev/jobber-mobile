import React, { useState, useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import heroImg from '../../assets/img/hero.png';
import promoteIcon from '../../assets/img/icons/promote.png';
import searchIcon from '../../assets/img/icons/search.png';
import heartIcon from '../../assets/img/icons/heart.png';

import api from '../../services/api';

import styles from './styles';

function Landing() {
  const navigation = useNavigation();
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('/connections').then(response => {
      const { total } = response.data;
      setTotalConnections(total);
    })
  }, []);

  function handleNavigateToPromoteServicesPage() {
    navigation.navigate('PromoteServices');
  }

  function handleNavigateToAppTabs() {
    navigation.navigate('AppTabs');
  }

  return (
    <View style={styles.container}>
      <Image style={styles.banner} source={heroImg} />

      <Text style={styles.title}>
        Seja bem-vindo, {'\n'}
        <Text style={styles.titleBold}>O que deseja fazer?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton onPress={handleNavigateToPromoteServicesPage} style={[styles.button, styles.buttonPromote]}>
          <Image source={promoteIcon} style={styles.icon} />
          <Text style={styles.buttonText}>Promover trabalho</Text>
        </RectButton>

        <RectButton onPress={handleNavigateToAppTabs} style={[styles.button, styles.buttonSearch]}>
          <Image source={searchIcon} style={styles.icon} />
          <Text style={styles.buttonText}>Procurar freelancers</Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnections}>
        Total de {totalConnections} conexões já realizadas {' '}
        <Image source={heartIcon} style={styles.heartIcon} />
      </Text>
    </View>
  )
}

export default Landing;