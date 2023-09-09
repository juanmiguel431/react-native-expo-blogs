import React, { PropsWithChildren, useReducer } from 'react';

export type BoundedAction = () => void;
export type BoundedActions = Record<string, BoundedAction>;

export type ActionType<A = any> = (dispatch: React.Dispatch<A>) => BoundedAction;
export type ActionTypes<A> = Record<string, ActionType<A>>

type ExtractBoundedAction<A> = A extends ActionType ? ReturnType<A> : never;


//Alternative 1
// type ContextStateType<S,A,R extends ActionTypes<A>> = { state: S } & Record<string, BoundedAction | S>;
// type ContextStateType<S,A,R extends ActionTypes<A>> = { state: S } & Record<keyof R, ExtractBoundedAction<R[keyof R]>>;
type ContextStateType<S,A,R extends ActionTypes<A>> = { state: S } & Record<keyof R, ReturnType<R[keyof R]>>;

//Alternative 2
// interface ContextStateType<S> {
//   state: S;
//   [key: string]: BoundedAction | S;
// }

//Alternative 3
// interface ContextStateType<S> extends Record<string, BoundedAction | S> {
//   state: S;
// }

export default <S,A,R extends ActionTypes<A>>(reducer: React.Reducer<S, A>, actions: R, initialState: S) => {
  const Context = React.createContext<ContextStateType<S,A,R>>({} as ContextStateType<S,A,R>);

  const Provider: React.FC<PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundsActions: BoundedActions = {};
    for (const key in actions) {
      boundsActions[key] = actions[key](dispatch);
    }

    const contextValue: ContextStateType<S, A, R> = {
      state: state,
      ...boundsActions,
    };

    return (
      <Context.Provider value={contextValue}>
        {children}
      </Context.Provider>
    );
  }

  return { Context, Provider }
}
