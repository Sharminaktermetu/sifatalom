import SectionHeader from '@/components/Reuseable/SectionHeader'
import service from "../../../assests/topasset/service.png";
import ReusableCard from '@/components/Reuseable/ServiceCard';
import { serviceData } from '@/data/services';
const Services = () => {
  return (
    <div className='mt-96'>
      <SectionHeader imageSrc={service}/>
      <div className="w-7xl mx-auto mt-32  flex justify-center items-center rounded-xl">
          <div className="grid grid-cols-3 justify-items-center">
          {serviceData.map((item, index) => (
        <ReusableCard
          key={index}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}
          
          </div>
        </div>
    </div>
  )
}

export default Services
