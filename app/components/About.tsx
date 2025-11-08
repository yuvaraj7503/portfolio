"use client";

import { SectionWrapper } from "./HigherOrderComponents";
import { motion } from "framer-motion";
import Image from "next/image"; 
import { Tilt } from "react-tilt";

import { fadeIn, textVariant } from "@/app/utils/motion";

type ServiceCardProps = {
	index: number;
	title: string;
	icon: string;
};

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
	return (
		<>
			<Tilt
				options={{ max: 45, scale: 1, speed: 450 }}
				className="xs:w-[250px] w-full"
			>
				<motion.div
					variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
					className="w-full green-pink-gradient p-px rounded-[20px] shadow-card"
				>
					<div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
						<Image
							src={icon}
							width={64}
							height={64}
							alt={title}
							className="w-16 h-16 object-contain"
						/>
						<h3 className="text-white text-[20px] font-bold text-center">
							{title}
						</h3>
					</div>
				</motion.div>
			</Tilt>
		</>
	);
};

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className="sectionSubText">Introduction</p>
				<h2 className="styles.sectionHeadText">Overview.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 text-secondary text-[17px] max-w-[3xl] leading-[30px]"
			>
				Junior MERN Stack Developer specializing in end-to-end web application development, from system architecture to deployment. Skilled in building scalable and high-performance solutions using MongoDB, Express.js, React.js, and Node.js, with hands-on experience in RESTful APIs, authentication, and cloud deployments. Proficient in integrating modern frontend frameworks with secure and efficient backend services.Demonstrated ability to contribute to complex platforms, including IoT-enabled dashboards, ERP systems, and Building Management Systems (BMS) with MQTT and InfluxDB integration. Focused on continuous learning, technical execution, and effective team collaboration to deliver impactful full-stack solutions.
			</motion.p>
			
		</>
	);
};

export default SectionWrapper(About, "about");
