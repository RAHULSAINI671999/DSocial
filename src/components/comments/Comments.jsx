import { useContext } from "react"
import "./comments.scss"
import {AuthContext} from "../../context/authContext"

const Comments = () => {

  const { currentUser} = useContext(AuthContext)

    // Temporary
    const comments = [

        {
            id:1,
            desc:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
            name:"Rahul Saini",
            userId:1,
            profilePicture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnnu6obVk9X7KpF7ddIVK0Xukk7GK5uWC1GA&usqp=CAU"
        },
        {
            id:2,
            desc:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
            name:"Bhond",
            userId:2,
            profilePicture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnnu6obVk9X7KpF7ddIVK0Xukk7GK5uWC1GA&usqp=CAU"
        },
    ]
  return (
    <div className="comments"> 
    <div className="write">
    <img src={currentUser.profilePic} alt="" />
    <input type="text" placeholder="Write a Comment" />
    <button>Send</button>
    </div>
   {comments.map(comments=>(
    <div className="comment">
    <img src={comments.profilePicture} alt="" />
    <div className="info">
    <span>{comments.name}</span>
    <p>{comments.desc}</p>
    </div>
    <span className="date">1 hour ago</span>
    </div>
   ))}
    </div>
  )
}

export default Comments