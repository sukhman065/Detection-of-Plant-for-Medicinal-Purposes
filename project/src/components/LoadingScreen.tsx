import React from 'react';
import { Loader2, Brain, Microscope, Database } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  const steps = [
    { icon: Brain, text: "Analyzing image with AI", delay: 0 },
    { icon: Database, text: "Matching against plant database", delay: 1000 },
    { icon: Microscope, text: "Detecting medicinal properties", delay: 2000 }
  ];

  return (
    <div className="fixed inset-0 bg-white bg-opacity-95 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center">
        {/* Main Loading Animation */}
        <div className="relative mb-8">
          <div className="w-20 h-20 mx-auto">
            <Loader2 className="w-20 h-20 text-green-600 animate-spin" />
          </div>
          <div className="absolute inset-0 w-20 h-20 mx-auto border-4 border-green-200 rounded-full animate-pulse"></div>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Analyzing Your Plant
        </h2>
        <p className="text-gray-600 mb-8">
          Our AI is examining the image for species identification and medicinal properties
        </p>
        
        {/* Progress Steps */}
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-center justify-center space-x-3 opacity-50 animate-pulse"
              style={{
                animationDelay: `${step.delay}ms`,
                animationDuration: '1s'
              }}
            >
              <step.icon className="w-5 h-5 text-green-600" />
              <span className="text-gray-700">{step.text}</span>
            </div>
          ))}
        </div>
        
        {/* Progress Bar */}
        <div className="mt-8">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full animate-pulse" style={{width: '100%'}}></div>
          </div>
          <p className="text-sm text-gray-500 mt-2">Processing usually takes 2-3 seconds</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;