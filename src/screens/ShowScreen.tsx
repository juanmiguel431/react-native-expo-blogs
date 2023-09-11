import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ShowScreenProps } from '../models/screen';
import { BlogContext } from '../context/BlogContext';
import { SCREEN } from '../models';
import { EvilIcons } from '@expo/vector-icons';

export const ShowScreen: React.FC<ShowScreenProps> = ({ route, navigation}) => {
  const { state: { data } } = useContext(BlogContext);
  const id = route.params.id;

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(SCREEN.Edit, { id: id });
          }}>
          <EvilIcons name="pencil" style={styles.edit}/>
        </TouchableOpacity>
      ),
    });
  }, [navigation, id]);

  const blog = data.find(p => p.id === id);

  if (blog === undefined) {
    return (
      <Text>Not Found</Text>
    );
  }

  return (
    <View>
      <Text>Show Screen</Text>
      <Text>{blog.title}</Text>
      <Text>{blog.content}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  edit: {
    fontSize: 30,
    paddingRight: 25
  },
});

export default ShowScreen;
