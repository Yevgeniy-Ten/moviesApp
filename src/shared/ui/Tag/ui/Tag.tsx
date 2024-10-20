import {FC, PropsWithChildren} from "react";
import "./tag.css"
import classNames from "classnames";

export const Tag: FC<PropsWithChildren & {
    className?: string;
}> = ({className, children}) => {
    return (
        <div className={classNames("tag", className)}>
            {children}
        </div>
    );
};

