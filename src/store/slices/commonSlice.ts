import { LIST_THEME } from "@constants/common";
import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import initService from "@services/init.services";
import { KEY_COMMON } from "@store/constants";
import { Data } from "src/types/data";

export interface ICommonState {
  theme: Data.Theme;
  loading: boolean;
  error: boolean;
  init: string | null;
}

const initialState: ICommonState = {
  theme: LIST_THEME[0],
  loading: false,
  error: false,
  init: ""
};

export const storeCommonChangeTheme =
  createAction<Data.Theme>("common/changeTheme");

// call service in store
export const getInitData = createAsyncThunk("init", async () => {
  try {
    const response: any = await initService.fetchInitData();
    return response.data;
  } catch (error: any) {
    console.error(error.response);
  }
});

export const commonSlice = createSlice({
  initialState,
  name: KEY_COMMON,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(storeCommonChangeTheme, (state, { payload }) => {
      state.theme = payload;
    });

    // handle state when call service
    builder
      .addCase(getInitData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getInitData.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.init = payload;
      })
      .addCase(getInitData.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  }
});

export default commonSlice.reducer;
