'use client';

import React, { useState } from 'react';

export default function AIScriptGenerator() {
  const [formData, setFormData] = useState({
    productName: '',
    productCategory: '',
    keyBenefits: '',
    targetAudience: '',
    scriptTone: 'Casual'
  });

  const [selectedTone, setSelectedTone] = useState('Casual');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleToneSelect = (tone) => {
    setSelectedTone(tone);
    setFormData(prev => ({
      ...prev,
      scriptTone: tone
    }));
  };

  const handleNotifyClick = () => {
    console.log('Notify clicked with data:', formData);
    // Here you would typically handle the form submission
  };

  const toneOptions = ['Casual', 'Professional', 'Excited', 'Educational'];

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        background: 'linear-gradient(135deg, #ff6b9d 0%, #ff8a80 50%, #ff9800 100%)'
      }}
    >
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div 
            className="inline-block rounded-full px-4 py-2 mb-4"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <span className="text-white text-sm font-medium">COMING SOON</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            AI Script Generator
          </h1>
          <p className="text-white text-lg max-w-md mx-auto" style={{ opacity: 0.9 }}>
            Our advanced AI will create custom UGC scripts tailored to your specific product, niche, and target audience.
          </p>
        </div>

        {/* Form Card */}
        <div 
          className="rounded-3xl p-8 shadow-2xl"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
        >
          <div className="space-y-6">
            {/* Product Name and Category Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Product Name
                </label>
                <input
                  type="text"
                  name="productName"
                  value={formData.productName}
                  onChange={handleInputChange}
                  placeholder="e.g. GlowBoost Serum"
                  className="w-full px-4 py-3 rounded-xl text-white placeholder-white focus:outline-none transition-all duration-200"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    '::placeholder': { opacity: 0.7 }
                  }}
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Product Category
                </label>
                <select
                  name="productCategory"
                  value={formData.productCategory}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl text-white focus:outline-none transition-all duration-200 cursor-pointer"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    appearance: 'none'
                  }}
                >
                  <option value="" style={{ color: '#374151' }}>Select a category</option>
                  <option value="skincare" style={{ color: '#374151' }}>Skincare</option>
                  <option value="makeup" style={{ color: '#374151' }}>Makeup</option>
                  <option value="wellness" style={{ color: '#374151' }}>Wellness</option>
                  <option value="fashion" style={{ color: '#374151' }}>Fashion</option>
                  <option value="tech" style={{ color: '#374151' }}>Technology</option>
                  <option value="home" style={{ color: '#374151' }}>Home & Living</option>
                </select>
              </div>
            </div>

            {/* Key Benefits */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Key Benefits (up to 3)
              </label>
              <input
                type="text"
                name="keyBenefits"
                value={formData.keyBenefits}
                onChange={handleInputChange}
                placeholder="e.g. Reduces fine lines, Hydrates for 24 hours, Improves skin texture"
                className="w-full px-4 py-3 rounded-xl text-white placeholder-white focus:outline-none transition-all duration-200"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  border: '1px solid rgba(255, 255, 255, 0.3)'
                }}
              />
            </div>

            {/* Target Audience */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Target Audience
              </label>
              <input
                type="text"
                name="targetAudience"
                value={formData.targetAudience}
                onChange={handleInputChange}
                placeholder="e.g. Women 25-45 with dry, sensitive skin"
                className="w-full px-4 py-3 rounded-xl text-white placeholder-white focus:outline-none transition-all duration-200"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  border: '1px solid rgba(255, 255, 255, 0.3)'
                }}
              />
            </div>

            {/* Script Tone */}
            <div>
              <label className="block text-white text-sm font-medium mb-3">
                Script Tone
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {toneOptions.map((tone) => (
                  <button
                    key={tone}
                    onClick={() => handleToneSelect(tone)}
                    className={`px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                      selectedTone === tone ? 'shadow-lg' : ''
                    }`}
                    style={{
                      backgroundColor: selectedTone === tone 
                        ? '#ffffff' 
                        : 'rgba(255, 255, 255, 0.2)',
                      color: selectedTone === tone ? '#ec4899' : '#ffffff',
                      border: selectedTone === tone 
                        ? 'none' 
                        : '1px solid rgba(255, 255, 255, 0.3)',
                      transform: selectedTone === tone ? 'scale(1.05)' : 'scale(1)'
                    }}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Notify Button */}
            <div className="pt-4">
              <button
                onClick={handleNotifyClick}
                className="w-full text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 group"
                style={{
                  backgroundColor: '#10b981'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#059669';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#10b981';
                }}
              >
                <span>Notify Me When Available</span>
                <svg 
                  className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-white text-sm" style={{ opacity: 0.75 }}>
            Get notified when our AI script generator launches
          </p>
        </div>
      </div>
    </div>
  );
}