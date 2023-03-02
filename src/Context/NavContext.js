import React, { createContext, useState } from 'react';


export const MyContext = createContext();

const NavContext = ({ children }) => {

    const [data, setData] = useState(false);

    return (
        <MyContext.Provider value={{data, setData}}>
            { children}
        </MyContext.Provider>
    );
};

export default NavContext;