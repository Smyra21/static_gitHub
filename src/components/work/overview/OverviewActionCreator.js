import * as actionTypes from "./OverviewActionTypes";

export const getRepos = () => (dispatch, {api}) => {
    dispatch({
      type: actionTypes.GET_REPOS,
      payload: {},
      promise: api
        .get(`https://api.github.com/users/supreetsingh247/repos`)
        .then(res =>            
            res.data
         )
    });
 } 