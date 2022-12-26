import styles from "../style";
import Lottie, { LottiePlayer } from "lottie-react"
import ProgrammingGuy from "../assets/programmingGuy.json"

const MainSection = () => {
  return (
    /* este es el main container - coloca flex responsivamente*/
    <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>

      {/* este es el div que les pone los padding y contiene todo */}
      <div className={`flex-1 flex-col sm:flex-row ${styles.flexStart} xl:px-0 sm:px-16 px-6`}>

      {/* Animacion */}
        <Lottie animationData={ProgrammingGuy} loop={true} className={`flex min-w-[350px] max-w-[500px] self-center`}></Lottie>


        {/* Contenedor de texto */}
        <div className={`text-justify sm:px-[4%]`}>
          <h1 className={`flex-1 font-poppins font-semibold ss:text-[32px] text-[28px] text-white text-center sm:text-justify`}>
            Emiliano 
            <span className="text-gradient"> Gonzalez</span>{" "}
          </h1>

          <p className={`${styles.paragraph} text-center sm:text-start text-md leading-[20.8px] bg-gray-900 rounded-md p-2 shadow shadow-black`}>
          Sou argentino nativo, chegado recentemente em Santa Catarina em busca de oportunidades no setor de Tecnologia, desde criança fui apaixonado por informática, tanto que em casa me contaram que quando nasci vim com um teclado e mouse, sempre me organizei para trabalhar com meus conhecimentos, seja montagem e manutenção de PCs para vizinhos, amigos, conhecidos ou locais de jogos ou pequenos negócios, meu domínio do inglês é suficiente para passar muito tempo falando em vídeo chamadas, mas tenho que trabalhar meu português, que por enquanto é básico.
          </p>
        </div>


      </div>
    </section>


  )
}


export default MainSection