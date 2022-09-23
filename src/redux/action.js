import axios from 'axios';

export function fetchData() {
  return async function (dispatch) {
    const response = await axios.get('https://reqres.in/api/users/?page=1');
    const fetchedData = response.data;
    dispatch({ type: 'FETCH_USERS', payload: fetchedData.data });
  };
}

export function setData() {
  return async function (dispatch) {
    const response = await axios.get('https://reqres.in/api/users/?page=1');
    const fetchedData = response.data;
    dispatch({ type: 'SET_USERS', payload: fetchedData.data });
  };
}
