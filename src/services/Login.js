import axios from "axios";
export const Login=async (Number,Password)=>{
    try{
        let od;
       await axios.post("https://zany-cyan-cockroach-cuff.cyclic.app/api/auth/login",{
            number:Number,
            password:Password
               })
        .then((d)=>{
            return d.data;
        })
        .then((d)=>
        {
            od=d;
        })
      return od;
    }
    catch(error){
        console.log(error);
    }
}