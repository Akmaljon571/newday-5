import './profile.scss';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Profile() {
    const [profile, setProfile] = useState();
    useEffect(() => {
        fetch('')
        
    }, []);
    return (
        <div className='prof'>
            <img src="https://picsum.photos/300/300" width='300' height='300' className='randomImg' alt="picsum" />
            <div className="profile">
                <h1 className="pName">
                   Alias Odio Sit
                </h1>
                <h4 className="pText">
                   Jayne_Kuhic@sydney.com
                </h4>
                <Link to='/post' className="qosh">
                  + new post
                </Link>
            </div>
        </div>
    )
}


export default Profile