import * as React from 'react';

import { styled, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import {
  Box,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

import './LeftSide.css';
import { Link , Outlet } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import { setMenuList} from '../../Redux/action/menuListAction';

const drawerWidth = 190;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  backgroundColor:'#13202D'
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  backgroundColor:'#13202D'
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
 
);
const menuList = [
  {
    item:'Home',
    icon:'./assets/img/Home_icon.png',
    url:'/',
  },
  {
    item:'Collections',
    icon:'./assets/img/Collections_icon.png',
    url:'/Collection',
  },
  {
    item:'Communify',
    icon:'./assets/img/Community_icon.png',
    url:'/Communify',
  },
  {
    item:'More',
    icon:'./assets/img/More_icon.png',
    url:'More',
  }
]

const listItemStyle = {
 
  display:'block',
  '&:hover':{
    backgroundColor:'rgba(9, 43, 62, 1)'
  }
}
const activeListItemStyle = {
  backgroundColor:'rgba(9, 43, 62, 1)'
}
export default function LeftSide() {
  // const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
    localStorage.setItem('SIDE_BAR_STATUS','1');
    console.log(localStorage.getItem('SIDE_BAR_STATUS'));
  };
  const handleDrawerClose = () => {
    setOpen(false);
    localStorage.setItem('SIDE_BAR_STATUS','0');
    console.log(localStorage.getItem('SIDE_BAR_STATUS'));
  };
  const dispatch = useDispatch();
  const menuState = useSelector((menuList:any) => menuList.menu.index);
  // const handleIndex = (id:Number) => {
  //   dispatch(setMenuList(id));s
  //   console.log('redx',menuState);
  // }
  console.log("redux",menuState);
  return (
    
      <Drawer variant="permanent" open={open}>
        <Divider />
        <ListItem sx={{pt:8,pb:3}}>
            <ListItemIcon 
              sx={{
              minWidth: 0,
              marginLeft:'-10px',
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
              }}><img src='./assets/img/logo_sm.png' alt="logo"></img>
            </ListItemIcon>
            <ListItemText 
              primary="SUBMAINE"
              sx={{ opacity: open ? 1 : 0 ,
                color:'#FFFFFF',
                fontFamily: 'Rubik',
                fontStyle: 'normal',
                fontWeight: '900',
                fontSize: '25px',
                lineHeight: '19px',}}
            ></ListItemText>
          </ListItem>

        <List>
          {menuList.map((info, index) => (
            <Link key={info.item} to ={info.url} style={{textDecoration: 'none'}}>
             <ListItem key={info.item} disablePadding sx={menuState === index ? activeListItemStyle:listItemStyle}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                  onClick={()=>dispatch(setMenuList(index))}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <img src={info.icon} alt="icon"></img>
                  </ListItemIcon>
                  <ListItemText primary={info.item} 
                    sx={{ opacity: open ? 1 : 0 ,
                          color:'#FFFFFF',
                          fontFamily: 'Rubik',
                          fontStyle: 'normal',
                          fontWeight: '400',
                          fontSize: '16px',
                          lineHeight: '19px',
                    }} />
                  </ListItemButton>
              </ListItem>
            </Link>
          ))}
          <Outlet />
        </List>
        
        <Box sx={{
           display:'flex',
           justifyContent:'flex-end',
           alignContent:'center',
           height:'50vh'
            
          }}>
          {/* {
            open === true ? <IconButton onClick={handleDrawerClose}><img src='./assets/img/left_angle.png'></img></IconButton>
            :
            <IconButton 
            onClick={handleDrawerOpen}><img src='./assets/img/right_angle.png'></img></IconButton>
          } */}
          <IconButton className="icon_button" onClick={open ? handleDrawerClose:handleDrawerOpen}>
            <img src={`./assets/img/${open ? 'left' : 'right'}_angle.png`} alt="arrow"></img>
          </IconButton>
        </Box>
        
        <Box sx={{
            position: "absolute",
            bottom: '14px',
            width: "100%",
            borderTop: "1px solid #0C4258",
            textAlign: "center",
            margin: '30px 0',
            paddingTop: '30px',
            img: {
              display: !open ? "block" : "",
              margin: !open ? "5px auto" : '0 10px',
              paddingBottom: "20px"
            }
        }}>
            <img src="/assets/img/twitter_icon.png" alt="" />
            <img src="/assets/img/discord_icon.png" alt="" />
        </Box>
      </Drawer>
   
  );
}
