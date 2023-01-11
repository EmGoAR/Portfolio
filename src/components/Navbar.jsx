import { useState } from 'react'
import logo from '../assets/Logo.png'
import { close } from '../assets'
import { navLinks, socialMedia } from '../constants'
import Typewriter from 'typewriter-effect'

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
          src={toggle ? close : logo}
          alt='menu'
          className='w-10 h-10 object-contain mr-2 cursor-pointer'
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

        <div
          className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-gray-900 bg-opacity-70 backdrop-blur-lg absolute top-[4rem] right-auto mx-4 my-2 min-w-[140px] rounded-md z-[11] logo-menu`}
        >
          <ul className='list-none flex justify-around items-start flex-1 flex-col'>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? 'text-white' : 'text-dimWhite'
                  } ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
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
