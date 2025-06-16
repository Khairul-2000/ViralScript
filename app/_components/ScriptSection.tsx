"use client";


import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const ScriptSection = () => {
  const [selectedNiche, setSelectedNiche] = useState('All Niches');

  const scripts = [
    {
      id: 1,
      category: 'Beauty & Skincare',
      categoryColor: 'bg-gradient-to-r from-pink-400 to-purple-500',
      title: 'The 10-Second Skincare Hack',
      description: '"I never thought THIS would fix my acne overnight... until I discovered this dermatologist\'s secret technique..."',
      buttonColor: 'bg-gradient-to-r from-pink-500 to-pink-600'
    },
    {
      id: 2,
      category: 'Home & Cleaning',
      categoryColor: 'bg-gradient-to-r from-blue-400 to-teal-500',
      title: 'The Shower Cleaning Miracle',
      description: '"Stop scrubbing your shower for hours! This $5 tool changed everything about how I clean my bathroom..."',
      buttonColor: 'bg-gradient-to-r from-pink-500 to-pink-600'
    },
    {
      id: 3,
      category: 'Wellness & Supplements',
      categoryColor: 'bg-gradient-to-r from-green-400 to-emerald-500',
      title: 'Morning Energy Ritual',
      description: '"I used to need 3 coffees just to function... until I discovered this 30-second morning ritual that changed everything..."',
      buttonColor: 'bg-gradient-to-r from-pink-500 to-pink-600'
    },
    {
      id: 4,
      category: 'Fitness & Weight Loss',
      categoryColor: 'bg-gradient-to-r from-orange-400 to-red-500',
      title: 'The 5-Minute Ab Transformer',
      description: '"Forget hour-long workouts. This 5-minute routine helped me lose 2 inches off my waist in just 14 days..."',
      buttonColor: 'bg-gradient-to-r from-pink-500 to-pink-600'
    },
    {
      id: 5,
      category: 'Tech & Gadgets',
      categoryColor: 'bg-gradient-to-r from-blue-500 to-purple-600',
      title: 'Phone Battery Life Extender',
      description: '"My phone used to die by noon every day... until I found this hidden setting that doubled my battery life instantly..."',
      buttonColor: 'bg-gradient-to-r from-pink-500 to-pink-600'
    },
    {
      id: 6,
      category: 'Beauty & Skincare',
      categoryColor: 'bg-gradient-to-r from-pink-400 to-purple-500',
      title: 'The Overnight Glow Secret',
      description: '"I woke up with the best skin of my life after using THIS $12 product that no one is talking about..."',
      buttonColor: 'bg-gradient-to-r from-pink-500 to-pink-600'
    }
  ];

  const categories = ['All Niches', ...new Set(scripts.map(script => script.category))];

  const filteredScripts = selectedNiche === 'All Niches' 
    ? scripts 
    : scripts.filter(script => script.category === selectedNiche);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block  text-black px-8 py-3 rounded-lg text-2xl font-bold mb-4">
            Script Library
          </div>
          <div className=" text-black opacity-65 px-6 py-2 rounded-lg text-sm max-w-2xl mx-auto">
            Browse our collection of proven UGC scripts organized by niche. Each script follows our viral 7-step framework.
          </div>
        </div>

        {/* Filter Dropdown */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            <select 
              value={selectedNiche}
              onChange={(e) => setSelectedNiche(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-6 py-3 pr-12 text-gray-700 font-medium min-w-48 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
          </div>
        </div>

        {/* Script Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredScripts.map((script) => (
            <div key={script.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Category Header */}
              <div className={`${script.categoryColor} h-2`}></div>
              
              {/* Card Content */}
              <div className="p-6">
                {/* Category Badge */}
                <div className="inline-block bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full mb-4">
                  {script.category}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {script.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {script.description}
                </p>
                
                {/* Button */}
                <button className={`w-full ${script.buttonColor} hover:opacity-90 text-white font-semibold py-3 px-6 rounded-lg transition-opacity duration-200`}>
                  View Script
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScriptSection;