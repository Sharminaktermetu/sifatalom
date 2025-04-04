import React from 'react'
import Banner from '@/components/Home/Banner/Banner'
import Navbar from '@/components/Shared/Navber'
import Skills from '@/components/Home/Skills/Skills'
import Services from '@/components/Home/Services/Services'


const page = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-[#1E1E1E] py-4 ">
        <Banner/>
        <Skills/>
        <Services/>
      </div>
    </div>
  )
}

export default page
