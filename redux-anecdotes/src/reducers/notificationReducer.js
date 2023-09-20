import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: 'success',
  show: 'none'
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotif(state, action) {
      return {
        message: action.payload,
        show: '',
      }
    },
    removeNotif(state, action) {
      return {
        ...state,
        show: 'none',
      }
    }
  }
})

export const { setNotif, removeNotif} = notificationSlice.actions;
export default notificationSlice.reducer;