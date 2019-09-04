import * as actionTypes from "../components/work/overview/OverviewActionTypes";
import * as _ from "lodash";

const initialState = {
    repos: []
};

const reducer = (state = initialState, action) => {
    const newState = {...state};
    
switch (action.type) {
  case actionTypes.GET_REPOS:
    return {
      ...state,
      repos: action.payload
    };
    break;
}
    console.log("state of reducer", newState);
    return newState;
};

export default reducer;