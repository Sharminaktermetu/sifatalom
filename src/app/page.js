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
import Footer from '@/components/Shared/Footer'
import DevelopmentSystem from '@/components/Home/RecentWork/DevepmentSystem/DevelopmentSystem'


const page = () => {
  return (
    <div className='max-w-7xl mx-auto'>
    

        <Banner/>
        <Skills/>
        <Services/>
        <RecentWork/>
        <DevelopmentSystem/>
        <ProfessinalWork/>
        <Pricing/>
        <Faq/>
        <Review/>

   
    </div>
  )
}

export default page
