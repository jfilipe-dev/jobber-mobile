import React, { useContext, useEffect } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import PageHeader from '../../components/PageHeader';

import FreelancerItem, { Freelancer } from '../../components/FreelancerItem';

import FavoritesContext from '../../context/FavoritesContext';

import styles from './styles';
import colors from '../../assets/global';

function Favorites() {
  const { loadFavorites, favorites } = useContext(FavoritesContext);

  useEffect(() => {
    loadFavorites();
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <PageHeader title="Meus Jobbers favoritos" />

       {favorites.length > 0 ? (
          <ScrollView
          style={styles.favoriteList}
          contentContainerStyle={{
            paddingHorizontal: 16,
            paddingBottom: 16
          }}
        >
          {favorites.map((freelancer: Freelancer) => (
            <FreelancerItem
              key={freelancer.id}
              freelancer={freelancer}
              favorited = {!!(favorites.map(favorite => favorite.id === freelancer.id))}
            />
          ))}
        </ScrollView>
        ) : (
          <View style={styles.emptyList}>
            <MaterialCommunityIcons name="heart-broken" size={50} color={colors.color1} />
            <Text style={styles.opsTitle}>Ops...</Text>
            <Text style={styles.opsTitleText}>Você ainda não tem jobbers favoritos.</Text>
          </View>
        )
      }
      </View>
    </View>
  );
}

export default Favorites;