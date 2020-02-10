//FILE ACTIONS
export const SET_FILE = 'SET_FILE';
export const NEW_FILE = 'NEW_FILE';
export const LOAD_FILE = 'LOAD_FILE';
export const SAVE_FILE = 'SAVE_FILE';
export const DELETE_FILE = 'DELETE_FILE';

export const setFile = file => dispatch => {
  dispatch({ type: SET_FILE, payload: file });
};

//HERO ACTIONS

export const HERO_SPEND_STATPOINTS = 'HERO_SPEND_STATPOINTS';

export const heroSpendStatPoints = stat => dispatch => {
  dispatch({
    type: HERO_SPEND_STATPOINTS,
    payload: { stat: stat }
  });
};
