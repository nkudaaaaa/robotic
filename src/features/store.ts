// store.ts
import { combineReducers } from '@reduxjs/toolkit';
import modalSlice from './modalSlice';

const rootReducer = combineReducers({

    modalClose: modalSlice,
});

export default rootReducer;

