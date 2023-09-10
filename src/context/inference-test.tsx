
export type BoundedAction = () => void;
type ActionType = (dispatch: any) => BoundedAction;


type FunctionReturnType<T> = {
  // [K in keyof T]: T[K] extends (...args: any[]) => infer R ? R : never;
  [K in keyof T]: T[K] extends (...args: any) => any ? ReturnType<T[K]> : never;
};

type OriginalFunctions = {
  myFunction1: (param: string) => string;
  myFunction2: (param: number) => number;
};

type ReturnTypeOfOriginalFunctions = FunctionReturnType<OriginalFunctions>;

const myFunction1ReturnType: ReturnTypeOfOriginalFunctions['myFunction1'] = 'string';
const myFunction2ReturnType: ReturnTypeOfOriginalFunctions['myFunction2'] = 42;

const a: ReturnTypeOfOriginalFunctions = {
  myFunction1: '1',
  myFunction2: 2
}


//////////

const test = {
  jmpc1: (param: string, param2: number) => {
    return '2'
  },
  jmpc2: (param: number) => {
    return 4;
  }
};

type MyTest =  FunctionReturnType<typeof test>;

type Action = () => void;
type Actions = Record<string, Action>;
type BoundAction = (dispatch: any) => Action;
type BoundActions = Record<string, BoundAction>;

const boundAction1: BoundAction = (dispatch: any) => () => {};
const boundAction2: BoundAction = (dispatch: any) => () => {};

const myActions = { boundAction1, boundAction2, };

// type myActionsType = typeof myActions;
//
// const testingActions: myActionsType = {
//   a: () => {},
//   b: () => {},
// }

type keysEvalV2<A extends BoundActions> = {
  [K in keyof A]: ReturnType<A[K]>
}

type keysEval<A> = {
  [K in keyof A]: A[K] extends (args: any) => infer R ? R : never;
}

type keyEvaluation =  keysEvalV2<typeof myActions>;

const testing: keyEvaluation = {
  boundAction1: () => {},
  boundAction2: () => {},
  // c: () => {},
}

const funcTest = <T extends BoundActions>(actions: T): keysEvalV2<T> => {
  const dispatch = () => {};

  const boundsActions: keysEvalV2<T> = {} as keysEvalV2<T>;
  for (const key in actions) {
    const a = actions[key](dispatch);
    boundsActions[key] = a as any;
  }

  return boundsActions;
}

const result = funcTest(myActions);
result.boundAction1();
