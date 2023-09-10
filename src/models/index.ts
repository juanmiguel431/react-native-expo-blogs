type ObjectValues<T> = T[keyof T];

export const SCREEN = {
  Index: 'Index',
  Show: 'Show',
  Create: 'Create',
  Edit: 'Edit',
} as const;

export type Screen = ObjectValues<typeof SCREEN>;

export type BlogPost = {
  id: string;
  title: string;
  content: string;
}
