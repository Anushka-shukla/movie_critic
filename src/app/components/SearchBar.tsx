
// import { Search } from "react-feather";
// import { useState } from "react";
// import { ChangeEvent } from "../types/EventType";



// const SearchBar = () => {
//     const [searchTermMovies, setSearchTermMovies] = useState("");
//     const [initialData, setInitialData] = useState([]);

//     const searchTerm = (e: ChangeEvent) => {
//         console.log(e)
//         setSearchTermMovies(e.target.value)
//         searchMovie()
//     }
//     const searchMovie=()=>{
//         if(searchTermMovies){
//             const searchResults = initialData.filter((movie)=>
//                 movie.title.toLowerCase().includes(setSearchTermMovies.toLowerCase())
//             )
//             setMovies(searchResults)
//         }

//     }

//     return (
//         <div className="flex m-6 pl-8">
//             <form className="relative w-full max-w-md">
//                 <input
//                     type="text"
//                     placeholder="Search for your favourite movie"
//                     className="w-full pl-10 pr-4 py-2 border-2 border-indigo-500 rounded-md"
//                     onChange={searchTerm}
//                 />
//                 <button type="submit" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
//                     <Search />
//                 </button>
//             </form>
//         </div>
//     )

// }
// export default SearchBar;