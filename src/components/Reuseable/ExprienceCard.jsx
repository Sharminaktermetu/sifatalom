const ExperienceCard=({ number, label }) =>{
    return (
      <div className="w-52 h-32 border border-[#6A2FC1]  flex justify-center items-center rounded-xl p-3 text-center">
        <div className="flex justify-center items-center gap-4">
          <h2 className="text-3xl font-bold">{number}</h2>
          <p>{label}</p>
        </div>
      </div>
    );
}

export default ExperienceCard;