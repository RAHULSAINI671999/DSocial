import './post.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TextsmsIcon from '@mui/icons-material/Textsms';
import SendIcon from '@mui/icons-material/Send';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Link } from 'react-router-dom';
import posts from '../posts/Posts';
import { color } from '@mui/system';
import Comments from '../comments/Comments';
import { useState } from 'react';

const Post = ({post}) => {
    const [commentOpen, setCommentOpen] = useState(false)

    // Temporary 
    const liked = true;




  return (
    <div className='post'>
    <div className='container'>
    <div className='user'>
    <div className='userInfo'>
    <img src={post.profilePic} alt="" />
   <div className='details'>
   <Link to={`/profile/${post.userId}`} style={{textDecoration:"none", color:"inherit"}}>
   <span className='name'>{post.name}</span>
   </Link>
   <span className='date'>1 min ago</span>
   </div>

    </div>
    <MoreHorizIcon />
    </div>
    <div className='content'>
    <p>{post.desc}</p>
    <img src={post.img} alt="" />
    </div>
    <div className='info'>
    <div className='item'>
    {liked ? <FavoriteIcon /> : <FavoriteBorderIcon/>}
    15 Likes
    </div>
    <div className='item' onClick={()=>setCommentOpen(!commentOpen)}>
    <TextsmsIcon />
    15 Comments
    </div>
    <div className='item'>
    <SendIcon/>
    15 Share
    </div>
    </div>
   {commentOpen && <Comments />}
    </div>
    </div>
    
  )
}

export default Post