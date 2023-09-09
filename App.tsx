import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './src/models/screen';
import { BlogProvider } from './src/context/BlogContext';
import { SCREEN } from './src/models';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import { Animated } from 'react-native';

const av = new Animated.Value(0);
av.addListener(() => {});

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <BlogProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerTitle: 'Blogs', cardStyle: { backgroundColor: '#FFFFFF' } }}
          initialRouteName={SCREEN.Index}>
          <Stack.Screen name={SCREEN.Index} component={IndexScreen}/>
          <Stack.Screen name={SCREEN.Show} component={ShowScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </BlogProvider>
  );
}
