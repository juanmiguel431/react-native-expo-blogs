import { NativeStackScreenProps, NativeStackNavigationProp  } from 'react-native-screens/native-stack';
import type { RouteProp } from '@react-navigation/native';
import { SCREEN } from './index';

export type RootStackParamList = {
  [SCREEN.Index]: undefined;
  [SCREEN.Show]: { id: string };
  [SCREEN.Create]: undefined;
  [SCREEN.Edit]: { id: string };
};

export type IndexScreenProps = NativeStackScreenProps<RootStackParamList, 'Index'>;
export type ShowScreenProps = NativeStackScreenProps<RootStackParamList, 'Show'>;
export type CreateScreenProps = NativeStackScreenProps<RootStackParamList, 'Create'>;
export type EditScreenProps = NativeStackScreenProps<RootStackParamList, 'Edit'>;

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;
export type RouteProps = RouteProp<RootStackParamList>;
