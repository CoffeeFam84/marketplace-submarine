import * as React from 'react';
import {useState , useEffect} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {Box} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {FilterFormat, FilterSet} from '../../Redux/action/filterAction';
import { useDispatch} from 'react-redux';
const accordianTitle = {
  fontFamily: 'Rubik',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '17px',
  color: '#CCCCCC',
}
interface ColorType{
  colorVal:String,
  floor:String,
}
const ColorData:ColorType[] = [
  {
    colorVal:'Green (47)',
    floor:'Floor: 2.65'
  },
  {
    colorVal:'Purple (47)',
    floor:'Floor: 2.65'
  },
  {
    colorVal:'Red (43)',
    floor:'Floor: 2.65'
  },
  {
    colorVal:'Yellow (38)',
    floor:'Floor: 2.65'
  },
  {
    colorVal:'Cave (21)',
    floor:'Floor: 2.65'
  }
]
const children = {
  display:'flex',
  justifyContent:'space-between',
  alignItems:'center',
  background:'#071421',
  width:'100%',
  cursor:'pointer',
  borderRadius:'15px',
  '&:hover':{
    background:'#35697E'
  }
}
const childFontStyle = {
  fontFamily: 'Rubik',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '17px',
  color: '#CCCCCC',
  padding:'15px'
}
interface filterType {
  item:String,
}
const filterItem:filterType[] = [
  {
    item:'Background'
  },
  {
    item:'Body'
  },
  {
    item:'Faction'
  },
  {
    item:'Head'
  },
  {
    item:'Left Shoulder'
  },
  {
    item:'Right Shoulder'
  }
];
export default function Accordian(props:any) {
  
  const [tempFilterList,setTempFilterList] = useState<any>([]);
  const dispatch = useDispatch();
  // const filterList:String[] = useSelector((list:any) => list.filter.filterList);
  // const clearFlag = useSelector((state:any) => state.filter.clearFlag);
  const { flag, setFlag } = props;
  useEffect(()=>{
    props.setFlag(false)
    setTempFilterList([])
  },[props.flag])
  useEffect(()=>{
    let removeTemp = tempFilterList;
    removeTemp.splice(props.removeList,1);
    setTempFilterList(removeTemp)
  },[props.removeList])
  const addFilterList = (text:any) => {
    dispatch(FilterFormat(false));
    let temp = tempFilterList;
    tempFilterList.push(text);
    setTempFilterList([...temp])
    dispatch(FilterSet(tempFilterList));
    console.log("tempFilterList",tempFilterList);
  }

  return (
    <div style={{width:'100%',paddingRight:'10px'}}>
      {
        filterItem.map((item,index) => (
          <Accordion key={index} sx={{marginTop:'10px',marginBottom:'10px',background:'transparent',borderRadius:'15px'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{color:'white'}}/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{background:'#0B354D',borderRadius:'15px'}}
            >
              <Typography sx={accordianTitle}>{item.item}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{background:'#071421',padding:'0px',borderRadius:'15px'}}>
              {
                ColorData.map((info,index) => (
                  <Box key={index} onClick={() => addFilterList(info.colorVal)} sx={children}>
                    <Typography sx={childFontStyle}>{info.colorVal}</Typography>
                    <Typography sx={childFontStyle}>{info.floor}</Typography>
                  </Box>
                ))
              }
            </AccordionDetails>
          </Accordion>
        ))
      }
    </div>
  );
}

