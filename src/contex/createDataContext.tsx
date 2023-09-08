import React, { PropsWithChildren, useReducer } from 'react';

type ActionType<A> = (dispatch: React.Dispatch<A>) => () => void;
type ActionTypes<A> = Record<string, ActionType<A>>

type BoundedAction = () => void;
type BoundedActions = Record<string, BoundedAction>;

//Alternative 1
type ContextStateType<S> = { state: S } & Record<string, BoundedAction | S>;

//Alternative 2
// interface ContextStateType<S> {
//   state: S;
//   [key: string]: BoundedAction | S;
// }

//Alternative 3
// interface ContextStateType<S> extends Record<string, BoundedAction | S> {
//   state: S;
// }

export default <S,A>(reducer: React.Reducer<S, A>, actions: ActionTypes<A>, initialState: S) => {
  const Context = React.createContext<ContextStateType<S>>({} as ContextStateType<S>);

  const Provider: React.FC<PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundsActions: BoundedActions = {};
    for (const key in actions) {
      boundsActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state: state, ...boundsActions }}>
        {children}
      </Context.Provider>
    );
  }

  return { Context, Provider }
}
