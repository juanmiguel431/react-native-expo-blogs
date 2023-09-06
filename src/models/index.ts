type ObjectValues<T> = T[keyof T];

export const SCREEN = {
  Home: 'Home',
} as const;

export type Screen = ObjectValues<typeof SCREEN>;

export type BlogPost = {
  title: string;
}
