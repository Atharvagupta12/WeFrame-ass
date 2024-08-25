import React from 'react'
import Leftsidebar from './Leftsidebar'
import Container from './Container'

const Body = () => {
  return (
    <div className='flex justify-between mx-20'>
      <Leftsidebar/>
      <Container/>

    </div>
  )
}

export default Body
