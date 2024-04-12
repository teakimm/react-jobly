import { useState, useEffect } from "react";

/** Custom hook for using local storage */
export default function useLocalStorage(key) {
    const [value, setValue] = useState(localStorage.getItem(key));

    useEffect(function updateLocalStorageOnChange() {
        if (value === null) {
            localStorage.removeItem(key);
        } else {
            localStorage.setItem(key, value);
        }
    }, [value]);

    return [value, setValue];
}