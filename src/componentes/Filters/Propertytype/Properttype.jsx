import "./Properttype.css";
import { useFiltercontest } from "../../../contest";
const pdetails=["House","Guest House","flat","Hotal"];
export const Properttype=()=>{
  const { dispatchfilter,propertyType}=useFiltercontest();
  const changeProperttype=(p)=>{
    dispatchfilter({
      type:"propertyType",
      payload:p
  })
  }
    return(<>
          <div>
              <div>
                <p>Property Type</p>
              </div>
              <div className="d-flex gap ">
                  {pdetails.map((e)=>{ 
                    return(
                        <div className={`pdetails cursor ${e===propertyType?"sele":""}`}onClick={()=>changeProperttype(e)}>{e}</div>
                        )})}
              </div>
          </div>
    </>)
}