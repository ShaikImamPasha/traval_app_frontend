import "./HotalImages.css";
export const HotalImages=({data})=>{
    const {image,imageArr,name,country}=data;
    return(<>
       <div><h3 style={{paddingLeft: "150px"}}>{name},{country}</h3></div>
       <div className="flex"> 
            <div>
                 <img className="mainimage" src={image}></img>
            </div>
            <div>
                <span className="subimageflex">
               {imageArr && imageArr.map((e,id)=>{
                return(
                    <>
                          <img className="subImage" src={e}></img>
                    </>
                )
               })}
               </span>
               </div>
       </div>
    </>)
}