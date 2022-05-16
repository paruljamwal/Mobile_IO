import React from 'react'
import './manufact.css'
export const Manufacturers = ({name}) => {
 const square={
      listStyle:"square"
  }
   const disc={
       listStyle:"disc"
   }
  
    return (
    <>
      {/* <h1>Mobile Manufactures</h1> */}
      <ul>
        <li>{name}</li>
          {/* <li style={square}>Samsung</li>
          <li className='square'>HTC</li>
          <li style={disc}>Micromax</li>
          <li style={{listStyle:"circle"}}>Apple</li> */}
      </ul>
    </>
  )
}
