import React, { useState, useEffect, useContext } from 'react';
import { View, Image, Text, Linking, TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

import whatsappIcon from '../../assets/img/icons/whatsapp.png';

import api from '../../services/api';
import formatValue from '../../utils/formatValue';

import FavoritesContext from '../../context/FavoritesContext';

import colors from '../../assets/global';
import styles from './styles';

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

interface SkillItem {
  id: number;
  skill: string;
  level: string;
}

const Freelanceritem: React.FC<FreelancerItemProps> = ({ freelancer, favorited }) => {
  const [isFavorited, setIsFavorited] = useState(favorited);
  const [skills, setSkills] = useState<SkillItem[]>([]);

  const {addFavorite, removeFavorite, loadFavorites, favorites} = useContext(FavoritesContext);

  function handleLinkToWhatsapp() {
    api.post('/connections', {
      user_id: freelancer.id
    });

    Linking.openURL(`whatsapp://send?phone=55${freelancer.whatsapp}`)
  }

  function handleOpenPortifolio() {
    Linking.openURL(freelancer.portifolio);
  }

  function addFavoriteI(freelancer: Freelancer) {
    addFavorite(freelancer);
    setIsFavorited(true);
    loadFavorites();
  }

  function removeFavoriteI(freelancer: Freelancer) {
    removeFavorite(freelancer);
    setIsFavorited(false);
    loadFavorites();
  }

  useEffect(() => {
    const favorited = favorites.filter(favorite => favorite.id === freelancer.id)

    if(favorited.length > 0) {
      setIsFavorited(true);
    } else {
      setIsFavorited(false);
    }
  }, [favorites])

  useEffect(() => {
    api.get(`/skills/${freelancer.id}`).then((response) => {
      const { skills } = response.data;
      setSkills(skills)
    });
  }, [freelancer.id, skills])

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

      <TouchableOpacity onPress={handleOpenPortifolio} style={styles.portifolioButton}>
        <Text style={styles.portifolioButtonText}>Acessar portifólio</Text>
      </TouchableOpacity>

      <Text style={styles.skillsTitle}>Habilidades</Text>
      {skills.map((skill: SkillItem) => {
        return (
          <Text key={skill.id} style={styles.skillsTitleItem}>{skill.level} em <Text style={styles.skillsTitleItemSkill}>{skill.skill}</Text></Text>
        )
      })}

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora trabalhada {'   '}
          <Text style={styles.priceValue}>{formatValue(freelancer.cost)}</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton
            onPress={isFavorited ? (() => removeFavoriteI(freelancer)) : (() => addFavoriteI(freelancer))}
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