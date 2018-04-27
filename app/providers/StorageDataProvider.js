import { AsyncStorage } from 'react-native';

/**
 * Storage keys constants
 */
export const StorageKeys = {
  apiKey: '@config:apikey',
  appData: '@config:data',
  appState: '@config:appState',
};

export class StorageDataProvider {
  /**
   * Gets a key from storage
   * @var {string}
   * @return {object}
   */
  static getKey = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        return JSON.parse(value);
      }
    } catch (error) {
      return null;
    }
    return null;
  }

  /**
   * Saves a data to storage
   * @var {String} key
   * @return {Promise}
   */
  static saveKey = async (key, data) => AsyncStorage.setItem(`${key}`, JSON.stringify(data));

  /**
   * Removes a key from storage
   * @var {String} key
   * @return {Promise}
   */
  static removeKey = async key => AsyncStorage.removeItem(key);
}
