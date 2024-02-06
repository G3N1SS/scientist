import Logo from '../images/react.svg'

export default function Header(){
    return(
        <header className="header">
            <img src={Logo} alt="" className="header__logo" />
            <a href="" className="header__link">Аудирование</a>
        </header>
    )
}