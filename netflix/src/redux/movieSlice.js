// movieSlice.js
import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies: null,
        popularMovie: null,
        topRatedMovies: null,
        upcomingMovies: null,
        toggle: false,
        trailerMovie: null,
        open: false,
        id: null, // current movie id
        title: '',
        overview: '',
        allMovies: [], // stores all movies data
    },
    reducers: {
        getNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        getPopularMovie: (state, action) => {
            state.popularMovie = action.payload;
        },
        getTopRatedMovie: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        getUpcomingMovie: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        setToggle: (state) => {
            state.toggle = !state.toggle;
        },
        getTrailerMovie: (state, action) => {
            state.trailerMovie = action.payload;
        },
        setOpen: (state, action) => {
            state.open = action.payload;
        },
        setCurrentMovieId: (state, action) => {
            state.id = action.payload;
            // Find the selected movie from allMovies based on the new id
            const selectedMovie = state.allMovies.find(movie => movie.id === action.payload);
            if (selectedMovie) {
                state.title = selectedMovie.title;
                state.overview = selectedMovie.overview;
            }
        },
        setAllMovies: (state, action) => {
            state.allMovies = action.payload;
        },
    },
});

export const {
    getNowPlayingMovies,
    getPopularMovie,
    getTopRatedMovie,
    getUpcomingMovie,
    setToggle,
    getTrailerMovie,
    setOpen,
    setCurrentMovieId,
    setAllMovies,
} = movieSlice.actions;

export default movieSlice.reducer;