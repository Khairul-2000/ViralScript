"use client";

import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const AdditionalInfo = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-3xl p-12 text-center shadow-2xl">
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Create Viral UGC Content?
          </h2>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join thousands of content creators who are using our proven 7-pillar 
            framework to create videos that get millions of views and drive sales.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Primary CTA Button */}
            <button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2 min-w-[200px] justify-center">
              Choose Your Plan
              <ArrowRight className="w-5 h-5" />
            </button>
            
            {/* Secondary Button */}
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 hover:border-white/30 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center gap-2 min-w-[200px] justify-center">
              <Download className="w-5 h-5" />
              Download Templates
            </button>
          </div>
          
          {/* Optional: Trust indicators */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-400 text-sm">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 border-2 border-slate-800"></div>
                ))}
              </div>
              <span>50,000+ creators</span>
            </div>
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map(i => (
                <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
              <span className="ml-1">4.9/5 rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalInfo;