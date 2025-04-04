import React from 'react'
import Banner from '@/components/HomePage/Banner'
import Navbar from '@/components/Shared/Navber'


const page = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-[#1E1E1E] py-4 ">
        <Banner/>
      </div>
    </div>
  )
}

export default page
