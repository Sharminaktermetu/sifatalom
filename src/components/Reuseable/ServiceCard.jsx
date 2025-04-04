import Image from 'next/image';

const ReusableCard = ({ icon, title, description }) => {
  return (
    <div className="text-primary-content">
      <div className="card-body">
        <div className="flex items-center gap-5">
          <Image src={icon} alt={title} className="w-12 h-12 mb-4" />
          <h3 className='text-xl font-bold'>{title}</h3>
        </div>
        <p className="text-justify text-sm">{description}</p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default ReusableCard;
