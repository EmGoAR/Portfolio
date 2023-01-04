import styles from "../style";
import Lottie, { LottiePlayer } from "lottie-react"
import Laptop from "../assets/Laptop.json"

const MainSection = () => {
  return (
    /* este es el main container - coloca flex responsivamente*/
    <section id="AboutMe" className={`flex md:flex-row flex-col ${styles.paddingY}`}>

      {/* este es el div que les pone los padding y contiene todo */}
      <div className={`flex-1 flex-col md:flex-row ${styles.flexStart} xl:px-0 sm:px-16 px-6`}>

        {/* Animacion */}
        <Lottie animationData={Laptop} loop={true} className={`flex w-full min-w-[500px] max-w-[500px] self-center`}></Lottie>
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%]  pink__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-96 bottom-20 blue__gradient" />
        {/* gradient end */}


        {/* Contenedor de texto */}
        <div className={`text-left sm:px-[4%]`}>
          {/* Título */}
          <h1 className={`flex-1 font-poppins font-semibold ss:text-[32px] text-[28px] text-white text-center sm:text-justify text-gradient`}>
            About Me
          </h1>
          {/* Texto */}
          <p className={`${styles.paragraph} text-left sm:text-start text-md leading-[20.8px] bg-gray-900 rounded-md p-4 shadow shadow-black`}>
            -I'm a native Argentine, recently arrived in Santa Catarina in search of opportunities in the Technology sector, since I was a child I've been passionate about computers, so much so that at home they told me that when I was born I came with a keyboard and mouse, I've always organized myself to work with my knowledge , be it assembling and maintaining PCs for neighbors, friends, acquaintances or gaming venues or small businesses, my command of English is sufficient to spend a lot of time talking in writing or on video calls, but I have to work on my Portuguese, which for now it's basic.
            <br /> {""}
            <br />
            My experience is based on practices in a team of enthusiastic developers where we carry out development simulations within a company, with agile methodologies and each one committed to their role and the project. I have good knowledge in website building, structure and style.
          </p>

        </div>


      </div>
    </section>


  )
}


export default MainSection