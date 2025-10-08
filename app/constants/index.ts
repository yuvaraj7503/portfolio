export const navLinks = [
	{
		id: "about",
		title: "About",
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
	{
		title: "Full Stack Web Developer",
		icon: "/web.webp",
	},
	{
		title: "Mobile App Developer",
		icon: "/backend.webp",
	},
	// {
	// 	title: "UI/UX Designer",
	// 	icon: "/design.webp",
	// },
	{
		title: "Software Engineer",
		icon: "/creator.webp",
	},
	{
		title: "DevOps & Cloud Engineer",
		icon: "/backend.webp",
	},
	{
		title: "IoT Solutions Developer",
		icon: "/web.webp",
	},
	{
		title: "System Architect",
		icon: "/creator.webp",
	},
	{
		title: "Tech Team Lead",
		icon: "/backend.webp",
	},
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
		title: "Software Engineering Intern",
		company_name: "Xentrix High-Tech Private Limited",
		icon: "/company/xentrix.png",
		iconBg: "#383E56",
		date: "Jan 2024 - Mar 2024",
		points: [
			"Self-Taught Expertise: Enhanced proficiency in Next.js, Spring Boot, and MongoDB through hands-on learning.",
			"Insurance Claim System: Contributed to building responsive UI components using React and MERN stack.",
			"Collaborative Development: Worked closely with senior developers to implement features and resolve bugs.",
			"Agile Methodology: Participated in daily standups and sprint planning sessions."
		],
	},
	{
		title: "Software Engineer",
		company_name: "Xentrix High-Tech Private Limited",
		icon: "/company/xentrix.png",
		iconBg: "#E6DEDD",
		date: "Apr 2024 - Sep 2024",
		points: [
			"ERP Platform Development: Architected and developed BPO file auto-allocation and tracking system from scratch using Next.js, Spring Boot, and MongoDB.",
			"Insurance Claim Project: Created new pages and features in support role, enhancing user experience and system functionality.",
			"Full-Stack Implementation: Delivered end-to-end solutions with RESTful APIs and responsive frontend interfaces.",
			"Code Quality: Implemented best practices for scalable and maintainable code architecture."
		],
	},
	{
		title: "Full Stack Software Engineer",
		company_name: "Sustainabyte Private Limited",
		icon: "/company/sustainabyte.png",
		iconBg: "#383E56",
		date: "Dec 2024 - Present",
		points: [
			"IoT Mobile Applications: Developed Bluetooth interlocking system mobile app and PMEL welding tracking system with custom UI/UX design, analytics, and multiple views using Flutter.",
			"Building Management System (BMS): Architected and developing comprehensive BMS covering HVAC, STP, WTP, Lift, UPS, and Battery Management using .NET, InfluxDB, Next.js, SQL, and Python for live MQTT data processing and report generation.",
			"System Redesign: Identified critical bugs in existing BMS product and initiated complete system architecture redesign for improved scalability and performance.",
			"Freelance Project: Developed TRB TNPSC exam management system with both mobile (Flutter) and web app (MERN stack) from scratch.",
			"DevOps & Cloud: Implemented CI/CD pipelines using GitHub Actions and Jenkins, deployed applications on AWS and Azure.",
			"Technical Leadership: Leading as Senior Developer, managing project allocation, code reviews, and mentoring team members."
		],
	},
];
const testimonials = [
	{
		id: 1,
		testimonial:
			"GitHub is the world's leading platform for developers to collaborate, share code, and showcase projects. Check out my repositories ranging from full-stack applications",
		name: "Indian M",
		image: "/tech/github.webp",
		link: "https://github.com/Indian-1234/",
	},
	{
		id: 2,
		testimonial:
			"LinkedIn is a business and employment-focused social media platform. Connect with me professionally to explore collaboration opportunities and stay updated with my work.",
		name: "Indian M",
		image: "/socialmedia/linkedin.svg",
		link: "https://www.linkedin.com/in/indian-m/",
	},
	{
		id: 3,
		testimonial:
			"Reach out to me directly via email for project inquiries, collaboration opportunities, or any professional discussions. I'm always open to connecting!",
		name: "Indian M",
		image: "/company/gmail.png",
		link: "mailto:indiantechdigi@gmail.com",
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
		name: "BPO File Allocation & Tracking System",
		description:
			"Architected and developed an intelligent ERP platform for automated file allocation based on employee roles and real-time tracking. Built from scratch with role-based access control, automated workflow management, and comprehensive analytics dashboard for enhanced operational efficiency.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "springboot",
				color: "green-text-gradient",
			},
			{
				name: "mongodb",
				color: "pink-text-gradient",
			},
		],
		image: "/company/erpallocation.png",
		platform: "Web Application",
		deploy_link: "https://github.com/yourusername/bpo-erp-system",
	},
	{
		name: "AI-Powered Smart Reply System",
		description:
			"Integrated ChatGPT API to automate response handling in customer support workflows. Built intelligent reply generation system that analyzes incoming queries and provides context-aware automated responses for significantly reducing response time and improving customer satisfaction.",
		tags: [
			{
				name: "chatgpt-api",
				color: "blue-text-gradient",
			},
			{
				name: "nodejs",
				color: "green-text-gradient",
			},
			{
				name: "react",
				color: "pink-text-gradient",
			},
			{
				name: "ai",
				color: "blue-text-gradient",
			},
		],
		image: "/company/gbs.webp",
		platform: "AI Integration",
		deploy_link: "https://github.com/yourusername/smart-reply-system",
	},
	{
		name: "Insurance Claim Management System",
		description:
			"Delivered a responsive full-stack Insurance Claim System using MERN stack with comprehensive features. Includes claim submission workflows, document upload management, status tracking, and admin approval dashboard for improved claim processing efficiency and enhanced user experience.",
		tags: [
			{
				name: "mongodb",
				color: "green-text-gradient",
			},
			{
				name: "expressjs",
				color: "pink-text-gradient",
			},
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "nodejs",
				color: "green-text-gradient",
			},
		],
		image: "/company/hms.jpg",
		platform: "Full Stack Web",
		deploy_link: "https://github.com/yourusername/insurance-claim-system",
	},	
	{
		name: "TRB TNPSC Online Exam Platform",
		description:
			"Comprehensive online examination system for TRB TNPSC with role-based dashboards for Admin, Faculty, and Students. Features mobile exam interface built with Flutter, real-time analytics, exam scheduling, question bank management, automated result processing, and performance tracking capabilities.",
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
				name: "mongodb",
				color: "green-text-gradient",
			},
			{
				name: "firebase",
				color: "blue-text-gradient",
			},
		],
		image: "/company/trb.png",
		platform: "Mobile & Web App",
		deploy_link: "https://github.com/yourusername/trb-tnpsc-exam",
	},
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
	},
];

export { services, technologies, experiences, testimonials, projects };
