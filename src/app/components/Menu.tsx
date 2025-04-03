"use client";

import { useState } from "react";
import AddNewMovie from "./AddNewMovie";
import AddNewReview from "./AddNewReview";


const Menu = () => {
    const [isMovieModalOpen, setIsMovieModalOpen] = useState(false);
    const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

    const handleMoviewModal = () => {
        setIsMovieModalOpen(true)
        setIsReviewModalOpen(false)


    }

    const handleReviewModal = () => {
        setIsReviewModalOpen(true)
        setIsMovieModalOpen(false)
    }

    console.log(isMovieModalOpen, isReviewModalOpen)

    return (

        <div className="bg-gray-200 flex items-center justify-between p-3">
            <div className="font-medium ml-3">MOVIECRITIC</div>

            <div className="flex flex-row-reverse gap-x-4 mr-3">

            <button className="border-2 border-indigo-200 bg-white rounded-md text-indigo-500 px-5 py-2" onClick={handleReviewModal}>Add new review</button>
                {isReviewModalOpen && <AddNewReview />}
                
                <button className="border-2 border-none bg-indigo-500 rounded-md text-white px-5 py-2" onClick={handleMoviewModal}>Add new movie</button>
                {isMovieModalOpen && <AddNewMovie />}
                
               
            </div>

        </div>


    );

}

export default Menu;