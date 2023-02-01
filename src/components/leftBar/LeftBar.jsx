import './leftBar.scss'
import Firends from '../assets/1.png';
import Groups from '../assets/2.png';
import Market from '../assets/3.png';
import Watch from '../assets/4.png';
import Memories from '../assets/5.png';
import Events from '../assets/6.png';
import Gaming from '../assets/7.png';
import Gallery from '../assets/8.png';
import Videos from '../assets/9.png';
import Messages from '../assets/10.png';
import Tutariols from '../assets/11.png';
import Courses from '../assets/12.png';
import Fund from '../assets/13.png';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';



const LeftBar = () => {

  const { currentUser } = useContext(AuthContext)
  return (
    <div className='leftBar'>
    <div className='container'>
    <div className='menu'>
    <div className='user'>
    <img src={currentUser.profilePic} alt='' />
    <span>{currentUser.name}</span>
    </div>
    <div className='item'>
    <img src={Firends} alt=''  height="25px" width="25px"/>
    <span>Friends</span>
    </div>
    <div className='item'>
    <img src={Groups} alt='' height="25px" width="25px" />
    <span>Groups</span>
    </div>
    <div className='item'>
    <img src={Market} alt='' height="25px" width="25px" />
    <span>MarketPlace</span>
    </div>
    <div className='item'>
    <img src={Watch} alt='' height="25px" width="25px" />
    <span>Watch</span>
    </div>
    <div className='item'>
    <img src={Memories} alt='' height="25px" width="25px" />
    <span>Memories</span>
    </div>
    </div>

    
    <hr />


    <div className="menu">
    <span>Your Shortcuts </span>
    
<div className='item'>
<img src={Events} alt='' height="25px" width="25px"/>
<span>Events</span>
</div>
<div className='item'>
<img src={Gaming} alt='' height="25px" width="25px"/>
<span>Gaming</span>
</div>
<div className='item'>
<img src={Gallery} alt='' height="25px" width="25px"/>
<span>Gallery</span>
</div>
<div className='item'>
<img src={Videos} alt='' height="25px" width="25px"/>
<span>Videos</span>
</div>
<div className='item'>
<img src={Messages} alt='' height="25px" width="25px"/>
<span>Messages</span>
</div>
    </div>


    <hr />
    <div className="menu">
    <span>Other</span>
    <div className='item'>
    <img src={Tutariols} alt='' height="25px" width="25px" />
    <span>Tutariols</span>
    </div>
    <div className='item'>
    <img src={Courses} alt='' height="25px" width="25px"/>
    <span>Courses</span>
    </div>
    <div className='item'>
    <img src={Fund} alt='' height="25px" width="25px"/>
    <span>Fund</span>
    </div>
    <div className='item'>
    <img src={Fund} alt='' height="25px" width="25px"/>
    <span>Fund</span>
    </div>
    <div className='item'>
    <img src={Fund} alt='' height="25px" width="25px"/>
    <span>Fund</span>
    </div>

     <div className='item'>
    <img src={Fund} alt='' height="25px" width="25px"/>
    <span>Fund</span>
    </div>
     <div className='item'>
    <img src={Fund} alt='' height="25px" width="25px"/>
    <span>Fund</span>
    </div>
    <div className='item'>
    <img src={Fund} alt='' height="25px" width="25px"/>
    <span>Fund</span>
    </div>
    <div className='item'>
    <img src={Fund} alt='' height="25px" width="25px"/>
    <span>Fund</span>
    </div>
    <div className='item'>
    <img src={Fund} alt='' height="25px" width="25px"/>
    <span>Fund</span>
    </div>
    <div className='item'>
    <img src={Fund} alt='' height="25px" width="25px"/>
    <span>Fund</span>
    </div>

     <div className='item'>
    <img src={Fund} alt='' height="25px" width="25px"/>
    <span>Fund</span>
    </div>
    

    </div>
    </div>
    </div>
  )
}

export default LeftBar

  