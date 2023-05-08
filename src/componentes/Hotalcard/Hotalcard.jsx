import "./Hotalcard.css";
export const Hotalcard=({e})=>{
    const {_id,name,image,adderess,state,rating,price}=e;
    return(
        <div className="main">
        <div>
            <div className="imUp">
               <img className="imgs"src={image}></img>
              <div>
                <h4>
                <span>{adderess} {state}</span>&nbsp;  &nbsp;  &nbsp;  &nbsp; 
                <span>&#9733; {rating}</span>
                </h4>
                <div>
                    <div className="name">
                    {name}
                    </div>
                     <div>
                    <span className="rs">Rs {price}</span> &nbsp; 
                    <span>night</span>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}