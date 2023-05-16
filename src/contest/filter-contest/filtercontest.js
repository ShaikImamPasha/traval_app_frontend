import { useContext,createContext,useReducer} from "react";
import { FilterReduser } from "../../reduser";
var han={
    isFiltermodel:false
}
var FilterContest=createContext(han);
var FilterContestFun=({children})=>{
    const[{isFiltermodel},dispatchfilter]=useReducer(FilterReduser,han);
    return <FilterContest.Provider value={{isFiltermodel,dispatchfilter}}>{children}</FilterContest.Provider>;
}
var useFiltercontest=()=> useContext(FilterContest);
export {useFiltercontest,FilterContestFun};