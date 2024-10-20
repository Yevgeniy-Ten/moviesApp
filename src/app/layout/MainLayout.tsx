import {FC, PropsWithChildren} from "react";
import {Header} from "./Header/Header.tsx";
import "./mainLayout.css";

export const MainLayout: FC<PropsWithChildren> = ({children}) => {
    return (
        <div>
            <Header/>
            <main className={"container main"}>{children}</main>
        </div>
    );
};

