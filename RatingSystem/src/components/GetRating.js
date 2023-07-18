import React from 'react';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';

function GetRating({defaultVal = 0, onChange}){
  const[curVal, setVal] = React.useState(defaultVal);

  React.useEffect(() => {
    if(onChange){
      onChange(curVal);
    }
  },[curVal]);

  const clearRating = () => {  // 添加清除评分的函数
    setVal(0);
  };

  return(
    <Box display = "flex" alignItems="center" gap = {2}>
      <Box display="flex" alignItems = "center">
        <Rating
          value = {curVal}
          onChange = {(event, newValue) =>{
            if(newValue !== null){
              setVal(newValue);
            }
          }}
          emptyIcon = {<StarIcon style = {{opacity: 0.55}} />}
        />
      </Box>

      <Box display = "flex" alignItems="center" marginLeft="125px">
        <Box width = {10}>
        {curVal > 0 && <CheckCircleIcon style = {{color:'green'}}/>}
        </Box>
      </Box>

      <Box display = "flex" alignItems="center" marginLeft="5px">
        <Tooltip title="Clear Rating">
          <IconButton aria-label="clear" onClick={clearRating}>
            <ClearIcon/>
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
}

export default GetRating;