import React, { useState, useEffect, useCallback } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import {Picker} from '@react-native-community/picker';

import PageHeader from '../../components/PageHeader';
import Freelanceritem, { Freelancer } from '../../components/FreelancerItem';

import api from '../../services/api';

import colors from '../../assets/global';
import styles from './styles';

function FreelancersList() {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const [service, setService] = useState('');
  const [cost, setCost] = useState('');

  const [freelancers, setFreelancers] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  function handleToggleFilterVisible() {
    setIsFilterVisible(!isFilterVisible)
  }

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedFreelancers = JSON.parse(response);
        const favoritedFreelancersIds = favoritedFreelancers.map((freelancer: Freelancer) => {
          return freelancer.id;
        })
        setFavorites(favoritedFreelancersIds)
      }
    });
  }

  function loadFreelancers() {
    api.get('/services', {
      params: {
        service,
        cost
      }
    }).then((response) => {      
      setFreelancers(response.data);
      console.log(freelancers)
      loadFavorites();      
    });
  }

  function handelFiltersSubmit() {
    loadFreelancers();
    handleToggleFilterVisible();
  }

  useEffect(() => {
    loadFreelancers();
  }, []);

  return (
    <View style={styles.container}>
      <PageHeader title="Jobbers disponíveis" headerRight={(
        <BorderlessButton onPress={handleToggleFilterVisible}>
          <Feather name="filter" size={24} color={colors.color3} />
        </BorderlessButton>
      )}>
        {isFilterVisible && (
          <View style={styles.searchForm}>
            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Serviço</Text>
                <View style={styles.picker}>
                  <Picker
                    style={styles.input}
                    selectedValue={service}
                    onValueChange={(itemValue) =>
                      setService(itemValue as string)
                    }
                  >
                    <Picker.Item value='' label='Todos' />
                    <Picker.Item value='Desenvolvimento web' label='Desenvolvimento web' />
                    <Picker.Item value='Desenvolvimento mobile' label='Desenvolvimento mobile' />
                    <Picker.Item value='Social media' label='Social media' />
                    <Picker.Item value='Gestão de tráfego' label='Gestão de tráfego' />
                    <Picker.Item value='Redação' label='Redação' />
                    <Picker.Item value='Design de Interfaces' label='Design de Interfaces' />
                    <Picker.Item value='Tradução' label='Tradução' />
                    <Picker.Item value='Criação de logo' label='Criação de logo' />
                    <Picker.Item value='Edição de vídeo' label='Edição de vídeo' />
                    <Picker.Item value='Fotografia' label='Fotografia' />
                  </Picker>
                </View>
              </View>
 
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Preço</Text>
                <View style={styles.picker}>
                  <Picker
                    style={styles.input}
                    selectedValue={cost}
                    onValueChange={(itemValue) =>
                      setCost(itemValue as string)
                    }
                  >
                    <Picker.Item value='' label='Qualquer preço' />
                    <Picker.Item value='0-20' label='Até R$ 20,00' />
                    <Picker.Item value='20-50' label='Acima de R$20,00 e abaixo de R$ 50,00' />
                    <Picker.Item value='50-100' label='Acima de R$50,00 e abaixo de R$ 100,00' />
                    <Picker.Item value='100' label='Acima de R$100,00' />
                  </Picker>
                </View>
              </View>
            </View>

            <RectButton onPress={handelFiltersSubmit} style={styles.submitButton}>
              <Text style={styles.submitButtonText}>
                Filtrar
              </Text>
            </RectButton>
         </View>
        )}
      </PageHeader>

      <ScrollView
        style={styles.freelancerList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16
        }}
      >
        {freelancers.map((freelancer: Freelancer) => (
          <Freelanceritem
            key={freelancer.id}
            freelancer={freelancer}
            favorited={favorites.includes(freelancer.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

export default FreelancersList;