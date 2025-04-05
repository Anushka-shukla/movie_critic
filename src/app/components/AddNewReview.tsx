import { ChevronDown } from "react-feather";

const AddNewReview = () => {

    return (
        <div>

            <h3 className="text-xl">Add new review</h3>

            <div className="relative w-64">
                <select className="border-2 border-gray-300 rounded-md w-64 p-1 mt-6 appearance-none " defaultValue="Select a movie" />
                <ChevronDown className="absolute right-3 top-10 transform -translate-y-1/2 text-gray-300 pointer-events-none" />
            </div>

            <input className="border-2 border-gray-300 rounded-md w-64 p-1 mt-6" placeholder="Your Name" />

            <input className="border-2 border-gray-300 rounded-md w-64 p-1 mt-6" placeholder="Rating out of 10" />
            <textarea className="border-2 border-gray-300 rounded-md w-64 p-1 mt-6 resize-none" placeholder="Review comments"></textarea>

            <div className="flex flex-row-reverse">
                <button className="text-white bg-indigo-500 rounded-md mt-4 w-30 p-1" onClick={()=>{}}>Add review</button>
            </div>


        </div>

    )

}

export default AddNewReview;