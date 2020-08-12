import React, { useState, useCallback } from 'react';
import { View, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';

import styles from './styles';
import FreelancerItem, { Freelancer } from '../../components/FreelancerItem';

function Favorites() {
  const [favorites, setFavorites] = useState([]);


  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedFreelancers = JSON.parse(response);
        setFavorites(favoritedFreelancers);
      }
    });
  }

  useFocusEffect(
    useCallback(() => {
      loadFavorites();
    }, [])
  )

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <PageHeader title="Meus Jobbers favoritos" />

        <ScrollView
        style={styles.favoriteList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16
        }}
      >
       {favorites.map((freelancer: Freelancer) => {
         return (
          <FreelancerItem key={freelancer.id} freelancer={freelancer} favorited />
         );
       })}
      </ScrollView>
      </View>
    </View>
  );
}

export default Favorites;