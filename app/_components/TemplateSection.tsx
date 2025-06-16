"use client";

import React, { useState, SetStateAction } from 'react';
import { FileText, BarChart3, Calendar, Download, Check, Star, Users, Clock, TrendingUp } from 'lucide-react';

type TemplateTypes = {
    templateId: SetStateAction<null>;
    downloadType: string;
}


const TemplateSection = () => {
  const [downloadingId, setDownloadingId] = useState(null);
  const [downloadedIds, setDownloadedIds] = useState(new Set());

  const templates = [
    {
      id: 'ugc-script',
      title: '7-Pillar UGC Script Template',
      description: 'Fill-in-the-blanks template with prompts for each section of the 7-pillar framework. Perfect for quickly drafting viral scripts.',
      icon: FileText,
      gradient: 'from-pink-500 via-purple-500 to-indigo-500',
      downloadType: 'PDF',
      stats: { downloads: '2.4k', rating: 4.9, time: '5 min' },
      features: ['Ready-to-use prompts', 'Professional formatting', 'Quick setup']
    },
    {
      id: 'tracking-sheet',
      title: 'Viral Script Tracking Sheet',
      description: 'Track the performance of your UGC videos with this spreadsheet. Analyze what works and optimize your future content.',
      icon: BarChart3,
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      downloadType: 'Excel',
      stats: { downloads: '1.8k', rating: 4.8, time: '3 min' },
      features: ['Performance metrics', 'Analytics dashboard', 'Growth tracking']
    },
    {
      id: 'script-archive',
      title: 'Weekly Script Drop Archive',
      description: 'Access our complete archive of weekly script drops, organized by date and niche. Never run out of content ideas.',
      icon: Calendar,
      gradient: 'from-emerald-500 via-green-500 to-teal-500',
      downloadType: 'ZIP',
      stats: { downloads: '3.2k', rating: 4.9, time: '10 min' },
      features: ['500+ script ideas', 'Organized by niche', 'Regular updates']
    }
  ];

  const handleDownload = async ({templateId, downloadType}: TemplateTypes) => {
    setDownloadingId(templateId);
    
    // Simulate download process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setDownloadingId(null);
    setDownloadedIds(prev => new Set([...prev, templateId]));
    
    // In a real app, this would trigger the actual download
    console.log(`Downloading ${downloadType} for ${templateId}`);
  };

  const getIconForDownloadType = (type) => {
    switch(type) {
      case 'PDF': return '📄';
      case 'Excel': return '📊';
      case 'ZIP': return '📦';
      default: return '📄';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-sm border border-white/20">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm font-medium text-gray-700">Premium Templates</span>
          </div>
          
          <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
            Downloadable Templates
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Get instant access to our ready-to-use templates that make creating viral UGC content quick and easy.
          </p>
          
          <div className="flex items-center justify-center gap-8 mt-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>7,400+ downloads</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              <span>98% success rate</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Instant access</span>
            </div>
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template) => {
            const IconComponent = template.icon;
            const isDownloading = downloadingId === template.id;
            const isDownloaded = downloadedIds.has(template.id);
            
            return (
              <div 
                key={template.id}
                className="group relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${template.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`} />
                
                {/* Header */}
                <div className="relative">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${template.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-full h-full text-white" />
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-blue-900 group-hover:bg-clip-text transition-all duration-300">
                      {template.title}
                    </h3>
                    <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                      {getIconForDownloadType(template.downloadType)} {template.downloadType}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {template.description}
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50/50 rounded-2xl">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">{template.stats.downloads}</div>
                    <div className="text-xs text-gray-500">Downloads</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1">
                      <Star className="w-3 h-3 text-yellow-500 fill-current" />
                      <span className="text-lg font-bold text-gray-900">{template.stats.rating}</span>
                    </div>
                    <div className="text-xs text-gray-500">Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">{template.stats.time}</div>
                    <div className="text-xs text-gray-500">Setup</div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <div className="text-sm font-medium text-gray-700 mb-2">Features:</div>
                  <div className="space-y-1">
                    {template.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Download Button */}
                <button
                  onClick={() => handleDownload(template.id, template.downloadType)}
                  disabled={isDownloading}
                  className={`w-full py-4 px-6 rounded-2xl font-semibold text-white transition-all duration-300 ${
                    isDownloaded 
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600' 
                      : `bg-gradient-to-r ${template.gradient} hover:shadow-lg hover:shadow-purple-500/25`
                  } ${isDownloading ? 'opacity-75 cursor-not-allowed' : 'hover:scale-105'}`}
                >
                  <div className="flex items-center justify-center gap-2">
                    {isDownloading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Downloading...</span>
                      </>
                    ) : isDownloaded ? (
                      <>
                        <Check className="w-5 h-5" />
                        <span>Downloaded</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-5 h-5" />
                        <span>Download {template.downloadType}</span>
                      </>
                    )}
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Custom Templates?
            </h3>
            <p className="text-gray-600 mb-6">
              We create bespoke templates tailored to your specific niche and content strategy.
            </p>
            <button className="bg-gradient-to-r from-gray-900 to-blue-900 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              Get Custom Templates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateSection;