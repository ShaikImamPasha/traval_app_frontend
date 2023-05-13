import { HotalImages,NaveBar,HotalDetails,PriceDetails} from "../../componentes";
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";
import "./Singlehotalpage.css";
export const Singlehotalpage=()=>{
  const {id}=useParams();
  const [data1,setData]=useState([]);
  useEffect(()=>{
    (async ()=> {
      const {data}=await axios.get(`https://filthy-gray-coral.cyclic.app/api/singelhotal/${id}`);
         setData(data);
    })()
  },[])
    return(
        <>
        <NaveBar></NaveBar>
          <HotalImages data={data1}></HotalImages>
          <div className="middleOfprice">
            <HotalDetails data={data1}></HotalDetails>
            <PriceDetails data={data1}></PriceDetails>
          </div>
        </>
    )
}
