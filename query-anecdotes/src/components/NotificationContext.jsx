import { createContext, useReducer } from 'react';

const notifReducer = (state, action) => {
  switch (action.type) {
    case 'SHOW':
      return {
        message: action.payload,
        display: '',
      };
    case 'HIDE':
      return {
        message: '',
        display: 'none',
      }
    default:
      return state
  }
}

const NotifContext = createContext();

export const NotifContextProvider = (props) => {
  const [notif, notifDispatch] = useReducer(notifReducer, { message: '', display: 'none' });

  return (
    <NotifContext.Provider value={[notif, notifDispatch]}>
      {props.children}
    </NotifContext.Provider>
  )
}

export default NotifContext
