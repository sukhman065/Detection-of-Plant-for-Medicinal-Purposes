import React, { useCallback, useState } from 'react';
import { Upload, Camera, AlertCircle } from 'lucide-react';

interface ImageUploaderProps {
  onImageUpload: (file: File, imageUrl: string) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload }) => {
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFiles = useCallback((files: FileList | null) => {
    if (!files || files.length === 0) return;
    
    const file = files[0];
    
    // Validate file type
    if (!file.type.startsWith('image/')) {
      setError('Please select a valid image file (JPEG, PNG, WebP)');
      return;
    }
    
    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      setError('Image size must be less than 5MB');
      return;
    }
    
    setError(null);
    
    // Create preview URL
    const imageUrl = URL.createObjectURL(file);
    onImageUpload(file, imageUrl);
  }, [onImageUpload]);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    handleFiles(e.dataTransfer.files);
  }, [handleFiles]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
  }, [handleFiles]);

  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
          dragActive
            ? 'border-green-400 bg-green-50'
            : 'border-gray-300 bg-white hover:border-green-300 hover:bg-green-50'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          id="file-upload"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          accept="image/*"
          onChange={handleChange}
        />
        
        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
              <Upload className="w-8 h-8 text-green-600" />
            </div>
          </div>
          
          <div>
            <p className="text-xl font-semibold text-gray-900 mb-2">
              Upload Plant Image
            </p>
            <p className="text-gray-500 mb-4">
              Drag and drop your plant photo here, or click to browse
            </p>
            <p className="text-sm text-gray-400">
              Supports JPEG, PNG, WebP • Max 5MB
            </p>
          </div>
          
          <button
            type="button"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200"
            onClick={() => document.getElementById('file-upload')?.click()}
          >
            <Camera className="w-5 h-5 mr-2" />
            Choose Image
          </button>
        </div>
      </div>
      
      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-red-800 font-medium">Upload Error</p>
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        </div>
      )}
      
      {/* Tips Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-medium text-blue-900 mb-2">Best Lighting</h4>
          <p className="text-blue-700">Use natural daylight for clearest results</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="font-medium text-green-900 mb-2">Clear Focus</h4>
          <p className="text-green-700">Ensure leaves and flowers are in sharp focus</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h4 className="font-medium text-purple-900 mb-2">Full View</h4>
          <p className="text-purple-700">Include stem, leaves, and flowers if possible</p>
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;