import "./HotalImages.css";
export const HotalImages=({data})=>{
    const {image,imageArr,name,country}=data;
    return(<>
       <div className="flex"> 
            <div>
            <div><h3 >{name},{country}</h3></div>
                 <img className="mainimage" src={image}></img>
            </div>
            <div>
                <span className="subimageflex">
               {imageArr && imageArr.map((e,id)=>{
                return(
                          <img key={id}className="subImage" src={e}></img>
                )
               })}
               </span>
               </div>
       </div>
    </>)
}