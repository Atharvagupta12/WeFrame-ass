import React from 'react'
import Card from './Card'
import Cards1 from './Cards1'
import Cards2 from './Cards2'

const Container = () => {
  return (
    <div className='flex flex-col gap-4 w-full md:w-auto justify-center'>
      <Card/>
      <Cards1/>
      <Cards2/>
    </div>
  )
}

export default Container
