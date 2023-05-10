import { useContext,createContext, useState } from "react";

var CatageryContest=createContext("National Parks");
var CatageryContestFun=({children})=>{
    const[catageryState,setCatgeryState]=useState("National Parks");
    return <CatageryContest.Provider value={{catageryState,setCatgeryState}}>{children}</CatageryContest.Provider>;
}
var useCatagerycontest=()=> useContext(CatageryContest);
export {useCatagerycontest,CatageryContestFun};