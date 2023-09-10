import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './src/models/screen';
import { BlogProvider } from './src/context/BlogContext';
import { SCREEN } from './src/models';
import { IndexScreen, ShowScreen, CreateScreen, EditScreen } from './src/screens';
import { Animated } from 'react-native';

const av = new Animated.Value(0);
av.addListener(() => {
});

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <BlogProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ cardStyle: { backgroundColor: '#FFFFFF' } }}
          initialRouteName={SCREEN.Index}>
          <Stack.Screen name={SCREEN.Index} component={IndexScreen} options={{ title: 'Blogs'}}/>
          <Stack.Screen name={SCREEN.Show} component={ShowScreen} options={{ title: 'Detail'}}/>
          <Stack.Screen name={SCREEN.Create} component={CreateScreen} options={{ title: 'Create'}}/>
          <Stack.Screen name={SCREEN.Edit} component={EditScreen} options={{ title: 'Edit'}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </BlogProvider>
  );
}
