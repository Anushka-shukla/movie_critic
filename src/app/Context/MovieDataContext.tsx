
import React, { Dispatch, SetStateAction } from 'react';
import { MovieData } from '../types/movie';

interface MovieDataContextType{
    movies: MovieData ,
    setMovies: Dispatch<SetStateAction<MovieData>>
}

const MovieDataContext = React.createContext<MovieDataContextType|null>(null);

export default MovieDataContext;
