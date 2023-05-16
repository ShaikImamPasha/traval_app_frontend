import "./Rating.css";
const rating=["1","2","3","4","5"];
export const Rating=()=>{
    return(
        <>
        <br></br>
        <div>
            <h3 className="pc">Ratings</h3>
        </div>
        <div className="ratingmain gap">
            {rating.map((e)=>{
                return(
                    <div className="ratingdiv cursor">
                        {e}&Up&nbsp;
                    </div>
                )
            })}
        </div>
        </>
    )
}