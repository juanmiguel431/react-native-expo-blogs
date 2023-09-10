import React, { PropsWithChildren, Reducer, useContext, useReducer } from 'react';
import uuid from 'react-native-uuid';
import { BlogPost } from '../models';
import { BLOG_ACTION_TYPE, BlogActionType } from '../models/actions';
import createDataContext, { ActionType, ActionTypes } from './createDataContext';

type ReducerState = { data: BlogPost[] };
type ReducerAction = AddAction | DeleteAction | EditAction;

type AddAction = { type: 'Add', payload: BlogPost };
type EditAction = { type: 'Edit', payload: BlogPost };
type DeleteAction = {
  type: 'Delete',
  payload: string
};

const blogReducer: Reducer<ReducerState, ReducerAction> = (state, action) => {
  switch (action.type) {
    case BLOG_ACTION_TYPE.Add:
      return { ...state, data: [...state.data, { ...action.payload, id: uuid.v4().toString() }] };
    case BLOG_ACTION_TYPE.Edit: {
      const data = state.data.map(d => {
        if (d.id === action.payload.id) {
          return { ...d, ...action.payload };
        }
        return d;
      })
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
export const BlogContext = React.createContext<BlogContextType>({} as BlogContextType);

export const BlogProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(blogReducer, { data: [] });

  return (
    <BlogContext.Provider value={{ state: state, dispatch: dispatch }}>
      {children}
    </BlogContext.Provider>
  );
};

const addBlogPost: ActionType<ReducerAction> = (dispatch) => {
  return () => {
    dispatch({ type: BLOG_ACTION_TYPE.Add })
  }
}

const actions: ActionTypes<ReducerAction> = { addBlogPost };

export const {
  Context: BlogContextF ,
  Provider: BlogProviderF
} = createDataContext<typeof actions, ReducerState, ReducerAction>(blogReducer, actions, { data: [] });

const Test = () => {
  const { state,  } = useContext(BlogContextF);
}
