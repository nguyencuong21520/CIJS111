import { createContext, useState } from "react";

export const Store_one = createContext();

const StoreBoundary = (props) => {
    const [lang, setLang] = useState('EN');

    const handleChangeLang = (lang) =>{
        setLang(lang);
    }

    const contextValue = {
        value: lang,
        handle: handleChangeLang,
    };

    return <Store_one.Provider value={contextValue}>
        {props.children}
    </Store_one.Provider>
    
}

export default StoreBoundary;