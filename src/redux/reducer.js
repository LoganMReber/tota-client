import {
  SET_FILE,
  NEW_FILE,
  LOAD_FILE,
  SAVE_FILE,
  DELETE_FILE,
  HERO_SPEND_STATPOINTS
} from './actions';

const stateModel = {
  file: -1,
  loaded: false,
  hero: {
    name: 'Anonymous',
    level: 1,
    race: 'Human',
    job: 'Peasant',
    arcana: 1,
    statPoints: 27,
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0
  }
};

const reducer = (state = stateModel, action) => {
  switch (action.type) {
    case SET_FILE:
      return { ...state, file: action.payload };
    case HERO_SPEND_STATPOINTS:
      const { stat } = action.payload;
      const { hero } = state;
      return stat === 'arcana'
        ? {
            ...state,
            hero: {
              ...hero,
              statPoints: hero.statPoints - 3 * hero[stat],
              [stat]: hero[stat] + 1
            }
          }
        : {
            ...state,
            hero: {
              ...hero,
              statPoints: hero.statPoints - (hero[stat] + 1),
              [stat]: hero[stat] + 1
            }
          };
    case NEW_FILE:
    case LOAD_FILE:
    case SAVE_FILE:
    case DELETE_FILE:
    default:
      return state;
  }
};

export default reducer;
