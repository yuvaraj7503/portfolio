"use client";
import { motion } from "framer-motion";
import React from "react";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
	// Generate particles for ambient effect
	const particles = Array.from({ length: 40 }, (_, i) => ({
		id: i,
		size: Math.random() * 3 + 1,
		x: Math.random() * 100,
		y: Math.random() * 100,
		duration: Math.random() * 15 + 10,
		delay: Math.random() * 5,
	}));

	return (
		<section className="relative w-full h-screen mx-auto overflow-hidden">
			{/* Animated gradient background */}
			<motion.div
				className="absolute inset-0"
				animate={{
					background: [
						"radial-gradient(circle at 20% 50%, #1a0b2e 0%, #16213e 50%, #0f3460 100%)",
						"radial-gradient(circle at 80% 50%, #16213e 0%, #0f3460 50%, #1a0b2e 100%)",
						"radial-gradient(circle at 50% 80%, #0f3460 0%, #1a0b2e 50%, #16213e 100%)",
						"radial-gradient(circle at 20% 50%, #1a0b2e 0%, #16213e 50%, #0f3460 100%)",
					],
				}}
				transition={{
					duration: 20,
					repeat: Infinity,
					ease: "linear",
				}}
			/>

			{/* Floating gradient orbs */}
			<motion.div
				className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-30 blur-3xl"
				style={{
					background: "radial-gradient(circle, #00d4ff 0%, transparent 70%)",
				}}
				animate={{
					x: [0, 200, 0],
					y: [0, 100, 0],
					scale: [1, 1.3, 1],
				}}
				transition={{
					duration: 15,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>
			<motion.div
				className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
				style={{
					background: "radial-gradient(circle, #9d4edd 0%, transparent 70%)",
				}}
				animate={{
					x: [0, -150, 0],
					y: [0, -100, 0],
					scale: [1, 1.4, 1],
				}}
				transition={{
					duration: 18,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>
			<motion.div
				className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full opacity-25 blur-3xl"
				style={{
					background: "radial-gradient(circle, #7209b7 0%, transparent 70%)",
				}}
				animate={{
					x: [-200, 100, -200],
					y: [-100, 150, -100],
					scale: [1, 1.2, 1],
				}}
				transition={{
					duration: 20,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>

			{/* Animated particles */}
			<div className="absolute inset-0">
				{particles.map((particle) => (
					<motion.div
						key={particle.id}
						className="absolute rounded-full bg-cyan-300"
						style={{
							width: particle.size,
							height: particle.size,
							left: `${particle.x}%`,
							top: `${particle.y}%`,
							boxShadow: "0 0 10px rgba(34, 211, 238, 0.5)",
						}}
						animate={{
							y: [0, -40, 0],
							x: [0, Math.random() * 30 - 15, 0],
							opacity: [0.2, 0.8, 0.2],
							scale: [1, 1.5, 1],
						}}
						transition={{
							duration: particle.duration,
							repeat: Infinity,
							delay: particle.delay,
							ease: "easeInOut",
						}}
					/>
				))}
			</div>

			{/* Content */}
			<div className="paddingX absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-10">
				<div className="flex flex-col justify-center items-center mt-5">
					<motion.div
						className="w-5 h-5 rounded-full bg-[#915EFF]"
						style={{
							boxShadow: "0 0 30px rgba(145, 94, 255, 0.8)",
						}}
						animate={{
							scale: [1, 1.3, 1],
							boxShadow: [
								"0 0 30px rgba(145, 94, 255, 0.8)",
								"0 0 50px rgba(145, 94, 255, 1)",
								"0 0 30px rgba(145, 94, 255, 0.8)",
							],
						}}
						transition={{
							duration: 2,
							repeat: Infinity,
							ease: "easeInOut",
						}}
					/>
					<motion.div
						className="w-1 sm:h-80 h-40 violet-gradient"
						initial={{ scaleY: 0 }}
						animate={{ scaleY: 1 }}
						transition={{ duration: 1, delay: 0.5 }}
						style={{ transformOrigin: "top" }}
					/>
				</div>
				<div>
					<motion.h1
						className="heroHeadText text-white drop-shadow-lg"
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1 }}
					>
						Hi, I&apos;m{" "}
						<span className="text-[#915EFF]">YUVARAJ</span>
					</motion.h1>
					<motion.p
						className="heroSubText text-slate-200 drop-shadow-md"
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1, delay: 0.3 }}
					>
						A Mern Stack Developer
					</motion.p>
				</div>
			</div>
			<ComputersCanvas />
			{/* Scroll indicator */}
			<div className="absolute xs:bottom-2 bottom-32 w-full flex justify-center items-center">
				<a href="#about">
					<div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
						<motion.div
							animate={{ y: [0, 24, 0] }}
							transition={{
								duration: 1.5,
								repeat: Number.POSITIVE_INFINITY,
								repeatType: "loop",
							}}
							className="w-3 h-3 rounded-full bg-secondary mb-1"
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;