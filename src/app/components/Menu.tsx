"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import AddNewMovie from "./AddNewMovie";
import AddNewReview from "./AddNewReview";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home } from "react-feather";
import Modal from "./common/Modal";

import { Movie } from "../types/movie";


type MovieData = {
    movieDb: Movie[];
};




const Menu = () => {
    const pathName = usePathname();

    const [isMovieModalOpen, setIsMovieModalOpen] = useState(false);
    const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

    const handleMoviewModal = () => {
        setIsMovieModalOpen(true)
        setIsReviewModalOpen(false)
        disableScroll()


    }

    const handleReviewModal = () => {
        setIsReviewModalOpen(true)
        setIsMovieModalOpen(false)
        disableScroll()
    }



    const enableScroll = () => {
        if (typeof window != 'undefined' && window.document) {
            document.body.style.overflow = 'auto';
        }

    }

    const disableScroll = () => {
        if (typeof window != 'undefined' && window.document) {
            document.body.style.overflow = 'hidden';
        }
    }



    console.log(isMovieModalOpen, isReviewModalOpen)

    return (

        <div className="bg-gray-200 flex items-center justify-between p-3">
            {/* Back to Home button (Only visible on /reviews page) */}
            {pathName === "/reviews" && (
                <Link href="/">
                    <button>
                        <Home />
                    </button>
                </Link>
            )}
            <div className="font-medium ml-3">MOVIECRITIC</div>

            <div className="flex flex-row-reverse gap-x-4 mr-3">

                <button className="border-2 border-indigo-200 bg-white rounded-md text-indigo-500 px-5 py-2" onClick={handleReviewModal}>Add new review</button>

                <button className="border-2 border-none bg-indigo-500 rounded-md text-white px-5 py-2" onClick={handleMoviewModal}>Add new movie</button>

                <Modal isModalOpen={isMovieModalOpen} onClose={() => {
                    setIsMovieModalOpen(false);
                    enableScroll()
                }}> <AddNewMovie/></Modal>

                <Modal isModalOpen={isReviewModalOpen} onClose={() => {
                    setIsReviewModalOpen(false);
                    enableScroll()
                }}> <AddNewReview /></Modal>

            </div>

        </div>


    );

}

export default Menu;