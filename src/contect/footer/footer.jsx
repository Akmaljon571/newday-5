import './footer.scss'
import { Link } from 'react-router-dom'
 

function Home() {
    return (
        <div className="Footer">

            <div className="login-box">
            <h2>Login</h2>
            <form>
              <div className="user-box">
                <input type="text" name="" required="" />
                <label>Username</label>
              </div>
              <div className="user-box">
                <input type="password" name="" required="" />
                <label>Password</label>
              </div>
              <div className="user-box">
                <input type="email" name="" required="" />
                <label>Email</label>
              </div>
              <Link to="Profile">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
              </Link>
            </form>
          </div>
        </div>
    )
}

export default Home