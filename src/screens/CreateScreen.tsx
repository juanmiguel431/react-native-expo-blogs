import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CreateScreenProps } from '../models/screen';
import { BlogContext } from '../context/BlogContext';

export const CreateScreen: React.FC<CreateScreenProps> = ({ route}) => {
  const { state: { data }, dispatch } = useContext(BlogContext);

  return (
    <View>
      <Text>Create Screen</Text>
    </View>
  )
};

const styles = StyleSheet.create({});

export default CreateScreen;
