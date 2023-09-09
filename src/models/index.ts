type ObjectValues<T> = T[keyof T];

export const SCREEN = {
  Index: 'Index',
} as const;

export type Screen = ObjectValues<typeof SCREEN>;

export type BlogPost = {
  title: string;
}
