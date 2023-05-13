import { useContext,createContext, useState,useReducer} from "react";
import { DateReduser } from "../../reduser";
var han={
    isSearch:false,
    CheackIn:null,
    CheackOut:null
}
var DateContest=createContext(han);
var DateContestFun=({children})=>{
    const[{isSearch,CheackOut,CheackIn},setDate]=useReducer(DateReduser,han);
    return <DateContest.Provider value={{isSearch,CheackOut,CheackIn,setDate}}>{children}</DateContest.Provider>;
}
var useDatacontest=()=> useContext(DateContest);
export {useDatacontest,DateContestFun};