import styles from "../style";
import { Trans, useTranslation } from "react-i18next";

function AboutMe() {
	const { t, i18n } = useTranslation();
	return (
		/* este es el main container - coloca flex responsivamente */
		<section id="AboutMe" className={`flex   flex-col ${styles.paddingY}`}>
			{/* este es el div que les pone los padding y contiene todo */}
			<div className="flex-1 flex-col xl:px-0 sm:px-16 px-6">
				{/* Animacion
        <Lottie animationData={Laptop} loop className='flex w-full min-w-[500px] max-w-[500px] self-center' />
        */}

				{/* Title */}
				<div className="font-poppins font-semibold ss:text-center text-center mb-12 ">
					<h1 className="ss:text-[55px] text-[42px] ss:leading-[60px] leading-[55px] text-[#3D84C5]">
						{t("about.line1")} <br />
						<span className="text-gradient">{t("about.line2")}</span>
						<br />
						{t("about.line3")} <br />
					</h1>

					{/* Texto */}
					<p className="ss:text-[28px] text-[18px] ss:leading-[38px] leading-[25px] max-w-4xl font-normal text-white text-mdv text mx-auto mt-[10%]  ">
					{t("about.description")} <br />
						<br />{t("about.description2")}
					</p>
				</div>

				{/* gradient start  NO LO VOY A USAR PORQUE ENKILOMBA
				<div className="absolute z-[0] w-[50%] h-[50%] left-96 bottom-20 blue__gradient" />
				 gradient end */}
			</div>
		</section>
	);
}

export default AboutMe;
