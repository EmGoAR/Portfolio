import { useState } from "react";
import styles from "../style";

const ContactMe = () => {
	const [message, setMessage] = useState("");
	const [name, setName] = useState("");

	const handleMessageChange = (event) => {
		// 👇️ access textarea value
		setMessage(event.target.value);
		// console.log(event.target.value)
		return event.target.value;
	};

	const handleNameChange = (event) => {
		// 👇️ access textarea value
		setName(event.target.value);
		// console.log(event.target.value)
		return event.target.value;
	};

	return (
		<section
			id="ContactMe"
			className={`${styles.flexCenter} ${styles.paddingY} flex md:flex-row flex-col justify-around xl:px-0 sm:px-16 px-6`}
		>
			{/* texto de Contacto */}
			<div
				className={`${styles.paragraph} text-left sm:text-start text-md leading-[20.8px] bg-gray-900 rounded-md p-4 shadow shadow-black`}
			>
				<h1 className="flex-1 font-poppins font-semibold ss:text-[32px] text-[28px] sm:text-left text-center text-gradient ss:leading-[60px] leading-[55px]">
					Get In Touch!
				</h1>
				<p className="max-w-lg">
					Have a project in mind? Looking to partner or work together? Reach out
					through the form and I'll get back to you as soon as possible.
				</p>
			</div>

			{/* Caja de formulario */}
			<form
				className={`${styles.paragraph} sm:m-12 my-6 text-left sm:text-start text-md leading-[20.8px] bg-gray-900 rounded-md p-4 shadow shadow-black min-w-[130px] w-full max-w-[544px]`}
			>
				<div className="mb-4">
					<label
						id="contact_name"
						className="block text-sm font-bold mb-2"
						htmlFor="Name"
					>
						Name
					</label>
					<input
						id="name"
						name="name"
						type="name"
						value={name}
						onChange={handleNameChange}
						placeholder="Name"
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					/>
				</div>
				<div className="mb-6">
					<label
						id="contact_message"
						className="block text-sm font-bold mb-2"
						htmlFor="message"
					>
						Message
					</label>
					<textarea
						id="message"
						name="message"
						value={message}
						onChange={handleMessageChange}
						placeholder="Message"
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
					/>
				</div>
				<div className="flex items-center justify-between">
					<a
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
						href={`mailto:emicba07@gmail.com?subject=${name}&body=${message}`}
						target="_blank"
						rel="noreferrer"
						type="submit"
					>
						Send
					</a>
				</div>
			</form>
		</section>
	);
};

export default ContactMe;
