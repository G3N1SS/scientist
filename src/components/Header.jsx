import { Link } from 'react-router-dom'
import Logo from '../images/react.svg'

export default function Header(){
    return(
        <header className="header">
            <Link to="/scientist"><img src={Logo} alt="" className="header__logo" /></Link>
            <a href="https://test-english.com/listening/b1/biography-albert-einstein-listening-test/" className="header__link">Аудирование</a>
        </header>
    )
}