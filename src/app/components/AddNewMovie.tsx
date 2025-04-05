import { Dispatch, SetStateAction, useState } from "react";
import { Movie } from "../types/movie";


type MovieData = {
    movieDb: Movie[];
};



const AddNewMovie = () => {

    const [newMovie, setNewMovie] = useState("");
    const [releaseDate, setReleaseDate] = useState("");

    const handleInputMovieName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewMovie(e.target.value)
    }

    const handleInputDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setReleaseDate(e.target.value)
    }

    const handleAddMovie = () => {




    }

    return (
        <div>

            <h3 className="text-xl">Add new movie</h3>
            <div className="flex flex-col">
                <input placeholder="Movie Name" className="border-2 border-gray-300 rounded-md w-64 p-1 mt-6" onChange={handleInputMovieName} />
                <input placeholder="Release date" className="border-2 border-gray-300 rounded-md w-64 p-1 mt-6" onChange={handleInputDate} />
            </div>
            <div className="flex flex-row-reverse">
                <button className="text-white bg-indigo-500 rounded-md mt-4 w-30 p-1" onClick={handleAddMovie}>Create movie</button>

            </div>

        </div>
    )

}

export default AddNewMovie;