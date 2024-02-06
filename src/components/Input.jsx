import { useState } from "react"

export default function Input({placeholder}){

    const [isCorrect, setIsCorrect] = useState(false);

    function IsCorrectt(e){
        if(e.target.value === 's') {
            e.target.classList.add('correct')
            e.target.classList.add('disabled')
            setIsCorrect(true)
        }else if(e.target.value === 'c') {
            e.target.classList.add('correct')
            e.target.classList.add('disabled')
            setIsCorrect(true)
        }else if(e.target.value === 'i') {
            e.target.classList.add('correct')
            e.target.classList.add('disabled')
            setIsCorrect(true)
        }else if(e.target.value === 'e') {
            e.target.classList.add('correct')
            e.target.classList.add('disabled')
            setIsCorrect(true)
        }else if(e.target.value === 'n') {
            e.target.classList.add('correct')
            e.target.classList.add('disabled')
            setIsCorrect(true)
        }else{
            e.target.classList.add('wrong')
            document.activeElement.blur()
        }
    }

    return(
        <>
            <input type="text" className={`input`}  maxLength={1} placeholder={placeholder} onChange={IsCorrectt} required="required" disabled={isCorrect ? 'disabled' : ''}/>
        </>
    )
}