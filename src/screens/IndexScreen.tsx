import React, { useCallback, useContext, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { IndexScreenProps } from '../models/screen';
import { BlogContext } from '../context/BlogContext';
import { EvilIcons, Feather } from '@expo/vector-icons'
import { SCREEN } from '../models';
import { useFocusEffect } from '@react-navigation/native';

export const IndexScreen: React.FC<IndexScreenProps> = ({ navigation }) => {
  const { state: { data }, deleteBlogPost, getBlogPost } = useContext(BlogContext);

  // using useFocusEffect instead.
  // useEffect(() => {
  //   getBlogPost();
  //
  //   navigation.addListener('focus', () => {
  //     getBlogPost();
  //   })
  //
  // }, [getBlogPost, navigation]);

  useFocusEffect(useCallback(() => {
    getBlogPost();
  }, [getBlogPost]));

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(SCREEN.Create);
          }}>
          <Feather name="plus" style={styles.addNew}/>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <StatusBar style="auto" />
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <TouchableOpacity onPress={() => {
              // navigation.removeListener();
              navigation.navigate(SCREEN.Show, { id: item.id });
            }}>
              <Text style={styles.title}>{item.title}</Text>
            </TouchableOpacity>
            <View style={styles.actionContainer}>
              <TouchableOpacity onPress={() => navigation.navigate(SCREEN.Edit, { id: item.id })}>
                <EvilIcons name="pencil" style={styles.editIcon}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                deleteBlogPost(item.id);
              }}>
                <Feather name="trash" style={styles.deleteIcon}/>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 120
  },
  addNew: {
    fontSize: 30,
    paddingRight: 25
  },
  deleteIcon: {
    fontSize: 27
  },
  editIcon: {
    fontSize: 35
  },
  row: {
    borderColor: 'gray',
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 25,
    paddingVertical: 20
  },
  title: {
    fontSize: 18,
  }
});

export default IndexScreen;
