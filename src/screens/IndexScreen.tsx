import React, { useContext } from 'react';
import { Button, FlatList, Text, View } from 'react-native';
import { IndexScreenProps } from '../models/screen';
import { BlogContext } from '../contex/BlogContext';
import { BLOG_ACTION_TYPE } from '../models/actions';

const IndexScreen: React.FC<IndexScreenProps> = () => {
  const { state: { data }, dispatch } = useContext(BlogContext);

  return (
    <View>
      <Text>Hello there!</Text>
      <Button
        title="Add Blog"
        onPress={() => dispatch({ type: BLOG_ACTION_TYPE.Add })}
      />
      <FlatList
        data={data}
        keyExtractor={item => item.title}
        renderItem={({ item }) => (
          <Text>{item.title}</Text>
        )}
      />
    </View>
  )
};

export default IndexScreen;
