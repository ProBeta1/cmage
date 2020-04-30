import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, SET_CURRENT_DATA } from "./dataTypes"
import Unsplash from "unsplash-js/native";

const unsplash = new Unsplash({
  accessKey: "U_eXm-ZHGQyYOIe2Thwu_K4RCACD22-AAGxtlxmULmM",
});

export const fetchDataRequest = () => {
  return {
    type:FETCH_DATA_REQUEST
  }
}

export const fetchDataSuccess = (data) => {
  return {
    type:FETCH_DATA_SUCCESS,
    payload:data
  }
}
export const fetchDataFailure = (error) => {
  return {
    type:FETCH_DATA_FAILURE,
    payload:error
  }
}

export const setCurrentData = (item) => {
  return {
    type:SET_CURRENT_DATA,
    payload:item
  }
}

export const fetchData = (query) => {
  return (dispatch) => {
    dispatch(fetchDataRequest)
    unsplash.search.photos(query, 1, 40, { orientation: "portrait" })
    .then((res) => res.json())
      .then((json) => {
        const data = json.results;
        dispatch(fetchDataSuccess(data))
        return data;
      })
      .catch((err) => dispatch(fetchDataFailure(err.message)));
  }
}