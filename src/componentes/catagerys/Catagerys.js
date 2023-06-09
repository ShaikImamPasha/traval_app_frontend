import "./category.css";
import { useState,useEffect } from "react";
import axios from "axios";
import { AiOutlineRight,AiOutlineLeft} from "react-icons/ai";
import { MdOutlineFilterAlt } from 'react-icons/md';
import { useCatagerycontest,useFiltercontest } from "../../contest";
export const Catagerys=()=>{
    const [catagerys,setCatagerys]=useState([]);
    const [cI,setCatagerysIndex]=useState(0);
    const [data,setData]=useState([]);
    const {dispatchfilter}=useFiltercontest();
   const {catageryState,setCatgeryState}=useCatagerycontest();
    useEffect(()=>{
               (async()=>{
               const {data}=await axios.get("https://zany-cyan-cockroach-cuff.cyclic.app/api/catagery_details")
                setCatagerys(data.slice(cI,cI+10));     
               }
               )()
    },[cI])
    function inc(){
        setCatagerysIndex(prv=>prv+10);
    }
    function dec(){
        setCatagerysIndex(prv=>prv-10);
    }
    const cset=(value)=>{
        setCatgeryState(value)
    }
    const onchangefilter=()=>{
        dispatchfilter({
            type:"open_filter"
        })
    }
    return(
        <>
        <section className="category">
            {cI>=10 &&  <AiOutlineLeft onClick={dec}></AiOutlineLeft>}
            {catagerys.map((e,id)=>{
                return <span  key={id} className={`${catageryState==e.category ? "ca":""} `} onClick={()=>cset(e.category)}>{e.category}</span>
            })}
           {cI<=10 &&  <AiOutlineRight onClick={inc}></AiOutlineRight> }
           <div className="filter" onClick={onchangefilter}>
            <MdOutlineFilterAlt></MdOutlineFilterAlt>
            <span>Filter</span>
        </div>
        </section>
        </>
    )
}