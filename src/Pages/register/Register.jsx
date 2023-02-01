import { Link } from 'react-router-dom'
import './register.scss'

const Register = () => {
  return (
    <div className="register">
    <div className="card">
    <div className="left">
    <h1>Hello India.</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
    <span>Do you have an account</span>
    <Link to="/login">
    <button>Login</button>
    </Link>
    </div>
    <div className="right">
    <h1>Register</h1>
    <form>
    <input type="text" placeholder="Username" />
    <input type="email" placeholder="Email" required/>
    <input type="Password" placeholder="Password" required/>
    <input type="text" placeholder="Name" />
    <button>Register</button>
    </form>
    </div>
    </div>
    </div>
  ) 
}

export default Register