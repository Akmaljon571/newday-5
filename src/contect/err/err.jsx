import q404 from '../img/404.png'
import './err.scss'


function ERR() {
    return (
        <div className="er_h1">
          <img src={q404} className='err_h1' alt="404" />
          <h1 className='err_soz'>There is no feedback yet.</h1>
          <p className="err_p">
          Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.
          </p>
        </div>
    )
}

export default ERR