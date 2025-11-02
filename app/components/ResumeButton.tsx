import Image from "next/image";
import Link from "next/link";
import React from "react";

const ResumeButton = () => {
	return (
		<Link
			href="/resume/Resume.pdf"
			target="_blank"
			download
		>
			<button
	type="button"
	className="group relative font-medium text-center px-4 py-3 sm:px-5 sm:py-3.5 flex items-center gap-2 sm:gap-3 justify-center rounded-lg overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-[length:200%_100%] animate-gradient-x text-white shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:-translate-y-1 hover:scale-105 active:scale-95"
>
	{/* Animated shimmer effect */}
	<span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></span>
	
	{/* Rotating border effect */}
	<span className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 animate-spin-slow"></span>
	
	<Image
		src="/resume.svg"
		width={20}
		height={20}
		alt="resume"
		className="relative z-10 object-contain group-hover:rotate-[360deg] group-hover:scale-110 transition-all duration-700 sm:w-6 sm:h-6"
	/>
	<span className="hidden sm:inline-block relative z-10 font-semibold tracking-wide">
		Download Resume
	</span>
	<span className="sm:hidden relative z-10 text-sm font-semibold">
		Resume
	</span>
</button>

<style jsx>{`
	@keyframes gradient-x {
		0%, 100% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
	}
	
	@keyframes spin-slow {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
	
	.animate-gradient-x {
		animation: gradient-x 3s ease infinite;
	}
	
	.animate-spin-slow {
		animation: spin-slow 3s linear infinite;
	}
`}</style>
		</Link>
	);
};

export default ResumeButton;
