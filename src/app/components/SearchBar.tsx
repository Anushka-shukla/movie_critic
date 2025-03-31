
import { Search } from "react-feather";
const SearchBar = () => {
    return (
        <div className="flex m-6 pl-8">
            <form className="relative w-full max-w-md">
                <input
                    type="text"
                    placeholder="Search for your favourite movie"
                    className="w-full pl-10 pr-4 py-2 border-2 border-indigo-500 rounded-md"
                />
                <button type="submit" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    <Search />
                </button>
            </form>
        </div>
    )

}
export default SearchBar;