import { NativeStackScreenProps, NativeStackNavigationProp  } from 'react-native-screens/native-stack';
import type { RouteProp } from '@react-navigation/native';
import { SCREEN } from './index';

export type RootStackParamList = {
  [SCREEN.Index]: undefined;
};

export type IndexScreenProps = NativeStackScreenProps<RootStackParamList, 'Index'>;

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;
export type RouteProps = RouteProp<RootStackParamList>;
