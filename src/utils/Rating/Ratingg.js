export const Ratingg=(filterpt,Rating)=>{
    const filterdata=filterpt.filter(({rating})=> rating>=Rating)
    return filterdata;
}