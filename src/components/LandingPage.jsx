
const LandingPage = () => {
  return (
  /* main container - puts flex responsively */
    <section className='flex md:flex-row flex-col sm:py-16 py-6 mx-6'> {/**/}
      {/* justifies between and centers on y axis, padding and margin on x axis */}
      <div className='flex flex-1 flex-col-reverse ss:flex-row justify-between items-center w-full xl:px-0 sm:px-12 px-4'>

        {/* Title */}
        <div className='font-poppins font-semibold ss:text-left text-center'>
          <h1 className='text-[#3D84C5] ss:text-[55px] text-[42px] ss:leading-[60px] leading-[55px]'>
            Emiliano Gonzalez
          </h1>
          <h1 className='text-white ss:text-[32px] text-[22px] font-normal ss:leading-[30px] leading-[25px]'>
            Junior Front End Developer
          </h1>
        </div>

        {/* Image */}
        <div className='lg:pr-10 flex ss:self-end self-center z-10 '>
          <img src='/Foto.png' alt='' className='w-full min-w-[300px] max-w-[400px] draw-circle' />
        </div>
      </div>
    </section>

  )
}

export default LandingPage
