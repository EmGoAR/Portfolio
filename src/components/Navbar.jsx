import { useState } from "react";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import { navLinks, socialMedia } from "../constants/Index";
import Typewriter from "typewriter-effect";
import esflag from "../assets/es.svg";
import brflag from "../assets/br.svg";
import gbflag from "../assets/gb.svg";
import { Trans, useTranslation } from "react-i18next";

function Navbar() {
	const [active, setActive] = useState("Home");
	const [toggle, setToggle] = useState(false);
	const { t, i18n } = useTranslation();

	return (
		<nav className="w-full flex py-3 justify-between items-center navbar mt-3 sm:px-8	 px-5 bg-gray-900 rounded-md p-4 shadow shadow-black ">
			<div className=" flex justify-start bg-black rounded-[4px] pl-2 pr-1">
				<Typewriter
					options={{
						cursor:
							'<span style="color: white; font-family: Poppins, sans-serif; text-shadow: 0 0 15px #3D84C5;">|</span>',
					}}
					onInit={(typewriter) => {
						typewriter
							.typeString(
								'<span style="color: white; font-family: Poppins, sans-serif; text-shadow: 0 0 15px #3D84C5;">EmGo.dev</span>'
							)
							.start();
					}}
				/>
			</div>

			{/* DESKTOP Menu items */}
			<ul className="list-none sm:flex hidden justify-end items-center flex-1">
				<li
					key="AboutMe"
					className={`font-poppins font-normal cursor-pointer text-[16px] ${
						active === t("navbar.aboutme") ? "text-white" : "text-dimWhite"
					} mr-8`}
					onClick={() => setActive(t("navbar.aboutme"))}
				>
					<a href={`#AboutMe`}>{t("navbar.aboutme")}</a>
				</li>

				<li
					key="Skills"
					className={`font-poppins font-normal cursor-pointer text-[16px] ${
						active === t("navbar.skills") ? "text-white" : "text-dimWhite"
					} mr-8`}
					onClick={() => setActive(t("navbar.skills"))}
				>
					<a href={`#Skills`}>{t("navbar.skills")}</a>
				</li>

				<li
					key="Projects"
					className={`font-poppins font-normal cursor-pointer text-[16px] ${
						active === t("navbar.projects") ? "text-white" : "text-dimWhite"
					} mr-8`}
					onClick={() => setActive(t("navbar.projects"))}
				>
					<a href={`#Projects`}>{t("navbar.projects")}</a>
				</li>

				<li
					key="ContactMe"
					className={`font-poppins font-normal cursor-pointer text-[16px] ${
						active === t("navbar.contact") ? "text-white" : "text-dimWhite"
					}`}
					onClick={() => setActive(t("navbar.contact"))}
				>
					<a href={`#ContactMe`}>{t("navbar.contact")}</a>
				</li>

				{/* Social media Icons */}
				<div className="flex flex-row md:mt-0 pl-10 ">
					{socialMedia.map((social, index) => (
						<img
							key={social.id}
							src={social.icon}
							alt={social.id}
							className={`w-6 h-6 object-contain cursor-pointer ${
								index !== socialMedia.length - 1 ? "mr-3" : "mr-0"
							}`}
							onClick={() => window.open(social.link)}
						/>
					))}
				</div>
			</ul>

			{/* MENU BUTTON */}
			<div className="sm:hidden flex flex-1 justify-end items-center">
				<img
					src={toggle ? close : menu}
					alt="menu"
					className="w-[28px] h-[28px] object-contain"
					onClick={() => setToggle(!toggle)}
				/>

				{/* MOBILE MENU */}
				<div
					className={`${
						!toggle ? "hidden" : "flex"
					} flex-1  flex-col justify-between gap-5 p-6 bg-gray-900 bg-opacity-70 backdrop-blur-lg rounded-md z-[11] logo-menu absolute top-[4rem] right-2 mx-4 my-2`}
				>
					{/* LIST SECTION /> */}
					<ul className="list-none block justify-around items-start right-auto bg-gray-600 bg-opacity-25 rounded-md">
						<li
							key="AboutMe"
							className={`flex justify-center font-poppins font-medium cursor-pointer text-[18px] p-1 ${
								active === t("navbar.aboutme") ? "text-white" : "text-dimWhite"
							} p-[15px] my-1`}
							onClick={() => setActive(t("navbar.aboutme"))}
						>
							<a href={`#AboutMe`}>{t("navbar.aboutme")}</a>
						</li>

						<li
							key="Skills"
							className={`flex justify-center font-poppins font-medium cursor-pointer text-[18px] p-1 ${
								active === t("navbar.skills") ? "text-white" : "text-dimWhite"
							} p-[15px] my-1`}
							onClick={() => setActive(t("navbar.skills"))}
						>
							<a href={`#Skills`}>{t("navbar.skills")}</a>
						</li>

						<li
							key="Projects"
							className={`flex justify-center font-poppins font-medium cursor-pointer text-[18px] p-1 ${
								active === t("navbar.projects") ? "text-white" : "text-dimWhite"
							} p-[15px] my-1`}
							onClick={() => setActive(t("navbar.projects"))}
						>
							<a href={`#Projects`}>{t("navbar.projects")}</a>
						</li>

						<li
							key="ContactMe"
							className={`flex justify-center font-poppins font-medium cursor-pointer text-[18px] p-1 ${
								active === t("navbar.contact") ? "text-white" : "text-dimWhite"
							} p-[15px] my-1`}
							onClick={() => setActive(t("navbar.contact"))}
						>
							<a href={`#ContactMe`}>{t("navbar.contact")}</a>
						</li>
					</ul>

					{/* CV SECTION */}
					<div className="flex flex-col bg-gray-600 bg-opacity-25 rounded-md text-white font-medium text-center">
						<p className="px-2 pt-2">Resumes:</p>
						<div className="flex justify-center us:flex-row flex-col">
							<a
								href="https://drive.google.com/file/d/1kW4owaBZDUeoo-VCLwBVZAZiwKystdcN/view?usp=share_link"
								target="_blank"
								rel="noreferrer"
								className="flex justify-center bg-gray-600 hover:bg-[#1D64A5] rounded m-2"
								type="submit"
							>
								<img
									className="min-w-[55px] object-contain m-1 cursor-pointer inline"
									src={esflag}
									alt="Espanol"
								/>
							</a>

							<a
								href="https://drive.google.com/file/d/1Ag6GYldEUD4sl9jXc46gw06-QzeViqdu/view?usp=share_link"
								target="_blank"
								rel="noreferrer"
								className="flex justify-center bg-gray-600 hover:bg-[#1D64A5] rounded m-2"
								type="submit"
							>
								<img
									className="min-w-[55px] object-contain m-1 cursor-pointer inline"
									src={brflag}
									alt="Portugues"
								/>
							</a>

							<a
								href="https://drive.google.com/file/d/1uCTQeuf5zghYjgLCiLAdaLifvl06nix4/view?usp=share_link"
								target="_blank"
								rel="noreferrer"
								className="flex justify-center bg-gray-600 hover:bg-[#1D64A5] rounded m-2"
								type="submit"
							>
								<img
									className="min-w-[55px] object-contain m-1 cursor-pointer inline"
									src={gbflag}
									alt="English"
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
