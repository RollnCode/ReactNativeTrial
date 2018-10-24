import {links} from "../constants";

export const getUserInfo = () => dispatch => {
  fetch(links.user)
    .then((response) => response.json())
    .then((json) => {
      dispatch({type: 'GET_USER', data: json.data})
    }).catch((e) => {
      dispatch({type: 'ACTION_REFRESH', data: false});
      dispatch({type: 'GET_USER', data: {}})
    });
};
