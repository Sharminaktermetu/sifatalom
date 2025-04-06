

import SectionHeader from '@/components/Reuseable/SectionHeader'
import pricing from '../../../assests/topasset/pricing.png'
import { pricingData } from '@/data/pricingData'
import PricingCard from '@/components/Reuseable/PricingCard'

const Pricing = () => {
  return (
    <div className="mt-60">
      <SectionHeader imageSrc={pricing} />

      <div className="mt-32 rounded-xl">
        <div className='grid grid-cols-3 justify-items-center'>
        
      {pricingData.map((plan, index) => (
        <PricingCard
          key={index}
        
          features={plan.features}
          buttonLabel={plan.buttonLabel}
        />
      ))}
      </div>
      </div>
     
    </div>
  )
}

export default Pricing
