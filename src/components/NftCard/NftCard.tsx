import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions ,Box,Typography} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {styled} from '@mui/styles';
const cardMediaStyle = {
  width:'100%',
  height:'100%'
}
const cardStyle = {
  maxWidth: 210,
  minHeight: 292,
  background:'#13202D',
  padding:'10px',
  marginTop:'10px',
  height:'292px'
}
const BuyButton = styled(Button)({
  background: '#1B6A97 !important',
  borderRadius: '3px !important',
  fontFamily: 'Rubik !important',
  fontStyle: 'normal !important',
  fontWeight: '500 !important',
  fontSize: '14px !important',
  lineHeight: '17px !important',
  color: '#FFFFFF !important',
  width:'50px !important'
})
export default function NftCard(props:any) {
  const { title , money , img } = props;
  return (
    <Card sx={cardStyle}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
          sx={cardMediaStyle}
        />
        
          <Typography sx={{
              fontfamily: 'Rubik',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: '15px',
              lineHeight: '21px',
              color: '#FFFFFF',
              marginTop:'10px'
            }}>{title}</Typography>
            <Box sx={{
              marginBottom:'10px',
              display:'flex',
              marginTop:'5px',
              alignItems:'center',
              marginLeft:'-2px'
              }}>
              <CheckCircleOutlineIcon sx={{color:"#7FF9E6"}}/>
              <Typography 
                sx={{
                  color:'#7FF9E6',
                  fontFamily: 'Font Awesome 5 Free',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: '14px',
                  lineHeight: '16px',
                  paddingLeft:'5px'
                }}>{title}</Typography>
          </Box>
      </CardActionArea>
      <CardActions sx={{marginTop:'-15px',justifyContent:'space-between'}}>
        <Typography sx={{
          fontFamily: 'Rubik',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '16px',
          lineHeight: '19px',
          color: '#FFFFFF',
          marginLeft:'-6px'
        }}>
          {money}  
        </Typography>
        <BuyButton>BUY</BuyButton>
      </CardActions>
    </Card>
  );
}
