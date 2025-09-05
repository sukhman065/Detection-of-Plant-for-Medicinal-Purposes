import React from 'react';
import { ArrowLeft, CheckCircle, AlertTriangle, XCircle, Info, Star, Droplets, Sun, Clock, Shield } from 'lucide-react';
import type { PlantResult } from '../App';

interface ResultsPanelProps {
  result: PlantResult;
  imageUrl: string;
  onNewAnalysis: () => void;
}

const ResultsPanel: React.FC<ResultsPanelProps> = ({ result, imageUrl, onNewAnalysis }) => {
  const getHealthStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy': return <CheckCircle className="w-6 h-6 text-green-500" />;
      case 'warning': return <AlertTriangle className="w-6 h-6 text-yellow-500" />;
      case 'diseased': return <XCircle className="w-6 h-6 text-red-500" />;
      default: return <Info className="w-6 h-6 text-gray-500" />;
    }
  };

  const getToxicityColor = (toxicity: string) => {
    switch (toxicity) {
      case 'safe': return 'text-green-600 bg-green-50 border-green-200';
      case 'caution': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'toxic': return 'text-red-600 bg-red-50 border-red-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={onNewAnalysis}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>New Analysis</span>
        </button>
        
        <div className="flex items-center space-x-3">
          {getHealthStatusIcon(result.healthStatus)}
          <span className="text-lg font-semibold capitalize">{result.healthStatus}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Image Section */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <img 
              src={imageUrl} 
              alt="Analyzed plant" 
              className="w-full h-80 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{result.name}</h2>
                  <p className="text-gray-600 italic">{result.scientificName}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="text-lg font-semibold">{result.confidence}%</span>
                  </div>
                  <p className="text-sm text-gray-500">Confidence</p>
                </div>
              </div>
              
              {/* Toxicity Badge */}
              <div className={`inline-flex items-center px-3 py-1 rounded-full border text-sm font-medium ${getToxicityColor(result.toxicity)}`}>
                <Shield className="w-4 h-4 mr-2" />
                {result.toxicity.charAt(0).toUpperCase() + result.toxicity.slice(1)} for consumption
              </div>
            </div>
          </div>
        </div>

        {/* Analysis Results */}
        <div className="space-y-6">
          {/* Medicinal Uses */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Star className="w-6 h-6 text-green-600 mr-2" />
              Medicinal Properties
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {result.medicinalUses.map((use, index) => (
                <div key={index} className="flex items-center p-3 bg-green-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-green-900">{use}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Active Compounds */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Active Compounds</h3>
            <div className="flex flex-wrap gap-2">
              {result.activeCompounds.map((compound, index) => (
                <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                  {compound}
                </span>
              ))}
            </div>
          </div>

          {/* Health Status & Diseases */}
          {result.diseases.length > 0 && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 text-yellow-600 mr-2" />
                Detected Issues
              </h3>
              <div className="space-y-2">
                {result.diseases.map((disease, index) => (
                  <div key={index} className="flex items-center p-3 bg-yellow-50 rounded-lg">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0" />
                    <span className="text-yellow-900">{disease}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Care Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <Droplets className="w-6 h-6 text-blue-600 mr-2" />
            Care Recommendations
          </h3>
          <div className="space-y-4">
            {result.careRecommendations.map((recommendation, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-blue-600 text-sm font-semibold">{index + 1}</span>
                </div>
                <p className="text-gray-700">{recommendation}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <Sun className="w-6 h-6 text-yellow-600 mr-2" />
            Growing Tips
          </h3>
          <div className="space-y-4">
            {result.growingTips.map((tip, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-yellow-600 text-sm font-semibold">{index + 1}</span>
                </div>
                <p className="text-gray-700">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6">
        <div className="flex items-start space-x-3">
          <Info className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-amber-900 font-semibold mb-2">Medical Disclaimer</h4>
            <p className="text-amber-800 text-sm leading-relaxed">
              This application provides educational information only and should not replace professional medical advice. 
              Always consult with a qualified healthcare provider before using any plant for medicinal purposes. 
              Plant identification accuracy may vary, and misidentification could be dangerous.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPanel;