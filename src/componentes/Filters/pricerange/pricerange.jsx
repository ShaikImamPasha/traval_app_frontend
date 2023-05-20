import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import "./pricerange.css";
import { useFiltercontest } from '../../../contest';
const minDifference=500;
function valuetext(value) {
  return `${value}`;
}
export const Pricerange=()=>{
  const {priceRange,dispatchfilter}=useFiltercontest();
  const changeFiltervalue=(event,newValue,activeThumb)=>{
        if(!Array.isArray(newValue)){
          return;
        }
          if(activeThumb===0){
            dispatchfilter({
              type:"MINIMUM_PRICE",
              payload:{
                newValue,minDifference,priceRange
              }
            })
          }
          else{
            dispatchfilter({
              type:"MAXIMUM_PRICE",
              payload:{
                newValue,minDifference,priceRange
              }
            })
          }
  }
  return (
    <div>
        <span><h3 className='pc'>Pricerange</h3></span>
    <Box sx={{ width: "90%" }}>
      <Slider
      sx={{color:"orange"}}
      className='slider'
        getAriaLabel={() => 'Temperature range'}
        value={priceRange}
        valueLabelDisplay="on"
        getAriaValueText={valuetext}
        min={50}
        max={25000}
        onChange={changeFiltervalue}
        disableSwap
      />
    </Box>
    </div>
  );
}