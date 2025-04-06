"use client";
import HomeHeader from "./HomeHeader";
import CardList from "./CardList";
import { ChangeEvent, SetStateAction, useEffect, useState, Dispatch, useContext } from "react";
import movieDb from "../../app/movieDb.json";
import { Movie } from "../types/movie";
import { Search } from "react-feather";
import ErrorMsg from "./ErrorMsg";
import MovieDataContext from "../Context/MovieDataContext";

type MovieData = {
    movieDb: Movie[];
};

const Main = () => {
    //  const [movies, setMovies] = useState<MovieData>({ movieDb: [] });
    const context = useContext(MovieDataContext)
    if(!context){
        return
    }
    const {movies, setMovies} = context||{};

    const [searchTermMovies, setSearchTermMovies] = useState("");
    const [initialData, setInitialData] = useState<MovieData>({ movieDb: [] });
    const [noResults, setNoResults] = useState(false)

    useEffect(() => {
        setMovies(movieDb); // Load static JSON data
        console.log(movieDb.movieDb);
    }, []);

    const searchTerm = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e)
        setSearchTermMovies(e.target.value)
        searchMovie();
    }
    const searchMovie = () => {
        if (searchTermMovies) {
            console.log("1111", searchTermMovies)
            // key's array is being filtered, searchResults is array

            const searchResults = movies.movieDb.filter((movie) => {

                return movie.title.toLowerCase().includes(searchTermMovies.toLowerCase())
            }
            )
            console.log("wghgsahjgdhgashjdgsahjgd", searchResults)
            setMovies({ movieDb: searchResults })// movieDb key ko searchResults diya
            setNoResults(searchResults.length === 0);
        } else {
            setMovies(movies)
        }
    }

    return (
        <div>

            <div>

                <HomeHeader />

                {/* search bar */}
                <div className="flex m-6 pl-8">
                    <form className="relative w-full max-w-md">
                        <input
                            type="text"
                            placeholder="Search for your favourite movie"
                            className="w-full pl-10 pr-4 py-2 border-2 border-indigo-500 rounded-md"
                            onChange={searchTerm}
                        />
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />

                    </form>
                </div>

                {noResults ? <ErrorMsg searchTermMovies={searchTermMovies} /> : <CardList movies={movies.movieDb} />}
            </div>
        </div>
    )

}

export default Main;