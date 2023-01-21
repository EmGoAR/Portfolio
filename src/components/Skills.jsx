import {
  bootstrap, css, express, figma, react, redux, sass, git, tailwind, typescript, html, javascript, next, node, vite, postgresql, trello, vsc, postman, github2/* , dart,  adobexd, sequelize, flutter, swift, jira, thunderclient, notion, */
} from '../assets/index'

import styles from '../style'
import Lottie from 'lottie-react'
// import ProgrammingGuy from '../assets/programmingGuy.json'
import Laptop from '../assets/Laptop.json'

const Skills = () => {
  return (
    /* este es el main container - coloca flex responsivamente */
    <section id='Skills' className={`flex flex-col ${styles.paddingY}`}>

      {/* este es el div que les pone los padding y contiene todo */}
      <div className={`flex-1 flex-col md:flex-row-reverse ${styles.flexStart} xl:px-0 sm:px-16 px-6 items-center`}>

        {/* Animacion */}
        <Lottie animationData={Laptop} loop className='flex w-full min-w-[500px] max-w-[500px]' />

        {/* Contenedor de texto */}
        <div className='text-justify sm:px-[4%]'>
          {/* Título */}
          <h1 className='flex-1 font-poppins font-semibold ss:text-[32px] text-[28px] text-white text-center sm:text-justify text-gradient mb-3'>
            My Skills
          </h1>
          {/* Main Container */}
          <div className='bg-gray-900 rounded-md p-4 shadow shadow-black max-w-xl'>

            <p className={`${styles.paragraph} text-left sm:text-start text-md leading-[20.8px] ml-5 `}>
              ADVANCED KNOWLEDGE<br />
              <br />
            </p>
            <div className='flex flex-row flex-wrap justify-center  gap-3 mb-5'>
              <img src={javascript} alt='JS' className='bg-gray-600 bg-opacity-25 rounded-md p-3' />
              <img src={react} alt='REACT' className='bg-gray-600 bg-opacity-25 rounded-md p-3' />
              <img src={html} alt='HTML' className='bg-gray-600 bg-opacity-25 rounded-md p-3' />
              <img src={css} alt='CSS' className='bg-gray-600 bg-opacity-25 rounded-md p-3' />
              <img src={sass} alt='SASS' className='bg-gray-600 bg-opacity-25 rounded-md p-3' />
              <img src={tailwind} alt='TailwindJS' className='bg-gray-600 bg-opacity-25 rounded-md p-3' />
              <img src={bootstrap} alt='Bootstrap' className='bg-gray-600 bg-opacity-25 rounded-md p-3' />
              <img src={vite} alt='Vite' className='bg-gray-600 bg-opacity-25 rounded-md p-3' />
              <img src={git} alt='Git' className='bg-gray-600 bg-opacity-25 rounded-md p-3' />
            </div>

            <p className={`${styles.paragraph} text-left sm:text-start text-md leading-[20.8px] ml-5 `}>
              MEDIUM KNOWLEDGE
              <br />
            </p>
            <div className='flex flex-row flex-wrap justify-center p-3 gap-3 mb-5'>
              <img src={node} alt='NodeJS' className='bg-gray-600 bg-opacity-25 rounded-md p-3' />
              <img src={express} alt='ExpressJS' className='bg-gray-600 bg-opacity-25 rounded-md p-3' />
              <img src={typescript} alt='Typescript' className='bg-gray-600 bg-opacity-25 rounded-md p-3 w-[90px]' />
              <img src={next} alt='NextJS' className='bg-gray-600 bg-opacity-25 rounded-md p-3' />
            </div>

            <p className={`${styles.paragraph} text-left sm:text-start text-md leading-[20.8px] ml-5 `}>
              BASIC KNOWLEDGE
              <br />
            </p>
            <div className='flex flex-row flex-wrap justify-center p-3 gap-3'>
              <img src={postgresql} alt='poSQL' className='bg-gray-600 bg-opacity-25 rounded-md p-3' />
              <img src={redux} alt='Redux' className='bg-gray-600 bg-opacity-25 rounded-md p-3' />
            </div>
            <p className={`${styles.paragraph} text-left sm:text-start text-md leading-[20.8px] ml-5 `}>
              MY WORK TOOLS
              <br />
            </p>
            <div className='flex flex-row flex-wrap justify-center p-3 gap-3'>
              <img src={vsc} alt='VSCode' className='bg-gray-600 bg-opacity-25 rounded-md p-3 w-[88px]' />
              <img src={github2} alt='Figma' className='bg-gray-600 bg-opacity-25 rounded-md p-3 w-[88px]' />
              <img src={postman} alt='Postman' className='bg-gray-600 bg-opacity-25 rounded-md p-3 w-[88px]' />
              <img src={node} alt='NodeJS' className='bg-gray-600 bg-opacity-25 rounded-md p-3' />
            </div>
            <div className='flex flex-row flex-wrap justify-center pb-3 gap-3'>
              <img src={trello} alt='Trello' className='bg-gray-600 bg-opacity-25 rounded-md p-3 w-[88px]' />
              <img src={figma} alt='Figma' className='bg-gray-600 bg-opacity-25 rounded-md p-3 w-[88px]' />
            </div>
          </div>
        </div>

      </div>
    </section>

  )
}

export default Skills
