import { useContext,createContext, useState,useReducer} from "react";
import { AuthReduser } from "../../reduser";
var init={
    isModelOpen:false,
    Name:null,
    Email:null,
    Number:null,
    Password:null,
    ConfirmPassword:null,
    isAuth:"login",
    name:null,
    at:null,
    account:false,
    logout:false
}
var AuthContest=createContext(init);
var AhuthContestFun=({children})=>{
    const[{isModelOpen,Name,Email,Number,Password,isAuth,ConfirmPassword,logout,account,name,at},uthDispatch]=useReducer(AuthReduser,init);
    return <AuthContest.Provider value={{name,at,isModelOpen,Name,Email,Number,logout,account,ConfirmPassword,Password,isAuth,uthDispatch}}>{children}
    </AuthContest.Provider>;
}
var useAuthcontest=()=> useContext(AuthContest);
export {useAuthcontest,AhuthContestFun};