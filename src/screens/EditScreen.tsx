import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { EditScreenProps } from '../models/screen';
import { BlogContext } from '../context/BlogContext';
import BlogForm from '../components/BlogForm';
import { BLOG_ACTION_TYPE } from '../models/actions';

export const EditScreen: React.FC<EditScreenProps> = ({ route, navigation}) => {
  const { state: { data }, dispatch } = useContext(BlogContext);
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
        dispatch({ type: BLOG_ACTION_TYPE.Edit, payload: { id, title, content} });
        navigation.goBack();
      }}
    />
  )
};

const styles = StyleSheet.create({});

export default EditScreen;
