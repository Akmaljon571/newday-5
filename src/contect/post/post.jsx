import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './post.scss'
import p from '../img/P.png'
import path from '../img/Path.png'
import pa from '../img/4042.png'

function Post() {
    const [fetchi, setfetchi] = useState([]);
    const [ozgar, setozgar] = useState([]);
    const [sana, setsana] = useState(Math.random());
    const [input, setinput] = useState(JSON.parse(window.localStorage.getItem('stat')) || []);
    let modal = document.getElementById('modal')
    let modal1 = document.getElementById('modalcha')
    let omen = document.getElementById('comentariye')
    let shef = document.getElementById('shef')
    
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((re) => re.json())
        .then((data) => (setfetchi(data) && setozgar(data.slice(0 ,10))))
    }, []);  

    let coment = (evt)=>{
        modal.classList = 'modal'
        modal1.classList = 'span'
        omen.classList = 'list-group list-group-numbered modal cament';
    }

    let save = (evt) => {
        evt.preventDefault()
        if (shef.value <= 1) return
        setsana(sana + 1)
        
       let newObj = {
        id: sana,
        text: shef.value,
        isDone : false,
       }

       setinput([newObj, ...input])
       window.localStorage.setItem('stat', JSON.stringify(input))
       shef.value = ''
    }
    window.localStorage.setItem('stat', JSON.stringify(input))

    let none = () =>{
        modal1.classList = 'none'
        modal.classList = 'none'
        omen.classList = 'none'
    }
    
    let postlar = () =>{
        modal1.classList = 'span'
        omen.classList = 'list-group list-group-numbered modal cament'
    }

    let btn1 = () =>{
        setozgar(fetchi.slice(0, 10))
    }

    let btn2 = () =>{
        setozgar(fetchi.slice(10, 20))
    }
    let btn3 = () =>{
        setozgar(fetchi.slice(20, 30))
    }
    let btn4 = () =>{
        setozgar(fetchi.slice(30, 40))
    }
    let btn5 = () =>{
        setozgar(fetchi.slice(40, 50))
    }
    let btn6 = () =>{
        setozgar(fetchi.slice(50, 60))
    }
    let btn7 = () =>{
        setozgar(fetchi.slice(60, 70))
    }
    let btn8 = () =>{
        setozgar(fetchi.slice(70, 80))
    }
    let btn9 = () =>{
        setozgar(fetchi.slice(80, 90))
    }
    let btn10 = () =>{
        setozgar(fetchi.slice(90, 100))
    }
  
    

    return (
        <>
       <ul className="ul">
         {ozgar.map((to) =>(
            <li className="li" key={to.id}>
                    <span className='li_span'><img src={p} width='8' className='li_q' height='4' alt="P" /> {to.id}</span>
                    <div className="li_otas">
                <Link to={`/post/${to.userId}`} className = 'li_list'>
                        <h2 className='li_h2'>{to.title}</h2>
                        <p className="li_p">
                        {to.body}
                        </p>
                </Link>
                        <button onClick={postlar} className="li_nmadur">
                            Postlarni oqish
                        </button>
                    </div>
                    <span className="coment" onClick={coment}>
                        <img src={path} alt="path" />
                        <span className="li_sana">{Math.floor(Math.random() * 100 )}</span>
                    </span>
        </li>
         ))}
       </ul>
       <div className="btn-group me-2 centercha" role="group" aria-label="First group">
            <button onClick={btn1} type="button" className="btn btn-primary">1</button>
            <button onClick={btn2} type="button" className="btn btn-primary">2</button>
            <button onClick={btn3} type="button" className="btn btn-primary">3</button>
            <button onClick={btn4} type="button" className="btn btn-primary">4</button>
            <button onClick={btn5} type="button" className="btn btn-primary">5</button>
            <button onClick={btn6} type="button" className="btn btn-primary">6</button>
            <button onClick={btn7} type="button" className="btn btn-primary">7</button>
            <button onClick={btn8} type="button" className="btn btn-primary">8</button>
            <button onClick={btn9} type="button" className="btn btn-primary">9</button>
            <button onClick={btn10} type="button" className="btn btn-primary">10</button>
        </div>
       <span className='none' id='modalcha'></span>
       <form onSubmit={save} className="none" id='modal'>
                    <div className="modal-header">
                        <h5 className="modal-title">Comment</h5>
                        <button type="button" onClick={none} className="btn-close"></button>
                    </div>
                    <div className="modal-body">
                      <textarea id='shef' className='form-control bigControl' placeholder='text kirit' type="text" />
                      
                      <span className="inputSana">199</span>
                    </div>
                    <div className="modal-footer">
                    <button type="button" onClick={none} className="btn btn-secondary">Close</button>
                    <button type="submit" className="btn btn-primary" onClick={save} >Save changes</button>
                    </div>
        </form>
            <ol id='comentariye' className="none">
            <button type="button" onClick={none} className="btn-close closss"></button>
                {input.length > 0 ? input.map((val) => (
                   <li key={val.id} className="list-group-item d-flex justify-content-between align-items-start">
                   <div className="ms-2 me-auto">
                     <div className="fw-bold">{val.text}</div>
                   </div>
                   <button className="rounded-pill">
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-heart-fill" viewBox="0 0 16 16">
                       <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                       </svg> 
                   </button>
              </li>
                 )) : <img className='l0' src={pa} alt="" /> }
            </ol>     
   

        </>
    )
}

export default Post