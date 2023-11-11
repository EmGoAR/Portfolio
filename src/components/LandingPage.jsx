import { navLinks, socialMedia } from "../constants/Index";
import esflag from "../assets/es.svg";
import brflag from "../assets/br.svg";
import gbflag from "../assets/gb.svg";
import { Trans, useTranslation } from "react-i18next";

function LandingPage() {
	const { t, i18n } = useTranslation();
	const changeLanguage = (language) => {
		i18n.changeLanguage(language);
	};

	return (
		/* main container - puts flex responsively */
		<section className="flex md:flex-row flex-col sm:py-16 py-6 mx-6">
			{" "}
			{/**/}
			{/* justifies between and centers on y axis, padding and margin on x axis */}
			<div className="flex flex-1 flex-col-reverse ss:flex-row justify-between items-center w-full xl:px-0 sm:px-12 px-4">
				{/* Title */}
				<div className="font-poppins font-semibold ss:text-left text-center">
					<h1 className="text-[#3D84C5] ss:text-[55px] text-[42px] ss:leading-[60px] leading-[55px]">
						Emiliano Ciarcelluti
					</h1>
					<h1 className="text-white ss:text-[32px] text-[22px] font-normal ss:leading-[30px] leading-[25px]">
						{t("landing.subtitle")}
					</h1>

					{/* Country Flags */}

					<div className="flex flex-row ss:justify-start justify-center mt-3">
						<button
							className="flex justify-center bg-gray-600 rounded m-1"
							type="button"
							onClick={() => changeLanguage("es")}
						>
							<img
								className="min-w-[55px] object-contain m-1 inline"
								alt="Espanol"
								src={esflag}
							/>
						</button>

						<button
							className="flex justify-center bg-gray-600 rounded m-1"
							type="button"
							onClick={() => changeLanguage("pt")}
						>
							<img
								className="min-w-[55px] object-contain m-1 inline"
								alt="Portugues"
								src={brflag}
							/>
						</button>

						<button
							className="flex justify-center bg-gray-600 rounded m-1"
							type="button"
							onClick={() => changeLanguage("en")}
						>
							<img
								className="min-w-[55px] object-contain m-1 inline"
								alt="English"
								src={gbflag}
							/>
						</button>
					</div>

					{/* Social media Icons */}
					<ul className="list-none ss:hidden flex items-center flex-1 font-poppins py-2 ss:justify-start ss:pl-2 justify-center">
						<div className="flex flex-row md:mt-0  ">
							{socialMedia.map((social, index) => (
								<img
									key={social.id}
									src={social.icon}
									alt={social.id}
									className={`w-9 h-9 object-contain cursor-pointer ${
										index !== socialMedia.length - 1 ? "mr-3" : "mr-0"
									}`}
									onClick={() => window.open(social.link)}
								/>
							))}
						</div>
					</ul>
				</div>

				{/* Image */}
				<div className="lg:pr-10 flex ss:self-end self-center z-10 ">
					<img
						src="/Foto.png"
						alt=""
						className="w-full min-w-[300px] max-w-[400px] draw-circle"
					/>
				</div>
			</div>
		</section>
	);
}

export default LandingPage;
