import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { BlogFormModel } from '../models';

type BlogFormProps = {
  initialValues?: BlogFormModel;
  onSubmit: (blog: BlogFormModel) => void;
}

export const BlogForm: React.FC<BlogFormProps> = ({ initialValues= { title: '', content: '' }, onSubmit}) => {

  const [title, setTitle] = useState(initialValues.title || '');
  const [content, setContent] = useState(initialValues.content || '');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title:</Text>
      <TextInput value={title} onChangeText={setTitle} style={styles.input}/>
      <Text style={styles.label}>Content:</Text>
      <TextInput value={content} onChangeText={setContent} style={styles.input}/>
      <Button title="Save" onPress={() => {
        if (!(title && content)) {
          return;
        }

        onSubmit({ title, content });
      }} />
    </View>
  );
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

export default BlogForm;
