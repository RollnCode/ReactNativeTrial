import {links} from "../constants";

export const getPosts = () => dispatch => {
  dispatch({type: 'ACTION_REFRESH', data: true});
  fetch(links.posts)
    .then((response) => response.json())
    .then((json) => {
        dispatch({type: 'ACTION_REFRESH', data: false});
        dispatch({type: 'GET_POSTS', data: json.data})
    }).catch((e) => {
      dispatch({type: 'ACTION_REFRESH', data: false});
      dispatch({type: 'GET_POSTS', data: []})
    });
};
