'use client';
import {
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
  ReactNode,
} from 'react';


interface CoworkingContextType {
  Mycoworking: any;
  setMyCoworking: Dispatch<SetStateAction<any>>;
}

const MyCoworkingContext = createContext<CoworkingContextType>({
 Mycoworking: undefined,
  setMyCoworking: () => {},
});

interface MyCoworkingProviderProps {
  children: ReactNode;
}

const MyCoworkingProvider = ({ children }: MyCoworkingProviderProps) => {
  const [Mycoworking, setMyCoworking] = useState<any>({});

  return (
    <MyCoworkingContext.Provider value={{ Mycoworking, setMyCoworking}}>
      {children}
    </MyCoworkingContext.Provider>
  );
};

const useMyCoworkingContext = () => useContext(MyCoworkingContext);

export { MyCoworkingProvider, useMyCoworkingContext };
