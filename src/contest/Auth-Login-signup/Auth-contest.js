import { useContext,createContext, useState,useReducer} from "react";
import { AuthReduser } from "../../reduser";
var init={
    isModelOpen:false,
    Name:null,
    Email:null,
    Number:null,
    Password:null
}
var AuthContest=createContext(init);
var AhuthContestFun=({children})=>{
    const[{isModelOpen,Name,Email,Number,Password},uthDispatch]=useReducer(AuthReduser,init);
    return <AuthContest.Provider value={{isModelOpen,Name,Email,Number,Password,uthDispatch}}>{children}
    </AuthContest.Provider>;
}
var useAuthcontest=()=> useContext(AuthContest);
export {useAuthcontest,AhuthContestFun};