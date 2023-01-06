import styles from "../style";

const ContactMe = () => (
  <section id="ContactMe" className={`${styles.flexCenter} ${styles.paddingY} flex md:flex-row flex-col justify-around xl:px-0 sm:px-16 px-6`}>
    
    {/* texto de Contacto */}
    <div className={`${styles.paragraph} text-left sm:text-start text-md leading-[20.8px] bg-gray-900 rounded-md p-4 shadow shadow-black`}>
    <h1 className={`flex-1 font-poppins font-semibold ss:text-[32px] text-[28px] sm:text-left text-center text-gradient ss:leading-[60px] leading-[55px]`}>
            Get In Touch!
          </h1>
      <p className={`max-w-lg`}>Have a project in mind? Looking to partner or work together? Reach out through the form and I'll get back to you as soon as possible.</p>
    </div>

    {/* Caja de formulario */}
    <form className={`${styles.paragraph} sm:m-12 my-6 text-left sm:text-start text-md leading-[20.8px] bg-gray-900 rounded-md p-4 shadow shadow-black min-w-[130px] w-[80%] max-w-xl`}>
      
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
      </div>
      <div className="mb-6">
        <label className="block text-sm font-bold mb-2" htmlFor="message">
          Message
        </label>
        <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Message"></textarea>
      </div>
      <div className="flex items-center justify-between">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Send
        </button>
      </div>
    </form>
  </section>
)

export default ContactMe;