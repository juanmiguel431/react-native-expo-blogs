import React, { useContext } from 'react';
import { Button, FlatList, Text, View } from 'react-native';
import { HomeScreenProps } from '../models/screen';
import { BlogContext } from '../contex/BlogContext';

const HomeScreen: React.FC<HomeScreenProps> = () => {

  const { add, data } = useContext(BlogContext);

  return (
    <View>
      <Text>Hello there!</Text>
      <Button
        title="Add Blog"
        onPress={add}
      />
      <FlatList
        data={data}
        keyExtractor={item => item.title}
        renderItem={({ item }) => (
          <Text>{item.title}</Text>
        )}
      />
    </View>
  )
};

export default HomeScreen;
