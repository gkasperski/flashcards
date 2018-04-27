import { ApiUrl, AppConfig } from '../config/AppConfig';


class ApiDataProvider {
  /**
   * Get headers
   * @return {object}
   */
  static getHeaders = async () => {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    try {
      const config = await AppConfig.getConfig();
      const apiKey = config.getApiKey();
      if (apiKey) {
        headers.Authorization = `Bearer ${apiKey}`;
      }
    } catch (error) {
      return headers;
    }
    return headers;
  }

  /**
   * Get data from API
   * @param {string} methodUri
   * @return {Observable}
   */
  static get = async methodUri =>
    new Promise(async (resolve, reject) => {
      fetch(
        `${ApiUrl}/${methodUri}`,
        {
          method: 'GET',
          headers: await ApiDataProvider.getHeaders(),
        },
      ).then(
        response => resolve(response.json()),
        error => reject(error.json()),
      );
    });


  /**
   * Post data to API
   * @param {string} methodUri
   * @param {object} data
   * @return {Observable}
   */
  static post = async (methodUri, data) =>
    new Promise(async (resolve, reject) => {
      fetch(
        `${ApiUrl}/${methodUri}`,
        {
          method: 'POST',
          headers: await ApiDataProvider.getHeaders(),
          body: JSON.stringify(data),
        },
      ).then(
        response => resolve(response.json()),
        error => reject(error.json()),
      );
    });


  /**
   * Update data at API
   * @param {string} methodUri
   * @param {object} data
   */
  static put = async (methodUri, data) =>
    new Promise(async (resolve, reject) => {
      fetch(
        `${ApiUrl}/${methodUri}`,
        {
          method: 'PUT',
          headers: await ApiDataProvider.getHeaders(),
          body: JSON.stringify(data),
        },
      ).then(
        response => resolve(response.json()),
        error => reject(error.json()),
      );
    });


  /**
   * Delete data from API
   * @param {string} methodUri
   */
  static delete = async methodUri =>
    new Promise(async (resolve, reject) => {
      fetch(
        `${ApiUrl}/${methodUri}`,
        {
          method: 'DELETE',
          headers: await ApiDataProvider.getHeaders(),
        },
      ).then(
        response => resolve(response.json()),
        error => reject(error.json()),
      );
    });
}

export default ApiDataProvider;

