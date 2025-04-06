import { useContext, useState, ChangeEvent } from "react";
import { ChevronDown } from "react-feather";
import MovieDataContext from "../Context/MovieDataContext";
import { Movie } from "../types/movie";

type MovieData = {
    movieDb: Movie[];
};

const AddNewReview = () => {
    const context = useContext(MovieDataContext);
    if (!context) {
        return
    }
    const { movies, setMovies } = context || {};
    const [selectedMovieId, setSelectedMovieId] = useState<number | "">("");

    const handleMovieSelection = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedMovieId(Number(e.target.value))
    }

    const [author, setAuthor] = useState("");
    const [rating, setRating] = useState(0);
    const [newOverview, setNewOverview] = useState("");

    const handleAuthorInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAuthor(e.target.value)
    }

    const handleRatingInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRating(Number(e.target.value))
    }

    const handleComments = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewOverview(e.target.value)
    }

    // should add more reviews for already existing movies; just comment, author, rating should be added
    const handleAddNewReview = () => {
        const selectedMovie = movies.movieDb.find((movie) => movie.id === selectedMovieId);

        if (!selectedMovie || !newOverview || !rating || !author) return;
        
        const newReviewEntry: Movie = {
            ...selectedMovie,
            id: Date.now(), // new ID to distinguish this review
            vote_average: rating, // user-provided
            overview: newOverview, // user-provided comment
            author: author,
          };

          setMovies((prev)=>({
            ...prev,
            movieDb: [...prev.movieDb, newReviewEntry]
          }));

          setSelectedMovieId("");
          setRating(0);
          setNewOverview("");

        
    }

    return (
        <div>

            <h3 className="text-xl">Add new review</h3>

            <div className="relative w-64">
                <select className="border-2 border-gray-300 rounded-md w-64 p-1 mt-6 appearance-none "

                    onChange={handleMovieSelection}
                    value={selectedMovieId} >

                    <option value="" disabled></option>
                    {movies.movieDb.map((movie: Movie) => (
                        <option key={movie.id} value={movie.id}>
                            {movie.title}
                        </option>
                    ))}
                </select>

                <ChevronDown className="absolute right-3 top-10 transform -translate-y-1/2 text-gray-300 pointer-events-none" />
            </div>

            <input className="border-2 border-gray-300 rounded-md w-64 p-1 mt-6" placeholder="Your Name" onChange={handleAuthorInput} />

            <input className="border-2 border-gray-300 rounded-md w-64 p-1 mt-6" placeholder="Rating out of 10" onChange={handleRatingInput} />
            <textarea className="border-2 border-gray-300 rounded-md w-64 p-1 mt-6 resize-none" placeholder="Review comments" onChange={handleComments}></textarea>

            <div className="flex flex-row-reverse">
                <button className="text-white bg-indigo-500 rounded-md mt-4 w-30 p-1" onClick={handleAddNewReview}>Add review</button>
            </div>


        </div>

    )

}

export default AddNewReview;