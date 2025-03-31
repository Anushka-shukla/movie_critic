import { useState } from "react";
import Card from "./Card";
import { Movie } from "../types/movie";


interface CardListProps{
    movies: Movie[]
    
}


const CardList = ({movies}: CardListProps) => {

    const createCard=()=>{
        return movies.map((movie, id)=>{
            return <Card key={id} movie={movie}/>
        })
    }

    return(
        <div >
            <ul className="flex flex-wrap gap-8 justify-center">
                {movies && createCard()}
            </ul>

        </div>
    )

}

export default CardList;