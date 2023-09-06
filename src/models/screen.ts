import { NativeStackScreenProps, NativeStackNavigationProp  } from 'react-native-screens/native-stack';
import type { RouteProp } from '@react-navigation/native';
import { SCREEN } from './index';

export type RootStackParamList = {
  [SCREEN.Home]: undefined;
};

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;
export type RouteProps = RouteProp<RootStackParamList>;
