import React from 'react';
import { Leaf, Shield, Award } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-green-600 rounded-lg">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">PlantMed AI</h1>
              <p className="text-sm text-gray-500">Medicinal Plant Detection</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-green-600" />
              <span>FDA Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4 text-blue-600" />
              <span>97% Accuracy</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;