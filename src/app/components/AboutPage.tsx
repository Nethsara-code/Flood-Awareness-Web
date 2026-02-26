import { Cloud, CloudRain, MapPin, Calendar, AlertCircle, TrendingUp } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-96 bg-blue-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1759843009304-c06a707a5470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaXZlciUyMG92ZXJmbG93JTIwZmxvb2RpbmclMjBkYW1hZ2V8ZW58MXx8fHwxNzcyMTE3NDcyfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Flood overview"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div>
            <h1 className="text-5xl text-white mb-4">About Floods in Sri Lanka</h1>
            <p className="text-xl text-blue-100 max-w-2xl">
              Understanding flood causes, patterns, and risks to protect our communities
            </p>
          </div>
        </div>
      </section>

      {/* What are Floods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-4xl text-gray-900 mb-6">What Are Floods?</h2>
            <p className="text-lg text-gray-700 mb-4">
              A flood occurs when water overflows onto normally dry land. This natural disaster can happen 
              when rivers overflow their banks, heavy rainfall accumulates faster than soil can absorb it, 
              or when coastal areas experience storm surges.
            </p>
            <p className="text-lg text-gray-700">
              In Sri Lanka, floods are a recurring hazard that affect thousands of families annually, 
              particularly during monsoon seasons. Understanding how floods occur and their patterns 
              helps communities prepare and respond effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Causes of Floods */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-gray-900 mb-12 text-center">Causes of Floods</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <CloudRain className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl text-gray-900 mb-3">Heavy Rainfall</h3>
              <p className="text-gray-700">
                Intense monsoon rains exceed the ground's absorption capacity, causing water to accumulate 
                rapidly. Sri Lanka experiences two monsoon seasons that bring significant rainfall, particularly 
                to the southwestern and northeastern regions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl text-gray-900 mb-3">River Overflow</h3>
              <p className="text-gray-700">
                Major rivers like Kelani, Kalu, Gin, and Mahaweli overflow during heavy rains, inundating 
                surrounding areas. River basin regions are particularly vulnerable when upstream rainfall 
                causes water levels to rise rapidly.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <AlertCircle className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl text-gray-900 mb-3">Poor Drainage Systems</h3>
              <p className="text-gray-700">
                Inadequate urban drainage, blocked canals, and improper waste disposal prevent water from 
                flowing away efficiently. Rapid urbanization has reduced natural water absorption areas, 
                increasing flood risks in cities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <Cloud className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl text-gray-900 mb-3">Climate Change</h3>
              <p className="text-gray-700">
                Changing weather patterns lead to more frequent and intense rainfall events. Rising sea levels 
                and extreme weather phenomena increase the severity and unpredictability of flooding across 
                the island.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* High-Risk Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <MapPin className="w-8 h-8 text-red-600" />
            <h2 className="text-4xl text-gray-900">High-Risk Areas in Sri Lanka</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                <h3 className="text-xl text-gray-900 mb-3">Western Province</h3>
                <p className="text-gray-700">
                  <strong>Districts:</strong> Colombo, Gampaha, Kalutara
                </p>
                <p className="text-gray-700 mt-2">
                  Low-lying areas near Kelani and Kalu rivers. Urban flooding common due to poor drainage. 
                  Affects major cities including Colombo, Kaduwela, and Homagama.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                <h3 className="text-xl text-gray-900 mb-3">Sabaragamuwa Province</h3>
                <p className="text-gray-700">
                  <strong>Districts:</strong> Ratnapura, Kegalle
                </p>
                <p className="text-gray-700 mt-2">
                  High rainfall regions with river basin areas. Ratnapura city and surrounding villages 
                  experience severe flooding during Southwest monsoon.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <h3 className="text-xl text-gray-900 mb-3">Southern Province</h3>
                <p className="text-gray-700">
                  <strong>Districts:</strong> Galle, Matara, Hambantota
                </p>
                <p className="text-gray-700 mt-2">
                  Coastal areas vulnerable to storm surges and river flooding. Gin Ganga basin particularly 
                  at risk during monsoon periods.
                </p>
              </div>
            </div>

            <div>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-6">
                <h3 className="text-xl text-gray-900 mb-3">Central Province</h3>
                <p className="text-gray-700">
                  <strong>Districts:</strong> Kandy, Matale, Nuwara Eliya
                </p>
                <p className="text-gray-700 mt-2">
                  Hill country areas with rapid water runoff. Landslides often accompany flooding. 
                  Mahaweli river basin communities at risk.
                </p>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-6">
                <h3 className="text-xl text-gray-900 mb-3">Eastern Province</h3>
                <p className="text-gray-700">
                  <strong>Districts:</strong> Trincomalee, Batticaloa, Ampara
                </p>
                <p className="text-gray-700 mt-2">
                  Affected during Northeast monsoon. Low-lying coastal and lagoon areas vulnerable. 
                  Agricultural lands frequently inundated.
                </p>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6">
                <h3 className="text-xl text-gray-900 mb-3">North Central Province</h3>
                <p className="text-gray-700">
                  <strong>Districts:</strong> Anuradhapura, Polonnaruwa
                </p>
                <p className="text-gray-700 mt-2">
                  Tank overflow and irrigation system flooding common. Ancient reservoir systems require 
                  careful water management during heavy rains.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Patterns */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="w-8 h-8 text-blue-600" />
            <h2 className="text-4xl text-gray-900">Seasonal Flood Patterns</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl text-gray-900 mb-4">Southwest Monsoon (May - September)</h3>
              <p className="text-gray-700 mb-4">
                Affects western, southwestern, and sabaragamuwa regions most severely. Peak flooding 
                typically occurs in May-June and August-September.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Colombo, Gampaha, Kalutara districts at highest risk</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Ratnapura experiences some of the heaviest rainfall</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Urban areas face drainage overflow issues</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl text-gray-900 mb-4">Northeast Monsoon (December - February)</h3>
              <p className="text-gray-700 mb-4">
                Impacts northern and eastern provinces. Flooding peaks in December-January, affecting 
                agricultural communities and coastal areas.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Batticaloa, Ampara, Trincomalee heavily affected</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Northern province experiences significant rainfall</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Paddy fields and low-lying areas inundated</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <h4 className="text-lg text-gray-900 mb-2">Inter-Monsoon Periods</h4>
            <p className="text-gray-700">
              Between monsoons (March-April and October-November), thunderstorms can cause localized 
              flash flooding. These sudden events are harder to predict and can catch communities unprepared.
            </p>
          </div>
        </div>
      </section>

      {/* Historical Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-gray-900 mb-12 text-center">Major Historical Flood Events</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h3 className="text-xl text-gray-900">May 2003 Floods</h3>
                <span className="text-gray-600">Southwestern Sri Lanka</span>
              </div>
              <p className="text-gray-700">
                Severe flooding affected Ratnapura, Kalutara, and Galle districts. Over 250,000 people 
                displaced. Significant damage to infrastructure and agriculture. Led to improved early 
                warning systems.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h3 className="text-xl text-gray-900">May 2016 Floods & Landslides</h3>
                <span className="text-gray-600">Multiple Provinces</span>
              </div>
              <p className="text-gray-700">
                One of the worst disasters in recent history. Heavy rainfall caused widespread flooding and 
                landslides. Kegalle and Ratnapura severely affected. Over 100 fatalities and 500,000 people 
                displaced. Prompted major disaster management reforms.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h3 className="text-xl text-gray-900">May 2017 Floods</h3>
                <span className="text-gray-600">Southwestern Regions</span>
              </div>
              <p className="text-gray-700">
                Southwest monsoon brought extreme rainfall. Colombo, Gampaha, Kalutara, and Ratnapura 
                districts heavily flooded. Approximately 200 deaths and 600,000 affected. Economic losses 
                exceeded $3.5 billion USD.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h3 className="text-xl text-gray-900">November 2024 Floods</h3>
                <span className="text-gray-600">Northern & Eastern Provinces</span>
              </div>
              <p className="text-gray-700">
                Northeast monsoon caused severe flooding in Jaffna, Kilinochchi, Mullaitivu, Trincomalee, 
                and Batticaloa. Over 300,000 people affected. Agricultural losses significant as paddy 
                fields submerged during harvest season.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Flood Formation Diagram */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-gray-900 mb-8 text-center">How Floods Form</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CloudRain className="w-12 h-12 text-blue-600" />
                </div>
                <h4 className="text-lg text-gray-900 mb-2">1. Heavy Rainfall</h4>
                <p className="text-gray-600">
                  Intense rain exceeds the ground's ability to absorb water
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-12 h-12 text-blue-700" />
                </div>
                <h4 className="text-lg text-gray-900 mb-2">2. Water Accumulation</h4>
                <p className="text-gray-600">
                  Water collects in low areas and rivers begin to swell
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="w-12 h-12 text-red-600" />
                </div>
                <h4 className="text-lg text-gray-900 mb-2">3. Overflow & Flooding</h4>
                <p className="text-gray-600">
                  Rivers overflow banks and water spreads across land
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <p className="text-gray-700">
                <strong>Contributing Factors:</strong> Poor drainage systems, deforestation reducing natural 
                water absorption, urbanization creating impermeable surfaces, and blocked waterways all 
                worsen flooding. Climate change is making extreme rainfall events more frequent and severe.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
