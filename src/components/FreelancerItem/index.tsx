import React, { useState } from 'react';
import { View, Image, Text, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

import whatsappIcon from '../../assets/img/icons/whatsapp.png';

import colors from '../../assets/global';
import styles from './styles';
import api from '../../services/api';

export interface Freelancer {
  id: number,
  name: string,
  avatar: string,
  whatsapp: string,
  bio: string,
  portifolio: string,
  service: string,
  cost: number,
}

interface FreelancerItemProps {
  freelancer: Freelancer;
  favorited: boolean;
}

const Freelanceritem: React.FC<FreelancerItemProps> = ({ freelancer, favorited }) => {
  const [isFavorited, setIsFavorited] = useState(favorited);

  function handleLinkToWhatsapp() {
    api.post('/connections', {
      user_id: freelancer.id
    });

    Linking.openURL(`whatsapp://send?phone=55${freelancer.whatsapp}`)
  }

  async function handleToggleFavorite() {
    const favorites = await AsyncStorage.getItem('favorites');

      let favoritesArray = [];

      if (favorites) {
        favoritesArray = JSON.parse(favorites);
      }

    if (isFavorited) {
      const favoriteIndex = favoritesArray.findIndex((freelancerItem: Freelancer) => {
        return freelancerItem.id === freelancer.id;
      })

      favoritesArray.splice(favoriteIndex, 1);
      setIsFavorited(false);
    } else {
      favoritesArray.push(freelancer);
      setIsFavorited(true);      
    }

    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: freelancer.avatar }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>{freelancer.name}</Text>
          <Text style={styles.service}>{freelancer.service}</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        {freelancer.bio} 
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora trabalhada {'   '}
          <Text style={styles.priceValue}>{freelancer.cost}</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton
            onPress={handleToggleFavorite}
            style={[
              styles.favoriteButton, 
              isFavorited && styles.favorited
            ]}
          >
            { isFavorited
              ? <MaterialCommunityIcons name="heart-off" size={20} color={colors.colorTextLight} />  
              : <AntDesign name="heart" size={20} color={colors.colorTextLight} />
            }
          </RectButton>

          <RectButton onPress={handleLinkToWhatsapp} style={styles.contactButton}>
            <Image source={whatsappIcon} style={styles.contactButtonIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default Freelanceritem;