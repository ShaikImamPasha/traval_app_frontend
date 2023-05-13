import { NaveBar,Hotalcard,Loader,Catagerys,DateSelector,SearchBar } from "../../componentes";
import { useEffect,useState } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import { useCatagerycontest } from "../../contest";
import { useDatacontest } from "../../contest";
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
      console.log(catageryState);
      useEffect(()=>{
            (async ()=>{
                  try{
              fetch(`https://filthy-gray-coral.cyclic.app/api/hotels_details?category=${catageryState}`)
                      .then(res=> res.json())
                      .then((D)=>{
                        setIntiailloader(false);
                        settestData(D);
                        setHotaldata(D.length<16?D:D.slice(0,16));
                        console.log(hotaldata.length);
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
     return(
      <>
      <div className="relative">
           <NaveBar></NaveBar>
           {isSearch && <SearchBar></SearchBar>}
           <Catagerys></Catagerys>
       </div>
       {console.log(l)}
       <div className="middle">
                  {intiaill && <Loader></Loader>}
                {hotaldata.length!==0? <InfiniteScroll
                    dataLength={hotaldata.length}
                    next={fetchMore}
                    hasMore={hasMore}
                    loader={hotaldata ? <Loader></Loader>:null}
                    endMessage={<h4 style={{display:"flex",justifyContent:"center"}}>you have seen all</h4>}
                    >
             <div className="hotalData">
                  {hotaldata && hotaldata.map((e)=><Hotalcard key={e._id} e={e} />)}
             </div>
       </InfiniteScroll>:<></>}
       </div>
       {l && hotaldata.length===0? <>
              <h4 style={{display:"flex",justifyContent:"center"}}>present not available</h4></>:<></>}
       </>
     )
}