import React from 'react';
import { View, ScrollView } from 'react-native';

import PageHeader from '../../components/PageHeader';

import styles from './styles';
import Freelanceritem from '../../components/FreelancerItem';

function Favorites() {
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
        <Freelanceritem />
        <Freelanceritem />
        <Freelanceritem />
        <Freelanceritem />
        <Freelanceritem />
        <Freelanceritem />
      </ScrollView>
      </View>
    </View>
  );
}

export default Favorites;