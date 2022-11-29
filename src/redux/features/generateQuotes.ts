import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from 'axios';

import { quotes } from "../../database/quotesDB";
import { colors } from "../../database/colorsDB";

export interface stateInterface {
    quote: string,
    author: string,
    color: string,
    data: { [x: string]: string | number | boolean },
    loading: boolean
}

const initialState: stateInterface = {
  quote: quotes[0].quote,
  author: quotes[0].author,
  color: colors[0],
  data: {},
  loading: false
};

export const fetchData: any = createAsyncThunk(
  'features/getData',
  async () => {
    const response = await axios.get('https://fakestoreapi.com/products/1');
    return response.data;
  }
)

const generateQuotesColors = createSlice({
  name: 'generateQuotesColors',
  initialState,
  reducers: {
    generate(state) {
      state.quote = quotes[Math.floor(Math.random() * quotes.length)].quote;
      state.author = quotes[Math.floor(Math.random() * quotes.length)].author;
      state.color = colors[Math.floor(Math.random() * colors.length)];
    }
  },
  extraReducers: {
    [fetchData.pending]: (state: stateInterface) => {
      state.loading = true;
      state.data = {};
    },
    [fetchData.fulfilled]: (state: stateInterface, action: PayloadAction<{ [x: string]: string | number | boolean }>) => {
      state.loading = false;
      state.data = action.payload
    },
    [fetchData.rejected]: (state: stateInterface) => {
      state.loading = false;
      state.data = {};
    }
  }
});

export const { generate } = generateQuotesColors.actions;
export default generateQuotesColors.reducer;
