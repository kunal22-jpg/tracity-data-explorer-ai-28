
import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Environment } from '@react-three/drei';
import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Zap, Brain, BarChart3 } from 'lucide-react';

interface HeroSectionProps {
  onExplore: () => void;
}

const FloatingData = () => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#06b6d4" transparent opacity={0.8} />
      </mesh>
    </Float>
  );
};

const Scene3D = () => {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
      <Suspense fallback={null}>
        <Environment preset="night" />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        {/* Floating data cubes */}
        {Array.from({ length: 12 }).map((_, i) => (
          <group key={i} position={[
            (Math.random() - 0.5) * 16,
            (Math.random() - 0.5) * 12,
            (Math.random() - 0.5) * 8
          ]}>
            <FloatingData />
          </group>
        ))}
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Suspense>
    </Canvas>
  );
};

export const HeroSection: React.FC<HeroSectionProps> = ({ onExplore }) => {
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();
  
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const parallaxRotate = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const parallaxScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-30">
        <Scene3D />
      </div>
      
      {/* Enhanced Gradient Overlay with animation */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/50 to-slate-900/90"
        animate={{
          background: [
            "linear-gradient(to bottom, transparent, rgba(147, 51, 234, 0.5), rgba(15, 23, 42, 0.9))",
            "linear-gradient(to bottom, transparent, rgba(59, 130, 246, 0.5), rgba(15, 23, 42, 0.9))",
            "linear-gradient(to bottom, transparent, rgba(147, 51, 234, 0.5), rgba(15, 23, 42, 0.9))"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Parallax Tracity Title */}
          <motion.h1 
            style={{ 
              y: parallaxY,
              rotateX: parallaxRotate,
              scale: parallaxScale
            }}
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent perspective-1000 transform-gpu"
            initial={{ scale: 0.9 }}
            animate={{ 
              scale: [1, 1.05, 1],
              rotateY: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            Tracity
          </motion.h1>
          
          <motion.p 
            className="text-2xl md:text-3xl text-gray-300 mb-4 font-light"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Your Smart Public Data Explorer
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Explore interactive data visualizations with stunning 3D effects and AI-powered insights. 
            Discover global trends through immersive data storytelling.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              onClick={onExplore}
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <Zap className="w-5 h-5 mr-2" />
              Explore Data Trends
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <div className="flex items-center space-x-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <Brain className="w-5 h-5 text-cyan-400" />
                <span>AI-Powered</span>
              </div>
              <div className="flex items-center space-x-2">
                <BarChart3 className="w-5 h-5 text-purple-400" />
                <span>3D Interactive</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Enhanced floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
};
