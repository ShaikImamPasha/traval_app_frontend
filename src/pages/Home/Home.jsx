import { NaveBar,Hotalcard } from "../../componentes";
import { useEffect,useState } from "react";
import "./Home.css";
import axios from "axios";
export const Home=()=>{
      const [hasMore,sethasMore]=useState(true);
      const [currentIndex,setcurentIndex]=useState(16);
      const [testData,settestData]=useState([]);
      const [hotaldata,setHotaldata]=useState([]);
      useEffect(()=>{
            (async ()=>{
                  try{
                      fetch("https://super-pig-coat.cyclic.app/api/hotels_details")
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
     return(
      <>
           <NaveBar></NaveBar>
           <div className="hotalData">
      {hotaldata && hotaldata.map((e)=><Hotalcard key={e._id} e={e} />)}
      </div>
           </>
     )
}