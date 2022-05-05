import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { listings } from './listingsReducer'

const config = {
    key: 'root',
    storage,
    debug: false
}

export const ConfigureStore = () => {
    const store = createStore(
        persistCombineReducers(config, {
            listings,
        }),
        applyMiddleware(thunk, logger)
    );

    const persistor = persistStore(store);

    return { persistor, store };
}
