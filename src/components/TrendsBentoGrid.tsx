
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { TrendDataModal } from '@/components/TrendDataModal';
import { 
  Wind, 
  Heart, 
  BookOpen, 
  Shield
} from 'lucide-react';

const trendData = [
  {
    id: 1,
    title: 'Air Quality Index',
    subtitle: 'Environmental Health',
    value: '156 AQI',
    trend: '+12%',
    icon: Wind,
    color: 'from-red-500 via-orange-500 to-yellow-500',
    description: 'Real-time air quality measurements across major cities showing pollution levels and health impacts.',
    detailed: 'Air Quality Index (AQI) data from major metropolitan areas shows concerning trends in air pollution. Current readings indicate moderate to unhealthy levels in industrial zones, with PM2.5 and ozone being primary contributors. Weather patterns and seasonal changes significantly impact daily readings.'
  },
  {
    id: 2,
    title: 'COVID Statistics',
    subtitle: 'Public Health Data',
    value: '89%',
    trend: '-15%',
    icon: Heart,
    color: 'from-blue-500 via-purple-500 to-pink-500',
    description: 'Comprehensive COVID-19 statistics including vaccination rates, case trends, and recovery data.',
    detailed: 'COVID-19 tracking data shows vaccination coverage at 89% for primary doses in developed nations. Case rates have decreased by 15% month-over-month. Hospital capacity remains stable with improved treatment protocols and variant monitoring systems in place.'
  },
  {
    id: 3,
    title: 'Literacy Rates',
    subtitle: 'Education Statistics',
    value: '78.2%',
    trend: '+5.4%',
    icon: BookOpen,
    color: 'from-green-500 via-teal-500 to-cyan-500',
    description: 'Global literacy rates and educational achievement data across different demographics and regions.',
    detailed: 'Global literacy rates have improved to 78.2%, with significant gains in developing regions. Digital literacy programs and remote learning initiatives have contributed to a 5.4% increase. Gender gaps in education continue to narrow, particularly in STEM fields.'
  },
  {
    id: 4,
    title: 'Crime Statistics',
    subtitle: 'Public Safety Data',
    value: '2.1%',
    trend: '-8.3%',
    icon: Shield,
    color: 'from-purple-500 via-indigo-500 to-blue-500',
    description: 'Crime rate analysis including trends in various crime categories and community safety metrics.',
    detailed: 'Crime statistics show an overall decrease of 8.3% in reported incidents. Property crimes have declined significantly due to improved security measures and community policing initiatives. Violent crime rates remain at historic lows with enhanced prevention programs.'
  }
];

export const TrendsBentoGrid = () => {
  const [selectedTrend, setSelectedTrend] = useState<typeof trendData[0] | null>(null);

  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      {/* Enhanced 3D Background Effects */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 0.8, 0.3],
              y: [0, -100, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Live Data Dashboard 2024
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real-time insights into critical data metrics affecting our communities and environment
          </p>
        </motion.div>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {trendData.map((trend, index) => (
            <motion.div
              key={trend.id}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ 
                y: -15, 
                scale: 1.05,
                rotateX: 5,
                rotateY: 5,
              }}
              className="cursor-pointer perspective-1000 h-80"
              onClick={() => setSelectedTrend(trend)}
            >
              <Card className="h-full p-8 relative overflow-hidden group hover:shadow-2xl transition-all duration-500 transform-gpu">
                {/* Live Animated Background Gradient */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${trend.color} opacity-90`}
                  animate={{
                    background: [
                      `linear-gradient(135deg, ${trend.color.split(' ')[1]}, ${trend.color.split(' ')[3]}, ${trend.color.split(' ')[5]})`,
                      `linear-gradient(225deg, ${trend.color.split(' ')[3]}, ${trend.color.split(' ')[5]}, ${trend.color.split(' ')[1]})`,
                      `linear-gradient(315deg, ${trend.color.split(' ')[5]}, ${trend.color.split(' ')[1]}, ${trend.color.split(' ')[3]})`,
                      `linear-gradient(135deg, ${trend.color.split(' ')[1]}, ${trend.color.split(' ')[3]}, ${trend.color.split(' ')[5]})`
                    ]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />

                {/* Animated Pattern Overlay */}
                <div className="absolute inset-0 opacity-20">
                  <motion.div
                    className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(255,255,255,0.1)_50%,transparent_70%)]"
                    animate={{ x: [-100, 300] }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                  />
                </div>

                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-4 bg-white/20 rounded-xl backdrop-blur-sm">
                      <trend.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-white/80">Change</div>
                      <div className="text-xl font-bold text-white">{trend.trend}</div>
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-white mb-3">{trend.title}</h3>
                    <p className="text-white/90 text-base mb-4">{trend.subtitle}</p>
                    
                    <div className="mb-6">
                      <div className="text-5xl font-bold text-white mb-3">{trend.value}</div>
                      <p className="text-white/90 text-sm leading-relaxed">{trend.description}</p>
                    </div>
                  </div>

                  {/* Enhanced Hover Indicator */}
                  <motion.div
                    className="absolute bottom-6 right-6 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.2 }}
                  >
                    <motion.div
                      className="w-3 h-3 bg-white rounded-full"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for detailed view */}
      {selectedTrend && (
        <TrendDataModal
          trend={selectedTrend}
          isOpen={!!selectedTrend}
          onClose={() => setSelectedTrend(null)}
        />
      )}
    </div>
  );
};
