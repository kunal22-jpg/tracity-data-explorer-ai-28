
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X, TrendingUp, BarChart3, Globe } from 'lucide-react';

interface TrendDataModalProps {
  trend: {
    id: number;
    title: string;
    subtitle: string;
    value: string;
    trend: string;
    icon: React.ComponentType<any>;
    color: string;
    description: string;
    detailed: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

export const TrendDataModal: React.FC<TrendDataModalProps> = ({ trend, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.8, y: 50, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Card className="bg-black/40 backdrop-blur-xl border-white/20 overflow-hidden">
              {/* Header */}
              <div className={`relative p-8 bg-gradient-to-br ${trend.color}`}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="absolute top-4 right-4 text-white hover:bg-white/20"
                >
                  <X className="w-5 h-5" />
                </Button>
                
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                    <trend.icon className="w-12 h-12 text-white" />
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold text-white mb-2">{trend.title}</h2>
                    <p className="text-white/80 text-lg">{trend.subtitle}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-white/80 text-sm mb-1">Current Value</div>
                    <div className="text-3xl font-bold text-white">{trend.value}</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-white/80 text-sm mb-1">Growth Rate</div>
                    <div className="text-3xl font-bold text-white">{trend.trend}</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Description */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                      <BarChart3 className="w-6 h-6 mr-3 text-cyan-400" />
                      Overview
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      {trend.detailed}
                    </p>
                    
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white">Key Metrics</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/5 rounded-lg p-3">
                          <div className="text-cyan-400 text-sm">Market Size</div>
                          <div className="text-white font-bold">{trend.value}</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-3">
                          <div className="text-purple-400 text-sm">YoY Growth</div>
                          <div className="text-white font-bold">{trend.trend}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Visualizations */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                      <Globe className="w-6 h-6 mr-3 text-purple-400" />
                      Global Impact
                    </h3>
                    
                    {/* Animated Chart Placeholder */}
                    <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-6 mb-6">
                      <div className="flex items-end justify-between h-32 space-x-2">
                        {Array.from({ length: 7 }).map((_, i) => (
                          <motion.div
                            key={i}
                            className={`bg-gradient-to-t ${trend.color} rounded-t-lg flex-1 opacity-80`}
                            initial={{ height: 0 }}
                            animate={{ height: `${Math.random() * 80 + 20}%` }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                          />
                        ))}
                      </div>
                      <div className="mt-4 text-center text-gray-400 text-sm">
                        Growth trajectory over the past 7 quarters
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-white/10">
                        <span className="text-gray-300">North America</span>
                        <span className="text-white font-semibold">34%</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-white/10">
                        <span className="text-gray-300">Europe</span>
                        <span className="text-white font-semibold">28%</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-white/10">
                        <span className="text-gray-300">Asia Pacific</span>
                        <span className="text-white font-semibold">31%</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-300">Other Regions</span>
                        <span className="text-white font-semibold">7%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center space-x-4 mt-8 pt-6 border-t border-white/10">
                  <Button
                    variant="outline"
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  >
                    Download Report
                  </Button>
                  <Button
                    className={`bg-gradient-to-r ${trend.color} text-white hover:opacity-90`}
                  >
                    Explore More Data
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
