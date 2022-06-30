import * as React from 'react';
import {BrowserRouter , Route, Routes} from 'react-router-dom';
import TopBar from '../components/TopBar/TopBar';
import Homepage from '../pages/Homepage/Homepage';
import Collection from '../pages/Collection/Collection';
import { styled } from '@mui/material/styles';
import LeftSide from '../components/LeftSide/LeftSide';
import Header from '../components/Header/Header';
import {Box} from '@mui/material';
const Body = styled('div')({
  display:'flex',
  width:'100%'
})
const RouterControl = () => {
  return(
    <>
      <TopBar/>
      <Body>
      <BrowserRouter>
        <LeftSide/>
        <Box sx={{width:'100%'}}>
          <Header/>   
            <Routes>
              <Route path='/' element={<Homepage/>} />
              <Route path='collection' element={<Collection/>} />
            </Routes>
        </Box>
        </BrowserRouter>
      </Body>
    </>
  );
}
export default RouterControl;