import {
	bootstrap,
	css,
	express,
	figma,
	react,
	redux,
	sass,
	git,
	tailwind,
	typescript,
	html,
	javascript,
	next,
	node,
	vite,
	trello,
	vsc,
	postman,
	mongodb,
	github2 /* , dart, postgresql, adobexd, sequelize, flutter, swift, jira, thunderclient, notion, */,
} from "../assets/index";

import styles from "../style";
import Lottie from "lottie-react";
// import ProgrammingGuy from '../assets/programmingGuy.json'
import Laptop from "../assets/Laptop.json";

const Skills = () => {
	return (
		/* este es el main container - coloca flex responsivamente */
		<section className={`flex flex-col ${styles.paddingY}`}>
			{/* este es el div que les pone los padding y contiene todo */}
			<div
				className={`flex-1 flex-col md:flex-row-reverse ${styles.flexStart} xl:px-0 sm:px-16 px-6 items-center`}
			>
				{/* Animacion */}
				<Lottie
					animationData={Laptop}
					loop
					className="flex w-full min-w-[500px] max-w-[500px]"
				/>

				{/* Contenedor de texto */}
				<div id="Skills" className="text-justify sm:px-[4%]">
					{/* Título */}
					<h1 className="flex-1 font-poppins font-semibold ss:text-[32px] text-[28px] text-white text-center sm:text-justify text-gradient mb-3">
						My Skills
					</h1>
					{/* Main Container */}
					<div className="bg-gray-900 rounded-md p-4 shadow shadow-black max-w-xl">
						<p
							className={`${styles.paragraph} text-left sm:text-start text-md leading-[20.8px] ml-5 `}
						>
							MAIN STACK
						</p>
						<br />
						<div className="flex flex-row flex-wrap justify-center  gap-3 mb-5">
							<div className="flex flex-col text-center bg-gray-600 bg-opacity-25 rounded-md px-3 pt-3">
								<img
									src={mongodb}
									alt="MongoDB"
									className="w-[65px] self-center"
								/>
								<p className={`${styles.paragraph} text-center text-sm `}>
									MongoDB
								</p>
							</div>
							<div className="flex flex-col text-center bg-gray-600 bg-opacity-25 rounded-md px-3 pt-3">
								<img
									src={express}
									alt="ExpressJS"
									className="w-[65px] self-center"
								/>
								<p className={`${styles.paragraph} text-center text-sm `}>
									Express.js
								</p>
							</div>
							<div className="flex flex-col text-center bg-gray-600 bg-opacity-25 rounded-md px-3 pt-3">
								<img src={react} alt="REACT" className="w-[65px] self-center" />
								<p className={`${styles.paragraph} text-center text-sm `}>
									React.js
								</p>
							</div>
							<div className="flex flex-col text-center bg-gray-600 bg-opacity-25 rounded-md px-3 pt-3">
								<img src={node} alt="NodeJS" className="w-[65px] self-center" />
								<p className={`${styles.paragraph} text-center text-sm `}>
									Node.js
								</p>
							</div>
						</div>

						<p
							className={`${styles.paragraph} text-left sm:text-start text-md leading-[20.8px] ml-5 `}
						>
							FUNDAMENTAL ONES
						</p>
						<br />
						<div className="flex flex-row flex-wrap justify-center  gap-3 mb-5">
							<div className="flex flex-col text-center bg-gray-600 bg-opacity-25 rounded-md px-3 pt-3">
								<img
									src={javascript}
									alt="JS"
									className="w-[65px] self-center"
								/>
								<p className={`${styles.paragraph} text-center text-sm `}>
									Javascript
								</p>
							</div>
							<div className="flex flex-col text-center bg-gray-600 bg-opacity-25 rounded-md px-3 pt-3">
								<img
									src={typescript}
									alt="Typescript"
									className="w-[65px] self-center"
								/>
								<p className={`${styles.paragraph} text-center text-sm `}>
									Typescript
								</p>
							</div>
							<div className="flex flex-col text-center bg-gray-600 bg-opacity-25 rounded-md px-3 pt-3">
								<img src={html} alt="HTML" className="w-[65px] self-center" />
								<p className={`${styles.paragraph} text-center text-sm `}>
									HTML5
								</p>
							</div>
							<div className="flex flex-col text-center bg-gray-600 bg-opacity-25 rounded-md px-3 pt-3">
								<img src={css} alt="CSS" className="w-[65px] self-center" />
								<p className={`${styles.paragraph} text-center text-sm `}>
									CSS3
								</p>
							</div>
							<div className="flex flex-col text-center bg-gray-600 bg-opacity-25 rounded-md px-3 pt-3">
								<img src={git} alt="Git" className="w-[65px] self-center" />
								<p className={`${styles.paragraph} text-center text-sm `}>
									Git
								</p>
							</div>
						</div>

						<p
							className={`${styles.paragraph} text-left sm:text-start text-md leading-[20.8px] ml-5 `}
						>
							STYLING AND STRUCTURE
							<br />
						</p>
						<div className="flex flex-row flex-wrap justify-center p-3 gap-3 mb-5">
							<div className="flex flex-col text-center bg-gray-600 bg-opacity-25 rounded-md px-3 pt-3">
								<img src={sass} alt="SASS" className="w-[65px] self-center" />
								<p className={`${styles.paragraph} text-center text-sm `}>
									SASS
								</p>
							</div>
							<div className="flex flex-col text-center bg-gray-600 bg-opacity-25 rounded-md px-3 pt-3">
								<img
									src={tailwind}
									alt="TailwindCSS"
									className="w-[65px] self-center"
								/>
								<p className={`${styles.paragraph} text-center text-sm `}>
									Tailwind
								</p>
							</div>
							<div className="flex flex-col text-center bg-gray-600 bg-opacity-25 rounded-md px-3 pt-3">
								<img
									src={bootstrap}
									alt="Bootstrap"
									className="w-[65px] self-center"
								/>
								<p className={`${styles.paragraph} text-center text-sm `}>
									Bootstrap
								</p>
							</div>
							<div className="flex flex-col text-center bg-gray-600 bg-opacity-25 rounded-md px-3 pt-3">
								<img src={vite} alt="Vite" className="w-[65px] self-center" />
								<p className={`${styles.paragraph} text-center text-sm `}>
									Vite
								</p>
							</div>
							<div className="flex flex-col text-center bg-gray-600 bg-opacity-25 rounded-md px-3 pt-3">
								<img src={next} alt="NextJS" className="w-[65px] self-center" />
								<p className={`${styles.paragraph} text-center text-sm `}>
									Next.js
								</p>
							</div>
							<div className="flex flex-col text-center bg-gray-600 bg-opacity-25 rounded-md px-3 pt-3">
								<img src={redux} alt="Redux" className="w-[65px] self-center" />
								<p className={`${styles.paragraph} text-center text-sm `}>
									Redux
								</p>
							</div>
						</div>

						<p
							className={`${styles.paragraph} text-left sm:text-start text-md leading-[20.8px] ml-5 `}
						>
							MY WORK TOOLS
							<br />
						</p>
						<div className="flex flex-row flex-wrap justify-center p-3 gap-3">
							<div className="flex flex-col text-center bg-gray-600 bg-opacity-25 rounded-md px-3 pt-3">
								<img src={vsc} alt="VSCode" className="w-[65px] self-center" />
								<p className={`${styles.paragraph} text-center text-sm `}>
									VS code
								</p>
							</div>
							<div className="flex flex-col text-center bg-gray-600 bg-opacity-25 rounded-md px-3 pt-3">
								<img
									src={github2}
									alt="Github"
									className="w-[65px] self-center"
								/>
								<p className={`${styles.paragraph} text-center text-sm `}>
									Github
								</p>
							</div>
							<div className="flex flex-col text-center bg-gray-600 bg-opacity-25 rounded-md px-3 pt-3">
								<img
									src={postman}
									alt="Postman"
									className="w-[65px] self-center"
								/>
								<p className={`${styles.paragraph} text-center text-sm `}>
									Postman
								</p>
							</div>
							<div className="flex flex-col text-center bg-gray-600 bg-opacity-25 rounded-md px-3 pt-3">
								<img
									src={trello}
									alt="Trello"
									className="w-[65px] self-center"
								/>
								<p className={`${styles.paragraph} text-center text-sm `}>
									Trello
								</p>
							</div>
							<div className="flex flex-col text-center bg-gray-600 bg-opacity-25 rounded-md px-3 pt-3">
								<img src={figma} alt="Figma" className="w-[65px] self-center" />
								<p className={`${styles.paragraph} text-center text-sm `}>
									Figma
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
