import { useParams } from "react-router-dom"
export const HotalImages=()=>{
    const {id}=useParams();
    console.log(id);
    return(<>
    <h1>{id}</h1>
    </>)
}