import styles from "../style";
import Lottie, { LottiePlayer } from "lottie-react"
import ProgrammingGuy from "../assets/programmingGuy.json"

const Skills = () => {
  return (
    /* este es el main container - coloca flex responsivamente*/
    <section id="Skills" className={`flex md:flex-row flex-col ${styles.paddingY}`}>

      {/* este es el div que les pone los padding y contiene todo */}
      <div className={`flex-1 flex-col md:flex-row-reverse ${styles.flexStart} xl:px-0 sm:px-16 px-6`}>

        {/* Animacion */}
        <Lottie animationData={ProgrammingGuy} loop={true} className={`flex w-full min-w-[500px] max-w-[500px] self-center`}></Lottie>

        {/* Contenedor de texto */}
        <div className={`text-justify sm:px-[4%]`}>
          {/* Título */}
          <h1 className={`flex-1 font-poppins font-semibold ss:text-[32px] text-[28px] text-white text-center sm:text-justify text-gradient`}>
            Skills
          </h1>
          {/* Texto */}
          <p className={`${styles.paragraph} text-left sm:text-start text-md leading-[20.8px] bg-gray-900 rounded-md p-4 shadow shadow-black`}>
            RESEÑA<br/>
            Desarrollador Full Stack desde el año 2018 y actualmente, docente de la carrera Full Stack Node JS en Digital House S.A.<br/>
            <br/>
            Pro activo, con vocación a la docencia y capacidad de trabajo en equipo.<br/>
            <br/>
            JavaScript Lover 💛<br/>
            <br/>
            SKILLS<br/>
            FRONT-END<br/>
            HTML - CSS - SCSS - JavaScript - React<br/>
            <br/>
            icons front end<br/>
            API<br/>
            REST - GRAPHQL<br/>
            <br/>
            icons api<br/>
            BACK-END<br/>
            Node JS - Express JS - Typescript - MySQL - MongoDB<br/>
            <br/>
            icons back end<br/>
            DISEÑO<br/>
            Photoshop - illustrator - Figma<br/>
            <br/>
            icons design<br/>
          </p>

        </div>


      </div>
    </section>


  )
}

export default Skills