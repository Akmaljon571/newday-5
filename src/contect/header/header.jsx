import './header.scss'
import log from '../img/bulb2.png'
import { Link, NavLink } from 'react-router-dom'
 

function Header() {
    return (
        <header className="header">
            <Link to='/'>
                <img src={log} alt="alt" />
            </Link>
            <nav className="nav">
                <ul className="list">
                    <li className="item">
                        <NavLink className={({isActive}) => isActive ? 'link nav-Link': 'link'} to='/'>
                           Home
                           <span className="heager_img"></span>
                        </NavLink>
                    </li>
                    <li className="item">
                        <NavLink className={({isActive}) => isActive ? 'link nav-Link': 'link'}  to='/profile'>
                           Profile
                           <span className="heager_img2"></span>
                        </NavLink>
                    </li>
                    <li className="item">
                        <NavLink className={({isActive}) => isActive ? 'link nav-Link': 'link'}  to='/post'>
                           Post
                           <span className="heager_img3"></span>
                        </NavLink>
                    </li>
                    <li className="item">
                        <NavLink className={({isActive}) => isActive ? 'link nav-Link': 'link'}  to='dcgfbn'>
                           PostSingle
                           <span className="heager_img4"></span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <button className="qosh">
               + Add New Post
            </button>
        </header>
    )
}

export default Header