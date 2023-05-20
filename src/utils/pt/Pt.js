export const Pt=(filterbedroomes,propertyType)=>{
    if(propertyType==="any") return filterbedroomes;
    const filteredHotal=filterbedroomes.filter((e)=>e.propertyType==propertyType)
    return filteredHotal;
}