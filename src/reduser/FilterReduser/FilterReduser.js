export const FilterReduser=(state,{type,payload})=>{
    switch(type){
        case "open_filter":
            return{
                ...state,
                isFiltermodel: !state. isFiltermodel
            }
            case "MINIMUM_PRICE":
                return {
                  ...state,
                  priceRange: [
                    Math.min(
                      payload.newValue[0],
                      payload.priceRange[1] - payload.minDifference
                    ),
                    payload.priceRange[1],
                  ],
                };
              case "MAXIMUM_PRICE":
                return {
                  ...state,
                  priceRange: [
                    payload.priceRange[0],
                    Math.max(
                      payload.newValue[1],
                      payload.priceRange[0] + payload.minDifference
                    ),
                  ],
                };
                case "noOfBedRooms":
                  return{
                    ...state,
                    noOfBedRooms:payload==="any"?"any":payload==="5+"?5:payload
                  };
                  case "noOfBathroomes":
                  return{
                    ...state,
                    noOfBathroomes:payload==="any"?"any":payload==="5+"?5:payload
                                    }
                  case "noOfBeds":
                  return{
                    ...state,
                    noOfBeds:payload==="any"?"any":payload==="5+"?5:payload
                  }
                  case "propertyType":
                    return{
                      ...state,
                      propertyType:payload
                    }
                    case "Rating":
                      return{
                        ...state,
                        Rating:payload
                      }
                      case "clearall":
                        return{
                          ...state,
                          priceRange:[100,20000],
                          noOfBedRooms:"any",
                          noOfBathroomes:"any",
                          noOfBeds:"any",
                          propertyType: "House",
                          Rating:1
                        }
            default:
                return state;
    }
}