import { configureStore } from '@reduxjs/toolkit';
import Reduxrepository from './Reduxrepository';

export default configureStore({
  reducer: {
    taskReducer: Reduxrepository
  },
});
