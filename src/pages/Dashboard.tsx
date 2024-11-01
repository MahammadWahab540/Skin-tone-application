import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, History, Download, Settings } from 'lucide-react';

export function Dashboard() {
  const recentAnalyses = [
    {
      date: '2024-02-20',
      imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400',
      skinTone: 'Warm',
    },
    {
      date: '2024-02-18',
      imageUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=400',
      skinTone: 'Cool',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <Link
              to="/analysis"
              className="flex flex-col items-center p-6 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors"
            >
              <Camera className="w-8 h-8 text-purple-600 mb-3" />
              <span className="text-purple-900 font-medium">New Analysis</span>
            </Link>
            <button className="flex flex-col items-center p-6 bg-pink-50 rounded-xl hover:bg-pink-100 transition-colors">
              <History className="w-8 h-8 text-pink-600 mb-3" />
              <span className="text-pink-900 font-medium">History</span>
            </button>
            <button className="flex flex-col items-center p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
              <Download className="w-8 h-8 text-blue-600 mb-3" />
              <span className="text-blue-900 font-medium">Reports</span>
            </button>
            <button className="flex flex-col items-center p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
              <Settings className="w-8 h-8 text-green-600 mb-3" />
              <span className="text-green-900 font-medium">Settings</span>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Analyses</h2>
          <div className="space-y-4">
            {recentAnalyses.map((analysis, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <img
                  src={analysis.imageUrl}
                  alt={`Analysis from ${analysis.date}`}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <p className="text-gray-600">{analysis.date}</p>
                  <p className="font-medium text-gray-900">
                    {analysis.skinTone} Tone
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">Pro Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 rounded-xl p-6">
            <h3 className="font-semibold mb-2">Best Photo Practices</h3>
            <p className="text-white/80">Use natural lighting and a neutral background for the most accurate results.</p>
          </div>
          <div className="bg-white/10 rounded-xl p-6">
            <h3 className="font-semibold mb-2">Seasonal Changes</h3>
            <p className="text-white/80">Update your analysis every season as your skin tone may vary throughout the year.</p>
          </div>
          <div className="bg-white/10 rounded-xl p-6">
            <h3 className="font-semibold mb-2">Color Combinations</h3>
            <p className="text-white/80">Mix and match suggested colors to create unique and flattering outfits.</p>
          </div>
        </div>
      </div>
    </div>
  );
}