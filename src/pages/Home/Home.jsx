import { NaveBar,Hotalcard,Loader,Catagerys } from "../../componentes";
import { useEffect,useState } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import "./Home.css";
export const Home=()=>{
      const [hasMore,sethasMore]=useState(true);
      const [currentIndex,setcurentIndex]=useState(16);
      const [testData,settestData]=useState([]);
      const [hotaldata,setHotaldata]=useState([]);
      useEffect(()=>{
            (async ()=>{
                  try{
                      fetch("https://filthy-gray-coral.cyclic.app/api/hotels_details")
                      .then(res=> res.json())
                      .then((D)=>{
                        settestData(D);
                        setHotaldata( D? D.slice(0,16):[]);
                      })
                  }
                  catch(error){
                        console.log(error);
                  }
            })()
      },[])
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
            },2000)
      }
     return(
      <>
           <NaveBar></NaveBar>
           <Catagerys></Catagerys>
                    <InfiniteScroll
                    dataLength={hotaldata.length}
                    next={fetchMore}
                    hasMore={hasMore}
                    loader={hotaldata ? <Loader></Loader>:null}
                    endMessage={<h4 style={{display:"flex",justifyContent:"center"}}>you have seen all</h4>}
                    >
             <div className="hotalData">
                  {hotaldata && hotaldata.map((e)=><Hotalcard key={e._id} e={e} />)}
             </div>
                    </InfiniteScroll>
           </>
     )
}