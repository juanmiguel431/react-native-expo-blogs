import React, { useContext, useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { CreateScreenProps } from '../models/screen';
import { BlogContext } from '../context/BlogContext';
import { BLOG_ACTION_TYPE } from '../models/actions';
import { SCREEN } from '../models';

export const CreateScreen: React.FC<CreateScreenProps> = ({ route,navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const { state: { data }, dispatch } = useContext(BlogContext);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput value={title} onChangeText={setTitle} style={styles.input}/>
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput value={content} onChangeText={setContent} style={styles.input}/>
      <Button title="Save" onPress={() => {
        if (!(title && content)) {
          return;
        }
        dispatch({ type: BLOG_ACTION_TYPE.Add, payload: { title, content} });
        navigation.navigate(SCREEN.Index);
      }} />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    fontSize: 18,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 10
  }
});

export default CreateScreen;
