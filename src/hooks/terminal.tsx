import * as React from "react";
import { isMobile } from "react-device-detect";

export function useClickOutsideEvent<T extends Node>(
    ref: React.MutableRefObject<T>,
    clickedInside: boolean,
    setClickedInside: React.Dispatch<React.SetStateAction<boolean>>
) {
    const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            setClickedInside(false);
        } else if (isMobile) {
            setClickedInside(!clickedInside);
        } else {
            setClickedInside(true);
        }
    };

    React.useEffect(() => {
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });
}

export default {
    useClickOutsideEvent,
};
