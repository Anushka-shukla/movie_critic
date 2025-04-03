interface Props {
    searchTermMovies: string;
  }

const ErrorMsg = ({searchTermMovies}: Props) => {
    return(
        <div>
            <p className="text-xl">Ooops!! No results available for <span className="italic">{searchTermMovies}</span></p>

        </div>
    )

}

export default ErrorMsg;