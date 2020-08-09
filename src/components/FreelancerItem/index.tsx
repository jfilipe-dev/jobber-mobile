import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

import whatsappIcon from '../../assets/img/icons/whatsapp.png';

import colors from '../../assets/global';
import styles from './styles';

function Freelanceritem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://avatars3.githubusercontent.com/u/55659197?s=460&u=c0c3565ad51e676592c2b47436c7ae99cb902eef&v=4' }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>João Filipe</Text>
          <Text style={styles.service}>Desenvolvimento mobile</Text>
        </View>
      </View>

      <Text style={styles.bio}>
      Estudante de Engenharia de Software na Universidade Tecnológica Federal do Paraná (UTFPR), Desenvolvedor Frontend com React, Mobile com React Native e Backend com Node.  
      Entusiasta em Design de interfaces e UX, o Figma é a minha ferramenta de criação. 
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora trabalhada {'   '}
          <Text style={styles.priceValue}>R$ 80,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <AntDesign name="heart" size={20} color={colors.color1} /> */}
            <MaterialCommunityIcons name="heart-off" size={20} color={colors.colorTextLight} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} style={styles.contactButtonIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default Freelanceritem;