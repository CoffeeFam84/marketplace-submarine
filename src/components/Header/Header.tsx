import {styled} from '@mui/material/styles';
import {Stack,Button} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import './Header.css';
const BannerHeader = styled('div')({
  background:'rgba(19, 32, 45, 1)',
  padding:'30px',
  display:'flex',
  flexWrap:'wrap',
  justifyContent:'space-between',
  alignItems:'center',
})
const WalletButton = styled(Button)({
  background:'#1B6A97',
  border:'none',
  borderRadius:'50px',
  color:'white',
  paddingTop:'5px'
})
const Header = () => {
  return(
    <BannerHeader>
      <div className="example">
        <input className="searchbtn" type="text" placeholder="Search collection"></input>
        <SearchIcon sx={{color:'rgba(13, 103, 122, 1)'}}/>
      </div>
      <Stack direction="row" spacing={2} alignItems="center">
        <PersonIcon sx={{color:'white'}}/>
        <WalletButton size="small">Wallet Connect</WalletButton>
      </Stack>
    </BannerHeader>
  );
}
export default Header;
