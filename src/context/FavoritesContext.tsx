import React, { createContext, useCallback, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

interface Freelancer {
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

interface FavoritesContextData {
  loadFavorites(): Promise<void>;
  addFavorite(freelancer: Freelancer): void;
  removeFavorite(freelancer: Freelancer): void;
  favorites: Freelancer[];
}

export const FavoritesContext = createContext<FavoritesContextData>({} as FavoritesContextData);

export const FavoritesProvider: React.FC = ({ children }) => {
  const [favorites, setFavorites] = useState<Freelancer[]>([]);

  const loadFavorites = useCallback( async () => {
    AsyncStorage.getItem('favorites1').then(response => {
      if (response) {
        const favoritedFreelancers = JSON.parse(response);
        setFavorites(favoritedFreelancers);
      }
    });
    console.log(favorites)
  }, []);

  const addFavorite = useCallback( async (freelancer) => {
    const favoritesArray = favorites;
    favoritesArray.push(freelancer);
    setFavorites(favoritesArray);

    await AsyncStorage.setItem('favorites1', JSON.stringify(favorites));

    console.log
  }, []);

  const removeFavorite = useCallback( async (freelancer) => {
    const favoritesArray = favorites;
    const favoriteIndex = favoritesArray.findIndex((freelancerItem: Freelancer) => {
      return freelancerItem.id === freelancer.id;
    })
    favoritesArray.splice(favoriteIndex, 1);
    setFavorites(favoritesArray);

    await AsyncStorage.setItem('favorites1', JSON.stringify(favorites));
  }, []);

  return(
    <FavoritesContext.Provider value={{
      loadFavorites,
      favorites,
      addFavorite,
      removeFavorite
    }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export default FavoritesContext;