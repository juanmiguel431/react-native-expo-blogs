import React, { PropsWithChildren, Reducer, useContext, useReducer } from 'react';
import uuid from 'react-native-uuid';
import { BlogFormModel, BlogPost } from '../models';
import { BLOG_ACTION_TYPE } from '../models/actions';
import createDataContext, { ActionType } from './createDataContext';
import jsonServer from '../apis/jsonServer';

type ReducerState = { data: BlogPost[] };
type ReducerAction = AddAction | DeleteAction | EditAction;

type AddAction = { type: 'Add', payload: BlogFormModel };
type EditAction = { type: 'Edit', payload: BlogPost };
type DeleteAction = { type: 'Delete', payload: string };

const blogReducer: Reducer<ReducerState, ReducerAction> = (state, action) => {
  switch (action.type) {
    case BLOG_ACTION_TYPE.Add:
      return { ...state, data: [...state.data, { ...action.payload, id: uuid.v4().toString() }] };
    case BLOG_ACTION_TYPE.Edit: {
      const data = state.data.map(p => {
        return p.id === action.payload.id ? { ...p, ...action.payload } : p;
      });
      return { ...state, data: data };
    }
    case BLOG_ACTION_TYPE.Delete:{
      return { ...state, data: state.data.filter(p => p.id !== action.payload) };
    }
    default:
      return state;
  }
}

type BlogContextType = { state: ReducerState; dispatch: React.Dispatch<ReducerAction>; }
export const BlogContextO = React.createContext<BlogContextType>({} as BlogContextType);

export const BlogProviderO: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(blogReducer, { data: [] });

  return (
    <BlogContextO.Provider value={{ state: state, dispatch: dispatch }}>
      {children}
    </BlogContextO.Provider>
  );
};

const addBlogPost = (dispatch: React.Dispatch<ReducerAction>) => {
  return (blog: BlogFormModel) => {
    dispatch({ type: BLOG_ACTION_TYPE.Add, payload: blog })
  }
};

const editBlogPost = (dispatch: React.Dispatch<ReducerAction>) => {
  return (blog: BlogPost) => {
    dispatch({ type: BLOG_ACTION_TYPE.Edit, payload: blog })
  }
};

const deleteBlogPost = (dispatch: React.Dispatch<ReducerAction>) => {
  return (id: string) => {
    dispatch({ type: BLOG_ACTION_TYPE.Delete, payload: id })
  }
};

const actions = {
  addBlogPost, editBlogPost, deleteBlogPost
};

export const {
  Context: BlogContext ,
  Provider: BlogProvider
} = createDataContext(blogReducer, actions, { data: [] });
