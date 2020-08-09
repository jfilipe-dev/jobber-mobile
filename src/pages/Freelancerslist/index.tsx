import React from 'react';
import { View } from 'react-native';

import PageHeader from '../../components/PageHeader';

import styles from './styles';

function FreelancersList() {
  return (
    <View style={styles.container}>
      <PageHeader title="Jobbers disponíveis" />
    </View>
  );
}

export default FreelancersList;