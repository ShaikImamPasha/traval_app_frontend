import "./SearchBar.css";
import { DateSelector } from "../DateSelector/DateSelector";
import { useDatacontest } from "../../contest";
import { useCatagerycontest } from "../../contest";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
export const SearchBar=()=>{
    const navigate=useNavigate();
    const {catageryState}=useCatagerycontest();
    const [hotaldata,setHotaldata]=useState([]);
    const {setDate,destination,guests,close_searcresult}=useDatacontest();
    console.log(close_searcresult);
    useEffect(()=>{
        (async ()=>{
          fetch(`https://filthy-gray-coral.cyclic.app/api/hotels_details?category=${catageryState}`)
                  .then(res=> res.json())
                  .then((D)=>{
                    setHotaldata(D);
                  })
    })()
  },[catageryState])
    const changedestination=(event)=>{
        setDate({
           type:"destination",
           payload: event.target.value
        })
    }
    const changedestinationvalue=(val)=>{
        setDate({
           type:"destination",
           payload: val
        })
    }
    const changeguets=(event)=>{
        setDate({
            type:"guests",
            payload: event.target.value
        })
    }
    const onchangeFoces=()=>{
        setDate({
            type:"open_search"
        })
    }
    const openSearchResult=()=>{
        navigate(`/hotal/${destination}`)
    }
  var destinationdata=hotaldata.filter(({address,city,state,country})=>
  address.toLowerCase().includes(destination.toLowerCase())||city.toLowerCase().includes(destination.toLowerCase())
  || state.toLowerCase().includes(destination.toLowerCase()) ||country.toLowerCase().includes(destination.toLowerCase()))
  return(
        <div className="searchBar">
            <div>
                <label>Where</label>
        <div><input value={destination} onFocus={onchangeFoces} placeholder="search Destination"onChange={changedestination}></input>
             {close_searcresult &&
                  <div>
                  <div className="destination">
                      {destinationdata.map(({address,state})=><p onClick={()=>changedestinationvalue(address)} >{address},{state}</p>)}
                  </div>
                  </div>
               }
                </div>
            </div>
            <div>
                <label>Check In</label>
                <div> <DateSelector placeholder="cin"></DateSelector></div>
            </div>
            <div>
                <label>
                Check Out
                </label>
              <div>
              <DateSelector placeholder="cout"></DateSelector>
              </div>
            </div>
            <div>
                <label>
                No.of Guests
                </label>
               <div>
               <input placeholder="Add guests"  value={guests}onChange={changeguets}></input>
               </div>
            </div>
            <button className="ser1 cursor" type="submit" onClick={openSearchResult}> <i class="fa fa-search"></i></button>
        </div>
    )
}