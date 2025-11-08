"use client";
import React, { useState, useEffect } from 'react';
import { 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiMongodb, 
  SiRedux, 
  SiJavascript, 
  SiTypescript, 
  SiGit,   
  SiExpress,
  SiTailwindcss,
  SiHtml5,
  SiCss3
} from 'react-icons/si';
import { SectionWrapper } from './HigherOrderComponents';

interface SkillData {
  name: string;
  Icon: React.ComponentType;
  color: string;
  iconColor: string;
}

interface FloatingParticleProps {
  delay: number;
}

interface MousePosition {
  x: number;
  y: number;
}

const skillsData: SkillData[] = [
  { name: 'React', Icon: SiReact, color: 'from-cyan-400 to-blue-500', iconColor: '#61DAFB' },
  { name: 'Next.js', Icon: SiNextdotjs, color: 'from-gray-800 to-black', iconColor: '#FFFFFF' },
  { name: 'Node.js', Icon: SiNodedotjs, color: 'from-green-400 to-emerald-600', iconColor: '#339933' },
  { name: 'MongoDB', Icon: SiMongodb, color: 'from-green-500 to-green-700', iconColor: '#47A248' },
  { name: 'Redux', Icon: SiRedux, color: 'from-purple-500 to-purple-700', iconColor: '#764ABC' },
  { name: 'JavaScript', Icon: SiJavascript, color: 'from-yellow-400 to-yellow-600', iconColor: '#F7DF1E' },
  { name: 'TypeScript', Icon: SiTypescript, color: 'from-blue-500 to-blue-700', iconColor: '#3178C6' },
  { name: 'Git', Icon: SiGit, color: 'from-orange-500 to-red-600', iconColor: '#F05032' },
  { name: 'Express.js', Icon: SiExpress, color: 'from-gray-600 to-gray-800', iconColor: '#FFFFFF' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, color: 'from-cyan-400 to-blue-500', iconColor: '#06B6D4' },
  { name: 'HTML 5', Icon: SiHtml5, color: 'from-orange-500 to-red-500', iconColor: '#E34F26' },
  { name: 'CSS 3', Icon: SiCss3, color: 'from-blue-400 to-blue-600', iconColor: '#1572B6' },
];

const FloatingParticle: React.FC<FloatingParticleProps> = ({ delay }) => (
  <div
    className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-float"
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${delay}s`,
      animationDuration: `${3 + Math.random() * 4}s`,
    }}
  />
);

const Skills: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.3} />
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

      {/* Mouse Follower Gradient */}
      <div
        className="pointer-events-none fixed w-96 h-96 rounded-full opacity-30 blur-3xl transition-all duration-300"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      <div className="relative z-10 flex flex-col items-center py-20 px-4">
        {/* Title Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block">
            <h1 className="text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-gradient mb-4">
              Technical Skills
            </h1>
            <div className="h-1 w-full bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full animate-pulse" />
          </div>
          <p className="text-xl text-gray-300 font-light tracking-wide">
            Mastering the future, one technology at a time
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl w-full">
          {skillsData.map((skill, index) => {
            const Icon = skill.Icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-75 transition-all duration-500 animate-pulse-slow`} />
                
                {/* Card */}
                <div className={`relative bg-slate-800/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 transition-all duration-500 ${
                  isHovered ? 'scale-110 rotate-3 shadow-2xl' : 'hover:scale-105'
                }`}>
                  {/* Icon Container */}
                  <div className="flex flex-col items-center space-y-4">
                    <div className={`relative p-6 rounded-2xl bg-gradient-to-br ${skill.color} shadow-lg transition-all duration-500 ${
                      isHovered ? 'rotate-12 scale-110' : ''
                    }`}>
                      {/* Inner Glow */}
                      <div className="absolute inset-0 bg-white/20 rounded-2xl blur-md" />
                      
                
                      
                      {/* Orbiting Dots */}
                      {isHovered && (
                        <>
                          <div className="absolute -top-2 -right-2 w-3 h-3 bg-white rounded-full animate-orbit" />
                          <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-white rounded-full animate-orbit animation-delay-1000" />
                        </>
                      )}
                    </div>
                    
                    {/* Skill Name */}
                    <span className={`text-lg font-bold text-white transition-all duration-500 ${
                      isHovered ? 'text-xl' : ''
                    }`}>
                      {skill.name}
                    </span>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ${
                          isHovered ? 'w-full' : 'w-0'
                        }`}
                      />
                    </div>
                  </div>
                  
                  {/* Corner Accents */}
                  <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-purple-400/30 rounded-tr-xl transition-all duration-500 group-hover:border-purple-400" />
                  <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-blue-400/30 rounded-bl-xl transition-all duration-500 group-hover:border-blue-400" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-4xl w-full">
          {[
            { label: 'Technologies', value: '12+' },
            { label: 'Projects', value: '20+' },
            { label: 'Experience', value: '1+ Years' },
          ].map((stat, i) => (
            <div key={i} className="text-center space-y-2 group">
              <div className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-gray-400 font-medium tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(40px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(40px) rotate(-360deg); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-blob { animation: blob 7s ease-in-out infinite; }
        .animate-gradient { 
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-orbit { animation: orbit 2s linear infinite; }
        .animate-pulse-slow { animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  );
};

export default SectionWrapper( Skills, "skills");