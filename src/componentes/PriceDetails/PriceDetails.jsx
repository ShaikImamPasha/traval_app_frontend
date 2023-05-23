import "./PriceDetails.css";
import {AiFillStar} from "react-icons/ai";
import "./PriceDetails.css";
import { DateSelector } from "../DateSelector/DateSelector";
import {useDatacontest} from "../../contest";
import { useNavigate } from "react-router-dom";
export const PriceDetails=({data})=>{
   const {price,rating,_id}=data;
   var navigate=useNavigate();
   const {guests,setDate}=useDatacontest();
   const handelGusts=(event)=>{
  setDate({
    type:"guests",
    payload:event.target.value
  })
   }
   const finalOrder=()=>{
      navigate(`/finalOrder/${_id}`)
   }
    return(
        <>
        <div className="pricemain">
            <div className="pricemainsub">
             <div className="d-flex gap">
                  <h4><span>Rs.{price} night</span></h4>
                      <div style={{marginLeft: "100px"}}>
                         <AiFillStar></AiFillStar>
                         <span>{rating}</span>
                      </div>
                </div>
                <div>
                    <div className="gap d-flex">
                        <div>
                        <label>check in</label>
                        <div>
                        <DateSelector placeholder="cin"></DateSelector>
                        </div>
                        </div>
                        <div>
                        <label>check out</label>
                        <span><DateSelector placeholder="cout"></DateSelector></span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="gu">
                        <div>
 Guests<div>{guests<=0 ? <input onChange={handelGusts} ></input>:  <p>{<input  onChange={handelGusts} type="number" value={guests}></input>} guests</p>}</div>
                        </div>
                    </div>
                </div>
                <br></br>
                <div>
                    <div>
                        <button onClick={finalOrder} className="Button cursor">Reserve</button>
                    </div>
                </div>
                <div className="">
                    <br></br>
                    <span>Rs {price}*2 nights</span> &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; 
                    <span>Rd .{price*2}</span>
                </div>
                <div>
                    <span>Servicee  &nbsp;fee </span> &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;   &nbsp;  &nbsp; 
                    <span>Rd .200</span>
                </div>
                <hr></hr>
                <div>
                    <span>Total </span> &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;   &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
                    <span>Rs .{price*2+200}</span>  
                </div>
                </div>
           </div>
        </>
    )
}