import './header.scss'
import log from '../img/bulb2.png'
import { Link } from 'react-router-dom'
 

function Header() {
    return (
        <header className="header">
            <Link to='/'>
                <img src={log} alt="alt" />
            </Link>
            <nav className="nav">
                <ul className="list">
                    <li className="item">
                        <Link className='link' to='/'>
                           Home
                           <span className="heager_img"></span>
                        </Link>
                    </li>
                    <li className="item">
                        <Link className='link' to='/profile'>
                           Profile
                           <span className="heager_img2"></span>
                        </Link>
                    </li>
                    <li className="item">
                        <Link className='link' to='/post'>
                           Post
                           <span className="heager_img3"></span>
                        </Link>
                    </li>
                    <li className="item">
                        <Link className='link' to='/post/2'>
                           PostSingle
                           <span className="heager_img4"></span>
                        </Link>
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