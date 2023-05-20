import { NaveBar,Hotalcard,Loader,Catagerys,SearchBar, HotalDetails,Filter } from "../../componentes";
import { useEffect,useState } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import { useCatagerycontest } from "../../contest";
import { useDatacontest,useFiltercontest } from "../../contest";
import {getHotelsByPrice,Bedrromesbatbed,Pt} from "../../utils";
import "./Home.css";
export const Home=()=>{
      const {isSearch}=useDatacontest();
      console.log(isSearch);
      const [l,setLoader]=useState(false);
      const [intiaill,setIntiailloader]=useState(true);
      const {catageryState}=useCatagerycontest();
      const [hasMore,sethasMore]=useState(true);
      const [currentIndex,setcurentIndex]=useState(16);
      const [testData,settestData]=useState([]);
      const [hotaldata,setHotaldata]=useState([]);
      const {isFiltermodel,priceRange, noOfBedRooms,noOfBathroomes,noOfBeds,propertyType}=useFiltercontest();
      useEffect(()=>{
            (async ()=>{
                  try{
              fetch(`https://filthy-gray-coral.cyclic.app/api/hotels_details?category=${catageryState}`)
                      .then(res=> res.json())
                      .then((D)=>{
                        setIntiailloader(false);
                        settestData(D);
                        setHotaldata(D.length<16?D:D.slice(0,16));
                       if(hotaldata.length===0){
                        setLoader(true);
                       }else{
                        setLoader(false)
                       }
                        if(D.length<16){
                              sethasMore(false);
                        }
                        else{
                              sethasMore(true);
                        }
                        console.log(D);
                      })
                  }
                  catch(error){
                        console.log(error);
                  }
            })()
      },[catageryState])
      const fetchMore=()=>{
            if(hotaldata.length>=testData.length){
                  sethasMore(false);
                  return
            }
            setTimeout(()=>{
                  if(hotaldata && hotaldata.length>0){
                        setHotaldata(hotaldata.concat(testData.slice(currentIndex,currentIndex+16)));
                        setcurentIndex(cur=> cur+16);
                  }
                  else{
                        setHotaldata([]);
                  }
            },2000)
      }
      console.log(propertyType);
      const filteredHotelsByPrice = getHotelsByPrice(hotaldata, priceRange);
      const filterbedroomes= Bedrromesbatbed(filteredHotelsByPrice,noOfBedRooms, noOfBathroomes,
            noOfBeds);
   const filterpt=Pt(filterbedroomes,propertyType);
     return(
      <>
      <div className="relative">
           <NaveBar></NaveBar>
           {isSearch && <SearchBar></SearchBar>}
           <Catagerys></Catagerys>
       </div>
       <div className="absolute">
            {isFiltermodel &&<Filter></Filter>}
       </div>
       <div className="middle">
                  {intiaill && <Loader></Loader>}
                {filterpt.length!==0? <InfiniteScroll
                    dataLength={hotaldata.length}
                    next={fetchMore}
                    hasMore={hasMore}
                    loader={filteredHotelsByPrice ? <Loader></Loader>:null}
                    endMessage={<h4 style={{display:"flex",justifyContent:"center"}}>you have seen all</h4>}
                    >
             <div className="hotalData">
                  {filterpt && filterpt.map((e)=><Hotalcard key={e._id} e={e} />)}
             </div>
       </InfiniteScroll>:<></>}
       </div>
       {l && hotaldata.length===0? <>
              <h4 style={{display:"flex",justifyContent:"center"}}>present not available</h4></>:<></>}
       </>
     )
}