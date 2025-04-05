import Faq from '@/components/Home/Faqs/Faq'
import Pricing from '@/components/Home/Pricing/Pricing'
import DevelopmentSystem from '@/components/Home/RecentWork/DevepmentSystem/DevelopmentSystem'
import RecentWork from '@/components/Home/RecentWork/RecentWork'
import Review from '@/components/Home/Reviews/Review'
import Skills from '@/components/Home/Skills/Skills'
import React from 'react'

const AboutPage = () => {
  return (
    <div>
      <Skills/>
      <DevelopmentSystem/>
      <RecentWork/>
      <Pricing/>
      <Faq/>
      <Review/>
    </div>
  )
 }
export default AboutPage
