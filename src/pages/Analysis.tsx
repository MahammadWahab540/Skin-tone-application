import React, { useState } from 'react';
import { Upload, Camera, Palette } from 'lucide-react';
import { useDropzone } from 'react-dropzone';
import { ColorPalette } from '../components/ColorPalette';
import { LoadingSpinner } from '../components/LoadingSpinner';

export function Analysis() {
  const [image, setImage] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState<null | {
    skinTone: string;
    palettes: { name: string; colors: string[] }[];
  }>(null);

  const onDrop = async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      await analyzeImage(file);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    maxFiles: 1,
  });

  const analyzeImage = async (file: File) => {
    setAnalyzing(true);
    // Simulated analysis delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setResults({
      skinTone: 'Warm',
      palettes: [
        {
          name: 'Casual Wear',
          colors: ['#2E4057', '#7C9885', '#DAB49D', '#986B3B', '#E6B89C']
        },
        {
          name: 'Evening Wear',
          colors: ['#1B1B3A', '#7D314C', '#C07F96', '#DAB49D', '#E6D5B8']
        }
      ]
    });
    setAnalyzing(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Skin Tone Analysis
      </h1>

      <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors
            ${isDragActive ? 'border-purple-400 bg-purple-50' : 'border-gray-300 hover:border-purple-300'}`}
        >
          <input {...getInputProps()} />
          {!image ? (
            <div className="space-y-4">
              <Camera className="w-12 h-12 mx-auto text-gray-400" />
              <div>
                <p className="text-lg text-gray-600">
                  Drag and drop your photo here, or click to select
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  Supported formats: JPG, PNG (max 10MB)
                </p>
              </div>
            </div>
          ) : (
            <img
              src={image}
              alt="Uploaded"
              className="max-h-96 mx-auto rounded-lg"
            />
          )}
        </div>
      </div>

      {analyzing && (
        <div className="text-center py-12">
          <LoadingSpinner />
          <p className="text-gray-600 mt-4">Analyzing your skin tone...</p>
        </div>
      )}

      {results && (
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Your Results
            </h2>
            <p className="text-gray-600">
              Based on our analysis, you have a {results.skinTone} skin tone.
              Here are your personalized color palettes:
            </p>
          </div>

          <div className="space-y-8">
            {results.palettes.map((palette, index) => (
              <ColorPalette
                key={index}
                name={palette.name}
                colors={palette.colors}
              />
            ))}
          </div>

          <button className="mt-8 w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2">
            <Palette className="w-5 h-5" />
            Download Complete Report
          </button>
        </div>
      )}
    </div>
  );
}