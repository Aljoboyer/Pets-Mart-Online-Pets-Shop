import { configureStore } from '@reduxjs/toolkit';
import PetReducer from '../features/PetSlice/PetsSlice';
import { persistReducer, persistStore } from 'redux-persist';
<<<<<<< HEAD
// import storage from 'redux-persist/lib/storage';
=======
import storage from 'redux-persist/lib/storage';
>>>>>>> a1e92ff4a180c8b5a52e3ed1f4996e81b6505127
import localforage from 'localforage';
const persistConfig = {
  key: 'pet-store',
  storage: localforage
}

const persistedReducer = persistReducer(persistConfig, PetReducer);

export const store = configureStore({
  reducer: {
    petstore: persistedReducer,
  }, 
}); 

export const  persistor = persistStore(store)
<<<<<<< HEAD
export type RootState = ReturnType<typeof store.getState> 
=======
export type RootState = ReturnType<typeof store.getState>
>>>>>>> a1e92ff4a180c8b5a52e3ed1f4996e81b6505127
export type AppDispatch = typeof store.dispatch