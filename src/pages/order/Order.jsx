import "./Order.css";
import { useNavigate } from "react-router-dom";
import {useParams} from "react-router-dom";
import { useState,useEffect } from "react";
import { useDatacontest } from "../../contest";
import axios from "axios";
export const Order=()=>{
  const {CheackIn,CheackOut,guests}=useDatacontest();
    const {id}=useParams();
    const [data1,setData]=useState([]);
    var navigate=useNavigate();
    const goBack=()=>{
     navigate("/");
    }
  useEffect(()=>{
    (async ()=> {
      const {data}=await axios.get(`https://zany-cyan-cockroach-cuff.cyclic.app/api/singelhotal/${id}`);
         setData(data);
    })()
  },[]) 
  let totalPayableAmount=data1.price;
  const loadScript = (source) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = source;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleConfirmBookingClick = async () => {
    const response = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!response) {
      console.log({ message: "Razorpay SDK failed to load" });
    }

    const options = {
      key: "wsnwsnwkw",
      amount: totalPayableAmount * 100,
      currency: "INR",
      name: "TravelO",
      email: "sakari@gmail.com",
      contact: "6537829876",
      description: "Thank you for booking with us",
      prefill: {
        name: "customer",
        email: "sakari@gmail.com",
        contact: "0928716726",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

    return(<>
       <div>
        <nav onClick={goBack} className="heading-1 cursor"> 
            <p>Traval..</p>
        </nav>
        <hr></hr>
        <div className="mainorder">
            <div>
                  <h3>Trip Details</h3>
                  <h4>Your Trip</h4>
                  <p>dates</p>
                  <p>{CheackIn && CheackOut 
            ? `${CheackIn.toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
            })} - ${CheackOut.toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
            })}`:<p>not entered date</p>}</p>
                  <h3>Guests</h3>
                 <p> {guests} Guests</p>
                  <hr></hr>
                  <h3>Play with</h3>
                  <h4>Razorpay</h4>
                  <button onClick={handleConfirmBookingClick} className="confirmbooking cursor">confirm booking</button>
            </div>
            <div className="result">
                      <img className="img" src={data1.image}></img>
                      <div>
                         <p>{data1.category},{data1.state}</p>
                      </div>
                       <hr></hr>
                <p>your booking is prodected by <span className="hn">Traval...</span>cover</p>
                       <hr></hr>
                       <h3>Price details</h3>
                       <div className="">
                    <br></br>
                    <span>Rs ${data1.price}*2 nights</span> &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; 
                    <span>Rd .${data1.price*2}</span>
                   </div>
                <div>
                    <span>Servicee  &nbsp;fee </span> &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;   &nbsp;  &nbsp; 
                    <span>Rd .200</span>
                </div>
                <hr></hr>
                <div>
                    <span>Total </span> &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;   &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
                    <span>Rs .{data1.price*2+200}</span>  
                </div>
              </div>
              </div>
              </div>
    </>)
}   