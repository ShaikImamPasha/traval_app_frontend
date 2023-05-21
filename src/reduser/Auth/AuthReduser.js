export const AuthReduser=(state,{type,payload})=>{
         switch(type){
            case "openauth":
                return{
                    ...state,
                    isModelOpen:!state.isModelOpen
                }
            default:
                return state;
         }
}