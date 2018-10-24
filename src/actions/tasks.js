import {links} from "../constants";

export const getTasks = () => dispatch => {
  dispatch({type: 'ACTION_REFRESH', data: true});
  fetch(links.tasks)
    .then((response) => response.json())
    .then((json) => {
        dispatch({type: 'ACTION_REFRESH', data: false});
        dispatch({type: 'GET_TASKS', data: json.data})
    }).catch((e) => {
      dispatch({type: 'ACTION_REFRESH', data: false});
      dispatch({type: 'GET_TASKS', data: []})
    });
};
