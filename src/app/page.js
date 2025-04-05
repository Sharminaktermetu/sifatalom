import React from 'react'
import Banner from '@/components/Home/Banner/Banner'
import Navbar from '@/components/Shared/Navber'
import Skills from '@/components/Home/Skills/Skills'
import Services from '@/components/Home/Services/Services'
import RecentWork from '@/components/Home/RecentWork/RecentWork'
import ProfessinalWork from '@/components/Home/Professional/ProfessinalWork'
import Pricing from '@/components/Home/Pricing/Pricing'
import Faq from '@/components/Home/Faqs/Faq'
import Review  from '@/components/Home/Reviews/Review'


const page = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-[#1E1E1E] py-4 ">
        <Banner/>
        <Skills/>
        <Services/>
        <RecentWork/>
        <ProfessinalWork/>
        <Pricing/>
        <Faq/>
      <Review/>
      </div>
    </div>
  )
}

export default page
