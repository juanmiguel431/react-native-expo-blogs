import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ShowScreenProps } from '../models/screen';
import { BlogContext } from '../context/BlogContext';

export const ShowScreen: React.FC<ShowScreenProps> = ({ route}) => {
  const { state: { data }, dispatch } = useContext(BlogContext);

  const blog = data.find(p => p.id === route.params.id);

  if (blog === undefined) {
    return (
      <Text>Not Found</Text>
    );
  }

  return (
    <View>
      <Text>Show Screen</Text>
      <Text>{blog.title}</Text>
    </View>
  )
};

const styles = StyleSheet.create({});

export default ShowScreen;
