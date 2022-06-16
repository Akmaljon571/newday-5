import './profile.scss';
import Logo from '../img/bulb2.png';
import { useState, useEffect } from 'react';

function Profile() {
    const [profile, setProfile] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/2')
        .then((res) => res.json())
        .then((data) => setProfile([data]))
        .catch((err) => console.log(err))
    }, []);


    return (
        <div className='profile'>
            <img src="https://picsum.photos/300/300" className='randomImg' alt="picsum" />
            {profile.map((key)=>(
                <div className="prof" key = {key.id}>
                    <img src={Logo} width='100' height='100' className='randomLogo' alt="picsum" />
                    <h2 className="prof_name">{key.name}</h2>
                    <h2 className="prof_username">👨🏻‍💼{key.username}</h2>
                    <h2 className="prof_email">📧{key.email}</h2>
                    <div className="adress">
                        <p className="prof_adres">Manzil🏢: {key.address?.street}</p>
                        <p className="prof_yosh">Yoshi📅: {key.address?.suite}</p>
                        <p className="prof_shahar">Shahar🌆: {key.address?.city}</p>
                        <p className="prof_pass">Passsword⚔️: {key.address?.zipcode}</p>
                    </div>
                    <h2 className="prof_phone">Nomer📱:{key.phone}</h2>
                    <h2 className="prof_web">WebSite🕸:{key.website}</h2>
                    <div className="prof_company">
                        <p className="prof_Cname">Companiya Nomi🏛: {key.company?.name}</p>
                        <p className="prof_Cnomer">Companiya Ishyori🗣: {key.company?.catchPhrase}</p>
                    </div>   
                </div>
            ))}
        </div>
    )
}


export default Profile