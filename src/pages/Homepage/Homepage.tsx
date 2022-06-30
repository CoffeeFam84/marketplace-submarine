import * as React from 'react';
import LeftSide from '../../components/LeftSide/LeftSide';
import { useDispatch, useSelector } from 'react-redux';
import {setTime} from '../../Redux/action/timeAction';
import {
  Box,
  Typography,
  Stack,
  Button,
  ButtonGroup 
} from '@mui/material';
import {styled} from '@mui/material/styles';
import Banner from '../../components/Banner/Banner';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import CollectionCard from '../../components/CollectionCard/CollectionCard';
import './Homepage.css';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
const RightItem = styled('div')({
  background:'linear-gradient(180deg, #182D43 0%, #0B2540 100%)',
  width:'100%',
  height:'100%',
})
const MySwiperStyle = styled('div')(({ theme }) => ({
  display: "grid",
  alignItems: "center",
  paddingLeft:'25px',
  paddingRight:'25px',
  paddingBottom:'10px',
  height:'320px'
}));
const breakpoiont = {
  "200": {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  "500": {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  "768": {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  "900": {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  "1200": {
    slidesPerView: 5,
    spaceBetween: 9,
  },
  "1536": {
    slidesPerView: 6,
    spaceBetween: 9,
  },
}
const popular_collenction = {
  fontFamily: 'Rubik',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '24px',
  lineHeight: '28px',
  color: '#FFFFFF',
  paddingLeft:'10px',
}
const MySwiper = styled(Swiper)({
  display:'flex',
  justifyContent:'center',
  height:'320px'
})
const ViewAllButton  = styled(Button)({
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '19px',
    color: '#7FF9E6',
    background:'transparent',
    border:'1px solid #7FF9E6'
  })
const TimeButtonGroup = styled('div')({
  background:'#071421',
  padding:'5px',
  border:'none',
  borderRadius:'5px',
})
const TimeButton = styled(Button)({
  background:'transparent',
  color:'white',
  minWidth:'38px'
})
const CardDate = [
  {
    nftName:'Okay Bears',
    solValue:'70 SOL',
    img:'./assets/img/1.png'
  },
  {
    nftName:'DeGods',
    solValue:'339 SOL',
    img:'./assets/img/2.png'
  },
  {
    nftName:'CETS ON CRECK',
    solValue:'62 SOL',
    img:'./assets/img/3.png'
  },
  {
    nftName:'Solana Monkey Business',
    solValue:'240 SOL',
    img:'./assets/img/4.png'
  },
  {
    nftName:'SOLgods',
    solValue:'55 SOL',
    img:'./assets/img/5.png'
  },
  {
    nftName:'Degen Dojo',
    solValue:'12 SOL',
    img:'./assets/img/6.png'
  }
];
const SwiperSlideStyle = {
  backgroundColor:'transparent',
  height:'300px'
}
const Homepage = () =>{
  const dispatch = useDispatch();
  const activeState = useSelector((state:any) => state.time.activeState);
  console.log("activestate",activeState);
  return(
    <>
        {/* <LeftSide/> */}
        <RightItem>
          <Banner/>
          <Box sx={{overflow:'auto'}}>
            <Box className="display-flex">
              <Typography sx={popular_collenction}>Popular Collections</Typography>
              <Stack direction='row' spacing={1 || {sm:0} || {xs:0}} alignItems="center" sx={{flexWrap:'wrap'}}>
                  <TimeButtonGroup>
                    <TimeButton sx={{backgroundColor: activeState===0?'#1B6A97':'transparent'}} size='small' onClick={() => dispatch(setTime(0))} >24h</TimeButton>
                    <TimeButton sx={{backgroundColor: activeState===1?'#1B6A97':'transparent'}} size='small' onClick={() => dispatch(setTime(1))}>07d</TimeButton>
                    <TimeButton sx={{backgroundColor: activeState===2?'#1B6A97':'transparent'}} size='small' onClick={() => dispatch(setTime(2))}>30d</TimeButton>
                  </TimeButtonGroup>
                  <ViewAllButton endIcon={<ArrowRightAltIcon/>}>View All</ViewAllButton>
              </Stack>
            </Box>
            <MySwiperStyle>
                <MySwiper
                  slidesPerView={6}
                  spaceBetween={10}
                  
                  breakpoints={breakpoiont}
                  autoplay={{ delay: 3000 }}
                  speed={1000}
                  modules={[Autoplay, Pagination, Navigation]}
                >
                  {
                    CardDate.map((info,index) => (
                      <SwiperSlide key={index} style={SwiperSlideStyle}>
                        <CollectionCard img={info.img} nftName={info.nftName} solValue={info.solValue} />
                      </SwiperSlide>
                    ))
                  }
                </MySwiper>
            </MySwiperStyle>
          </Box>
        </RightItem>
     
    </>
  );
}
export default Homepage;
