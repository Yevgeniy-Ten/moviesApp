import "./movies.css"
import {Tag} from "@/shared/ui/Tag";
import {MovieCard} from "@/entities/MovieCard";
import {useMoviesService} from "@/entities/MovieCard/api/api.ts";
import {Movie} from "@/entities/MovieCard/api/types.ts";
import {useMoviesContext} from "@/app/providers/MoviesProvider.tsx";
import {Pagination} from "@/shared/ui/Pagination";
import {useMemo} from "react";

export const Movies = () => {
    const moviesContext = useMoviesContext()
    const moviesRequest = useMoviesService({
        s: moviesContext.searchValue,
        page: moviesContext.page
    })
    const findedCount = moviesRequest.data?.data.totalResults ? +moviesRequest.data?.data.totalResults : 0;
    const totalPages = useMemo(() => {
        if (!moviesRequest.data?.data.Search?.length) return 0;
        return Math.ceil(findedCount / moviesRequest.data?.data.Search.length)
    }, [findedCount, moviesContext.searchValue])


    const componentToShow = (isLoading: boolean, moviesArray: Movie[]) => {
        if (isLoading) {
            return <div className="flex center">
                <img src="/icons/spinning-circles.svg" className={"movies__loader"} alt=""/>
            </div>
        }
        if (moviesArray.length) {
            return <div className={"movies"}>
                {
                    moviesArray.map((movie: Movie) => {
                        return <MovieCard key={movie.imdbID} {...movie}/>
                    })
                }
            </div>
        }
        return <p className={"movies__notFound"}>
            No movies found
        </p>
    }
    return (
        <div className={"moviesParent"}>
            <div className={"moviesSearch__parent"}>
                {
                    moviesContext.searchValue ? <p className={"moviesSearch"}>
                        You searched for: <span>{moviesContext.searchValue}</span>
                    </p> : <p className={"moviesSearch"}>
                        You can started to search
                    </p>
                }
                {
                    findedCount ? <Tag className={"moviesSearch__tag"}>
                        {findedCount} results
                    </Tag> : null
                }
            </div>
            {
                moviesContext.searchValue && componentToShow(
                    moviesRequest.isLoading, moviesRequest.data?.data.Search || [])
            }
            {
                findedCount ? <Pagination
                onPageChange={moviesContext.setPage}
                currentPage={moviesContext.page} totalPages={totalPages}/> : null
            }
        </div>
    );
};

