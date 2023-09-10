import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { CreateScreenProps } from '../models/screen';
import { BlogContext } from '../context/BlogContext';
import { BLOG_ACTION_TYPE } from '../models/actions';
import BlogForm from '../components/BlogForm';

export const CreateScreen: React.FC<CreateScreenProps> = ({ route,navigation }) => {
  const { dispatch } = useContext(BlogContext);

  return (
    <BlogForm
      onSubmit={({ title, content }) => {
        dispatch({ type: BLOG_ACTION_TYPE.Add, payload: { title, content} });
        navigation.goBack();
      }}
    />
  )
};

const styles = StyleSheet.create({});

export default CreateScreen;
