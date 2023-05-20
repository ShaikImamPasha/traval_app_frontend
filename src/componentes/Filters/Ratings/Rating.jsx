import "./Rating.css";
import { useFiltercontest } from "../../../contest";
const rating=[1,2,3,4,5];
export const Rating=()=>{
    const { dispatchfilter,Rating}=useFiltercontest();
    const changeRating=(rating)=>{
          dispatchfilter({
            type:"Rating",
            payload:rating
        })
    }
    return(
        <>
        <br></br>
        <div>
            <h3 className="pc">Ratings</h3>
        </div>
        <div className="ratingmain gap">
            {rating.map((e)=>{
                return(
             <div onClick={()=>changeRating(e)} className={`ratingdiv cursor ${e===Rating?"sele":" "}`}>
                        {e}&Up&nbsp;
                    </div>
                )
            })}
        </div>
        </>
    )
}