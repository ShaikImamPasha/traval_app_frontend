export const DateReduser=(state,{type,payload})=>{
     switch (type) {
        case "open_search_bar":
            return{
                ...state,
                isSearch:!state.isSearch
            };break;
        case "cheack_out":
            return{
                ...state,
                CheackOut:payload
            };break;
        case "cheack_In":
            return{
                ...state,
                CheackIn:payload
            };
        default:
            return state;
     }
}