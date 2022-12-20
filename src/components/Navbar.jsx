import React from 'react'
import { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
  {/* Creamos un toggle para cambiar a la navbar de celular, comienza en false */ }
  const [toggle, setToggle] = useState(false)

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt="Hoobank" className='w-[124px] h-[32px]' />

      {/* Mobile app bar */}
      <ul className='list-none sm:flex justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppin font-normal cursor-pointer text-[16px] 
            ${index === navLinks.lenght - 1 ? 'mr-0' : 'mr-10'} sm:text-white mr-10`}
          >
            {/* cuando clickeas este link, este pone un # y toma el valor del id ya guardado en navLinks, 
              por lo tanto quedaria asi #home #features #products #clients */}
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop app bar */}
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        {/* si el toggle esta activado, mostrar icono de close, sino, mostrar icono de menu*/}
        <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer'
          onClick={() => setToggle((prev) => !prev)} />
        {/*
              en react no se debería hacer esto: onClick={() => setToggle(!toggle)}
              no deberíamos actualizar un estado usando el estado previo de ese estado
              para eso lo hacemos con una funcion callback:
              onClick={() => setToggle((prev) => !prev)} (la forma correcta de hacerlo)
        */}

        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient
        absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar` }>

          <ul className='list-none flex flex-col '>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppin font-normal cursor-pointer text-[16px] 
            ${index === navLinks.lenght - 1 ? 'mr-0' : 'mb-4'} text-white mr-10`}
              >
                {/* cuando clickeas este link, este pone un # y toma el valor del id ya guardado en navLinks, 
              por lo tanto quedaria asi #home #features #products #clients */}
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </nav>
  )
}

export default Navbar