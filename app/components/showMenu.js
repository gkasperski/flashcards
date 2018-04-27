import { UIManager, findNodeHandle } from 'react-native';

/**
 * Displays the dropdown menu
 * @param ref - reference to button
 * @param menuButtons - object with keys as labels and values as functions
 * @param id - identifier of clicked element
 */
const showMenu = (ref, menuButtons, id) => {
  const menuKeys = Object.keys(menuButtons);
  UIManager.showPopupMenu(
    findNodeHandle(ref),
    menuKeys,
    () => {},
    (event, index) => (event === 'itemSelected' ? menuButtons[menuKeys[index]](id) : null),
  );
};

export default showMenu;
