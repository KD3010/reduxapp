export const dataReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_USERS':
      return state;
    case 'SET_USERS':
      return (state = [...action.payload]);
    default:
      return state;
  }
};
