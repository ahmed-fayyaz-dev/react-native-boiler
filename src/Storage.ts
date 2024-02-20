import { MMKV } from 'react-native-mmkv';
import { Storage as StorageType } from 'redux-persist';

const storageId = {
  default: 'default-storage',
  reduxStateStorage: 'redux-storage',
};

const Storage = new MMKV({
  id: storageId.default,
});

const reduxStateStorage = new MMKV({
  id: storageId.reduxStateStorage,
});

const reduxStorage: StorageType = {
  setItem: (key, value) => {
    reduxStateStorage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: key => {
    const value = reduxStateStorage.getString(key);
    return Promise.resolve(value);
  },
  removeItem: key => {
    reduxStateStorage.delete(key);
    return Promise.resolve();
  },
};

export { Storage, reduxStorage };
