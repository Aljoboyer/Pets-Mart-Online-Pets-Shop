import { configureStore } from '@reduxjs/toolkit';
import PetReducer from '../features/PetSlice/PetsSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'pet-store',
  storage
}

const persistedReducer = persistReducer(persistConfig, PetReducer);

export const store = configureStore({
  reducer: {
    petstore: persistedReducer,
  }, 
}); 

export const  persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch