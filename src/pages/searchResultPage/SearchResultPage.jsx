import { useState,useEffect } from "react";
import "./searchResult.css";
import{ NaveBar,Hotalcard} from "../../componentes";
import { useCatagerycontest,useDatacontest} from "../../contest";
export const SearchResultPage=()=>{
    const [Hotaldata,setHotaldata]=useState([]);
    const {catageryState}=useCatagerycontest();
    const {setDate,destination}=useDatacontest();
    useEffect(()=>{
        (async ()=>{
              try{
          fetch(`https://filthy-gray-coral.cyclic.app/api/hotels_details`)
                  .then(res=> res.json())
                  .then((D)=>{
                    setHotaldata(D);   
              })}
              catch(error){
                    console.log(error);
              }
        })()
  },[])
 const srd=Hotaldata.filter(({address,city,state,country})=>
  address.toLowerCase()===destination.toLowerCase() ||city.toLowerCase()===destination.toLowerCase()
  || state.toLowerCase()===destination.toLowerCase() ||country.toLowerCase()===destination.toLowerCase())
  console.log(srd);
    return(<>
    <NaveBar></NaveBar>
    <section className="searchResult">
    { srd ? srd.map((e)=>{return <Hotalcard e={e}></Hotalcard>}):<p>no data found</p>}
    </section>
    </>)
}