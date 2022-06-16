import './list.scss'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function List() {
    const [user, setuser] = useState([]);
    let naviget = useNavigate()
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=1`)
        .then((re) => re.json())
        .then((data) => setuser(data))
        .catch((err)=> naviget('../err'))
    }, []);   
    
    if (isNaN(id)) {
        naviget('../about', {replace: true});    
        return
    }
    
    return (
        <ul className='listcch'>
          {user.map((key) => (
            <li key={key.id} className='lisssss'>
            <h1 className='list_name'>{key.name}</h1>
            <p className="li_p">{key.email}</p>
            <p className="li_text">{key.body}</p>
            </li>
           ))}
        </ul>
     
    )
}

export default List