// custom hook to display now playing movies

// useNowPlayingMovies.js
import axios from "axios";
import { getNowPlayingMovies, setAllMovies } from "../redux/movieSlice";
import { Now_Playing_Movie, options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const res = await axios.get(Now_Playing_Movie, options);
                dispatch(getNowPlayingMovies(res.data.results));
                dispatch(setAllMovies(res.data.results)); // Store all movies
            } catch (error) {
                console.log("Error fetching now playing movies:", error);
            }
        };
        fetchMovies();
    }, [dispatch]);
};

export default useNowPlayingMovies;