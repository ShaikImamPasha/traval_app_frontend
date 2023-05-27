import { NaveBar,Hotalcard,Loader,Catagerys,SearchBar, HotalDetails,Filter,AuthLogin,AuthSignUp} from "../../componentes";
import { useEffect,useState } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import { useCatagerycontest,useDatacontest,useFiltercontest,useAuthcontest} from "../../contest";
import {getHotelsByPrice,Bedrromesbatbed,Pt,Ratingg} from "../../utils";
import "./Home.css";
export const Home=()=>{
      const {isModelOpen,isAuth}=useAuthcontest();
      const {isSearch}=useDatacontest();
      const [l,setLoader]=useState(false);
      const [intiaill,setIntiailloader]=useState(true);
      const {catageryState}=useCatagerycontest();
      const [hasMore,sethasMore]=useState(true);
      const [currentIndex,setcurentIndex]=useState(16);
      const [testData,settestData]=useState([]);
      const [hotaldata,setHotaldata]=useState([]);
      const {isFiltermodel,priceRange, noOfBedRooms,noOfBathroomes,noOfBeds,propertyType,Rating}=useFiltercontest();
      useEffect(()=>{
            (async ()=>{
                  try{
       fetch(`https://zany-cyan-cockroach-cuff.cyclic.app/api/hotels_details?category=${catageryState}`)
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
      const filteredHotelsByPrice = getHotelsByPrice(hotaldata, priceRange);
      const filterbedroomes= Bedrromesbatbed(filteredHotelsByPrice,noOfBedRooms, noOfBathroomes,
            noOfBeds);
   const filterpt=Pt(filterbedroomes,propertyType);
   const filterrating=Ratingg(filterpt,Rating);
      return(
      <>
      <div className="relative">
           <NaveBar></NaveBar>
 {isModelOpen && isAuth==="login"?<AuthLogin></AuthLogin>:
 isModelOpen && isAuth==="singnup"?<AuthSignUp></AuthSignUp>:null}
           {isSearch && <SearchBar></SearchBar>}
           <Catagerys></Catagerys>
       </div>
       <div>
            {isFiltermodel &&<Filter></Filter>}
       </div>
       <div className="middle">
                  {intiaill && <Loader></Loader>}
                {filterrating.length!==0? <InfiniteScroll
                    dataLength={hotaldata.length}
                    next={fetchMore}
                    hasMore={hasMore}
                    loader={filteredHotelsByPrice ? <Loader></Loader>:null}
                    endMessage={<h4 style={{display:"flex",justifyContent:"center"}}>you have seen all</h4>}
                    >
             <div className="hotalData">
                  {filterrating && filterrating.map((e)=><Hotalcard key={e._id} e={e} />)}
             </div>
       </InfiniteScroll>:<></>}
       </div>
       {l && hotaldata.length===0? <>
              <h4 style={{display:"flex",justifyContent:"center"}}>present not available</h4></>:<></>}
       </>
     )
}