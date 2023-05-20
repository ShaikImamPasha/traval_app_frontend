import "./Filter.css";
import { Pricerange,RomesandBeds,Properttype,Rating} from ".";
import { AiOutlineClose } from 'react-icons/ai';
import { useFiltercontest } from "../../contest";
export const Filter=()=>{
  const {dispatchfilter}=useFiltercontest();
  const clodefilter=()=>{
    dispatchfilter({
      type:"open_filter"
  })
  }
  const clearall=()=>{ 
    dispatchfilter({
      type:"clearall"
  })
  }
   return(
    <>
    <div className="filtermain1">
    <div className="filtermain">
      <div className="filterclose">
            <h3 className="pc">Filter</h3>
            <AiOutlineClose onClick={clodefilter} className="cursor"></AiOutlineClose>
       </div>
       <div>
       <Pricerange></Pricerange>
       </div>
       <div>
        <div>
          <RomesandBeds></RomesandBeds>
         </div>
       </div>
       <Properttype></Properttype>
       <div>
        <Rating></Rating>
       </div>
       <div className="d-flex button">
           <div>
           <button onClick={clearall} className="bu cursor"style={{color:"black"}}>Clearall</button>
           </div>
           <div>
                <button className="bu cursor"  onClick={clodefilter} style={{backgroundColor:" rgba(255, 0, 0, 0.925)",color:"white"}}>Apply</button>
           </div>
       </div>
      </div>
      </div>
    </>
   )
}