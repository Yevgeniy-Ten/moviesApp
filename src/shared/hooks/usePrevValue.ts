import {useEffect, useRef} from "react";

export const usePrevValue = <T>(value: T): T | undefined => {
    const prevValue = useRef<T>();
    useEffect(() => {
        prevValue.current = value;
    }, [value]);
    return prevValue.current;
}
