import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import reducers from '../app/reducers';
import { StorageKeys } from '../app/providers/StorageDataProvider';


const persistConfig = {
  key: StorageKeys.appState,
  storage,
  blacklist: ['navigation'], // do not save navigation - for app optimization
};

const persistedReducer = persistReducer(persistConfig, reducers);

/**
 * Middleware to act after action was dispatched
 */
const thenMiddleware = () => next => action => new Promise((resolve, reject) => {
  try {
    resolve(next(action));
  } catch (e) {
    reject(e);
  }
});


export const store = createStore(
  persistedReducer,
  {},
  applyMiddleware(thunk, thenMiddleware),
);

export const persistor = persistStore(store);
