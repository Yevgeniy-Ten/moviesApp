import "./profilemenu.css"
import classNames from "classnames";

export const ProfileMenu = (props: {
    className?: string
}) => {
    const {className} = props;
    return (
        <div className={classNames("profileMenu", className)}>
            <img src="/icons/user.svg" className={"profileMenu__img"} alt=""/> <span>Your Name</span>
        </div>
    );
};

