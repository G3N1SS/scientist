import { useState } from "react"

export default function Input({placeholder}){

    const input = document.querySelector('.input')

    const [isCorrect, setIsCorrect] = useState(false)
    function IsCorrectt(e){
        if(e.value === 's') {
            e.target.classList.add('correct')
        } else{
            return
        }
    }

    return(
        <>
        <input type="text" className={`input`}  maxLength={1} placeholder={placeholder} onClick={IsCorrectt}/>
        </>
    )
}