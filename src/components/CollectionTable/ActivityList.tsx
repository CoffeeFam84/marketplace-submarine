import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Typography} from '@mui/material';
import {styled} from '@mui/material/styles';
import './ActivityList.css';
function createData(
  name: string,
  id: string,
  type: string,
  time: string,
  amount: number,
  address:string,
) {
  return { name, id, type, time, amount ,address};
}

const rows = [
  createData('Decimus #356', '26JM5 ... D3W', 'Sale', '24 minutes ago', 4.29, 'DAYJT ... kJ1'),
  createData('Decimus #356', '26JM5 ... D3W', 'Sale', '24 minutes ago', 4.29, 'DAYJT ... kJ1'),
  createData('Decimus #356', '26JM5 ... D3W', 'Sale', '24 minutes ago', 4.29, 'DAYJT ... kJ1'),
  createData('Decimus #356', '26JM5 ... D3W', 'Sale', '24 minutes ago', 4.29, 'DAYJT ... kJ1'),
  createData('Decimus #356', '26JM5 ... D3W', 'Sale', '24 minutes ago', 4.29, 'DAYJT ... kJ1'),
  createData('Decimus #356', '26JM5 ... D3W', 'Sale', '24 minutes ago', 4.29, 'DAYJT ... kJ1'),
];
// const tableHeadStyle = {
//   background:'#0C4258',
//   borderRadius:'30px !important'
// }
const tableHeaderCellStyle = {
  backgroundColor:'#0C4258',
  border:'10px solid #182D43',
  borderRadius:'8px',
  color:'#00D2FF',
  fontFamily: 'Rubik',
  fontSize:'14px',
  fontWegiht:'600',
  lineHeight:'10px',
}
const underlineStyle = {
    borderBottom: '1px solid #0C4258',
}
const tableBodyCellfontStyle = {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '17px',
    color: '#FFFFFF',
}
const tableBodyTypeCellStyle = {
  fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '17px',
    color: '#7FF9E6',
    borderBottom: '1px solid #0C4258',
}

export default function ActiviyList() {
  return (
    <TableContainer sx={{marginTop:'50px'}}>
      <Table sx={{minWidth:650,borderCollapse:'separate',borderSpacing:'2px'}} aria-label="simple table">
        <TableHead>
          <TableRow sx={{width:'100%', '&:last-child td, &:last-child th': { border: 0 }}}>
            <TableCell sx={tableHeaderCellStyle} >NAME</TableCell>
            <TableCell sx={tableHeaderCellStyle} align="left">TXN ID</TableCell>
            <TableCell sx={tableHeaderCellStyle} align="left">TYPE</TableCell>
            <TableCell sx={tableHeaderCellStyle} align="left">TIME</TableCell>
            <TableCell sx={tableHeaderCellStyle} align="left">AMOUNT</TableCell>
            <TableCell sx={tableHeaderCellStyle} align="left">MINT ADDRESS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{'&:last-child td, &:last-child th': { border: 0 }}}
            >
              <TableCell component="th" scope="row" sx={underlineStyle}>
                <div className='cell'>
                  <img src='./assets/img/nft_sm.png'></img>
                  <Typography component='div' sx={tableBodyCellfontStyle}>{row.name}</Typography>
                </div>
              </TableCell>
              <TableCell align="left" sx={underlineStyle}>
                <div className='cell'>
                  <Typography component='div' sx={tableBodyCellfontStyle}>{row.id}</Typography>
                  <img src='./assets/img/link_icon.png'></img>
                </div>
              </TableCell>
              <TableCell align="left" sx={tableBodyTypeCellStyle}>{row.type}</TableCell>
              <TableCell align="left" sx={underlineStyle}>
                <Typography component='div' sx={tableBodyCellfontStyle}>{row.time}</Typography>
              </TableCell>
              <TableCell align="left" sx={underlineStyle}>
                <Typography component='div' sx={tableBodyCellfontStyle}>{row.amount}&nbsp;◎</Typography>
              </TableCell>
              <TableCell align="left" sx={underlineStyle}>
                <Typography component='div' sx={tableBodyCellfontStyle}>{row.address}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
