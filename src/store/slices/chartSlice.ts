import { createAction, createSlice } from "@reduxjs/toolkit";
import { KEY_CHART } from "@store/constants";

export interface IChartSliceState {
  data: string;
}

const initialState: IChartSliceState = {
  data: ""
};

export const storeChartUpdate = createAction<string>("chart/updateData");

export const chartSlice = createSlice({
  initialState,
  name: KEY_CHART,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(storeChartUpdate, (state, { payload }) => {
      state.data = payload;
    });
  }
});

export default chartSlice.reducer;
