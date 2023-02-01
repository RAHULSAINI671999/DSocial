import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'
import './login.scss'

const Login = () => {
  const {login} = useContext (AuthContext)
  

  const handleLogin = ()=>{
    login()
  }

  return (
    <div className="login">
    <div className="card">
    <div className="left">
    <h1>Hello World.</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
    <span>Don't you have an account</span>
    <Link to="/register">
    <button>Register</button>
    </Link>
    </div>
    <div className="right">
    <h1>Login</h1>
    <form>
    <input type="text" placeholder="Username" />
    <input type="Password" placeholder="Password" required />
    <button onClick={handleLogin}>Login</button>
    </form>
    </div>
    </div>
    </div>
  ) 
}

export default Login