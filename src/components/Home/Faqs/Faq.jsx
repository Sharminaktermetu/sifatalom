import SectionHeader from '@/components/Reuseable/SectionHeader'
import React from 'react'
import faq from "../../../assests/topasset/faq.png"


const Faq = () => {
  return (
    <div className='bg-[#1E1E1E] py-4 mt-40'>   
      <SectionHeader imageSrc={faq}/>


<div className='max-w-7xl mx-auto px-4 py-8'>
<div className="collapse collapse-plus text-primary-content bg-[#6A2FC1] mb-4">
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title font-semibold">How do I create an account?</div>
  <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
</div>
<div className="collapse collapse-plus text-primary-content bg-[#6A2FC1] mb-4 ">
  <input type="radio" name="my-accordion-3"  />
  <div className="collapse-title font-semibold">How do I create an account?</div>
  <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
</div>
<div className="collapse collapse-plus text-primary-content bg-[#6A2FC1]  ">
  <input type="radio" name="my-accordion-3"  />
  <div className="collapse-title font-semibold">How do I create an account?</div>
  <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
</div>

</div>






      
    </div>
  )
}

export default Faq
