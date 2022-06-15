import './main.scss'
import {Link} from 'react-router-dom'

function Main() {
   let Ux = (evt) =>{
      evt.target.classList.toggle('active')
   }
    return (
        <main className="main">
            <div className="FrontEnd">
               <h1 className="main_h1">Frontend Mentor</h1>
               <p className="main_p">Feedback Board</p>
            </div>
            <div className="Fron">
               <div onClick={Ux} className='Ux active'>HTML</div>
               <div onClick={Ux} className='Ux'>CSS</div>
               <div onClick={Ux} className='Ux'>SCSS</div>
               <div onClick={Ux} className='Ux'>JAVASCRIPT</div>
               <div onClick={Ux} className='Ux'>GIT HUP</div>
               <div onClick={Ux} className='Ux'>BOOTSTRAP</div>
            </div>
            <div className="Fron">
               <div className="Fron_div">
                  <div className="Fron_Ism">Feature</div>
                  <Link to = '/' className='Fron_link'>Profile</Link>
               </div>
               <ul className="Fron_list">
                 <li className="Fron_item">
                    <div className="Fron_span">
                        <span className="Fron_befora"></span>
                        <span className="Font_p">Post soni</span>
                    </div>
                    - <span className='Font_sana'>100</span>
                 </li>
                 <li className="Fron_item">
                    <div className="Fron_span">
                        <span className="Fron_befora1"></span>
                        <span className="Font_p">Profile</span>
                    </div>
                    - <span className='Font_sana'>10</span>
                 </li>
                 <li className="Fron_item">
                    <div className="Fron_span">
                        <span className="Fron_befora2"></span>
                        <span className="Font_p">Kontent</span>
                    </div>
                    - <span className='Font_sana'>100</span>
                 </li>
               </ul>
            </div>
        </main>
    )
}

export default Main