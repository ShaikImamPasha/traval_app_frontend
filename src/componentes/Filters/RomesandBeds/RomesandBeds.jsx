import "./RomesandBeds.css";
import { useFiltercontest } from "../../../contest/filter-contest/filtercontest";
export const RomesandBeds=()=>{
    const {dispatchfilter}=useFiltercontest();
    const noofbrb=["any",1,2,3,4,5];
    const changeNoOfBedroomes=(noofbedrooms)=>{
        dispatchfilter({
            type:"noOfBedRooms",
            payload:noofbedrooms
        })
    }
    const changeNoOfBathrooms=(noOfBathroomes)=>{
        dispatchfilter({
            type:"noOfBathroomes",
            payload:noOfBathroomes
        })
    }
    const changeNoOfBeds=(noOfBeds)=>{
        dispatchfilter({
            type:"noOfBeds",
            payload:noOfBeds
        })
    }
    return(<>
        <div>
        <span className="pc"><h3>Romes And Beds</h3></span>
        <div className="d-flex rms">
            <div>
                <div>
                <span>Bedromes</span>
                </div>
                <div>
                <span>Beds</span>
                </div>
                <div>
                <span>Bathrooms</span>
                </div>
            </div>
            <div>
            <div className="d-flex no">
                {noofbrb.map((e)=>{
                    return(
                        <span onClick={()=>changeNoOfBedroomes(e)}
                         className="noofbrb center center cursor" key={e}><div>{e}</div></span>
                    )
                })}
            </div>
            <div className="d-flex no">
                {noofbrb.map((e)=>{
                    return(
                        <span onClick={()=>changeNoOfBeds(e)} className="noofbrb center center cursor"  key={e}><div >{e}</div></span>
                    )
                })}
            </div>
            <div className="d-flex no">
                {noofbrb.map((e)=>{
                    return(
                        <span onClick={()=>changeNoOfBathrooms(e)} className="noofbrb center center cursor" key={e}><div>{e}</div></span>
                    )
                })}
            </div>
        </div>
        </div>
        </div>
        </>)
}