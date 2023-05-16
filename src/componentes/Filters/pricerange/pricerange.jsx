import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import "./pricerange.css";

const value=10;
function valuetext(value) {
  return `${value}`;
}
export const Pricerange=()=>{
  return (
    <div>
        <span><h3 className='pc'>Pricerange</h3></span>
    <Box sx={{ width: "90%" }}>
      <Slider
      sx={{color:"orange"}}
      className='slider'
        getAriaLabel={() => 'Temperature range'}
        value={value}
        valueLabelDisplay="on"
        getAriaValueText={valuetext}
        min={50}
        max={25000}
        disableSwap
      />
    </Box>
    </div>
  );
}