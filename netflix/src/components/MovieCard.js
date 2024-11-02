// MovieCard.js
import React from 'react';
import { TMDB_IMG_URL } from '../utils/constant';
import { useDispatch } from "react-redux";
import { setCurrentMovieId, setOpen } from '../redux/movieSlice';

const MovieCard = ({ posterPath, movieId }) => {
    const dispatch = useDispatch();

    if (!posterPath) return null;

    const handleOpen = () => {
        dispatch(setCurrentMovieId(movieId)); // Set movie ID to the one playing
        dispatch(setOpen(true));
    };

    return (
        <div className='w-48 pr-2' onClick={handleOpen}>
            <img src={`${TMDB_IMG_URL}/${posterPath}`} alt="movie-banner" />
        </div>
    );
};

export default MovieCard;