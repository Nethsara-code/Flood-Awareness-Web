import { Phone, MapPin, Building2, Navigation, AlertTriangle } from 'lucide-react';

export function EmergencyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-80 bg-red-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1768472085854-5cb0a4e140ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG9vZCUyMHdhdGVyJTIwZW1lcmdlbmN5JTIwcmVzY3VlfGVufDF8fHx8MTc3MjExNzQ3MXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Emergency response"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div>
            <h1 className="text-5xl text-white mb-4">Emergency Contacts & Resources</h1>
            <p className="text-xl text-red-100 max-w-2xl">
              Quick access to emergency services, evacuation centers, and disaster response agencies
            </p>
          </div>
        </div>
      </section>

      {/* Quick Emergency Numbers */}
      <section className="bg-red-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Phone className="w-8 h-8" />
            <h2 className="text-3xl">Emergency Hotlines</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a href="tel:117" className="bg-white text-red-600 p-6 rounded-lg hover:bg-red-50 transition-colors">
              <div className="text-4xl mb-2">1990</div>
              <div className="text-lg">Emergency Services</div>
              <div className="text-sm opacity-75">General Emergency Line</div>
            </a>
            <a href="tel:0112136136" className="bg-white text-red-600 p-6 rounded-lg hover:bg-red-50 transition-colors">
              <div className="text-4xl mb-2">011 2136136</div>
              <div className="text-lg">Disaster Management</div>
              <div className="text-sm opacity-75">DMC Emergency Centre</div>
            </a>
            <a href="tel:1990" className="bg-white text-red-600 p-6 rounded-lg hover:bg-red-50 transition-colors">
              <div className="text-4xl mb-2">119</div>
              <div className="text-lg">Police Emergency</div>
              <div className="text-sm opacity-75">24/7 Police Hotline</div>
            </a>
          </div>
        </div>
      </section>

      {/* National Disaster Response Agencies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <Building2 className="w-8 h-8 text-blue-600" />
            <h2 className="text-4xl text-gray-900">National Disaster Response Agencies</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl text-gray-900 mb-4">Disaster Management Centre (DMC)</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 mt-1 flex-shrink-0 text-blue-600" />
                  <div>
                    <p className="font-semibold">Emergency Operations Center</p>
                    <p>011-2136136 / 011-2670002</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 mt-1 flex-shrink-0 text-blue-600" />
                  <div>
                    <p className="font-semibold">24/7 Hotline</p>
                    <p>117</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-blue-600" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p>No. 39, Bauddaloka Mawatha, Colombo 7</p>
                  </div>
                </div>
                <p className="pt-3 border-t border-blue-200">
                  Primary agency coordinating disaster management activities, early warnings, and emergency response operations nationwide.
                </p>
              </div>
            </div>

            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-2xl text-gray-900 mb-4">Department of Meteorology</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 mt-1 flex-shrink-0 text-green-600" />
                  <div>
                    <p className="font-semibold">Weather Information</p>
                    <p>011-2694071 / 011-2686321</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 mt-1 flex-shrink-0 text-green-600" />
                  <div>
                    <p className="font-semibold">Forecasting Division</p>
                    <p>011-2686321-23</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-green-600" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p>383, Bauddhaloka Mawatha, Colombo 7</p>
                  </div>
                </div>
                <p className="pt-3 border-t border-green-200">
                  Provides weather forecasts, rainfall predictions, and early warnings for severe weather conditions including monsoons.
                </p>
              </div>
            </div>

            <div className="bg-purple-50 p-8 rounded-lg">
              <h3 className="text-2xl text-gray-900 mb-4">Irrigation Department</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 mt-1 flex-shrink-0 text-purple-600" />
                  <div>
                    <p className="font-semibold">Main Office</p>
                    <p>011-2587411 / 011-2587377</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-purple-600" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p>230, Bauddhaloka Mawatha, Colombo 7</p>
                  </div>
                </div>
                <p className="pt-3 border-t border-purple-200">
                  Monitors water levels in reservoirs and rivers, manages irrigation systems, and provides flood risk assessments.
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 p-8 rounded-lg">
              <h3 className="text-2xl text-gray-900 mb-4">Sri Lanka Red Cross Society</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 mt-1 flex-shrink-0 text-red-600" />
                  <div>
                    <p className="font-semibold">Emergency Relief</p>
                    <p>011-2691095 / 011-2695763</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 mt-1 flex-shrink-0 text-red-600" />
                  <div>
                    <p className="font-semibold">Disaster Response</p>
                    <p>011-2684143</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-red-600" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p>104, Dharmapala Mawatha, Colombo 7</p>
                  </div>
                </div>
                <p className="pt-3 border-t border-yellow-200">
                  Provides emergency relief, first aid, medical assistance, and supports evacuation operations during disasters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medical & Rescue Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-gray-900 mb-12">Medical & Rescue Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl text-gray-900 mb-4">Ambulance Services</h3>
              <div className="space-y-2">
                <p className="flex items-center gap-2 text-gray-700">
                  <Phone className="w-4 h-4 text-red-600" />
                  <span>1990 - General Ambulance</span>
                </p>
                <p className="flex items-center gap-2 text-gray-700">
                  <Phone className="w-4 h-4 text-red-600" />
                  <span>011-2691111 - Suwa Seriya</span>
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl text-gray-900 mb-4">Fire & Rescue</h3>
              <div className="space-y-2">
                <p className="flex items-center gap-2 text-gray-700">
                  <Phone className="w-4 h-4 text-orange-600" />
                  <span>110 - Fire Emergency</span>
                </p>
                <p className="flex items-center gap-2 text-gray-700">
                  <Phone className="w-4 h-4 text-orange-600" />
                  <span>011-2422222 - Colombo Fire</span>
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl text-gray-900 mb-4">Search & Rescue</h3>
              <div className="space-y-2">
                <p className="flex items-center gap-2 text-gray-700">
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>011-2429411 - Navy</span>
                </p>
                <p className="flex items-center gap-2 text-gray-700">
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>011-2430860 - Air Force</span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl text-gray-900 mb-4">Major Hospitals with Emergency Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-gray-900 mb-2">National Hospital of Sri Lanka</p>
                <p className="text-gray-700">011-2691111 - Colombo</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Colombo South Teaching Hospital</p>
                <p className="text-gray-700">011-2626100 - Kalubowila</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Teaching Hospital Karapitiya</p>
                <p className="text-gray-700">091-2232261 - Galle</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Teaching Hospital Kandy</p>
                <p className="text-gray-700">081-2233337 - Kandy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Early Warning Systems */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <AlertTriangle className="w-8 h-8 text-yellow-600" />
            <h2 className="text-4xl text-gray-900">Early Flood Warning Systems</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-yellow-50 p-8 rounded-lg">
              <h3 className="text-2xl text-gray-900 mb-4">SMS Alert System</h3>
              <p className="text-gray-700 mb-4">
                Register your mobile number to receive free flood warnings and weather alerts from DMC.
              </p>
              <div className="bg-white p-4 rounded border-2 border-yellow-500">
                <p className="text-gray-900 mb-2"><strong>How to Register:</strong></p>
                <ol className="space-y-2 text-gray-700">
                  <li>1. Send SMS to 117</li>
                  <li>2. Format: REG [Your District]</li>
                  <li>3. Example: REG COLOMBO</li>
                </ol>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl text-gray-900 mb-4">Mobile Apps & Online Resources</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <div>
                    <p className="font-semibold">DMC Sri Lanka App</p>
                    <p className="text-sm">Real-time alerts and safety information</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <div>
                    <p className="font-semibold">Meteorology Department Website</p>
                    <p className="text-sm">www.meteo.gov.lk - Weather forecasts</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <div>
                    <p className="font-semibold">Social Media Channels</p>
                    <p className="text-sm">Follow @dmc_srilanka on Twitter/Facebook</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Evacuation Centers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <MapPin className="w-8 h-8 text-green-600" />
            <h2 className="text-4xl text-gray-900">Evacuation Centers & Safe Zones</h2>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
            <p className="text-lg text-gray-700 mb-6">
              Over 500 evacuation centers are available across Sri Lanka during flood emergencies. 
              Contact your local Divisional Secretariat or DMC for the nearest center.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg text-gray-900 mb-3">Evacuation centers typically include:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span>Schools and community centers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span>Religious buildings (temples, churches, mosques)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span>Government buildings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span>Sports complexes</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg text-gray-900 mb-3">Facilities provided:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Shelter and sleeping areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Food and clean water</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Basic medical care</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Sanitation facilities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6">
            <h4 className="text-xl text-gray-900 mb-3 flex items-center gap-2">
              <Navigation className="w-6 h-6 text-green-600" />
              Find Your Nearest Evacuation Center
            </h4>
            <p className="text-gray-700 mb-4">
              Contact your local Divisional Secretariat office or call the DMC hotline at <strong>011-2136136</strong> 
              to find the nearest evacuation center in your area. Keep this information readily available.
            </p>
            <button className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
              View Interactive Map
            </button>
          </div>
        </div>
      </section>

      {/* Provincial Contacts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-gray-900 mb-12">Provincial Disaster Management Contacts</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg text-gray-900 mb-3">Western Province</h3>
              <p className="text-gray-700">011-2873444</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg text-gray-900 mb-3">Central Province</h3>
              <p className="text-gray-700">081-2234050</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg text-gray-900 mb-3">Southern Province</h3>
              <p className="text-gray-700">091-2234177</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg text-gray-900 mb-3">Northern Province</h3>
              <p className="text-gray-700">021-2226789</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg text-gray-900 mb-3">Eastern Province</h3>
              <p className="text-gray-700">026-2224566</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg text-gray-900 mb-3">North Western Province</h3>
              <p className="text-gray-700">037-2222406</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg text-gray-900 mb-3">North Central Province</h3>
              <p className="text-gray-700">025-2222358</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg text-gray-900 mb-3">Uva Province</h3>
              <p className="text-gray-700">055-2222366</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg text-gray-900 mb-3">Sabaragamuwa Province</h3>
              <p className="text-gray-700">045-2222275</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Preparation Reminder */}
      <section className="py-16 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AlertTriangle className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl text-white mb-4">Save These Numbers</h2>
          <p className="text-xl text-red-100 mb-8">
            Keep emergency contact numbers saved in your phone and written down in a safe place. 
            Share them with your family members.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-red-600 rounded-md hover:bg-red-50 transition-colors">
              Download Contact List
            </button>
            <button className="px-8 py-4 bg-yellow-500 text-gray-900 rounded-md hover:bg-yellow-400 transition-colors">
              Share with Family
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
