import "./movieCard.css"
import {Movie} from "@/entities/MovieCard/api/types.ts";
import {FC, useState} from "react";

export const MovieCard: FC<Movie> = (props) => {
    const [isError, setIsError] = useState(false)
    return (
        <div className={"movieCard"}>
            <div className="movieCard__img">
                <img src={isError ? '/img/unknownImg.png' : props.Poster}
                     onError={() => setIsError(true)}
                     alt="movie"/>
            </div>
            <p className={"movie__descr"}>
                Name: {props.Title}
            </p>
            <p className={"movie__descr"}>
                Year: {
                props.Year
            }
            </p>
            <p className={"movie__descr"}>
                imdbID: {props.imdbID}
            </p>
            <p>
                Type: {props.Type}
            </p>
        </div>
    );
};

