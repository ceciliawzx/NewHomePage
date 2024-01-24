import React, { createContext, useReducer, useContext, Dispatch } from 'react';

type state = {
  showMenu: boolean;
  changeWidth: boolean;
  currPage: string;
  showNotes: boolean;
  showPoems: boolean;
};

const initialState: state = {
  showMenu: false,
  changeWidth: false,
  currPage: '.',
  showNotes: false,
  showPoems: false,
};

export const AppContext = createContext<state | null>(null);
export const AppDispatchContext = createContext<Dispatch<any> | null>(null);

function appReducer(state: state, action: { type: string; payload: any }) {
  switch (action.type) {
    case 'CHANGE_SHOW_MENU':
      return {
        ...state,
        showMenu: action.payload,
      };
    case 'CHANGE_WIDTH':
      return {
        ...state,
        changeWidth: action.payload,
      };
    case 'CHANGE_CURR_PAGE':
      return {
        ...state,
        currPage: action.payload,
      };
    case 'CHANGE_SHOW_NOTES':
      return {
        ...state,
        showNotes: action.payload,
      }
    case 'CHANGE_SHOW_POEMS':
      return {
        ...state,
        showPoems: action.payload,
      }
    default:
      return state;
  }
}

export function AppProvider({ children }: { children: JSX.Element }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const state = useContext(AppContext);
  const dispatch = useContext(AppDispatchContext);

  if (state === null || dispatch === null) {
    throw new Error('useAppContext must be used within an AppProvider');
  }

  const setShowMenu = (showMenu: boolean) => {
    dispatch({ type: 'CHANGE_SHOW_MENU', payload: showMenu });
  };

  const setChangeWidth = (changeWidth: boolean) => {
    dispatch({ type: 'CHANGE_WIDTH', payload: changeWidth });
  };

  const setCurrPage = (currPage: string) => {
    dispatch({ type: 'CHANGE_CURR_PAGE', payload: currPage });
  };

  const setShowNotes = (showNotes: boolean) => {
    dispatch({ type: 'CHANGE_SHOW_NOTES', payload: showNotes });
  };
  const setShowPoems = (showPoems: boolean) => {
    dispatch({ type: 'CHANGE_SHOW_POEMS', payload: showPoems });
  };

  return {
    state,
    api: {
      setShowMenu,
      setChangeWidth,
      setCurrPage,
      setShowNotes,
      setShowPoems
    },
  };
}
