import Pricing from '@/components/Home/Pricing/Pricing'
import RecentWork from '@/components/Home/RecentWork/RecentWork'
import Review from '@/components/Home/Reviews/Review'
import React from 'react'

const MyWorkPage = () => {
  return (
    <div>
      <RecentWork/>
      <Pricing/>
      <Review/>
    </div>
  )
}

export default MyWorkPage
