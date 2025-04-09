import ReviewCard from '@/components/Reuseable/ReviewCard';
import SectionHeader from '@/components/Reuseable/SectionHeader'
import { Button } from '@/components/ui/button';
import React from 'react'

const Review = () => {
  const reviews = [
    "Excellent web development services! The team delivered a highly responsive, user-friendly website on time, exceeding our expectations. Their attention to detail and professionalism made the entire process smooth. Highly recommended for anyone looking for top-notch web solutions!",
    "Excellent web development services! The team delivered a highly responsive, user-friendly website on time, exceeding our expectations. Their attention to detail and professionalism made the entire process smooth. Highly recommended for anyone looking for top-notch web solutions!",
    "Great experience working with this team! They were professional, timely, and delivered a high-quality product. I would definitely recommend them to anyone looking for web development services.",
    "The website they built for us is amazing! It’s fast, responsive, and looks great on all devices. Their support throughout the project was excellent.",
    "Highly skilled and professional team! They delivered exactly what we needed and went above and beyond to ensure our satisfaction. I’m very impressed with their work.",
    "The developers were incredibly responsive and communicative throughout the project. They delivered a polished product that exceeded our expectations.",
    "Their expertise in web development is evident in the quality of their work. The website they created for us is both functional and visually stunning.",
    "I’m extremely satisfied with the service provided. The team was professional, efficient, and delivered a website that perfectly meets our needs."
  ];
  return (
    <div className=''>
      <SectionHeader title={'The Impact of my work'} topTitle={'Clients Testimonials'}/>

 
      <div className='rounded-xl mt-56'>
       
        <div>
        <div className='grid grid-cols-3 justify-items-center '>
        {reviews.slice(0,3).map((review, index) => (
              <ReviewCard key={index} reviewText={review} index={index} />
            ))}
        </div>

     <div className='grid grid-cols-2 justify-items-center mt-12'>
     {reviews.slice(3,5).map((review, index) => (
              <ReviewCard key={index} reviewText={review} />
            ))}
      
     </div>

     <div className='grid grid-cols-3 justify-items-center mt-12'>
     {reviews.slice(5,8).map((review, index) => (
              <ReviewCard key={index} reviewText={review} />
            ))}
        </div>
        </div>
      </div>
      <Button variant={'custom'} className='py-8 px-12'>View MORE +</Button>
    </div>
  )
}

export default Review
