import SectionHeader from '@/components/Reuseable/SectionHeader'
import service from "../../../assests/topasset/service.png";
import ReusableCard from '@/components/Reuseable/ServiceCard';
import { serviceData } from '@/data/services';
const Services = () => {
  return (
    <div>
      <SectionHeader title={'I PROVIDE'} topTitle={'Services'}/>
      <div className="mt-32  flex justify-center items-center rounded-xl">
          <div className="grid grid-cols-3 justify-items-center">
          {serviceData.map((item, index) => (
        <ReusableCard
          key={index}
          icon={item.icon}
          title={item.title}
          description={item.description}
          index={index}
        />
      ))}
          <div className="text-primary-content">
                 <div className='card-body h-60 flex items-center justify-center' >
                   <div className=" gap-5">
                  
                           <h3 className='text-xl font-bold'>COMING NEW SERVICE.......</h3>
                         </div>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Services
