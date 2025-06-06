
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { TrendDataModal } from '@/components/TrendDataModal';
import { 
  TrendingUp, 
  Zap, 
  Globe, 
  Brain, 
  Leaf, 
  Users, 
  Smartphone,
  DollarSign,
  Heart
} from 'lucide-react';

const trendData = [
  {
    id: 1,
    title: 'AI Revolution',
    subtitle: 'Machine Learning Growth',
    value: '342%',
    trend: '+89%',
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
    description: 'AI adoption has surged across industries with machine learning implementations growing exponentially.',
    detailed: 'Artificial Intelligence has experienced unprecedented growth in 2024, with enterprise adoption increasing by 342% year-over-year. Key drivers include large language models, computer vision advances, and automation technologies.'
  },
  {
    id: 2,
    title: 'Climate Action',
    subtitle: 'Renewable Energy',
    value: '67%',
    trend: '+23%',
    icon: Leaf,
    color: 'from-green-500 to-emerald-500',
    description: 'Global renewable energy capacity reaches new heights as countries accelerate green transitions.',
    detailed: 'Renewable energy now accounts for 67% of new power capacity additions globally. Solar and wind technologies lead the charge, with battery storage solutions enabling grid stability and 24/7 clean energy supply.'
  },
  {
    id: 3,
    title: 'Digital Economy',
    subtitle: 'E-commerce Growth',
    value: '$5.8T',
    trend: '+18%',
    icon: DollarSign,
    color: 'from-blue-500 to-cyan-500',
    description: 'Global e-commerce continues its rapid expansion, transforming retail landscapes worldwide.',
    detailed: 'The global e-commerce market reached $5.8 trillion in 2024, driven by mobile commerce, social shopping, and improved logistics. Cross-border trade and digital payments fuel continued growth.'
  },
  {
    id: 4,
    title: 'Remote Work',
    subtitle: 'Hybrid Models',
    value: '78%',
    trend: '+12%',
    icon: Users,
    color: 'from-orange-500 to-red-500',
    description: 'Hybrid work models become the new standard as organizations embrace flexible work arrangements.',
    detailed: 'Remote and hybrid work arrangements are now permanent for 78% of knowledge workers globally. This shift has revolutionized workplace culture, productivity tools, and urban planning strategies.'
  },
  {
    id: 5,
    title: 'Health Tech',
    subtitle: 'Digital Health',
    value: '156%',
    trend: '+45%',
    icon: Heart,
    color: 'from-pink-500 to-rose-500',
    description: 'Digital health solutions revolutionize healthcare delivery and patient engagement.',
    detailed: 'Telemedicine, wearable devices, and AI diagnostics have transformed healthcare accessibility. Digital health investments reached record highs, improving patient outcomes and reducing costs.'
  },
  {
    id: 6,
    title: 'Space Economy',
    subtitle: 'Commercial Space',
    value: '$469B',
    trend: '+34%',
    icon: Globe,
    color: 'from-indigo-500 to-purple-500',
    description: 'Commercial space industry reaches new heights with satellite constellations and space tourism.',
    detailed: 'The space economy surpassed $469 billion in 2024, driven by satellite internet, space manufacturing, and commercial launches. Private companies now dominate space access and services.'
  },
  {
    id: 7,
    title: 'Electric Vehicles',
    subtitle: 'EV Adoption',
    value: '31%',
    trend: '+67%',
    icon: Zap,
    color: 'from-yellow-500 to-orange-500',
    description: 'Electric vehicle sales accelerate globally as charging infrastructure expands rapidly.',
    detailed: 'Electric vehicles now represent 31% of new car sales globally, with China, Europe, and North America leading adoption. Battery technology improvements and government incentives drive growth.'
  },
  {
    id: 8,
    title: '5G Expansion',
    subtitle: 'Network Coverage',
    value: '45%',
    trend: '+28%',
    icon: Smartphone,
    color: 'from-teal-500 to-green-500',
    description: '5G networks expand globally, enabling new technologies and transforming connectivity.',
    detailed: '5G coverage now reaches 45% of the global population, enabling IoT applications, autonomous vehicles, and immersive technologies. Edge computing and network slicing unlock new possibilities.'
  },
  {
    id: 9,
    title: 'Crypto Adoption',
    subtitle: 'Digital Assets',
    value: '24%',
    trend: '+91%',
    icon: TrendingUp,
    color: 'from-violet-500 to-purple-500',
    description: 'Cryptocurrency and blockchain technology gain mainstream adoption across industries.',
    detailed: 'Digital asset adoption reached 24% globally, with institutional investment and regulatory clarity driving growth. DeFi, NFTs, and central bank digital currencies reshape financial systems.'
  }
];

export const TrendsBentoGrid = () => {
  const [selectedTrend, setSelectedTrend] = useState<typeof trendData[0] | null>(null);

  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      {/* 3D Background Effects */}
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
            Global Data Trends 2024
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore interactive data visualizations showcasing the most significant trends shaping our world
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {trendData.map((trend, index) => (
            <motion.div
              key={trend.id}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                rotateX: 5,
                rotateY: 5,
              }}
              className={`${
                index === 0 || index === 4 || index === 8 
                  ? 'md:col-span-2 lg:col-span-1' 
                  : index === 2 || index === 6
                  ? 'lg:col-span-2'
                  : ''
              } cursor-pointer perspective-1000`}
              onClick={() => setSelectedTrend(trend)}
            >
              <Card className={`h-full p-6 bg-gradient-to-br ${trend.color} relative overflow-hidden group hover:shadow-2xl transition-all duration-500 transform-gpu`}>
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
                  <motion.div
                    className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(255,255,255,0.1)_50%,transparent_70%)]"
                    animate={{ x: [-100, 200] }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                  />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                      <trend.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-white/80">Growth</div>
                      <div className="text-lg font-bold text-white">{trend.trend}</div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{trend.title}</h3>
                  <p className="text-white/80 text-sm mb-4">{trend.subtitle}</p>
                  
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-white mb-2">{trend.value}</div>
                    <p className="text-white/90 text-sm leading-relaxed">{trend.description}</p>
                  </div>

                  {/* Hover Indicator */}
                  <motion.div
                    className="absolute bottom-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-white rounded-full"
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
