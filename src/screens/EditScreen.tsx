import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { EditScreenProps } from '../models/screen';
import { BlogContext } from '../context/BlogContext';
import BlogForm from '../components/BlogForm';

export const EditScreen: React.FC<EditScreenProps> = ({ route, navigation }) => {
  const { state: { data }, editBlogPost } = useContext(BlogContext);
  const id = route.params.id;
  const blog = data.find(p => p.id === id);

  if (blog === undefined) {
    return (
      <Text>Not Found</Text>
    );
  }

  return (
    <BlogForm
      initialValues={blog}
      onSubmit={({ title, content }) => {
        editBlogPost({ id, title, content });
        navigation.goBack();
      }}
    />
  )
};

const styles = StyleSheet.create({});

export default EditScreen;
