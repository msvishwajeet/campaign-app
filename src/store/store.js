import React, { useReducer,useContext } from 'react';

import { reducer } from './reducer';
import { getData } from '../utility/helpers';

const initialState = {
    modal: {
        show: false,
        children: null,
    },
    campaignsData: getData(),
    languageType: 'english',
};

const StoreContext = React.createContext({
  globalState: initialState,
  dispatch: () => undefined
});

export const GlobalStateProvider = ({ children }) => {
  const [globalState, dispatch] = useReducer(reducer, initialState);

  return <StoreContext.Provider value={{ globalState, dispatch }}>{children}</StoreContext.Provider>;
};

export const useStore = () => useContext(StoreContext);