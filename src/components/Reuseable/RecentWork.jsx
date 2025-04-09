import Image from "next/image";




const ReusableImageCard = ({
  imageSrc,
  title,
  overlayImages,
  overlayBackground = '#361068',
}) => {
  return (
    <div className="w-[400px] relative mt-4 h-[450px] overflow-hidden group mx-auto dark:bg-black bg-white dark:border-0 border rounded-md dark:text-white text-black flex flex-col">
      <div className="w-full h-full">
        <Image
          src={imageSrc}
          alt={title}
          width={600}
          height={600}
          className="h-full w-full scale-105 group-hover:scale-100 object-cover transition-all duration-300 rounded-lg"
        />
      </div>
      <article
        className="p-8 w-full h-full overflow-hidden z-50 absolute top-0 flex flex-col justify-center opacity-0 group-hover:opacity-75 transition-all duration-300 text-white text-center"
        style={{ backgroundColor: overlayBackground }}
      >
        <div className="translate-y-10 group-hover:translate-y-0 transition-all duration-300 space-y-2">
          <h1 className="md:text-2xl font-semibold">{title}</h1>
         <div className='flex items-center justify-center gap-9'>
         {overlayImages.map((img, index) => (
            <Image key={index} src={img} alt={`Overlay ${index}`} className='w-14 '/>
          ))}
         </div>
        </div>
      </article>
         
    </div>
  );
};

export default ReusableImageCard;
