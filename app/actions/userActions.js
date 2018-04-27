import { Alert } from 'react-native';
import { getNav } from '../navigator';
import ApiDataProvider from '../providers/ApiDataProvider';
import { AppConfig } from '../config/AppConfig';
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


/**
 * Registration actions
 */

/** Fields alterations */
export const displayNameRegistrationFieldHasChanged = displayName => ({
  type: REGISTRATION_FIELD_HAS_CHANGED,
  value: { displayName },
});

export const emailAddressRegistrationFieldHasChanged = email => ({
  type: REGISTRATION_FIELD_HAS_CHANGED,
  value: { email },
});

export const passwordRegistrationFieldHasChanged = password => ({
  type: REGISTRATION_FIELD_HAS_CHANGED,
  value: { password },
});

export const confirmPasswordRegistrationFieldHasChanged = confirmPassword => ({
  type: REGISTRATION_FIELD_HAS_CHANGED,
  value: { confirmPassword },
});

/** Request for registration */
const newUserCreationWasRequested = () => ({
  type: CREATE_NEW_USER_REQUEST,
});

/**  */
const newUserHasBeenCreated = data => ({
  type: CREATE_NEW_USER_SUCCESS,
  data,
});

const newUserWasntCreated = (data) => {
  Alert.alert('Registration failed', data.message);
  return {
    type: CREATE_NEW_USER_FAILURE,
    data,
  };
};

/**
 * Registers new user and dispatches proper actions
 * @param {Object} data - registration form data
 */
export const registerNewUser = data => async (dispatch) => {
  dispatch(newUserCreationWasRequested());
  const config = await AppConfig.getConfig();
  ApiDataProvider.post('users', data)
    .then(
      (response) => {
        if (response.status) {
          dispatch(newUserHasBeenCreated(response));
          config.setApiKey(response.token);
          getNav().navigate('AppStack');
        } else {
          dispatch(newUserWasntCreated(response));
        }
      },
      error => dispatch(newUserWasntCreated(error)),
    );
};

/**
 * Login actions
 */

export const emailLoginFieldHasChanged = email => ({
  type: LOGIN_FIELD_HAS_CHANGED,
  value: { email },
});

export const passwordLoginFieldHasChanged = password => ({
  type: LOGIN_FIELD_HAS_CHANGED,
  value: { password },
});

export const userLoginWasRequested = () => ({
  type: USER_LOGIN_REQUEST,
});

/**
 * Error alert for failed logging in attempt
 * @param {Object} data - response error message
 */
const userLoginHasFailed = (data) => {
  Alert.alert('Login failed', data.message);
  return {
    type: USER_LOGIN_FAILURE,
    data,
  };
};

export const userHasLoggedIn = data => ({
  type: USER_LOGIN_SUCCESS,
  data,
});

/**
 * Signs in an user and navigates to AppStack route
 * @param {Object} data - login form data
 */
export const loginAnUser = data => async (dispatch) => {
  dispatch(userLoginWasRequested());
  const config = await AppConfig.getConfig();
  ApiDataProvider.post('users/getToken', data)
    .then(
      (response) => {
        if (response.status) {
          dispatch(userHasLoggedIn(response));
          config.setApiKey(response.token);
          getNav().navigate('AppStack');
        } else {
          dispatch(userLoginHasFailed(response));
        }
      },
      error => dispatch(userLoginHasFailed(error)),
    );
};
