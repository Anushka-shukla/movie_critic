"use client";

import "./globals.css";
import Menu from "./components/Menu";
import MovieDataContext from './Context/MovieDataContext';
import { useState } from "react";
import { Movie, MovieData } from "../app/types/movie";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // const [newMovie, setNewMovie] = useState("");
  // const [releaseDate, setReleaseDate] = useState("");
  const [movies, setMovies] = useState<MovieData>({ movieDb: [] });

  return (


    <html lang="en">
      <body>
        <MovieDataContext.Provider value={{movies, setMovies}}>
          <Menu />
          {children}
        </MovieDataContext.Provider>
      </body>
    </html>

  );
}
