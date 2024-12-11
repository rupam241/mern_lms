import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../redux/user/userSlice';

import { combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  user: userReducer,
  
});

// Persistence configuration
const persistConfig = {
  key: 'root',
  storage,
  version: 1,
};

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Store configuration
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'], // Ignore serializable check for persistence actions
      },
    }),
});

export const persistor = persistStore(store);
export default store;