import React, { useContext } from 'react';
import { FlatList, Text, View } from 'react-native';
import { HomeScreenProps } from '../models/screen';
import { BlogContext } from '../contex/BlogContext';

const HomeScreen: React.FC<HomeScreenProps> = () => {

  const context = useContext(BlogContext);

  return (
    <View>
      <Text>Hello there!</Text>
      <FlatList
        data={context}
        keyExtractor={item => item.title}
        renderItem={({ item }) => (
          <Text>{item.title}</Text>
        )}
      />
    </View>
  )
};

export default HomeScreen;
