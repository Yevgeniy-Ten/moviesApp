import {ChangeEvent, ComponentProps, FC, ReactNode} from "react";
import "./input.css"
import classNames from "classnames";

interface InputProps {
    parentClassName?: string;
    onChange?: (value: string) => void;
    rightIcon?: ReactNode
}

export const Input: FC<Omit<ComponentProps<"input">, "onChange"> & InputProps> = (props) => {
    const {parentClassName, type = 'text', rightIcon, onChange, ...otherProps} = props;
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    }
    return (
        <div className={classNames("input__parent", parentClassName)}>
            <input
                onChange={handleChange}
                type={type} className={classNames("input", {
                'rightIcon': rightIcon
            })} {...otherProps}/>
            {
                rightIcon && <div
                className={"input__svg"}
              >
                    {rightIcon}
              </div>
            }
        </div>
    );
};

