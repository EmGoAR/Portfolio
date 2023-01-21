import { useState } from 'react'
import logo from '../assets/Logo.png'
import logoclosed from '../assets/LogoClosed.png'
import { navLinks, socialMedia } from '../constants/Index'
import Typewriter from 'typewriter-effect'
import esflag from '../assets/es.svg'
import brflag from '../assets/br.svg'
import gbflag from '../assets/gb.svg'

const Navbar = () => {
  const [active, setActive] = useState('Home')
  const [toggle, setToggle] = useState(false)

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>

      {/* ESTE ES EL LOGO MIO
      <img src='/E.png' alt='E' className='w-10 h10 mr-2 EmgoAR-Logo' />
      */}

      <div className=' flex flex-1 justify-start items-center '>
        <img
          src={toggle ? logoclosed : logo}
          alt='menu'
          className='w-10 object-contain mr-2 cursor-pointer'
          onClick={() => setToggle(!toggle)}
        />

        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('<span style="color: white; font-family: Poppins, sans-serif; text-shadow: 0 0 15px #3D84C5;">← Menu button :)</span>')
              .deleteAll()
              .typeString('<span style="color: white; font-family: Poppins, sans-serif; text-shadow: 0 0 15px #3D84C5;">EmGo.dev</span>')
              .start()
          }}
        />

        {/* DIS IS DA MENU */}
        <div
          className={`${!toggle ? 'hidden' : 'flex'} flex-1 xs:flex-row flex-col justify-between gap-5 p-6 bg-gray-900 bg-opacity-70 backdrop-blur-lg rounded-md z-[11] logo-menu absolute top-[4rem] mx-4 my-2 xsw-full :w-[185px] max-w-[80%] xs:max-w-[385px]`}
        >
          {/* List Section */}
          <ul className='list-none flex justify-around px-2 items-start flex-1 flex-col right-auto bg-gray-600 bg-opacity-25 rounded-md'>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={` font-poppins font-medium cursor-pointer text-[16px] py-2 xs:py-0 ${active === nav.title ? 'text-white' : 'text-dimWhite'
                  } ${index === navLinks.length - 1 ? 'mb-0' : 'mb-0'}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

          {/* Curriculum Section */}
          <div className='bg-gray-600 bg-opacity-25 rounded-md block text-white font-medium'>

            <p className='px-2 pt-2'>Resumes:</p>
            <a
              href='https://drive.google.com/file/d/1kW4owaBZDUeoo-VCLwBVZAZiwKystdcN/view?usp=share_link'
              target='_blank'
              rel='noreferrer'
              className='bg-gray-600 hover:bg-[#1D64A5] my-2 mx-3 p-2 rounded block'
              type='submit'
            >
              <img className='xs:w-8 w-12 object-contain mx-2 cursor-pointer inline' src={esflag} alt='Espanol' />
            </a>

            <a
              href='https://drive.google.com/file/d/1Ag6GYldEUD4sl9jXc46gw06-QzeViqdu/view?usp=share_link'
              target='_blank'
              rel='noreferrer'
              className='bg-gray-600 hover:bg-[#1D64A5] my-2 mx-3 p-2 rounded block'
              type='submit'
            >
              <img className='xs:w-8 w-12 object-contain mx-2 cursor-pointer inline' src={brflag} alt='Espanol' />
            </a>

            <a
              href='https://drive.google.com/file/d/1uCTQeuf5zghYjgLCiLAdaLifvl06nix4/view?usp=share_link'
              target='_blank'
              rel='noreferrer'
              className='bg-gray-600 hover:bg-[#1D64A5] my-2 mx-3 p-2 rounded block'
              type='submit'
            >
              <img className='xs:w-8 w-12 object-contain mx-2 cursor-pointer inline' src={gbflag} alt='Espanol' />
            </a>

          </div>
        </div>

        <ul className='list-none flex justify-end items-center flex-1 font-poppins'>
          <div className='flex flex-row md:mt-0'>
            {socialMedia.map((social, index) => (
              <img
                key={social.id}
                src={social.icon}
                alt={social.id}
                className={`w-7 h-7 object-contain cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'
                  }`}
                onClick={() => window.open(social.link)}
              />
            ))}
          </div>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
