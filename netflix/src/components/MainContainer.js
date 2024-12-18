import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground';
import {useSelector} from "react-redux";

const MainContainer = () => {
  const movie = useSelector(store=>store.movie?.nowPlayingMovies);  // access al the movies from redux
  if(!movie) return; // early return in react
 
  // to make the title and overview dynamic:
  const {overview, id, title} = movie[0];
  
  return (
    <div>
        <VideoTitle title={title} overview={overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer