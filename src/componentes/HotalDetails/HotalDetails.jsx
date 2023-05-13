import "./HotalDetails.css";
import {CgMenuGridO} from "react-icons/cg";
export const HotalDetails=({data})=>{
    const {hostName,hostJoinedOn,numberOfBathrooms,numberOfBeds,numberOfguest,numberOfBedrooms,rating,
        ameneties}=data;
    return(
        <>
        <div className="mainhotaldetails">
        <br></br>
            <div><h4>hosted by {hostName}.joined on {hostJoinedOn}</h4></div>
            <div><p>{numberOfguest} guests.{numberOfBedrooms} bedroom.{numberOfBeds} bed.{numberOfBathrooms} bathroom</p></div>
            <br></br>
            <hr></hr>
            <br></br>
            <div>
            <CgMenuGridO></CgMenuGridO><h4>Dedicated Workspace</h4>
                <p>a common area with that is well suited for working</p>
                <br></br>
                <CgMenuGridO></CgMenuGridO>
                <h4>Great Location</h4>
                <p>80% of recent guests gave the Location a-{rating} star rating</p>
                <br></br>
                <CgMenuGridO></CgMenuGridO>
                <p>Free concellation before 7 days of booking</p>
                <br></br>
            </div>
            <hr></hr>
            <br></br>
            <div>
                <h4>what this place offer</h4>
                            <div>
                                <CgMenuGridO></CgMenuGridO>
                            <div>

                            </div>
                            </div>
            </div>
        </div>
        </>
    )
}