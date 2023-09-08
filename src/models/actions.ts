type ObjectValues<T> = T[keyof T];

export const BLOG_ACTION_TYPE = {
  Add: 'Add'
} as const;

export type BlogActionType = ObjectValues<typeof BLOG_ACTION_TYPE>;
