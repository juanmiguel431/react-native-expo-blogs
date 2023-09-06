import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SCREEN } from './src/models';
import HomeScreen from './src/screens/HomeScreen';

import { RootStackParamList } from './src/models/screen';
import { BlogProvider } from './src/contex/BlogContext';

const Stack = createStackNavigator<RootStackParamList>();

const blogPosts = [
  { title: 'Blog Post #1' },
  { title: 'Blog Post #2' },
];


export default function App() {
  return (
    <BlogProvider value={blogPosts}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerTitle: 'Blogs', cardStyle: { backgroundColor: '#FFFFFF' } }}
          initialRouteName={SCREEN.Home}>
          <Stack.Screen name={SCREEN.Home} component={HomeScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </BlogProvider>
  );
}
