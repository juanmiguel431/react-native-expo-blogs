import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SCREEN } from './src/models';
import HomeScreen from './src/screens/HomeScreen';

import { RootStackParamList } from './src/models/screen';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerTitle: 'Business Search', cardStyle: { backgroundColor: '#FFFFFF' } }}
        initialRouteName={SCREEN.Home}>
        <Stack.Screen name={SCREEN.Home} component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
