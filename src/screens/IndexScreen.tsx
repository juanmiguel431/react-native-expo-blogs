import React, { useContext, useEffect } from 'react';
import { Button, FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { IndexScreenProps } from '../models/screen';
import { BlogContext } from '../context/BlogContext';
import { BLOG_ACTION_TYPE } from '../models/actions';
import { Feather } from '@expo/vector-icons'
import { SCREEN } from '../models';

export const IndexScreen: React.FC<IndexScreenProps> = ({ navigation }) => {
  const { state: { data }, dispatch } = useContext(BlogContext);

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
            <TouchableOpacity onPress={() => {
              dispatch({ type: BLOG_ACTION_TYPE.Delete, payload: item.id });
            }}>
              <Feather name="trash" style={styles.icon}/>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  addNew: {
    fontSize: 30,
    paddingRight: 25
  },
  icon: {
    fontSize: 24
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
