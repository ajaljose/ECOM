"use client";
import { createContext,useContext,useState } from "react";
const AppContext=createContext();
export function AppWrapper({children}){
    let [state, setstate] = useState({
        hello:'world'
    });
    let [cartList, setCartList] = useState([]);
    return(
        <AppContext.Provider value={{state,cartList,setCartList}}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext(){
    return useContext(AppContext);
}