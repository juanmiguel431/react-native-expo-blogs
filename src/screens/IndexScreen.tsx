import React, { useContext } from 'react';
import { Button, FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { IndexScreenProps } from '../models/screen';
import { BlogContext } from '../contex/BlogContext';
import { BLOG_ACTION_TYPE } from '../models/actions';
import { Feather } from '@expo/vector-icons'

const IndexScreen: React.FC<IndexScreenProps> = () => {
  const { state: { data }, dispatch } = useContext(BlogContext);

  return (
    <View>
      <Button
        title="Add Blog"
        onPress={() => dispatch({ type: BLOG_ACTION_TYPE.Add })}
      />
      <FlatList
        data={data}
        keyExtractor={item => item.title}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.title}>{item.title} - {item.id}</Text>
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
  icon: {
    fontSize: 24
  },
  row: {
    borderColor: 'gray',
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  title: {
    fontSize: 18,
  }
});

export default IndexScreen;
