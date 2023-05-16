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
        case "destination":
            return{
                ...state,
                destination:payload
            }
            case "guests":
                return{
                    ...state,
                    guests:payload
                }
            case "close_searcresult":
                return{
                    ...state,
                    close_searcresult: false
                }
                case "open_search":
                    return{
                        ...state,
                        close_searcresult:true
                    }
        default:
            return state;
     }
}