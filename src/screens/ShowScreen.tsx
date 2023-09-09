import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ShowScreenProps } from '../models/screen';
import { BlogContext } from '../context/BlogContext';

const ShowScreen: React.FC<ShowScreenProps> = ({ route}) => {
  const { state: { data }, dispatch } = useContext(BlogContext);

  return (
    <View>
      <Text>Show Screen</Text>
      <Text>{route.params.id}</Text>
    </View>
  )
};

const styles = StyleSheet.create({});

export default ShowScreen;
