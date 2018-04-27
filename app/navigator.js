import { StackNavigator, SwitchNavigator } from 'react-navigation';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Home from './pages/home/home';
import SetCreate from './pages/set/create/setCreate';
import SetEdit from './pages/set/edit/setEdit';
import Flashcards from './pages/set/display/flashcards/flashCards';
import Loading from './loading';

/**
 * Authorization screens
 */
const AuthStack = StackNavigator(
  {
    Login: {
      screen: Login,
    },
    Register: {
      screen: Register,
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'Login',
  },
);

/**
 * Main app navigation stack
 */
const AppStack = StackNavigator(
  {
    Home: {
      screen: Home,
    },
    SetCreate: {
      screen: SetCreate,
    },
    SetEdit: {
      screen: SetEdit,
    },
    SetFlashcards: {
      screen: Flashcards,
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
  },
);

export default SwitchNavigator(
  {
    Loading,
    AuthStack,
    AppStack,
  },
  {
    initialRouteName: 'Loading',
  },
);

/**
 * Nav singleton for usage from inside of redux actions
 */
let navigation = {};

export function setNav(nav) {
  navigation = nav;
}
export function getNav() {
  return navigation;
}
