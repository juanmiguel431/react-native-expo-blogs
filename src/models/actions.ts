type ObjectValues<T> = T[keyof T];

export const BLOG_ACTION_TYPE = {
  Add: 'Add',
  Delete: 'Delete'
} as const;

export type BlogActionType = ObjectValues<typeof BLOG_ACTION_TYPE>;
