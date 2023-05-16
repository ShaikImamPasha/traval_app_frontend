import "./Properttype.css";
const pdetails=["House","Guest House","flat","Hotal"];
export const Properttype=()=>{
    return(<>
          <div>
              <div>
                <p>Property Type</p>
              </div>
              <div className="d-flex gap ">
                  {pdetails.map((e)=>{ 
                    return(
                        <div className="pdetails cursor">{e}</div>
                        )})}
              </div>
          </div>
    </>)
}