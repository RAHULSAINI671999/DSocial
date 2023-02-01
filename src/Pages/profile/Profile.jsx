import "./profile.scss";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PlaceIcon from '@mui/icons-material/Place';
import Posts from "../../components/posts/Posts";

const Profile = () => {
  return (
    <div className="profile">
    <div className="images">
    <img src="https://images.unsplash.com/photo-1517677129300-07b130802f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className="cover" />
    <img src="https://images.unsplash.com/photo-1475938476802-32a7e851dad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="" className="profilePic" />
    </div>
    <div className="profileContainer">
    <div className="uInfo">
    <div className="left">
    <a href="http://facebook.com">
    <FacebookIcon  fontSize="large" />
    </a>
    <a href="http://facebook.com">
    <LinkedInIcon  fontSize="large" />
    </a>
    <a href="http://facebook.com">
    <InstagramIcon  fontSize="large" />
    </a>
    <a href="http://facebook.com">
    <PinterestIcon   fontSize="large" />
    </a>
    <a href="http://facebook.com">
    <TwitterIcon   fontSize="large" />
    </a>
    </div>
    <div className="center">
    <span>Bhond</span>
    <div className="info">
    <div className="item">
    <PlaceIcon />
    <span>INDIA</span>
    </div>
    <div className="item">
    <LanguageIcon />
    <span>Hindi</span>
    </div>
 
    </div>
    <button>Fellow</button>
    </div>
    <div className="right">
    <EmailIcon />
    <MoreVertIcon />
    </div>
    </div>
    <Posts />
    </div>

 
    
    </div>
  )
}

export default Profile