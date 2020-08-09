import React from 'react';
import { View, ScrollView } from 'react-native';

import PageHeader from '../../components/PageHeader';
import Freelanceritem from '../../components/FreelancerItem';

import styles from './styles';

function FreelancersList() {
  return (
    <View style={styles.container}>
      <PageHeader title="Jobbers disponíveis" />

      <ScrollView
        style={styles.freelancerList}
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
  );
}

export default FreelancersList;