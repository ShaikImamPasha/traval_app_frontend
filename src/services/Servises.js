import axios  from "axios"
export const Servises=async(Name,Number,Email,Password)=>{
    try{
       const data=await axios.post("https://zany-cyan-cockroach-cuff.cyclic.app/api/auth/rigester",{
        username:Name,
    number:Number,
    email:Email,
    password:Password
       })
       console.log(data);
    }
    catch(error){
        console.log(error);
    }
}