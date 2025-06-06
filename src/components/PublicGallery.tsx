
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  TrendingUp, 
  Heart, 
  Eye, 
  Download,
  BarChart3,
  PieChart,
  LineChart,
  ScatterChart
} from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    title: 'Global Climate Trends 2023',
    author: 'DataScientist_Alex',
    description: 'Temperature and precipitation patterns across major cities worldwide',
    chartType: 'line',
    views: 1245,
    likes: 89,
    badge: 'Trending',
    image: 'https://images.unsplash.com/photo-1569163139394-de4e4f43e4e9?w=400&h=250&fit=crop',
    tags: ['Climate', 'Environment', 'Global']
  },
  {
    id: 2,
    title: 'Tech Startup Funding Analysis',
    author: 'InvestorInsights',
    description: 'Venture capital investments by sector and geographic region',
    chartType: 'bar',
    views: 2156,
    likes: 142,
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
    tags: ['Finance', 'Startups', 'Technology']
  },
  {
    id: 3,
    title: 'Population Demographics by Age',
    author: 'PopulationExplorer',
    description: 'Age distribution across different countries and continents',
    chartType: 'pie',
    views: 987,
    likes: 56,
    badge: 'Educational',
    image: 'https://images.unsplash.com/photo-1477281765962-ef34e8bb0967?w=400&h=250&fit=crop',
    tags: ['Demographics', 'Society', 'Statistics']
  },
  {
    id: 4,
    title: 'Energy Consumption vs GDP',
    author: 'EnergyAnalyst',
    description: 'Correlation between energy usage and economic output',
    chartType: 'scatter',
    views: 756,
    likes: 34,
    badge: 'Insightful',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=250&fit=crop',
    tags: ['Energy', 'Economics', 'Sustainability']
  },
  {
    id: 5,
    title: 'Social Media Usage Patterns',
    author: 'DigitalTrends',
    description: 'Platform preferences across age groups and regions',
    chartType: 'bar',
    views: 1567,
    likes: 98,
    badge: 'Viral',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop',
    tags: ['Social Media', 'Digital', 'Behavior']
  },
  {
    id: 6,
    title: 'Education Funding Analysis',
    author: 'EduPolicy',
    description: 'Government spending on education by country and outcomes',
    chartType: 'line',
    views: 432,
    likes: 27,
    badge: 'Research',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=250&fit=crop',
    tags: ['Education', 'Policy', 'Government']
  }
];

const chartIcons = {
  bar: BarChart3,
  pie: PieChart,
  line: LineChart,
  scatter: ScatterChart
};

const badgeColors = {
  'Trending': 'bg-red-500/20 text-red-400 border-red-500/30',
  'Popular': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  'Educational': 'bg-green-500/20 text-green-400 border-green-500/30',
  'Insightful': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  'Viral': 'bg-pink-500/20 text-pink-400 border-pink-500/30',
  'Research': 'bg-orange-500/20 text-orange-400 border-orange-500/30'
};

export const PublicGallery = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = Array.from(new Set(galleryItems.flatMap(item => item.tags)));

  const filteredItems = galleryItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || item.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Public Gallery
          </h2>
          <p className="text-lg text-gray-400">
            Explore datasets, charts, and insights shared by our community
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 space-y-4"
        >
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search datasets, authors, or topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-black/20 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400"
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            <Button
              variant={selectedTag === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTag(null)}
              className={selectedTag === null 
                ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white' 
                : 'bg-white/5 text-gray-300 border-white/20 hover:bg-white/10'
              }
            >
              All
            </Button>
            {allTags.map((tag) => (
              <Button
                key={tag}
                variant={selectedTag === tag ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                className={selectedTag === tag 
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white' 
                  : 'bg-white/5 text-gray-300 border-white/20 hover:bg-white/10'
                }
              >
                {tag}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const ChartIcon = chartIcons[item.chartType as keyof typeof chartIcons];
            return (
              <motion.div
                key={item.id}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="overflow-hidden bg-black/20 backdrop-blur-md border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge className={badgeColors[item.badge as keyof typeof badgeColors]}>
                        {item.badge}
                      </Badge>
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <div className="flex items-center space-x-2 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                        <ChartIcon className="w-4 h-4 text-cyan-400" />
                        <span className="text-white text-xs capitalize">{item.chartType} Chart</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-2 line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                      {item.description}
                    </p>
                    <p className="text-cyan-400 text-sm mb-4">by {item.author}</p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs bg-white/5 text-gray-300 border-white/20">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-gray-400 text-sm">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{item.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{item.likes}</span>
                        </div>
                      </div>
                      <Button size="sm" variant="outline" className="bg-white/5 border-white/20 text-white hover:bg-white/10">
                        <Download className="w-4 h-4 mr-1" />
                        View
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
        
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <TrendingUp className="w-16 h-16 mx-auto mb-4 text-gray-600" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">No datasets found</h3>
            <p className="text-gray-500">Try adjusting your search terms or filters</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};
