import Post from '../post/Post'
import './posts.scss'

const Posts = () => {



  // Temporary
  const posts = [
    {
      id:1,
      userId:1,
      name:"Bhond",
      profilePic:"https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      img:"https://images.unsplash.com/photo-1602060306372-bdc3be71623a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      id:2,
      userId:2,
      name:"Bhond",
      profilePic:"https://images.unsplash.com/photo-1599457382197-820d65b8bbdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      
    },

  ]
  return (
    <div className='posts'>
    
     {posts.map(post=>(
      <Post post={post} key={post.id} />
     ))}
    </div>
  )
}

export default Posts