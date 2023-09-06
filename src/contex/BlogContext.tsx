import React, { PropsWithChildren } from 'react';
import { BlogPost } from '../models';

export const BlogContext = React.createContext<BlogPost[]>([]);
export const BlogProvider = BlogContext.Provider;
export const BlogConsumer = BlogContext.Consumer;
