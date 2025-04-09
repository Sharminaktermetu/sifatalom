

import SectionHeader from '@/components/Reuseable/SectionHeader'
import { pricingData } from '@/data/pricingData'
import PricingCard from '@/components/Reuseable/PricingCard'

const Pricing = () => {
  return (
    <div className="mt-60">
      <SectionHeader title={'My Pricing Model'} topTitle={'PRICING TABLE'}/>

      <div className="mt-32 rounded-xl">
       <div>
       <div className='grid grid-cols-3 justify-items-center'>
        
        {pricingData.map((plan, index) => (
          <PricingCard
            key={index}
            title={plan.title}
            price={plan.price}
            noFeature={plan.noFeature}
            features={plan.features}
            buttonLabel={plan.buttonLabel}
            index={index}
          />
        ))}
        </div>
       </div>
      </div>
     
    </div>
  )
}

export default Pricing
