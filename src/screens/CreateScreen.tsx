import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { CreateScreenProps } from '../models/screen';
import { BlogContext } from '../context/BlogContext';
import BlogForm from '../components/BlogForm';

export const CreateScreen: React.FC<CreateScreenProps> = ({ route, navigation }) => {
  const { addBlogPost } = useContext(BlogContext);

  return (
    <BlogForm
      onSubmit={({ title, content }) => {
        addBlogPost({ title, content });
        navigation.goBack();
      }}
    />
  )
};

const styles = StyleSheet.create({});

export default CreateScreen;
