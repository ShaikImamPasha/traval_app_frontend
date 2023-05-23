import { HotalImages,NaveBar,HotalDetails,PriceDetails,AuthLogin,AuthSignUp} from "../../componentes";
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import { useAuthcontest } from "../../contest";
import axios from "axios";
import "./Singlehotalpage.css";
export const Singlehotalpage=()=>{
  const {isModelOpen,isAuth}=useAuthcontest();
  const {id}=useParams();
  const [data1,setData]=useState([]);
  useEffect(()=>{
    (async ()=> {
      const {data}=await axios.get(`https://zany-cyan-cockroach-cuff.cyclic.app/api/singelhotal/${id}`);
         setData(data);
    })()
  },[])
    return(
        <>
        <NaveBar></NaveBar>
        {isModelOpen && isAuth==="login"?<AuthLogin></AuthLogin>:
 isModelOpen && isAuth==="singnup"?<AuthSignUp></AuthSignUp>:null}
          <HotalImages data={data1}></HotalImages>
          <div className="middleOfprice">
            <HotalDetails data={data1}></HotalDetails>
            <PriceDetails data={data1}></PriceDetails>
          </div>
        </>
    )
}
