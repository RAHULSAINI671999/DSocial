import './navbar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';


const Navbar = () => {

 const { currentUser } = useContext(AuthContext)


  return (
    <div className='navbar'>
    <div className='left'>
    <Link to='/' style={{textDecoration:'none'}}>
    <span>DSocial</span>
    </Link>
    <HomeOutlinedIcon />
    
    <GridViewOutlinedIcon />
  <div className='search'>
  <SearchOutlinedIcon />
  <input type='text' placeholder='search...' />

  </div>
    </div>
    <div className='right'>
    <PersonOutlineOutlinedIcon />
    <EmailOutlinedIcon/>
    <NotificationsNoneOutlinedIcon />
    <div className='user'>
    <img src={currentUser.profilePic}  alt=""/>
    <span>{currentUser.name}</span>
    </div>
    </div>
  
    </div>
  )
}

export default Navbar