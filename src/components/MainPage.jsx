import Input from './Input'
import Header from './Header'
import { Route, Routes, Link, useNavigate, Navigate, RouterProvider } from 'react-router-dom';
import { useState } from 'react';

export default function MainPage(){
  const [isVisible, setIsVisible] = useState(false);

    return(
    <>
    <Header></Header>
        <form className='input__container'>
          <Input placeholder={"1"}></Input>
          <Input placeholder={"2"}></Input>
          <Input placeholder={"3"}></Input>
          <Input placeholder={"4"}></Input>
          <Input placeholder={"5"}></Input>
          <Input placeholder={"6"}></Input>
          <Input placeholder={"7"}></Input>
          <Link to='/scientist/cards' className='confirm'>✓</Link>
        </form>
      <ol className={`questions`}>
        <li className='a'>A course or area of study</li>
        <li className='b'>The branch that studies matter, its composition, properties and behavior</li>
        <li className='c'>A person's ability to think and understand things</li>
        <li className='d'>It is direct observation under controlled conditions</li>
        <li className='e'>It is a submatomic particle which has a neutral charge</li>
        <li className='f'>It is often reddish metal that is used in wires</li>
        <li className='g'>It is the flow of electrical charge through a conductor</li>
      </ol>
    </>)
}