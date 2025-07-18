"use client";


import React, { useState } from 'react';
import { Check, X, Zap, Crown, Sparkles, Shield, Calendar, Users, TrendingUp, Star, ArrowRight, Calculator } from 'lucide-react';

type Plan = {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string;
  gradient: string;
  price: number;
  originalPrice: number | null;
  features: { name: string; included: boolean; comingSoon?: boolean }[];
  buttonText: string;
  buttonStyle: string;
  popular: boolean;
  savings: string | null;
};

const PricingAccess= () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  const plans: Plan[] = [
    {
      id: 'creator',
      name: 'Creator',
      icon: Sparkles,
      iconColor: 'text-pink-500',
      gradient: 'from-pink-500 to-rose-500',
      price: billingPeriod === 'monthly' ? 9.99 : 7.99,
      originalPrice: billingPeriod === 'monthly' ? null : 9.99,
      features: [
        { name: 'Access to 200 scripts per month', included: true },
        { name: 'Script Library Access', included: true },
        { name: 'Downloadable Templates', included: false },
        { name: 'AI Script Generator', included: false }
      ],
      buttonText: 'Choose Creator Plan',
      buttonStyle: 'btn-secondary',
      popular: false,
      savings: null
    },
    {
      id: 'pro',
      name: 'Pro Creator',
      icon: Crown,
      iconColor: 'text-blue-500',
      gradient: 'from-blue-500 to-purple-500',
      price: billingPeriod === 'monthly' ? 24.99 : 19.99,
      originalPrice: billingPeriod === 'monthly' ? null : 24.99,
      features: [
        { name: 'Access to 500 scripts per month', included: true },
        { name: 'Full Script Library Access', included: true },
        { name: 'Downloadable Templates', included: true },
        { name: 'AI Script Generator', included: false }
      ],
      buttonText: 'Choose Pro Creator Plan',
      buttonStyle: 'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white',
      popular: true,
      savings: 'Save 20%'
    },
    {
      id: 'unlimited',
      name: 'Unlimited',
      icon: Zap,
      iconColor: 'text-green-500',
      gradient: 'from-green-500 to-emerald-500',
      price: billingPeriod === 'monthly' ? 50.00 : 40.00,
      originalPrice: billingPeriod === 'monthly' ? null : 50.00,
      features: [
        { name: 'Access to 1000+ scripts per month', included: true },
        { name: 'Full Script Library Access', included: true },
        { name: 'All Downloadable Templates', included: true },
        { name: 'Custom AI Script Generator', included: true, comingSoon: true }
      ],
      buttonText: 'Unlock Everything',
      buttonStyle: 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white',
      popular: false,
      savings: null
    }
  ];

  const guarantees = [
    {
      icon: Calendar,
      title: 'Cancel anytime',
      subtitle: 'No long-term contracts',
      color: 'text-[var(--text-secondary)]'
    },
    {
      icon: Zap,
      title: 'Instant access after payment',
      subtitle: 'Start creating immediately',
      color: 'text-blue-600'
    },
    {
      icon: Shield,
      title: '7-day money-back guarantee',
      subtitle: 'Risk-free trial period',
      color: 'text-green-600'
    }
  ];

  const stats = [
    { value: '50K+', label: 'Active Creators' },
    { value: '2.4M', label: 'Viral Videos Created' },
    { value: '98%', label: 'Success Rate' }
  ];

  return (
    <div className="min-h-screen section-container py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 card backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-sm">
            <TrendingUp className="w-4 h-4 text-green-500" />
            <span className="text-sm font-medium text-[var(--text-secondary)]">Unlock Your Creative Potential</span>
          </div>
          
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[var(--text-primary)] via-[var(--firstColor)] to-purple-900 bg-clip-text text-transparent mb-6">
            Pricing & Access
          </h1>
          
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed mb-8">
            Choose the perfect plan for your content creation needs. Unlock viral scripts that convert viewers into customers.
          </p>

          {/* Stats Row */}
          <div className="flex justify-center gap-8 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-[var(--text-primary)]">{stat.value}</div>
                <div className="text-sm text-[var(--text-secondary)]">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`font-medium ${billingPeriod === 'monthly' ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'annual' : 'monthly')}
              className="relative w-16 h-8 bg-[var(--border-color)] rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <div className={`absolute top-1 left-1 w-6 h-6 bg-[var(--card-bg)] rounded-full shadow-md transform transition-transform duration-300 ${
                billingPeriod === 'annual' ? 'translate-x-8 bg-gradient-to-r from-blue-500 to-purple-500' : ''
              }`} />
            </button>
            <div className="flex items-center gap-2">
              <span className={`font-medium ${billingPeriod === 'annual' ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'}`}>
                Annual
              </span>
              {billingPeriod === 'annual' && (
                <span className="success text-xs px-2 py-1 rounded-full font-medium">
                  Save 20%
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            const isHovered = hoveredPlan === plan.id;
            
            return (
              <div
                key={plan.id}
                className={`relative card backdrop-blur-sm rounded-3xl p-8 transition-all duration-500 ${
                  plan.popular 
                    ? 'ring-2 ring-pink-200 shadow-2xl scale-105' 
                    : 'hover:shadow-2xl hover:scale-105'
                }`}
                onMouseEnter={() => setHoveredPlan(plan.id)}
                onMouseLeave={() => setHoveredPlan(null)}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      MOST POPULAR
                    </div>
                  </div>
                )}

                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 ${
                  isHovered ? 'opacity-5' : ''
                } rounded-3xl transition-opacity duration-500`} />

                {/* Plan Header */}
                <div className="relative text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.gradient} mb-4 ${
                    isHovered ? 'scale-110' : ''
                  } transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">{plan.name}</h3>
                  
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-4xl font-bold text-[var(--text-primary)]">${plan.price}</span>
                    <div className="text-left">
                      <div className="text-sm text-[var(--text-secondary)]">per month</div>
                      {plan.originalPrice && (
                        <div className="text-xs text-[var(--text-muted)] line-through">${plan.originalPrice}</div>
                      )}
                    </div>
                  </div>
                  
                  {plan.savings && (
                    <div className="success text-xs px-3 py-1 rounded-full font-medium inline-block">
                      {plan.savings}
                    </div>
                  )}
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                        feature.included 
                          ? 'success' 
                          : 'bg-[var(--section-bg)] text-[var(--text-muted)]'
                      }`}>
                        {feature.included ? (
                          <Check className="w-3 h-3" />
                        ) : (
                          <X className="w-3 h-3" />
                        )}
                      </div>
                      <div className="flex-1">
                        <span className={`text-sm ${
                          feature.included ? 'text-[var(--text-primary)]' : 'text-[var(--text-muted)]'
                        }`}>
                          {feature.name}
                        </span>
                        {feature.comingSoon && (
                          <span className="ml-2 warning text-xs px-2 py-1 rounded-full">
                            Coming Soon
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className={`w-full py-4 px-6 rounded-2xl font-semibold transition-all duration-300 ${plan.buttonStyle} ${
                  isHovered ? 'scale-105 shadow-lg' : ''
                } ${plan.popular ? 'shadow-lg' : ''}`}>
                  <div className="flex items-center justify-center gap-2">
                    {plan.buttonText}
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        {/* Guarantees Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {guarantees.map((guarantee, index) => {
            const IconComponent = guarantee.icon;
            return (
              <div key={index} className="flex items-center gap-4 card backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-[var(--section-bg)] flex items-center justify-center">
                    <IconComponent className={`w-6 h-6 ${guarantee.color}`} />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--text-primary)] mb-1">{guarantee.title}</h4>
                  <p className="text-sm text-[var(--text-secondary)]">{guarantee.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="card backdrop-blur-sm rounded-3xl p-8 shadow-lg max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              <span className="font-semibold text-[var(--text-primary)]">Still have questions?</span>
            </div>
            <p className="text-[var(--text-secondary)] mb-6">
              Join thousands of creators who are already creating viral content with our proven scripts.
            </p>
            <button className="btn-primary px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingAccess;