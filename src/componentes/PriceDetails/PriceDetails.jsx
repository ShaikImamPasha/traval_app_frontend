import "./PriceDetails.css";
import {AiFillStar} from "react-icons/ai";
import "./PriceDetails.css";
export const PriceDetails=({data})=>{
   const {price,rating}=data;
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
                        <label>check in</label>
                        <label>check out</label>
                    </div>
                </div>
                <div>
                    <div className="gu">
                        <div>
                            <p>Guests</p>
                            <p>2 guests</p>
                        </div>
                    </div>
                </div>
                <br></br>
                <div>
                    <div>
                        <button className="Button cursor">Reserve</button>
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