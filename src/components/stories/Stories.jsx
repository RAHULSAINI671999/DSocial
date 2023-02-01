import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'
import './stories.scss'

const Stories = () => {
  const {currentUser} = useContext(AuthContext)


  // Temporary
  const stories = [
    {
      id:1,
      name:"Bhond",
      img:"https://pixlr.com/images/index/remove-bg.webp",
    },
    {
      id:2,
      name:"Bhond",
      img:"https://pixlr.com/images/index/remove-bg.webp",
    },
    {
      id:3,
      name:"Bhond",
      img:"https://pixlr.com/images/index/remove-bg.webp",
    },
    {
      id:4,
      name:"Rahul Saini",
      img:"https://pixlr.com/images/index/remove-bg.webp",
    },
    {
      id:5,
      name:"Bhond",
      img:"https://pixlr.com/images/index/remove-bg.webp",
    },
    {
      id:6,
      name:"Bhond",
      img:"https://pixlr.com/images/index/remove-bg.webp",
    },
  ]

  return (
    <div className='stories'>
    <div className='story'>
    <img src={currentUser.profilePic}  alt=""/>
    <span>{currentUser.name}</span>
    <button>+</button>
    </div>
    
     {stories.map(story =>(
      <div className='story' key={story.id}>
      <img src={story.img}  alt=""/>
      <span>{story.name}</span>
      </div>
  ))}
    
    </div>
  )
}

export default Stories