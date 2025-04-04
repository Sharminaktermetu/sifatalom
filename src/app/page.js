import React from 'react'
import Banner from '@/components/Banner/Banner'
import Navbar from '@/components/Shared/Navber'
import Skills from '@/components/Skills/Skills'


const page = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-[#1E1E1E] py-4 ">
        <Banner/>
        <Skills/>
      </div>
    </div>
  )
}

export default page
