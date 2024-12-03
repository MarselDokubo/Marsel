import { createContext, useContext } from "react";

export const FragmentContext = createContext("");

export const useFragmentContext = () => {
    return useContext(FragmentContext);
};
