import React from 'react'
import Leftsidebar from './Leftsidebar'
import Container from './Container'

const Body = () => {
  return (
    <div className='flex justify-between gap-10 md:gap-0 mx-5 md:mx-20'>
      <Leftsidebar/>
      <Container/>

    </div>
  )
}

export default Body
