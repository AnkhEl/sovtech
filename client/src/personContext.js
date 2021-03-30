import React, { useState, createContext } from 'react';

export const PersonContext = createContext();

const PersonContextProvider = (props) => {

    const [currentPageNum, setCurrentPageNum] = useState(0);

    //this method is used to navigate back to the previous page from the details page in person-details.tsx
    const handlePreviousClick = () => {
        window.history.back();
    }

    const handleHomeClick = () => {
        //reset the current page to zero and then navigate back
        window.history.back();
        setCurrentPageNum(0); 
    }
    return (
        <PersonContext.Provider value={{
            currentPageNum,
            setCurrentPageNum,
            handleHomeClick,
            handlePreviousClick
        }}>
            {props.children}

        </PersonContext.Provider>
    )
}
export default PersonContextProvider;