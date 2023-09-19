const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'SEARCH':
      return action.payload;
    default:
      return state;
  }
};

export const changeFilter = (search) => ({
  type: 'SEARCH',
  payload: search,
});

export default filterReducer;