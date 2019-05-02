import superagent from "superagent";

// let api = "https://swapi.co/api/people/";

export const get = url => dispatch => {
  return superagent.get(url).then(result => {
    dispatch(asyncAction(result));
  });
};

const asyncAction = payload => {
  return {
    type: "GET",
    payload: payload
  };
};
