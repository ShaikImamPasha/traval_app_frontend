import "./category.css";
import { useState,useEffect } from "react";
import axios from "axios";
import { AiOutlineRight,AiOutlineLeft} from "react-icons/ai";
export const Catagerys=()=>{
    const [catagerys,setCatagerys]=useState([]);
    const [cI,setCatagerysIndex]=useState(0);
    const [data,setData]=useState([]);
    const [hotalcatagery,sethc]=useState("National Parks");
    console.log(hotalcatagery);
    useEffect(()=>{
               (async()=>{
               const {data}=await axios.get("https://filthy-gray-coral.cyclic.app/api/catagery_details")
                setCatagerys(data.slice(cI,cI+10));     
                console.log(data);  
               }
               )()
    },[cI])
    function inc(){
        setCatagerysIndex(prv=>prv+10);
    }
    function dec(){
        setCatagerysIndex(prv=>prv-10);
    }
    return(
        <>
        <section className="category">
            {cI>=10 &&  <AiOutlineLeft onClick={dec}></AiOutlineLeft>}
            {catagerys.map((e,id)=>{
                return <span className="ci">{e.category}</span>
            })}
           {cI<=10 && <AiOutlineRight onClick={inc}></AiOutlineRight> }
        </section>
        </>
    )
}