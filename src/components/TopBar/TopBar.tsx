import * as React from 'react';
import {styled} from '@mui/material/styles';
import {
  Container,
  Grid,
  Paper,
  Typography
} from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  display:'flex',
}));


const TopBarBox = styled('div')({
  background:'#071421',
  display:'flex',
  justifyContent:'center',
  width:'100%',
  zIndex:'1000000000000',
  position:'sticky',

})
const fontWhite = {
  fontFamily: 'Rubik',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '16px',
  color:"white",
}
const fontBlue = {
  fontFamily: 'Rubik',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '16px',
  color:"#00d2ff",
}

const TopBar = () => {
  return(
    <>
      <TopBarBox sx={{display:{xs:'none',md:'block'}}}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item >
            <Item>
              <Typography sx={fontWhite}>Total Volume: &nbsp;</Typography>
              <Typography sx={fontBlue}>2,500,000 SOL</Typography>
            </Item>
          </Grid>
          <Grid item>
            <Item>
              <Typography sx={fontWhite}>SOL/USD: &nbsp;</Typography>
              <Typography sx={fontBlue}>$100.00</Typography>
            </Item>
          </Grid>
          <Grid item>
            <Item>
              <Typography sx={fontWhite}>Solana Network: &nbsp;</Typography>
              <Typography sx={fontBlue}>2500 TPS</Typography>
            </Item>
          </Grid>
        </Grid>
      </TopBarBox>
    </>
  );
}
export default TopBar;