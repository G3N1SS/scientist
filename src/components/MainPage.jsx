import Input from './Input'
import Header from './Header'

export default function MainPage(){
    return(
    <>
    <Header></Header>
      <div className="input__container">
        <Input placeholder={"1"}></Input>
        <Input placeholder={"2"}></Input>
        <Input placeholder={"3"}></Input>
        <Input placeholder={"4"}></Input>
        <Input placeholder={"5"}></Input>
        <Input placeholder={"6"}></Input>
        <Input placeholder={"7"}></Input>
      </div>
      <ol className="questions">
        <li>bla bla bla</li>
        <li>bla bla bla</li>
        <li>bla bla bla</li>
        <li>bla bla bla</li>
        <li>bla bla bla</li>
        <li>bla bla bla</li>
        <li>bla bla bla</li>
      </ol>
    </>)
}