import axios from 'axios';

export function fetchData() {
  return async function (dispatch) {
    const response = await axios.get('https://reqres.in/api/users/?page=1');
    const fetchedData = response.data;
    dispatch({ type: 'SET_CARS', payload: fetchedData.data });
  };
}
