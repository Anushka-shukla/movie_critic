import { Edit, Trash } from "react-feather";
import { Movie } from "../types/movie";
import Link from "next/link";


interface CardProps {
    movie: Movie
}


const getMovieStatus = (adult: boolean) => {
    switch (adult) {
        case true:
            return <div className="border-1 border rounded-md p-1 w-15"><p className="text-xs">CBFC: A</p></div>

        case false:
            return <div className="border-1 border rounded-md p-1 w-15"><p className="text-xs">CBFC: U</p></div> 
        default:
            return <div className="border-1 border rounded-md p-1 w-15"><p className="text-xs">CBFC: NA</p></div>
    }
};

const Card = ({ movie }: CardProps) => {


    return (
        <div className="border-2 bg-indigo-200 border-indigo-200 rounded-md p-4 w-64 w-80">
            <h3 className="text-xl">{movie.title}</h3>
            <span>{getMovieStatus(movie.adult)}</span>
            <h5 className="text-xs italic mt-2 mb-2">Released {movie.release_date}</h5>
            <p className="font-bold text-sm">Rating: {movie.vote_average}</p>

            <div className="flex justify-end mt-2">
                <button>
                    <Edit className="text-gray-500" />
                </button>
                <button>
                    <Trash className="text-gray-500" />
                </button>
            </div>




        </div>
    )

}

export default Card;