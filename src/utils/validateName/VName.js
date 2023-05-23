export const VName=(name)=>{
    const regex=/^[a-z]+$/i;
    return regex.test(name);
}