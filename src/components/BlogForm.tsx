import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { BlogPost } from '../models';
import React, { useState } from 'react';

type BlogFormProps = {
  blog?: BlogPost;
  onSave: (blog: BlogPost) => void;
}

export const BlogForm: React.FC<BlogFormProps> = ({ blog, onSave}) => {
  const [title, setTitle] = useState(blog?.title || '');
  const [content, setContent] = useState(blog?.content || '');

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

        onSave({ id: blog?.id || '', title, content });
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
