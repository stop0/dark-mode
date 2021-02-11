import { useState } from "react";
import useLocalStorage from "./useLocalStorage"




const useDarkMode = () => {
    const [darkmode, setDarkmode] = useLocalStorage('DarkMode');




    return [darkmode, setDarkmode]
}

export default useDarkMode