
import {Typography} from '@mui/material';
import './Chart.css';

const titleS = {
  fontFamily: 'Rubik',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '12px',
  lineHeight: '14px',
  color: '#CCCCCC',
  padding:'15px'
}
const contentS = {
  fontFamily: 'Rubik',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '12px',
  lineHeight: '16px',
  color: '#7FF9E6',
  paddingLeft:'15px'
}

const CollectionChart = (props:any) => {
  const {title,content,img} = props;
  return(
    <>
      <div className='item'>
        <div >
          <Typography sx={titleS}>{title}</Typography>
          <Typography sx={contentS}>{content}</Typography>
        </div>
        <img className='chartImg' src={img} alt="img"></img>
      </div>
    </>
  );
}
export default CollectionChart;