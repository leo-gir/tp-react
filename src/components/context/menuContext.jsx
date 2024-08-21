import { createContext, useState } from "react";

export const OpenMenuContext = createContext();

export function OpenMenuProvider({children}){
    const [openMenu, setOpenMenu] = useState(false);
    const handleClick = () => {
        setOpenMenu(prevOpenMenu => !prevOpenMenu);
    };

    return (
        <OpenMenuContext.Provider value={{openMenu, handleClick}}>
            {children}
        </OpenMenuContext.Provider>
    )
};