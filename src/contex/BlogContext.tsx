import React, { PropsWithChildren, useCallback, useState } from 'react';
import { BlogPost } from '../models';

type Store = {
  data: BlogPost[];
  add: () => void;
}

const defaultValue: Store = {
  data: [],
  add: () => {
  }
};

export const BlogContext = React.createContext<Store>(defaultValue);
export const BlogProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);

  const add = useCallback(() => {
    setBlogs(prev => [...prev, { title: `Blog Post #${prev.length + 1}` }]);
  }, []);

  return (
    <BlogContext.Provider value={{ data: blogs, add: add }}>
      {children}
    </BlogContext.Provider>
  );
};
export const BlogConsumer = BlogContext.Consumer;
