import * as React from 'react';
import {Button} from '@mui/material';
import {styled} from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
const FilterButton = styled(Button)({
  background: '#2A5075',
  borderRadius: '5px',
  fontFamily: 'Rubik',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '12px',
  lineHeight: '19px',
  color: '#FFFFFF',
  marginRight:'5px',
  width:'110px',
  marginBottom:'5px'

})
const Filter = (props:any) => {
  const {filterName} = props;
  return(
    <FilterButton size='small' endIcon={<CloseIcon sx={{color:'white'}}/>}>{filterName}</FilterButton>
  );
}

export default Filter;