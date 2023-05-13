import "./SearchBar.css";
import { DateSelector } from "../DateSelector/DateSelector";
export const SearchBar=()=>{
    return(
        <div className="searchBar">
            <div>
                <label>Where</label>
                <div><input placeholder="search Destination"></input></div>
            </div>
            <div>
                <label>Check In</label>
                <div> <DateSelector placeholder="cin"></DateSelector></div>
            </div>
            <div>
                <label>
                Check Out
                </label>
              <div>
              <DateSelector placeholder="cout"></DateSelector>
              </div>
            </div>
            <div>
                <label>
                No.of Guests
                </label>
               <div>
               <input placeholder="Add guests"></input>
               </div>
            </div>
            <button className="ser1 cursor" type="submit"><i class="fa fa-search"></i></button>
        </div>
    )
}