import * as React from 'react';
import { 
    CardActionArea,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Box
   } from '@mui/material';
import {styled} from '@mui/material/styles';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
const cardMediaStyle = {
  width:'100%',
  height:'220px',
  // minHeight:'220px'
}
const CardStyle = {
  width:'100%',
  height:'330px',
  minHeight:'330px',
  backgroundColor:'#13202D',
  '&:hover':{
    backgroundColor:'#2A5075'
  },
  padding:'15px'
}
const SolVal = styled('div')({
  position:'absolute',
  right:'0px',
  bottom:'6px',
  backgroundColor:'#333333',
  fontFamily: 'Rubik',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '17px',
  color: '#FFFFFF',
  padding:'5px',
  borderRadius:'8px',
  borderTopRightRadius:'0px',
  borderBottomRightRadius:'0px'
})
export default function CollectionCard(props:any) {
  const {img,nftName,solValue} = props;
  return (
    <Card sx={CardStyle}>
      <CardActionArea sx={{position:'relative',height:'220px'}}>
        <CardMedia
          component="img"
          image={img}
          alt="green iguana"
          sx={cardMediaStyle}
        />
        <SolVal>{solValue}</SolVal>
        <CardContent sx={{textAlign:'left',padding:'0px'}}>
          <Typography sx={{
            fontfamily: 'Rubik',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '15px',
            lineHeight: '21px',
            color: '#FFFFFF',
            marginTop:'20px'
          }}>{nftName}</Typography>
          <Box sx={{
            marginBottom:'15px',
            display:'flex',
            marginTop:'10px',
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
              }}>{nftName}</Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
