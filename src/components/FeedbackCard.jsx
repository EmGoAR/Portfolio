
const FeedbackCard = ({ content, name, title, img }) => (
  <div className='flex justify-between flex-col px-5 py-6 max-w-[290px] my-5 feedback-card bg-gray-900 rounded-md p-4 shadow shadow-black'>

    <div className='flex flex-col'>
      {/* Image, title and subtitle */}

      <img src={img} alt={name} className='w-full mr-4 rounded-md' />

      <div className='flex flex-col'>
        <h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-white'>
          {name}
        </h4>
        <p className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite'>
          {title}
        </p>
      </div>
    </div>
    <p className='font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10'>
      {content}
    </p>

  </div>
)

export default FeedbackCard
