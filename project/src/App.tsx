import React, { useState } from 'react';
import { Upload, Camera, Leaf, AlertCircle, CheckCircle, Info, Star, Clock, Droplets, Sun } from 'lucide-react';
import PlantDatabase from './data/PlantDatabase';
import ImageUploader from './components/ImageUploader';
import ResultsPanel from './components/ResultsPanel';
import Header from './components/Header';
import LoadingScreen from './components/LoadingScreen';

export interface PlantResult {
  id: string;
  name: string;
  scientificName: string;
  confidence: number;
  medicinalUses: string[];
  diseases: string[];
  healthStatus: 'healthy' | 'warning' | 'diseased';
  careRecommendations: string[];
  growingTips: string[];
  toxicity: 'safe' | 'caution' | 'toxic';
  activeCompounds: string[];
  image: string;
}

function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [results, setResults] = useState<PlantResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisHistory, setAnalysisHistory] = useState<PlantResult[]>([]);

  const simulateMLAnalysis = async (imageFile: File): Promise<PlantResult> => {
    // Simulate ML processing time
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Simulate ML model prediction (in real app, this would call your ML API)
    const plants = PlantDatabase.getAllPlants();
    const randomPlant = plants[Math.floor(Math.random() * plants.length)];
    
    // Add some randomization to make it feel more realistic
    const confidence = 85 + Math.random() * 12; // 85-97% confidence
    const hasDisease = Math.random() > 0.7;
    
    return {
      ...randomPlant,
      confidence: Math.round(confidence),
      healthStatus: hasDisease ? 'warning' : 'healthy',
      diseases: hasDisease ? ['Leaf Spot', 'Mild Nutrient Deficiency'] : []
    };
  };

  const handleImageUpload = async (file: File, imageUrl: string) => {
    setSelectedImage(imageUrl);
    setIsAnalyzing(true);
    setResults(null);

    try {
      const analysisResult = await simulateMLAnalysis(file);
      setResults(analysisResult);
      setAnalysisHistory(prev => [analysisResult, ...prev.slice(0, 4)]);
    } catch (error) {
      console.error('Analysis failed:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleNewAnalysis = () => {
    setSelectedImage(null);
    setResults(null);
    setIsAnalyzing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {isAnalyzing && <LoadingScreen />}
        
        {!selectedImage && !isAnalyzing && (
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Plant Medicinal Detection
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Upload a plant image to instantly identify species, detect diseases, and discover medicinal properties with AI-powered analysis
              </p>
            </div>

            <ImageUploader onImageUpload={handleImageUpload} />

            {/* Recent Analysis History */}
            {analysisHistory.length > 0 && (
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Analyses</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {analysisHistory.slice(0, 3).map((plant, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-gray-900">{plant.name}</h3>
                        <div className="flex items-center text-sm text-green-600">
                          <CheckCircle className="w-4 h-4 mr-1" />
                          {plant.confidence}%
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 mb-3">{plant.scientificName}</p>
                      <div className="flex flex-wrap gap-2">
                        {plant.medicinalUses.slice(0, 2).map((use, i) => (
                          <span key={i} className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded-full">
                            {use}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                  <Camera className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Identification</h3>
                <p className="text-gray-600">Advanced machine learning models trained on thousands of plant species</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                  <AlertCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Disease Detection</h3>
                <p className="text-gray-600">Identify plant diseases and health issues with detailed recommendations</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
                  <Star className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Medicinal Properties</h3>
                <p className="text-gray-600">Comprehensive database of therapeutic uses and active compounds</p>
              </div>
            </div>
          </div>
        )}

        {results && !isAnalyzing && (
          <ResultsPanel 
            result={results} 
            imageUrl={selectedImage!} 
            onNewAnalysis={handleNewAnalysis}
          />
        )}
      </main>
    </div>
  );
}

export default App;