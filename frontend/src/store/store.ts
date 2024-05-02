import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { jobListReducer } from '../reducers/jobReducers'
// import { userRegisterSlice } from './slices/userSlices'
import { userRegisterSlice } from './users/userSlices'
import { registerUser } from './users/userThunks'


const reducer = combineReducers({
  jobList: jobListReducer,
  userRegister: userRegisterSlice.reducer,
})


export const store = configureStore({
  reducer: reducer,

})



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

