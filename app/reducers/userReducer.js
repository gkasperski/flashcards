import {
  LOGIN_FIELD_HAS_CHANGED,
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAILURE,
  USER_LOGIN_SUCCESS,
  REGISTRATION_FIELD_HAS_CHANGED,
  CREATE_NEW_USER_REQUEST,
  CREATE_NEW_USER_SUCCESS,
  CREATE_NEW_USER_FAILURE,
} from '../actionTypes';

export const registration = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const login = {
  email: '',
  password: '',
};

const userReducer = (state = {
  loadingState: false,
  registration,
  login,
}, action) => {
  switch (action.type) {
    case LOGIN_FIELD_HAS_CHANGED:
      return {
        ...state,
        login: { ...state.login, ...action.value },
      };
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        loadingState: true,
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        loadingState: false,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loadingState: false,
        userData: [...action.data],
        login: { ...state.login, password: '' },
      };
    case REGISTRATION_FIELD_HAS_CHANGED:
      return {
        ...state,
        registration: { ...state.registration, ...action.value },
      };
    case CREATE_NEW_USER_REQUEST:
      return {
        ...state,
        loadingState: true,
      };
    case CREATE_NEW_USER_SUCCESS:
      return {
        ...state,
        loadingState: false,
        userData: [...action.data],
        registration,
      };
    case CREATE_NEW_USER_FAILURE:
      return {
        ...state,
        loadingState: false,
      };
    default:
      return state;
  }
};

export default userReducer;
