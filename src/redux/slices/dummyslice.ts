import { createSlice } from '@reduxjs/toolkit';
import { TReduxState } from '../store.ts';

export type TDummySlice = {
  isActive: boolean;
};

const initialState: TDummySlice = {
  isActive: true,
};

export const DummySlice = createSlice({
  name: 'dummySlice',
  initialState,
  reducers: {
    dummySetInitial: () => {
      return initialState;
    },
    dummySetActive: (state, action: { payload: boolean }) => {
      state.isActive = action.payload;
    },
    dummyToggleIsActive: state => {
      console.log(!state.isActive);
      state.isActive = !state.isActive;
    },
  },
});

export const getDummySlice = (state: TReduxState) => state.dummySlice;
export const getDummyIsActive = (state: TReduxState) => state.dummySlice.isActive;

export const { dummySetInitial, dummySetActive, dummyToggleIsActive } = DummySlice.actions;
export default DummySlice.reducer;
