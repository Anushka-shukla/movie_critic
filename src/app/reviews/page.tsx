import { Edit, Trash } from "react-feather";

const Reviews = () => {


    return (
        <div>
            <div className="flex justify-between m-8">
                <div className="font-bold text-3xl">movie name</div>
                <div className="text-indigo-500 font-bold text-3xl">8.33/10</div>
            </div>

            <div className="border-2 rounded-md border-gray-300 m-8 p-4">
                <div className="flex justify-between">
                    <p>this is the best movie</p>
                    <span className="text-indigo-500">9/10</span>
                </div>

                <div className="flex justify-between">
                    <h3 className="mt-6 italic">By Anu</h3>
                    <div>
                        <button className="mt-6">
                            <Edit className="text-gray-500 w-4 h-4" />
                        </button>
                        <button>
                            <Trash className="text-gray-500 w-4 h-4" />
                        </button>

                    </div>
                </div>
            </div>

        </div>
    )

}

export default Reviews;