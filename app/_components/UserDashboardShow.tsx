"use client"

import React, { useState, useEffect } from 'react';
import { 
  BarChart3, Download, Filter, Heart, Zap, FileText, 
  TrendingUp, Calendar, Star, Settings, Bell, Search,
  Play, Eye, Bookmark, Clock, Users, Target, Sparkles,
  ArrowRight, ChevronDown, Plus, History, Activity
} from 'lucide-react';

const MemberDashboard = () => {
  const [activeTab, setActiveTab] = useState('recent');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNiche, setSelectedNiche] = useState('all');
  const [showNotifications, setShowNotifications] = useState(false);

  const stats = [
    { 
      label: 'Scripts Used', 
      value: '347/500', 
      progress: 69.4, 
      color: 'from-pink-500 to-rose-500',
      icon: FileText,
      trend: '+23 this week'
    },
    { 
      label: 'Downloads', 
      value: '24', 
      progress: 100, 
      color: 'from-blue-500 to-cyan-500',
      icon: Download,
      trend: '12 pending'
    },
    { 
      label: 'Favorites', 
      value: '12', 
      progress: 60, 
      color: 'from-emerald-500 to-green-500',
      icon: Heart,
      trend: '3 new saves'
    },
    { 
      label: 'AI Credits', 
      value: '38', 
      progress: 76, 
      color: 'from-purple-500 to-indigo-500',
      icon: Sparkles,
      trend: 'Unlimited plan'
    }
  ];

  const recentScripts = [
    { 
      id: 1, 
      title: 'The 10-Second Skincare Hack', 
      category: 'Beauty & Skincare',
      views: '2.4M',
      engagement: '12.5%',
      saved: true,
      trending: true,
      timeAgo: '2 hours ago'
    },
    { 
      id: 2, 
      title: 'Morning Energy Ritual', 
      category: 'Wellness & Supplements',
      views: '890K',
      engagement: '8.2%',
      saved: false,
      trending: false,
      timeAgo: '5 hours ago'
    },
    { 
      id: 3, 
      title: 'Phone Battery Life Extender', 
      category: 'Tech & Gadgets',
      views: '1.2M',
      engagement: '15.3%',
      saved: true,
      trending: true,
      timeAgo: '1 day ago'
    }
  ];

  const downloadTemplates = [
    { 
      name: '7-Pillar UGC Script Template', 
      type: 'PDF',
      downloads: '2.4K',
      rating: 4.9,
      size: '2.1 MB'
    },
    { 
      name: 'Viral Script Tracking Sheet', 
      type: 'Excel',
      downloads: '1.8K',
      rating: 4.8,
      size: '1.5 MB'
    },
    { 
      name: 'Weekly Script Drop Archive', 
      type: 'ZIP',
      downloads: '3.2K',
      rating: 4.9,
      size: '45.2 MB'
    }
  ];

  const niches = ['Beauty & Skincare', 'Wellness & Supplements', 'Tech & Gadgets', 'Fashion & Style', 'Home & Cleaning', 'Fitness & Weight Loss'];

  const quickActions = [
    {
      title: 'Browse Your Script Quota',
      description: 'Track your monthly script usage and see how many scripts you have left to unlock.',
      icon: BarChart3,
      color: 'from-pink-500 to-rose-500',
      action: 'View Usage'
    },
    {
      title: 'Download PDF Templates',
      description: 'Access and download all templates to streamline your content creation process.',
      icon: Download,
      color: 'from-blue-500 to-cyan-500',
      action: 'Browse Templates'
    },
    {
      title: 'Filter Scripts by Niche',
      description: 'Easily find the perfect script for your product category or content niche.',
      icon: Filter,
      color: 'from-emerald-500 to-green-500',
      action: 'Explore Niches'
    },
    {
      title: 'Save Favorite Scripts',
      description: 'Organize your most successful scripts for quick access and future reference.',
      icon: Heart,
      color: 'from-yellow-500 to-orange-500',
      action: 'Manage Favorites'
    },
    {
      title: 'AI Script Generator',
      description: 'Create custom UGC scripts tailored to your specific product and audience (coming soon).',
      icon: Zap,
      color: 'from-purple-500 to-indigo-500',
      action: 'Coming Soon',
      comingSoon: true
    },
    {
      title: 'Access Script History',
      description: 'Review previously viewed and used scripts for consistent content creation.',
      icon: History,
      color: 'from-teal-500 to-cyan-500',
      action: 'View History'
    }
  ];

  return (
    <div className="min-h-screen ">
      {/* Header */}

      <div className='max-w-7xl mx-auto my-[150px] bg-gray-500 p-7 shadow-2xl rounded-2xl'>
      <div className="bg-white/80 ">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-xl font-bold text-lg">
                ViralScriptLibrary
              </div>
              <div className="hidden md:flex items-center gap-2 text-sm text-gray-600">
                <span>Welcome, Creator!</span>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                <input 
                  type="text"
                  placeholder="Search scripts..."
                  className="pl-10 pr-4 py-2 bg-white/60 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500/30"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <button 
                className="relative p-2 hover:bg-white/60 rounded-xl transition-colors"
                onClick={() => setShowNotifications(!showNotifications)}
              >
                <Bell className="w-5 h-5 text-gray-600" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              </button>
              
              <button className="p-2 hover:bg-white/60 rounded-xl transition-colors">
                <Settings className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-2">
            Member Dashboard
          </h1>
          <p className="text-gray-600 text-lg">
            Once subscribed, you'll unlock your personal dashboard with powerful tools to create viral content.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color}`}>
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs text-gray-500">{stat.trend}</span>
                </div>
                
                <div className="mb-3">
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full bg-gradient-to-r ${stat.color} transition-all duration-1000`}
                    style={{ width: `${stat.progress}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Dashboard Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Left Column - Scripts & Templates */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recent Scripts */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Recent Scripts</h3>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setActiveTab('recent')}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                      activeTab === 'recent' ? 'bg-pink-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    Recent
                  </button>
                  <button 
                    onClick={() => setActiveTab('trending')}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                      activeTab === 'trending' ? 'bg-pink-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    Trending
                  </button>
                </div>
              </div>
              
              <div className="space-y-4">
                {recentScripts.map((script) => (
                  <div key={script.id} className="flex items-center gap-4 p-4 bg-gray-50/50 rounded-xl hover:bg-white/60 transition-colors group cursor-pointer">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-gray-900 truncate">{script.title}</h4>
                        {script.trending && (
                          <div className="flex items-center gap-1 bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs">
                            <TrendingUp className="w-3 h-3" />
                            Trending
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>{script.category}</span>
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {script.views}
                        </div>
                        <div className="flex items-center gap-1">
                          <Activity className="w-3 h-3" />
                          {script.engagement}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-400">{script.timeAgo}</span>
                      <button className={`p-2 rounded-lg transition-colors ${
                        script.saved ? 'bg-pink-100 text-pink-600' : 'bg-gray-100 text-gray-400 hover:bg-pink-100 hover:text-pink-600'
                      }`}>
                        <Heart className={`w-4 h-4 ${script.saved ? 'fill-current' : ''}`} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            
            </div>

            
          </div>


          
            {/* Download Templates */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Download Templates</h3>
                <button className="text-pink-500 hover:text-pink-600 text-sm font-medium flex items-center gap-1">
                  View All <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              
              <div className="space-y-3">
                {downloadTemplates.map((template, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50/50 rounded-xl hover:bg-white/60 transition-colors group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FileText className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{template.name}</h4>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <span>{template.type}</span>
                          <span>•</span>
                          <span>{template.size}</span>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-yellow-500 fill-current" />
                            {template.rating}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors opacity-0 group-hover:opacity-100">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

      </div>
    
          {/* Right Column - AI Generator & Niches */}
          <div className="space-y-6">
            {/* AI Script Generator */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">AI Script Generator</h3>
                  <p className="text-purple-100 text-sm">Coming Soon</p>
                </div>
              </div>
              
              <p className="text-purple-100 mb-6 text-sm leading-relaxed">
                Create custom UGC scripts tailored to your specific product and target audience.
              </p>
              
              <button className="w-full bg-white/20 backdrop-blur-sm text-white py-3 rounded-xl font-medium hover:bg-white/30 transition-colors">
                Coming Soon →
              </button>
            </div>

            {/* Filter Scripts by Niche */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Filter Scripts by Niche</h3>
              
              <div className="space-y-2">
                {niches.map((niche, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedNiche(niche)}
                    className={`w-full text-left p-3 rounded-xl text-sm transition-colors ${
                      selectedNiche === niche 
                        ? 'bg-pink-100 text-pink-800 border border-pink-200' 
                        : 'bg-gray-50/50 text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {niche}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-7xl ">
          {quickActions.map((action, index) => {
            const IconComponent = action.icon;
            return (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:shadow-lg transition-all duration-300 hover:scale-105 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${action.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2">{action.title}</h4>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">{action.description}</p>
                    
                    <button className={`text-sm font-medium flex items-center gap-1 transition-colors ${
                      action.comingSoon 
                        ? 'text-purple-500 hover:text-purple-600' 
                        : 'text-gray-700 hover:text-gray-900'
                    }`}>
                      {action.action}
                      {!action.comingSoon && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
    
    </div>
 
  );
};

export default MemberDashboard;