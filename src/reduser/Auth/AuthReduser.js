export const AuthReduser=(state,{type,payload})=>{
         switch(type){
            case "openauth":
                return{
                    ...state,
                    isModelOpen:!state.isModelOpen
                }
            case "login":
                return{
                    ...state,
                    isAuth:"login"
                }
            case "singnup":
                return{
                    ...state,
                    isAuth:"singnup"
                }
            case "Number":
                return{
                    ...state,
                    Number:payload
                }
                case "Name":
          return{
                ...state,
               Name:payload
                }
            case "Email":
           return{
                    ...state,
                  Email:payload
                    }
            case "Password":
              return{
                   ...state,
                  Password:payload
                }
            case "ConfirmPassword":
              return{
                   ...state,
                   ConfirmPassword:payload
                    }
           case "setname":
             return{
                ...state,
               name:payload
             }      
             case "accestoken":
                return{
                   ...state,
                  at:payload
                } 
                case "clear":
                    return{
                       ...state,
                       Name:null,
                  Email:null,
                  Number:null,
                Password:null,
                  ConfirmPassword:null,
                    }    
              case "account":
                return{
                  ...state,
                  account: !state.account
                }    
              case  "logout":
                return{
                  ...state,
                  logout: !state.logout
                }   
                case  "name":
                return{
                  ...state,
                  name: payload
                }             
            default:
                return state;
         }
}