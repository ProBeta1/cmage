import { FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS, FETCH_DATA_REQUEST, SET_CURRENT_DATA } from "./dataTypes"


const intialState = {
  loading:false,
  data:[],
  item:[],
  error:""
}

const reducer = (state = intialState, action) => {
  switch(action.type){
    case FETCH_DATA_REQUEST:
      return{
        ...state,
        loading:true
      }
    case FETCH_DATA_SUCCESS:
      return{
        loading:false,
        data:action.payload,
        error:""
      }
    case FETCH_DATA_FAILURE:
      return{
        loading:false,
        data:[],
        error:action.payload
      }
    case SET_CURRENT_DATA:
      return{
        loading:false,
        item:action.payload,
        error:""
      }
      default : return state;
  }
}

export default reducer;