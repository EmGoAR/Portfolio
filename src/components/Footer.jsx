import styles from '../style'

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>

    <div className='w-full flex justify-center items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
      {/* Derechos Reservados */}
      <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'>
        Copyright Ⓒ Developed by Emiliano Gonzalez under GNU v3.0 License.
      </p>
    </div>
  </section>
)

export default Footer
