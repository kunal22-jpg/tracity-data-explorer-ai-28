
import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { 
  Upload, 
  Brain, 
  BarChart3, 
  MessageSquare, 
  Award, 
  Users, 
  Smartphone,
  Zap
} from 'lucide-react';

const features = [
  {
    icon: Upload,
    title: 'Effortless Dataset Management',
    description: 'Upload CSV/JSON files or choose from our curated collection. Auto-preview and structure detection for seamless analysis.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Brain,
    title: 'AI-Powered Insights',
    description: 'Generate comprehensive summaries in Simple, Technical, or Visual modes. Perfect for users of all skill levels.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: BarChart3,
    title: 'Smart Chart Generation',
    description: 'Automatically create the most effective charts tailored to your data patterns. Bar, pie, line, scatter - we choose the best.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: MessageSquare,
    title: 'Natural Language Queries',
    description: 'Ask questions in everyday language and receive context-aware answers instantly with advanced Vector Search.',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Award,
    title: 'Engaging Insights',
    description: 'Discover bite-sized facts with gamified badges. Encouraging sharing and exploration through achievements.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Users,
    title: 'Public Gallery',
    description: 'Browse datasets, charts, and insights from other users. Upvote and search for inspiration in our community.',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Zap,
    title: 'Immersive 3D Experience',
    description: 'Enjoy visually stunning 3D animations and smooth transitions that make data exploration fun and engaging.',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: Smartphone,
    title: 'Mobile-Friendly Design',
    description: 'Access Tracity on the go with a fully responsive layout optimized for smartphone performance.',
    color: 'from-pink-500 to-rose-500'
  }
];

export const FeaturesSection = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience the future of data exploration with our comprehensive suite of AI-powered tools
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
