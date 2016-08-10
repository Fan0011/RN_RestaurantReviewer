import {
  RESTAURANTS_LOADING_INITIATION,
  RESTAURANTS_LOADING_SUCCESS,
  RESTAURANTS_LOADING_FAILURE,
  RESTAURANT_CATEGORIES,
  CLEAR_RESTAURANT_ERRORS,
} from './constants';

const initialState = {
  items: [],
  errors: [],
  isLoading: false,
  selectedFilterIndex: 0,
  categories: [],
};

const restaurants = (state = initialState, action) => {
  switch (action.type) {
    case RESTAURANTS_LOADING_INITIATION:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case RESTAURANTS_LOADING_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        items: action.restaurants,
      });
    case RESTAURANT_CATEGORIES:
      return Object.assign({}, state, {
        categories: action.categories,
      });
    case RESTAURANTS_LOADING_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        errors: [...state.errors, action.error],
      });
    case CLEAR_RESTAURANT_ERRORS:
      return Object.assign({}, state, {
        errors: [],
      });
    default:
      return state;
  }
};

export default restaurants;
