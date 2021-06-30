import {createStore,applyMiddleware} from 'redux'
import {persistStore} from 'redux-persist'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import  rootReducer from './root-reducer'
import { fetchCollectionStart } from './shop/shop.saga'
const sagaMiddleware=createSagaMiddleware();
const middlewares=[sagaMiddleware,thunk]
if(process.env.NODE_ENV==='development'){
    middlewares.push(logger)
}

export const store=createStore(rootReducer,
    applyMiddleware(...middlewares))
    
sagaMiddleware.run(fetchCollectionStart);

export const persistor=persistStore(store);
