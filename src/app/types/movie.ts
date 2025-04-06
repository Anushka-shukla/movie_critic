

export interface Movie {
    adult: boolean;
    id: number;
    title: string;
    vote_average: number;
    overview: string;
    release_date: string;
    author: string;

}

export interface MovieData {
    movieDb: Movie[];
    
}