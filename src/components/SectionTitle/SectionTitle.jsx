

const SectionTitle = ({ heading, subheading,color="" }) => {
  return (
    <div className='my-8 flex flex-col items-center justify-center gap-4'>
      <p className='text-[#D99904]'>{subheading}</p>
      <h1 className={`text-${color} text-3xl border-t-2 border-b-2 py-2 border-[#E8E8E8]`}>{heading}</h1>
    </div>
  );
};

export default SectionTitle;
