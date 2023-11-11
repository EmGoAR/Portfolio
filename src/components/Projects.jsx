// import { feedback } from '../constants'
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import { site01, site02, site03, github } from "../assets";
import { Trans, useTranslation } from "react-i18next";

function Projects() {
	const { t, i18n } = useTranslation();

	return (
		<section
			id="Projects"
			className={`${styles.paddingY} ${styles.flexCenter} flex-col relative xl:px-0 sm:px-16 px-6`}
		>
			{/* Gradient effect */}
			<div className="absolute z-[0] w-[60%] h-[99%] -right-[50%] rounded-full blue__gradient bottom-40" />

			<div
				className={`${styles.flexStart} w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]`}
			>
				<h2 className={`${styles.heading2} text-[#3D84C5]`}>{t("projects.title")}</h2>

				<div className="w-full md:mt-0 mt-6">
					<p className={`${styles.paragraph} text-left max-w-[450px]`}>
						{t("projects.presentation")}
					</p>
				</div>
			</div>

			<div className="flex flex-wrap  justify-center w-full feedback-container relative z-[1] gap-[5%] ">
				{/*
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
      */}

				<FeedbackCard
					img={site01}
					sitelink="https://textencriptor.netlify.app/"
					title={t("projects.app1title")}
					githublink={
						<a
							href="https://github.com/EmGoDev/EncriptadorTexto-ONE-Oracle"
							className="mt-2 font-poppins font-normal text-[16px] leading-[24px] text-dimWhite"
						>
							<img
								src={github}
								alt="Github Link"
								className="w-[30px] inline mx-2"
							/>{" "}
							{t("projects.github")}
						</a>
					}
					content={t("projects.app1description")}
				/>

				<FeedbackCard
					img={site02}
					sitelink="https://emgoar-tmbd.netlify.app/"
					title={t("projects.app2title")}
					githublink={
						<a
							href="https://github.com/EmGoDev/movie-react-tmdb"
							className="mt-2 font-poppins font-normal text-[16px] leading-[24px] text-dimWhite"
						>
							<img
								src={github}
								alt="Github Link"
								className="w-[30px] inline mx-2"
							/>{" "}
							{t("projects.github")}
						</a>
					}
					content={t("projects.app2description")}
				/>

				{/*
			<FeedbackCard
				img={site03}
				sitelink="#"
				title="Kings league infojobs"
				githublink={
					<p className="mt-2 text-center font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
						WILL BE AVAIABLE SOON
					</p>
				}
				content="Kings League, a new soccer tournament in which 12 teams will face each other."
			/>
			*/}
			</div>
		</section>
	);
}

export default Projects;
