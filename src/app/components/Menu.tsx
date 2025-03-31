const Menu = () => {

    return (
        <div className="bg-gray-200 flex items-center justify-between p-3">
            <div className="font-medium ml-3">MOVIECRITIC</div>

            <div className="flex flex-row-reverse gap-x-4 mr-3">
                <button className="border-2 border-none bg-indigo-500 rounded-md text-white px-5 py-2">Add new movie</button>
                <button className="border-2 border-indigo-200 bg-white rounded-md text-indigo-500 px-5 py-2">Add new review</button>
            </div>

        </div>


    );

}

export default Menu;