import { useContext,createContext,useReducer} from "react";
import { FilterReduser } from "../../reduser";
var han={
    isFiltermodel:false,
    priceRange:[100,20000],
    noOfBedRooms:"any",
    noOfBathroomes:"any",
    noOfBeds:"any",
    propertyType: "any"
}
var FilterContest=createContext(han);
var FilterContestFun=({children})=>{
    const[{isFiltermodel,priceRange,noOfBedRooms,
    noOfBathroomes,propertyType,
    noOfBeds},dispatchfilter]=useReducer(FilterReduser,han);
    return <FilterContest.Provider value={{isFiltermodel,propertyType,priceRange,noOfBedRooms,
    noOfBathroomes,
    noOfBeds,dispatchfilter}}>{children}</FilterContest.Provider>;
}
var useFiltercontest=()=> useContext(FilterContest);
export {useFiltercontest,FilterContestFun};