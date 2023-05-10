import { NaveBar,Hotalcard,Loader,Catagerys } from "../../componentes";
import { useEffect,useState } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import { useCatagerycontest } from "../../catagery-contest";
import "./Home.css";
export const Home=()=>{
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
                        settestData(D);
                        setHotaldata(D.length<16?D:D.slice(0,16));
                        console.log(hotaldata);
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
            },1000)
      }
     return(
      <>
      <div className="relative">
           <NaveBar></NaveBar>
           <Catagerys></Catagerys>
       </div>
       <div className="middle">
                {hotaldata.length!==0 ? <InfiniteScroll
                    dataLength={hotaldata.length}
                    next={fetchMore}
                    hasMore={hasMore}
                    loader={hotaldata ? <Loader></Loader>:null}
                    endMessage={<h4 style={{display:"flex",justifyContent:"center"}}>you have seen all</h4>}
                    >
             <div className="hotalData">
                  {hotaldata && hotaldata.map((e)=><Hotalcard key={e._id} e={e} />)}
             </div>
                    </InfiniteScroll>:<><h4 style={{display:"flex",justifyContent:"center"}}>present not available</h4></>}
                    </div>
           </>
     )
}