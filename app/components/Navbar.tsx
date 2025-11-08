"use client";
import { navLinks } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ResumeButton from "./ResumeButton";
   
const Navbar = () => {
	const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			if (scrollTop > 100) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as HTMLElement;
			if (toggle && !target.closest('.mobile-menu') && !target.closest('.menu-toggle')) {
				setToggle(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, [toggle]);

	return (
		<nav
			className={`px-4 sm:px-6 md:px-8 lg:px-16 w-full flex items-center py-4 sm:py-5 fixed top-0 z-20 transition-all duration-300 ${
				scrolled ? "bg-primary/95 backdrop-blur-md shadow-lg border-b border-white/10" : "bg-transparent"
			}`}
		>
			<div className="w-full flex justify-between items-center max-w-7xl mx-auto">
				{/* Logo Section */}
				<Link 
					href="https://github.com/yuvaraj7503"
					className="flex items-center gap-2 group"
					onClick={() => {
						setActive("");
						setToggle(false);
					}}
				>
					<div className="relative">
						<Image
							src="/logo.png"
							width={60}
							height={60}
							alt="logo"
							priority
							className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px] object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
						/>
						<div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
					</div>
					<p className="text-white text-[16px] sm:text-[18px] md:text-[20px] font-bold flex">
						<span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
							Techie
						</span>
						&nbsp;
						<span className="sm:block hidden text-white/80">| YUVARAJ</span>
					</p>
				</Link>

				{/* Desktop Navigation */}
				<ul className="list-none hidden lg:flex flex-row gap-2 xl:gap-4 items-center">
					{navLinks.map((nav, index) => (
						<li
							key={nav.id}
							className="relative group"
							style={{ animationDelay: `${index * 0.1}s` }}
						>
							<Link 
								href={`#${nav.id}`}
								onClick={() => setActive(nav.title)}
								className={`
									relative px-4 py-2 text-[15px] xl:text-[16px] font-medium cursor-pointer 
									transition-all duration-300 rounded-lg block
									${active === nav.title 
										? "text-white" 
										: "text-secondary hover:text-white"
									}
								`}
							>
								{nav.title}
								
								{/* Animated underline */}
								<span className={`
									absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500
									transition-transform duration-300 origin-left
									${active === nav.title ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
								`} />
								
								{/* Hover glow effect */}
								<span className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
							</Link>
						</li>
					))}
					<li className="ml-2">
						<ResumeButton />
					</li>
				</ul>

				{/* Mobile Menu Toggle */}
				<div className="lg:hidden flex items-center">
					<button
						onClick={() => setToggle(!toggle)}
						className="menu-toggle relative w-[28px] h-[28px] flex items-center justify-center hover:bg-white/10 rounded-lg transition-all duration-300 p-1"
						aria-label="Toggle menu"
					>
						<Image
							src={toggle ? "/close.svg" : "/menu.svg"}
							width={24}
							height={24}
							alt="menu"
							className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] object-contain"
						/>
					</button>

					{/* Mobile Menu Overlay */}
					<div
						className={`
							fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 -z-10
							${toggle ? "opacity-100" : "opacity-0 pointer-events-none"}
						`}
						onClick={() => setToggle(false)}
					/>

					{/* Mobile Menu */}
					<div
						className={`
							mobile-menu fixed top-[72px] sm:top-[80px] right-4 
							p-6 rounded-2xl shadow-2xl
							min-w-[240px] sm:min-w-[280px]
							bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e]
							border border-white/10
							transform transition-all duration-300 ease-out
							${toggle 
								? "translate-x-0 opacity-100 scale-100" 
								: "translate-x-8 opacity-0 scale-95 pointer-events-none"
							}
						`}
					>
						<ul className="list-none flex flex-col gap-2 w-full">
							{navLinks.map((nav, index) => (
								<li
									key={nav.id}
									className="w-full"
									style={{ 
										animation: toggle ? `slideIn 0.3s ease-out ${index * 0.1}s forwards` : 'none',
										opacity: 0
									}}
								>
									<Link 
										href={`#${nav.id}`}
										onClick={() => {
											setToggle(false);
											setActive(nav.title);
										}}
										className={`
											group relative flex items-center gap-3 px-4 py-3 rounded-xl
											font-medium text-[16px] sm:text-[17px]
											transition-all duration-300
											${active === nav.title 
												? "bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-white shadow-lg" 
												: "text-secondary hover:text-white hover:bg-white/5"
											}
										`}
									>
										{/* Icon indicator */}
										<span className={`
											w-1.5 h-1.5 rounded-full transition-all duration-300
											${active === nav.title 
												? "bg-gradient-to-r from-purple-500 to-cyan-500 scale-100" 
												: "bg-secondary/50 scale-0 group-hover:scale-100"
											}
										`} />
										
										{nav.title}
										
										{/* Arrow indicator */}
										<span className={`
											ml-auto transition-transform duration-300
											${active === nav.title ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"}
										`}>
											→
										</span>
									</Link>
								</li>
							))}
							<li className="mt-4 pt-4 border-t border-white/10 w-full opacity-0"
								style={{ 
									animation: toggle ? `slideIn 0.3s ease-out ${navLinks.length * 0.1}s forwards` : 'none'
								}}
							>
								<ResumeButton />
							</li>
						</ul>
					</div>
				</div>
			</div>

			<style jsx>{`
				@keyframes slideIn {
					from {
						opacity: 0;
						transform: translateX(20px);
					}
					to {
						opacity: 1;
						transform: translateX(0);
					}
				}
			`}</style>
		</nav>
	);
};

export default Navbar;