import {fetcher} from "@/shared/api/fetch.ts";
import {useQuery} from "@tanstack/react-query";
import {Movie} from "@/entities/MovieCard/api/types.ts";
import {usePrevValue} from "@/shared/hooks/usePrevValue.ts";

interface MovieSearchParams {
    s?: string,
    page: number
}

export interface MoviesResponse {
    Search?: Array<Movie>
    totalResults: string
    Response: string
}

export const moviesServices = {
    getMovies(params: MovieSearchParams) {
        return fetcher.get<MoviesResponse>("/", {
            params: {
                i: "tt3896198",
                apikey: '8523cbb8',
                ...params,
            }
        })
    }
}

export const useMoviesService = (params: MovieSearchParams) => {
    const prevValue = usePrevValue(params.s)
    return useQuery({
        queryKey: ["movies", params],
        queryFn() {
            return moviesServices.getMovies(params)
        },
        placeholderData: prevValue === params.s ?(prev) => prev : undefined,
        enabled: !!params.s
    });
}
