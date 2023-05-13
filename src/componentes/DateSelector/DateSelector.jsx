import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDatacontest } from "../../contest";
export const DateSelector=(p)=>{
    const {CheackOut,CheackIn,setDate}=useDatacontest()
    const onchangedata=(data)=>{
    setDate({
        type: p.placeholder==="cout"?"cheack_out":"cheack_In",
        payload:data
    })
  }
    return(
    <DatePicker  onChange={(date)=>(onchangedata(date))}
     selected={p.placeholder=="cout"?CheackOut:CheackIn} dateFormat="dd/MM/yyyy" 
     placeholderText="Add dates" closeOnScroll={true}/>)
}