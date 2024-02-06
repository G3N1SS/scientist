import Header from "./Header"
import { Link, useLocation } from "react-router-dom"
import Logo1 from "../images/1.jpg"
import Logo2 from "../images/2.jpg"
import Logo3 from "../images/3.jpg"
import Logo4 from "../images/4.jpg"
import Logo5 from "../images/5.png"
import Logo6 from "../images/6.jpg"
import Logo7 from "../images/7.jpeg"
import Logo8 from "../images/8.jpg"
import Logo9 from "../images/9.jpg"

export default function Card(){
    const location = useLocation();
    const { config } = location.state
    return(
    <>
    <Header></Header>
        <img src={config === '1' ? 
            Logo1 
            : 
            config === '2' ?
            Logo2
            :
            config === '3' ?
            Logo3
            :
            config === '4' ?
            Logo4
            :
            config === '5' ?
            Logo5
            :
            config === '6' ?
            Logo6
            :
            config === '7' ?
            Logo7
            :
            config === '8' ?
            Logo8
            :
            config === '9' ?
            Logo9
            : 'Ошибка'
            } alt="" className="card__img" />
        <h2 className="card__speaker">Speakear:&nbsp;
            {config === '1' ? 
            'Жиркин Максим' 
            : 
            config === '2' ?
            'Караулов Максим'
            :
            config === '3' ?
            'Саркисян Арег'
            :
            config === '4' ?
            'Щербакова Арина'
            :
            config === '5' ?
            'Жигалова Анастасия'
            :
            config === '6' ?
            'Брагина Василиса'
            :
            config === '7' ?
            'Жерелина Екатерина'
            :
            config === '8' ?
            'Саркисян Арег'
            :
            config === '9' ?
            'Максим Караулов'
            : 'Ошибка'
            }
        </h2>
        <Link to="/cards" className="card__button">Назад</Link>
    </>
    )
}