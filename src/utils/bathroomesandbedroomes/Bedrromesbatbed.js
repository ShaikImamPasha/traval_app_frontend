export const Bedrromesbatbed=(filteredHotelsByPrice,noOfBedRooms, noOfBathroomes,
    noOfBeds)=>{
        if( null===noOfBathroomes ||  null===noOfBedRooms || null===noOfBeds) return filteredHotelsByPrice;
        if( "any"===noOfBathroomes ||  "any"===noOfBedRooms || "any"===noOfBeds) return filteredHotelsByPrice;
    const filteredHotels = filteredHotelsByPrice.filter(
        ({numberOfBathrooms,numBerOfBedrooms,numberOfBeds}) =>  numberOfBathrooms ===noOfBathroomes || 
        numBerOfBedrooms===noOfBedRooms || numberOfBeds===noOfBeds
      );
      return filteredHotels;
}   