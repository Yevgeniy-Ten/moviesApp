import {createContext, FC, PropsWithChildren, useContext, useState} from "react";

interface MoviesContext {
    searchValue: string;
    setSearchValue: (value: string) => void;
    page: number;
    setPage: (page: number) => void;
}

export const MoviesContext = createContext<MoviesContext>({
    searchValue: "",
    setSearchValue: () => {
    },
    page: 1,
    setPage: () => {
    }
});

export const useMoviesContext = () => {
    return useContext(MoviesContext);
}
export const MoviesProvider: FC<PropsWithChildren> = ({children}) => {
    const [searchValue, setSearchValue] = useState("");
    const [page, setPage] = useState(1);
    const setValue = (value: string) => {
        setSearchValue(value)
        setPage(1)
    }
    return (
        <MoviesContext.Provider value={{
            searchValue,
            setSearchValue: setValue,
            page,
            setPage
        }}>
            {children}
        </MoviesContext.Provider>
    );
};

