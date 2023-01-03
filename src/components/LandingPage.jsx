import styles from "../style";
import Lottie, { LottiePlayer } from "lottie-react"
import Laptop from "../assets/Laptop.json"
import Typewriter from 'typewriter-effect';

const LandingPage = () => {
    return (
        /* este es el main container - coloca flex responsivamente*/
        <section className={`flex md:flex-row flex-col sm:py-16 py-6`}> {/**/}
            {/* justifica al centro y al inicio, ordena en columna y agrega padding */}
            <div className={`flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-12 px-4`}>

                <div className="flex flex-col-reverse ss:flex-row justify-between ss:space-x-[5%] items-center w-full">

                    {/* texto presentacion */}
                    <h1 className="flex-1 font-poppins font-semibold ss:text-left text-center ss:text-[55px] text-[42px] text-white ss:leading-[60px] leading-[55px]">
                        <span className="text-gradient">Emiliano Gonzalez <br className="sm:block hidden" /></span>{" "}
                        <span className="ss:text-[45px] text-[38px]">Junior Front End Developer</span>  {" "}
                        <br />
                        <span className="ss:text-[24px] text-[18px] leading-[45px]">
                            <Typewriter
                                options={{
                                    strings: [
                                        '<span style="color: rgb(20,220,220); text-shadow: 0 0 15px #2DD;">Learning new Things</span>',
                                        '<span style="color: rgb(20,220,220); text-shadow: 0 0 15px #2DD;">Love solving Problems</span>'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>
                    </h1>

                    {/* imagen */}
                    <div className="md:ml-4 mr-0 flex ss:self-end self-center">
                        <img src="Foto.png" alt="" className={`w-full min-w-[300px] max-w-[400px]`} />
                    </div>

                </div>
            </div>
        </section>

    )
}

export default LandingPage