import { useState, useEffect } from "react";

export const useDelayedValue = (value, delay) => {
    const [delayedValue, setDelayedValue] = useState(value);

    useEffect(() => {
        setTimeout(() => {
            setDelayedValue(value);
        }, delay)
    }, [value, delay]);

    return delayedValue;
}