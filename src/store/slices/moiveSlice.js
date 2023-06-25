import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMoives = createAsyncThunk(
  "moiveSlice/fetchMoives",
  async (page, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_MOVIE_API_KEY}&page=${page}&language=en-US&vote_count.gte=10`
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
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
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
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&page=1`
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
        `   https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`
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
        `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
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
        `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&page=${page}`
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
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&page=1`
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
        `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&query=${value}&page=1&include_adult=false`
      );
      const data = await res.json();
      return data.results;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const initialState = {
  loading: false,
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
    // all movies
    builder.addCase(fetchMoives.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchMoives.fulfilled, (state, action) => {
      state.moives = action.payload;
      state.loading = false;
    });
    // single movie
    builder.addCase(fetchMoivebyID.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchMoivebyID.fulfilled, (state, action) => {
      state.singalMoive = action.payload;
      state.loading = false;
    });
    // similar movies
    builder.addCase(fetchSimilarMoives.fulfilled, (state, action) => {
      state.similarMoives = action.payload;
    });
    // Cast for moive
    builder.addCase(fetchMoiveCast.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchMoiveCast.fulfilled, (state, action) => {
      state.moiveCast = action.payload;
      state.loading = false;
    });
    // trending moives
    builder.addCase(fetchTrendingMoives.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchTrendingMoives.fulfilled, (state, action) => {
      state.trendingMoives = action.payload;
      state.loading = false;
    });
    // onair moive
    builder.addCase(fetchTvOnAir.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchTvOnAir.fulfilled, (state, action) => {
      state.TvSeries = action.payload;
      state.loading = false;
    });
    // toprated moive
    builder.addCase(fetchTopRated.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchTopRated.fulfilled, (state, action) => {
      state.TopRated = action.payload;
      state.loading = false;
    });
    // search moive
    builder.addCase(fetchSearch.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchSearch.fulfilled, (state, action) => {
      state.SearchMoives = action.payload;
      state.loading = false;
    });
  },
});

export default moiveSlice.reducer;
