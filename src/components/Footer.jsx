import styles from '../style'
import { navLinks, socialMedia } from "../constants/Index";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>

    <div className='w-full flex justify-center items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
      {/* Derechos Reservados */}
      <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'>
        Copyright Ⓒ Developed by Emiliano Gonzalez under GNU v3.0 License.
      </p>
    </div>

    {/* Social media Icons */}
    <ul className="list-none flex flex-1 font-poppins py-2 justify-center">
						<div className="flex flex-row md:mt-0  ">
							{socialMedia.map((social, index) => (
								<img
									key={social.id}
									src={social.icon}
									alt={social.id}
									className={`w-9 h-9 object-contain cursor-pointer ${
										index !== socialMedia.length - 1 ? "mr-5" : "mr-0"
									}`}
									onClick={() => window.open(social.link)}
								/>
							))}
						</div>
					</ul>
  </section>
)

export default Footer
