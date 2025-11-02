"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { testimonials } from "../constants";
import { fadeIn, textVariant } from "@/app/utils/motion";
import { SectionWrapper } from "./HigherOrderComponents";

type FeedbackCardProps = {
	index: number;  
	testimonial: string;
	name: string;   
	link: string;
	image: string;
};

const FeedbackCard = ({
	index,
	testimonial,
	name,
	link,
	image,
}: FeedbackCardProps) => (
	<motion.div
		variants={fadeIn("up", "spring", index * 0.2, 0.75)}
		className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 group"
	>
		<div className="flex items-start gap-4">
			<Link href={link} className="flex-shrink-0">
				<Image
					src={image}
					width={60}
					height={60}
					alt={`${name} profile`}
					className="w-14 h-14 rounded-full object-cover ring-2 ring-cyan-500/50 group-hover:ring-cyan-400 transition-all duration-300 group-hover:scale-110"
				/>
			</Link>
			
			<div className="flex-1">
				<Link href={link} className="block group/name">
					<h3 className="text-white font-semibold text-lg group-hover/name:text-cyan-400 transition-colors duration-300">
						{name}
					</h3>
				</Link>
				<p className="text-slate-400 text-sm mt-2 leading-relaxed">
					{testimonial}
				</p>
			</div>
		</div>
	</motion.div>
);

const Feedbacks = () => {
	return (
		<div className="mt-12">
			<div className="padding bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl min-h-[300px]">
				<motion.div variants={textVariant()}>
					<h2 className="sectionHeadText text-white">Social Profiles</h2>
					<p className="sectionSubText text-slate-300">
						Connect with me on social media
					</p>
				</motion.div>
			</div>
			
			<div className="paddingX -mt-20 pb-14">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{testimonials.map((testimonial, index) => (
						<FeedbackCard key={testimonial.id} index={index} {...testimonial} />
					))}
				</div>
			</div>
		</div>
	);
};

export default SectionWrapper(Feedbacks, "");