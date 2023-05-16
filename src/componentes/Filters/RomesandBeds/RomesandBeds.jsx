import "./RomesandBeds.css";
export const RomesandBeds=()=>{
    const noofbrb=["any","1","2","3","4","5+"];
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
                        <span className="noofbrb center center cursor" key={e}><div>{e}</div></span>
                    )
                })}
            </div>
            <div className="d-flex no">
                {noofbrb.map((e)=>{
                    return(
                        <span className="noofbrb center center cursor"  key={e}><div >{e}</div></span>
                    )
                })}
            </div>
            <div className="d-flex no">
                {noofbrb.map((e)=>{
                    return(
                        <span className="noofbrb center center cursor" key={e}><div>{e}</div></span>
                    )
                })}
            </div>
        </div>
        </div>
        </div>
        </>)
}