import React from 'react';
import { Text, View } from 'react-native';
import { HomeScreenProps } from '../models/screen';

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <View>
      <Text>Hello there!</Text>
    </View>
  )
};

export default HomeScreen;
