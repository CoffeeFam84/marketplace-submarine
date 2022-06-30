
import {styled} from '@mui/material/styles';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import {
  Box,
  Button,
  Typography
} from  '@mui/material';
import './Banner.css';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";


const BannerItem = [
  {
    image:'./assets/img/bannerMark.png',
    title:'Okay Bears',
    content:'Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.',

  },
  {
    image:'./assets/img/bannerMark.png',
    title:'Okay Bears',
    content:'Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.',

  },
  {
    image:'./assets/img/bannerMark.png',
    title:'Okay Bears',
    content:'Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.',
  },
  {
    image:'./assets/img/bannerMark.png',
    title:'Okay Bears',
    content:'Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.',
  },
  {
    image:'./assets/img/bannerMark.png',
    title:'Okay Bears',
    content:'Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.',
  },
  
];
const SwiperStyle = styled('div')(({ theme }) => ({
  display: "grid",
  alignItems: "center",
  '.swiper-container': {
    height: '600px'
  },

  '.swiper-pagination-bullet': {
    width: '50px',
    height: '10px',

    borderRadius: '50px',
    background: '#000',
    opacity: 0.5
  },
  '.swiper-pagination-bullet-active': {
    background: '#fff',
    opacity: 1
  },
  
}));
const titleStyle  = {
  fontFamily: 'Rubik',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '48px',
  lineHeight: '57px',
  color: '#FFFFFF',
}
const contentStyle ={
  fontFamily: 'Rubik',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '19px',
  color: '#FFFFFF',
  marginTop:'11px',
  marginBottom:'12px',
  whiteSpace:'wrap',
  
}
const ExlporeButton = styled(Button)({
  background: '#111111',
  borderRadius: '5px',
  fontFamily: 'Rubik',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '16px',
  lineHeight: '19px',
  color: '#FFFFFF',
  '&:hover':{
    backgroundColor:'black'
  }
})
const Banner = () => {
  return(
    <>
      <Box>
        
        <SwiperStyle>
          <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
            >
            {
              BannerItem.map((info,index) => (
                <SwiperSlide key={index}>
                  <div style={{backgroundImage:"url('./assets/img/bannerImg.jpg')",
                              backgroundSize:'cover',
                              backgroundRepeat:'no-repeat',
                              backgroundPosition:'center center',
                              width:'100%',
                              }}>
                    <div className="banner_section">
                      <div className="banner_left">
                        <img src={info.image} alt="bannerimg"></img>
                      </div>
                      <div className='banner_right'>
                        <Link to='/Collection' style={{textDecoration:'none'}}> 
                          <Typography
                            sx={{
                              fontFamily: 'Rubik',
                              fontStyle: 'normal',
                              fontWeight: '500',
                              fontSize: '12px',
                              lineHeight: '14px',
                              color: '#7FF9E6',
                            }}>
                          FEATURED COLLECTION</Typography>
                        </Link>
                        <Typography sx={titleStyle}>{info.title}</Typography>
                        <Typography sx={contentStyle}>{info.content}</Typography>
                        <ExlporeButton variant="contained" endIcon={<ArrowRightAltIcon />}>Explore</ExlporeButton>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>  
              ))
            }
          </Swiper>
        </SwiperStyle>
      </Box>
    </>
  );
}
export default Banner;