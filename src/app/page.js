import Body from '@/components/Body'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
<div>
  <section className='mt-10 '>
    <Header/>
    <Navbar/>
    <Body/>
    <Footer/>
  </section>
</div>
  )
}

export default page
