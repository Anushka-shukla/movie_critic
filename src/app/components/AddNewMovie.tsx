import { useState } from "react";


const AddNewMovie = () => {
    
   

    return (
        <div className="fixed z-1 top-[33%] left-[33%] bg-white border-2 border-indigo-200 w-80 h-64 p-6 rounded-md">
            <form>

                <h3 className="text-xl">Add new movie</h3>
                <div className="flex flex-col">
                    <input placeholder="Movie Name" className="border-2 border-gray-300 rounded-md w-64 p-1 mt-6" />
                    <input placeholder="Release date" className="border-2 border-gray-300 rounded-md w-64 p-1 mt-6" />
                </div>
                <div className="flex flex-row-reverse">
                    <button className="text-white bg-indigo-500 rounded-md mt-4 w-30 p-1">Create movie</button>
                </div>
            </form>
        </div>
    )

}

export default AddNewMovie;