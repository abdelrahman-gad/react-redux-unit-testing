import checkPropTypes from 'check-prop-types';
import { applyMiddleware , createStore } from 'react-redux';
import rootReducer from './../reducers';
import {middlewares } from './../createStore';
export const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};

export const checkProps = (component , expectedProps)=>{
  const propsErr = checkPropTypes( component.checkPropTypes , expectedProps  , 'props' , component.name);
}

export const testStore = (initialState) =>{
  const createStoreWithMiddleware= applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(rootReducer,initialState);
}