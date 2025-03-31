"use client";
import Menu from "../components/Menu";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import CardList from "./CardList";
import { useEffect, useState } from "react";
import movieDb from "./movieDb.json"
import { Movie } from "../types/movie";



type MovieData = {
    movieDb: Movie[];
};

const Home = () => {
    const [movies, setMovies] = useState<MovieData>({ movieDb: [] });

    useEffect(() => {
        setMovies(movieDb); // Load static JSON data
        console.log(movieDb.movieDb);
    }, []);

    return (
        <div>

            <div>
                <Menu />
                <Header />
                <SearchBar />
                <CardList movies={movies.movieDb} />
            </div>
        </div>
    )

}

export default Home;