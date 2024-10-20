import './header.css'
import {Input} from "@/shared/ui/Input";
import {ProfileMenu} from "@/features/ProfileMenu";
import {useMoviesContext} from "@/app/providers/MoviesProvider.tsx";
import {useEffect, useState} from "react";
import {useDebounce} from "@/shared/hooks/useDebounce.tsx";

export const Header = () => {
    const moviesCtx = useMoviesContext();
    const [value, setValue] = useState('');
    const debounceValue = useDebounce(value, 500);
    useEffect(() => {
        moviesCtx.setSearchValue(debounceValue);
    }, [debounceValue]);
    return (
        <header className={"header container"}>
            <a href={"#"} className={"header__logo"}>
                <img src="/icons/logo.png" className={"w-full"} alt=""/>
            </a>
            <Input value={value}
                   onChange={setValue}
                   rightIcon={
                       <img src={"/icons/searchI.svg"}/>
                   }
                   parentClassName={"header__input"} placeholder={"Batman"}/>
            <ProfileMenu className={"header__profile"} />
        </header>
    );
};

