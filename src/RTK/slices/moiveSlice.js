import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMoives = createAsyncThunk(
  "moiveSlice/fetchMoives",
  async (page, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}&page=${page}&language=en-US&vote_count.gte=10`
      );
      const data = await res.json();
      return data.results;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const fetchMoivebyID = createAsyncThunk(
  "moiveSlice/fetchMoivebyID",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`
      );
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const fetchSimilarMoives = createAsyncThunk(
  "moiveSlice/fetchSimilarMoives",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      );
      const data = await res.json();
      const filter = data.results.slice(0, 6);
      return filter;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const fetchMoiveCast = createAsyncThunk(
  "moiveSlice/fetchMoiveCast",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(
        `   https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const fetchTrendingMoives = createAsyncThunk(
  "moiveSlice/fetchTrendingMoives",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
      );
      const data = await res.json();
      return data.results;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const fetchTvOnAir = createAsyncThunk(
  "moiveSlice/fetchTvOnAir",
  async (page, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
      );
      const data = await res.json();
      return data.results;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const fetchTopRated = createAsyncThunk(
  "moiveSlice/fetchTopRated",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      );
      const data = await res.json();
      return data.results;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const fetchSearch = createAsyncThunk(
  "moiveSlice/fetchSearch",
  async (value, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${value}&page=1&include_adult=false`
      );
      const data = await res.json();
      return data.results;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const initialState = {
  moives: [],
  singalMoive: [],
  similarMoives: [],
  moiveCast: [],
  trendingMoives: [],
  TvSeries: [],
  TopRated: [],
  SearchMoives: [],
};
const moiveSlice = createSlice({
  initialState,
  name: "moiveSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMoives.fulfilled, (state, action) => {
      state.moives = action.payload;
    });
    builder.addCase(fetchMoivebyID.fulfilled, (state, action) => {
      state.singalMoive = action.payload;
    });
    builder.addCase(fetchSimilarMoives.fulfilled, (state, action) => {
      state.similarMoives = action.payload;
    });
    builder.addCase(fetchMoiveCast.fulfilled, (state, action) => {
      state.moiveCast = action.payload;
    });
    builder.addCase(fetchTrendingMoives.fulfilled, (state, action) => {
      state.trendingMoives = action.payload;
    });
    builder.addCase(fetchTvOnAir.fulfilled, (state, action) => {
      state.TvSeries = action.payload;
    });
    builder.addCase(fetchTopRated.fulfilled, (state, action) => {
      state.TopRated = action.payload;
    });
    builder.addCase(fetchSearch.fulfilled, (state, action) => {
      state.SearchMoives = action.payload;
    });
  },
});

// export const {} = moiveSlice.actions;
export default moiveSlice.reducer;
