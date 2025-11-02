import { icons } from "lucide-react";
import { title } from "process";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "skills",
		title: "Skills",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
	
];

const services = [
	// {
	// 	title: "Full Stack Web Developer",
	// 	icon: "/web.webp",
	// },
	// {
	// 	title: "MongoDB",
	// 	icon: "/backend.webp",
	// },
	// // {
	// // 	title: "UI/UX Designer",
	// // 	icon: "/design.webp",
	// // },
	// {
	// 	title: "Express.js",
	// 	icon: "/creator.webp",
	// },
	// {
	// 	title: "React.js ",
	// 	icon: "/backend.webp",
	// },
	// {
	// 	title: "Next.js",
	// 	icon: "/web.webp",
	// },
	// {
	// 	title: "Node.js",
	// 	icon: "/creator.webp",
	// },
	// {
	// 	title: "Redux",
	// 	icon: "/backend.webp",
		
	// },
	// {
	// 	title: "JavaScript",
	// 	icon: "/backend.webp",
	// }
];

const technologies = [
	{
		name: "HTML 5",
		icon: "/tech/html.webp",
	},
	{
		name: "CSS 3",
		icon: "/tech/css.webp",
	},
	{
		name: "JavaScript",
		icon: "/tech/javascript.webp",
	},
	{
		name: "TypeScript",
		icon: "/tech/typescript.webp",
	},
	{
		name: "React JS",
		icon: "/tech/reactjs.webp",
	},
	{
		name: "Next.JS",
		icon: "/tech/nextjs.svg",
	},
	{
		name: "Redux Toolkit",
		icon: "/tech/redux.webp",
	},
	{
		name: "Tailwind CSS",
		icon: "/tech/tailwind.webp",
	},
	{
		name: "Three JS",
		icon: "/tech/threejs.webp",
	},
	{
		name: "git",
		icon: "/tech/git.webp",
	},
	{
		name: "figma",
		icon: "/tech/figma.webp",
	},
	{
		name: "wordpress",
		icon: "/tech/wordpress.webp",
	},
	{
		name: "bootstrap",
		icon: "/tech/bootstrap.webp",
	},
];

const experiences = [
	{
		title: "Full Stack Developer Intern",
		company_name: "Besant Technologies Pvt Ltd",
		icon: "/company/besant.jpeg",
		iconBg: "#2289F2",
		date: "July 2024 - Dec 2024",
		points: [
			
  " Frontend Development (Client Side)Start by picking a modern frontend framework—React is the most popular choice. Focus on learning the fundamentals: Components, Props, and State, along with React Hooks like useState, useEffect, and useContext. Understand how routing works using React Router or Next.js Router. For styling, learn Tailwind CSS or another CSS framework for fast and responsive design. Get comfortable making API calls using Axios or the native Fetch API, and explore state management using Redux Toolkit or the Context API. Optionally, dive into Next.js to understand server-side rendering and improve SEO.",
 
  
  "Backend development (Server Side) focuses on handling the application logic, APIs, authentication, and databases. Start with Node.js as the runtime and Express.js as the framework for building APIs. Learn to create REST APIs with methods like GET, POST, PUT, and DELETE. Understand middleware, error handling, and how to implement authentication using JWT, cookies, or sessions. Learn to manage file uploads and secure your APIs using techniques like CORS and rate limiting."
		],
	},
	
	{
		title: "Full Stack Software developer",
		company_name: "Sustainabyte Private Limited",
		icon: "/company/sustainabyte.png",
		iconBg: "#383E56",
		date: "Jun 2025 - Present",
		points: [
			  "📊 Real-Time Charts — Show live welding parameters like current and voltage using auto-updating charts for instant monitoring.",
  "🧭 Clear Layout Structure — Organize data with status on top, charts in the center, and filters on the side for easy navigation.",
  "⚡ Smart Filters & Time Range — Allow users to switch between daily, weekly, or custom views and select specific welders or machines quickly.",
  "🌐 Alerts & Status Indicators — Use color codes and icons to display machine health and trigger alerts for abnormal readings or downtime.",
  "📱 Modern & Responsive UI — Design with dark mode, clean visuals, and responsive layouts that work smoothly on any device."
		],
	},
];
const testimonials = [
	{
		id: 1,
		testimonial:
			"GitHub is the world's leading platform for developers to collaborate, share code, and showcase projects. Check out my repositories ranging from full-stack applications",
		name: "YUVARAJ P",
		image: "/tech/github.webp",
		link: "https://github.com/yuvaraj7503",
	},
	{
		id: 2,
		testimonial:
			"LinkedIn is a business and employment-focused social media platform. Connect with me professionally to explore collaboration opportunities and stay updated with my work.",
		name: "YUVARAJ P",
		image: "/socialmedia/linkedin.svg",
		link: "https://www.linkedin.com/in/yuvarajpoonusamy/",
	},
	{
		id: 3,
		testimonial:
			"Reach out to me directly via email for project inquiries, collaboration opportunities, or any professional discussions. I'm always open to connecting!",
		name: "YUVARAJ P",
		image: "/company/gmail.png",
		link: "mailto:yuvaraj7503@gmail.com",
	},
	
];

const projects: {
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: string;
	source_code_link?: string;
	deploy_link: string;
	platform: "Netlify"|"IoT Web Application" | "Vercel" | "Figma" | "Wordpress" | "Web" | "Full Stack Web" | "Mobile" | "Desktop" | "AI Integration" | "Web Application" | "Mobile & Web App";
}[] = [
	

	

	{
		name: "Welding Tracking & Analytics System",
		description:
			"Industrial IoT-based welding tracking system designed from scratch for major automotive and manufacturing clients. Features Flutter mobile app for real-time monitoring, web dashboard for comprehensive reporting, and Bluetooth-based equipment interlocking for tracking welding parameters and operator performance metrics.",
		tags: [
			{
				name: "flutter",
				color: "blue-text-gradient",
			},
			{
				name: "nextjs",
				color: "pink-text-gradient",
			},
			{
				name: "iot",
				color: "green-text-gradient",
			},
			{
				name: "bluetooth",
				color: "blue-text-gradient",
			},
			{
				name: "analytics",
				color: "green-text-gradient",
			},
		],
		image: "/company/welding.png",
		platform: "Mobile & Web App",
		deploy_link: "https://github.com/yourusername/welding-tracking-system",
	},
	{
		name: "Optibyte Building Management System (BMS)",
		description:
			"Comprehensive Building Management System designed from scratch for real-time monitoring and control of HVAC, STP, WTP, Lift, UPS, and Battery Management. Built with .NET backend, InfluxDB, Next.js dashboard, and Python for live MQTT data processing with automated report generation.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "dotnet",
				color: "green-text-gradient",
			},
			{
				name: "influxdb",
				color: "pink-text-gradient",
			},
			{
				name: "python",
				color: "blue-text-gradient",
			},
			{
				name: "mqtt",
				color: "green-text-gradient",
			},
			{
				name: "iot",
				color: "pink-text-gradient",
			},
		],
		image: "/company/bms.png",
		platform: "IoT Web Application",
		deploy_link: "https://bms.optibyte.com",
	},{
		name: "Energy Monitoring Dashboard",
		description:
			 "The Energy Monitoring Dashboard provides real-time tracking of power, voltage, and energy usage. It features interactive charts to visualize daily, weekly, and monthly data trends. Users can apply smart filters to view specific machines or time ranges. A clean and structured layout ensures quick insights at a glance. This dashboard helps in optimizing energy consumption and improving operational efficiency.",
		tags: [
			{
				name: "node.js",
				color: "blue-text-gradient",
			},
			{
				name: "nextjs",
				color: "pink-text-gradient",
			},
			{
				name: "iot",
				color: "green-text-gradient",
			},
			{
				name: "bluetooth",
				color: "blue-text-gradient",
			},
			{
				name: "analytics",
				color: "green-text-gradient",
			},
		],
		image: "/company/ems.png",
		platform: "Mobile & Web App",
		deploy_link: "https://github.com/yourusername/welding-tracking-system",
	},
];

export { services, technologies, experiences, testimonials, projects };
