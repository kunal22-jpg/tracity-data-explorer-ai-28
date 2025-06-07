
import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { 
  Brain, 
  BarChart3, 
  Zap,
  Eye
} from 'lucide-react';

const features = [
  {
    icon: Eye,
    title: '3D Data Visualization',
    description: 'Experience data through immersive 3D interfaces with smooth animations and interactive hover effects.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Brain,
    title: 'AI-Powered Insights',
    description: 'Get instant analysis and trend detection powered by advanced AI algorithms.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: BarChart3,
    title: 'Interactive Trends',
    description: 'Explore real-time data trends across multiple industries with detailed breakdowns.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Zap,
    title: 'Real-time Updates',
    description: 'Stay current with live data feeds and instant trend notifications.',
    color: 'from-orange-500 to-red-500'
  }
];

export const FeaturesSection = () => {
  return (
    <div className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Next-Gen Data Experience
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover trends through immersive 3D visualizations and AI-powered insights
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="h-full"
            >
              <Card className="h-full p-6 bg-black/20 backdrop-blur-md border-white/10 hover:border-white/20 transition-all duration-300">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
