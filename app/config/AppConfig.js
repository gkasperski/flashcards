import { Dimensions } from 'react-native';
import { StorageKeys, StorageDataProvider } from '../providers/StorageDataProvider';

// Screen dimensions
export const { height, width } = Dimensions.get('window');

// REST Api url address
export const ApiUrl = 'https://api.node.gkasperski.pl/api';

/**
 * Global application configuration
 * TODO: REPLACE WITH REDUX
 */
export class AppConfig {
  /**
   * Instance of config (singleton pattern)
   * @property {AppConfig}
   */
  static configInstance = null;

  /**
   * User's Api key
   * @var {string}
   */
  apiKey = '';

  /**
   * Gets config instance
   * @return {AppConfig}
   */
  static getConfig = async () => {
    if (AppConfig.configInstance == null) {
      AppConfig.configInstance = new AppConfig();
      AppConfig.configInstance.apiKey = await StorageDataProvider.getKey(StorageKeys.apiKey);
    }
    return AppConfig.configInstance;
  }

  /**
   * Set an api key
   * @param {string} apiKey
   */
  setApiKey = async (apiKey) => {
    this.apiKey = apiKey;
    await StorageDataProvider.saveKey(StorageKeys.apiKey, apiKey);
  }

  /**
   * Get an api key
   * @return {string}
   */
  getApiKey = () => this.apiKey;

  /**
   * Remove an api key
   * @param {string} apiKey
   */
  removeApiKey = async () => {
    this.apiKey = '';
    await StorageDataProvider.removeKey(StorageKeys.apiKey);
  }
}
