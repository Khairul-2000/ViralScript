import React from 'react';

const SevenPillarFramework = () => {
  const pillars = [
    {
      id: 1,
      number: "1",
      title: "Hook (0-5s)",
      description: "Grab attention instantly with a bold claim, surprising fact, or intriguing question that makes viewers stop scrolling.",
      color: "bg-gradient-to-r from-pink-400 to-pink-500",
      borderColor: "border-pink-400",
      position: "top"
    },
    {
      id: 2,
      number: "2", 
      title: "Bridge (5-10s)",
      description: "Connect with viewers by acknowledging their problem and establishing your credibility or experience.",
      color: "bg-gradient-to-r from-purple-400 to-purple-500",
      borderColor: "border-purple-400",
      position: "top"
    },
    {
      id: 3,
      number: "3",
      title: "Pain (10-15s)", 
      description: "Highlight the frustration of outdated solutions and why traditional approaches fail to solve the problem.",
      color: "bg-gradient-to-r from-blue-400 to-blue-500",
      borderColor: "border-blue-400",
      position: "top"
    },
    {
      id: 4,
      number: "4",
      title: "Opportunity (15-20s)",
      description: "Introduce the product as the hero solution, focusing on its unique benefits and how it solves the problem.",
      color: "bg-gradient-to-r from-green-400 to-green-500", 
      borderColor: "border-green-400",
      position: "top"
    },
    {
      id: 5,
      number: "5",
      title: "Epiphany (20-25s)",
      description: "Share your personal results or transformation, creating an \"aha moment\" that builds desire for the product.",
      color: "bg-gradient-to-r from-yellow-400 to-orange-400",
      borderColor: "border-yellow-400",
      position: "bottom"
    },
    {
      id: 6,
      number: "6",
      title: "Twist (25-28s)",
      description: "Create urgency with a limited-time offer, scarcity, or by highlighting what viewers will miss out on.",
      color: "bg-gradient-to-r from-orange-400 to-red-400",
      borderColor: "border-orange-400", 
      position: "bottom"
    },
    {
      id: 7,
      number: "7",
      title: "CTA (28-30s)",
      description: "End with a clear, compelling call-to-action that tells viewers exactly what to do next to get the product.",
      color: "bg-gradient-to-r from-red-400 to-pink-500",
      borderColor: "border-red-400",
      position: "bottom"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            The 7-Pillar Framework
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our proven structure for creating viral UGC videos that convert viewers into customers in just 30 seconds.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full hidden lg:block"></div>
          
          {/* Timeline Dots */}
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col justify-between h-full">
            <div className="w-4 h-4 bg-orange-400 rounded-full mt-20"></div>
            <div className="w-4 h-4 bg-red-500 rounded-full mb-20"></div>
          </div>

          {/* Pillar Cards */}
          <div className="space-y-12 lg:space-y-24">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.id}
                className={`flex flex-col lg:flex-row items-center ${
                  pillar.position === 'bottom' && index >= 4
                    ? 'lg:flex-row-reverse'
                    : ''
                }`}
              >
                {/* Card */}
                <div className={`w-full lg:w-5/12 ${
                  pillar.position === 'bottom' && index >= 4 
                    ? 'lg:ml-12' 
                    : 'lg:mr-12'
                }`}>
                  <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-l-4 border-solid">
                    {/* Colored top border */}
                    <div className={`${pillar.color} h-1 w-full -mt-6 -mx-6 mb-4 rounded-t-xl`}></div>
                    
                    {/* Number and Title */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-8 h-8 ${pillar.color} text-white rounded-full flex items-center justify-center font-bold text-sm`}>
                        {pillar.number}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {pillar.title}
                      </h3>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for mobile */}
                <div className="w-full lg:w-2/12 flex justify-center py-4 lg:py-0">
                  <div className="w-4 h-4 bg-gray-400 rounded-full lg:hidden"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Timeline Labels */}
          <div className="flex justify-between items-center mt-16 px-4">
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 bg-orange-400 rounded-full mb-2"></div>
              <span className="text-sm text-gray-600 font-medium">0s</span>
              <span className="text-xs text-gray-500">Opportunity</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 bg-red-500 rounded-full mb-2"></div>
              <span className="text-sm text-gray-600 font-medium">30s</span>
              <span className="text-xs text-gray-500">CTA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SevenPillarFramework;