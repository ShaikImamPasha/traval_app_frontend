export const FilterReduser=(state,{type,payload})=>{
    switch(type){
        case "open_filter":
            return{
                ...state,
                isFiltermodel: !state. isFiltermodel
            }
            default:
                return state;
    }
}