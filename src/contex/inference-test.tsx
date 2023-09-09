
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
