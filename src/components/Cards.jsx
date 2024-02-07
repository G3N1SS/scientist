import Header from "./Header";
import { Link, NavLink } from "react-router-dom";
import { Navigate } from "react-router-dom";

export default function Cards(){
    function disable(e){
        e.target.classList.add('cards__disabled')
    }

    return(
        <>
        <Header></Header>
            <ul className="cards__container">
                <li className="cards" onClick={disable}><Link to='/scientist/card' state={{config: '1'}} className="cards__text">1</Link></li>
                <li className="cards" onClick={disable}><Link to='/scientist/card' state={{config: '2'}} className="cards__text">2</Link></li>
                <li className="cards" onClick={disable}><Link to='/scientist/card' state={{config: '3'}} className="cards__text">3</Link></li>
                <li className="cards" onClick={disable}><Link to='/scientist/card' state={{config: '4'}} className="cards__text">4</Link></li>
                <li className="cards" onClick={disable}><Link to='/scientist/card' state={{config: '5'}} className="cards__text">5</Link></li>
                <li className="cards" onClick={disable}><Link to='/scientist/card' state={{config: '6'}} className="cards__text">6</Link></li>
                <li className="cards" onClick={disable}><Link to='/scientist/card' state={{config: '7'}} className="cards__text">7</Link></li>
                <li className="cards" onClick={disable}><Link to='/scientist/card' state={{config: '8'}} className="cards__text">8</Link></li>
                <li className="cards" onClick={disable}><Link to='/scientist/card' state={{config: '9'}} className="cards__text">9</Link></li>
            </ul>
        </>
    )
}