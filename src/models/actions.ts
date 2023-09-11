type ObjectValues<T> = T[keyof T];

export const BLOG_ACTION_TYPE = {
  Get: 'Get',
  Add: 'Add',
  Edit: 'Edit',
  Delete: 'Delete'
} as const;

export type BlogActionType = ObjectValues<typeof BLOG_ACTION_TYPE>;
