// import { github } from '../assets'

const FeedbackCard = ({ img, content, title, sitelink, githublink }) => (
  <div className='flex justify-between flex-col px-5 py-6 max-w-[350px] my-5 feedback-card bg-gray-900 rounded-md p-4 shadow shadow-black'>

    <div className='flex flex-col'>
      {/* Image and Link */}
      <a href={sitelink}><img src={img} alt={title} className='w-full mr-4 rounded-md' />
      </a>

      <div className='flex flex-col'>

        {/* Title */}
        <h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-white text-center'>
          {title}
        </h4>

        {/* Github Link */}
        {/*
        <a href={githublink} className='mt-2 font-poppins font-normal text-[16px] leading-[24px] text-dimWhite'>
          <img src={github} alt='Github Link' className='w-[50px] inline mr-3' /> Github Link
        </a>
        */}
        {githublink}

      </div>
    </div>

    {/* Description */}
    <p className='font-poppins font-normal text-[18px] leading-[32.4px] text-white my-5'>
      {content}
    </p>

  </div>
)

export default FeedbackCard
