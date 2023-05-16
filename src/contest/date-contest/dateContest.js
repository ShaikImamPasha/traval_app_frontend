import { useContext,createContext, useState,useReducer} from "react";
import { DateReduser } from "../../reduser";
var han={
    isSearch:false,
    CheackIn:null,
    CheackOut:null,
    guests:null,
    destination:"",
    close_searcresult:true
}
var DateContest=createContext(han);
var DateContestFun=({children})=>{
    const[{isSearch,CheackOut,CheackIn, guests,close_searcresult,
        destination},setDate]=useReducer(DateReduser,han);
    return <DateContest.Provider value={{isSearch,CheackOut,CheackIn, guests,
        destination,close_searcresult,setDate}}>{children}</DateContest.Provider>;
}
var useDatacontest=()=> useContext(DateContest);
export {useDatacontest,DateContestFun};