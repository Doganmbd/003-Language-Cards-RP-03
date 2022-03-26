import React from 'react'
import "./Item.css"
import { useState } from 'react'

const Item = ({card}) => {

    const [show , setShow] = useState(true)
  return (
    <div className='card' onClick={()=> setShow(!show)}>
        {show ? (
        <div>
            <img className="card-logo" src={card.img} alt="" />
            <h3 className="card-title">{card.name}</h3>
        </div>
       ) :(
        <ul className="list">
            {card.options.map((option,index)=> {
                return(
                    <li key={index}>{option}</li>
                )
            })}
        </ul>)}
    </div>
  )
}

export default Item