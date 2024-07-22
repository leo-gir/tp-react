import { createContext, useState } from "react";

export const OpenMenuContext = createContext();

export function OpenMenuProvider({children}){
    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
        setOpenMenu(prevOpenMenu => !prevOpenMenu);
    };

    return (
        <OpenMenuContext.Provider value={{openMenu, toggleMenu, setOpenMenu}}>
            {children}
        </OpenMenuContext.Provider>
    )
};