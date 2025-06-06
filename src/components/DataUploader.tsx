
import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  Upload, 
  FileText, 
  Database, 
  Sparkles, 
  TrendingUp,
  Eye,
  Brain,
  BarChart3
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const DataUploader = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisMode, setAnalysisMode] = useState<'simple' | 'technical' | 'visual'>('simple');
  const { toast } = useToast();

  const handleFileUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      toast({
        title: "File uploaded successfully!",
        description: `${file.name} is ready for analysis.`,
      });
    }
  }, [toast]);

  const handleAnalyze = () => {
    if (selectedFile) {
      setIsAnalyzing(true);
      // Simulate AI analysis
      setTimeout(() => {
        setIsAnalyzing(false);
        toast({
          title: "Analysis complete!",
          description: "Your data insights are ready to explore.",
        });
      }, 3000);
    }
  };

  const sampleDatasets = [
    { name: 'Global GDP 2023', size: '2.4 MB', rows: '195 countries' },
    { name: 'Climate Data 2020-2023', size: '15.8 MB', rows: '50,000 records' },
    { name: 'Population Trends', size: '8.2 MB', rows: '10,000 cities' },
    { name: 'Education Statistics', size: '5.1 MB', rows: '2,500 schools' }
  ];

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
            Upload & Analyze Your Data
          </h2>
          <p className="text-lg text-gray-400">
            Transform your CSV or JSON files into powerful insights with AI
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="p-8 bg-black/20 backdrop-blur-md border-white/10">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <Upload className="w-6 h-6 mr-3 text-cyan-400" />
                Upload Dataset
              </h3>
              
              <Tabs defaultValue="upload" className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-black/20">
                  <TabsTrigger value="upload">Upload File</TabsTrigger>
                  <TabsTrigger value="sample">Sample Data</TabsTrigger>
                </TabsList>
                
                <TabsContent value="upload" className="space-y-6">
                  <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center hover:border-cyan-400 transition-colors duration-300">
                    <input
                      type="file"
                      accept=".csv,.json"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="file-upload"
                    />
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <FileText className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                      <p className="text-lg text-gray-300 mb-2">
                        Drop your CSV or JSON file here
                      </p>
                      <p className="text-sm text-gray-500">
                        or click to browse
                      </p>
                    </label>
                  </div>
                  
                  {selectedFile && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-4 border border-cyan-500/20"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white font-medium">{selectedFile.name}</p>
                          <p className="text-gray-400 text-sm">
                            {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                          Ready
                        </Badge>
                      </div>
                    </motion.div>
                  )}
                </TabsContent>
                
                <TabsContent value="sample" className="space-y-4">
                  {sampleDatasets.map((dataset, index) => (
                    <motion.div
                      key={dataset.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 cursor-pointer transition-all duration-300"
                      onClick={() => {
                        setSelectedFile(new File([dataset.name], dataset.name + '.csv'));
                        toast({
                          title: "Sample dataset selected!",
                          description: `${dataset.name} is ready for analysis.`,
                        });
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-white font-medium">{dataset.name}</h4>
                          <p className="text-gray-400 text-sm">{dataset.rows} • {dataset.size}</p>
                        </div>
                        <Database className="w-5 h-5 text-purple-400" />
                      </div>
                    </motion.div>
                  ))}
                </TabsContent>
              </Tabs>
            </Card>
          </motion.div>

          {/* Analysis Section */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="p-8 bg-black/20 backdrop-blur-md border-white/10">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <Sparkles className="w-6 h-6 mr-3 text-purple-400" />
                AI Analysis
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="text-sm text-gray-400 mb-3 block">Analysis Mode</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'simple', label: 'Simple', icon: Eye },
                      { id: 'technical', label: 'Technical', icon: Brain },
                      { id: 'visual', label: 'Visual', icon: BarChart3 }
                    ].map((mode) => (
                      <Button
                        key={mode.id}
                        variant={analysisMode === mode.id ? "default" : "outline"}
                        size="sm"
                        onClick={() => setAnalysisMode(mode.id as any)}
                        className={`flex flex-col items-center p-4 h-auto ${
                          analysisMode === mode.id
                            ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-transparent'
                            : 'bg-white/5 text-gray-300 border-white/20 hover:bg-white/10'
                        }`}
                      >
                        <mode.icon className="w-5 h-5 mb-1" />
                        <span className="text-xs">{mode.label}</span>
                      </Button>
                    ))}
                  </div>
                </div>
                
                <Button
                  onClick={handleAnalyze}
                  disabled={!selectedFile || isAnalyzing}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white py-6 text-lg font-semibold disabled:opacity-50"
                >
                  {isAnalyzing ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Analyzing Data...
                    </>
                  ) : (
                    <>
                      <TrendingUp className="w-5 h-5 mr-3" />
                      Generate Insights
                    </>
                  )}
                </Button>
                
                {isAnalyzing && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-4 border border-cyan-500/20"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="animate-pulse w-3 h-3 bg-cyan-400 rounded-full"></div>
                      <p className="text-gray-300">AI is analyzing your data patterns...</p>
                    </div>
                  </motion.div>
                )}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
