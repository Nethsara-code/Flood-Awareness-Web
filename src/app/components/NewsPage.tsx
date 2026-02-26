import { AlertTriangle, Calendar, Users, Play, TrendingUp } from 'lucide-react';

export function NewsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-80 bg-orange-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1661233099306-6bfbde305f7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBoZWxwaW5nJTIwZmxvb2QlMjByZWNvdmVyeXxlbnwxfHx8fDE3NzIxMTc0NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Community support"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div>
            <h1 className="text-5xl text-white mb-4">News, Alerts & Community Stories</h1>
            <p className="text-xl text-orange-100 max-w-2xl">
              Stay updated with the latest flood news, weather alerts, and inspiring community stories
            </p>
          </div>
        </div>
      </section>

      {/* Active Alerts */}
      <section className="bg-yellow-50 border-b-4 border-yellow-500 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-8 h-8 text-yellow-600" />
            <h2 className="text-3xl text-gray-900">Active Weather Alerts</h2>
          </div>

          <div className="space-y-4">
            <div className="bg-yellow-100 border-l-4 border-yellow-600 p-6 rounded-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-yellow-600 text-white text-sm rounded-full">ADVISORY</span>
                  <h3 className="text-xl text-gray-900">Heavy Rainfall Expected</h3>
                </div>
                <span className="text-gray-600 text-sm mt-2 md:mt-0">Updated: Feb 26, 2026 - 8:00 AM</span>
              </div>
              <p className="text-gray-700 mb-3">
                The Department of Meteorology forecasts heavy rainfall (above 100mm) in Western, Sabaragamuwa, 
                and Central provinces during the next 24-48 hours. Residents in low-lying areas and river basins 
                should remain vigilant.
              </p>
              <p className="text-gray-900"><strong>Affected Districts:</strong> Colombo, Gampaha, Kalutara, Ratnapura, Kegalle, Kandy</p>
            </div>

            <div className="bg-orange-100 border-l-4 border-orange-600 p-6 rounded-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-orange-600 text-white text-sm rounded-full">WARNING</span>
                  <h3 className="text-xl text-gray-900">River Levels Rising</h3>
                </div>
                <span className="text-gray-600 text-sm mt-2 md:mt-0">Updated: Feb 26, 2026 - 6:00 AM</span>
              </div>
              <p className="text-gray-700 mb-3">
                Kelani and Kalu river water levels are rising due to continuous rainfall in upstream areas. 
                Communities along river banks should prepare for possible evacuation and move valuables to higher ground.
              </p>
              <p className="text-gray-900"><strong>Monitor Status:</strong> Kelani River - Caution Level | Kalu River - Minor Flood Level</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <Calendar className="w-8 h-8 text-blue-600" />
            <h2 className="text-4xl text-gray-900">Latest Flood News</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Featured News */}
            <div className="lg:col-span-2 space-y-8">
              <article className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1640624728340-a7cc8fda4a7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWF2eSUyMHJhaW5mYWxsJTIwbW9uc29vbiUyMGNsb3Vkc3xlbnwxfHx8fDE3NzIxMTc0NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Monsoon rains"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>February 25, 2026</span>
                    <span>•</span>
                    <span>DMC Press Release</span>
                  </div>
                  <h3 className="text-2xl text-gray-900 mb-3">
                    DMC Issues Flood Advisory for Five Districts as Monsoon Intensifies
                  </h3>
                  <p className="text-gray-700 mb-4">
                    The Disaster Management Centre has issued a flood advisory for Colombo, Gampaha, Kalutara, 
                    Ratnapura, and Kegalle districts as the Southwest monsoon brings heavy rainfall. Over 5,000 
                    families have been moved to safer locations as a precautionary measure. Emergency response 
                    teams are on standby in all affected districts.
                  </p>
                  <a href="#" className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
                    Read full article →
                  </a>
                </div>
              </article>

              <article className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                <div className="flex flex-col md:flex-row">
                  <img
                    src="https://images.unsplash.com/photo-1759843009304-c06a707a5470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaXZlciUyMG92ZXJmbG93JTIwZmxvb2RpbmclMjBkYW1hZ2V8ZW58MXx8fHwxNzcyMTE3NDcyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Flood response"
                    className="w-full md:w-64 h-48 md:h-auto object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>February 24, 2026</span>
                    </div>
                    <h3 className="text-xl text-gray-900 mb-3">
                      New Early Warning System Launched in Flood-Prone Areas
                    </h3>
                    <p className="text-gray-700 mb-4">
                      The government has launched an upgraded SMS-based early warning system covering 25 districts. 
                      The system will provide real-time flood alerts, helping communities prepare and evacuate in advance.
                    </p>
                    <a href="#" className="text-blue-600 hover:text-blue-700">Read more →</a>
                  </div>
                </div>
              </article>

              <article className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                <div className="flex flex-col md:flex-row">
                  <img
                    src="https://images.unsplash.com/photo-1661233099306-6bfbde305f7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBoZWxwaW5nJTIwZmxvb2QlMjByZWNvdmVyeXxlbnwxfHx8fDE3NzIxMTc0NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Community recovery"
                    className="w-full md:w-64 h-48 md:h-auto object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>February 23, 2026</span>
                    </div>
                    <h3 className="text-xl text-gray-900 mb-3">
                      Climate Change Adaptation: New Drainage Projects Underway
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Major urban drainage improvement projects have commenced in Colombo and Gampaha districts 
                      to address increasing flood risks due to climate change and rapid urbanization.
                    </p>
                    <a href="#" className="text-blue-600 hover:text-blue-700">Read more →</a>
                  </div>
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl text-gray-900 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                  Quick Updates
                </h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-blue-600 pl-4">
                    <p className="text-sm text-gray-600 mb-1">2 hours ago</p>
                    <p className="text-gray-900">Water levels in Mahaweli river decreasing gradually</p>
                  </div>
                  <div className="border-l-2 border-blue-600 pl-4">
                    <p className="text-sm text-gray-600 mb-1">4 hours ago</p>
                    <p className="text-gray-900">50 evacuation centers opened in Western Province</p>
                  </div>
                  <div className="border-l-2 border-blue-600 pl-4">
                    <p className="text-sm text-gray-600 mb-1">6 hours ago</p>
                    <p className="text-gray-900">Navy rescue teams deployed to Ratnapura district</p>
                  </div>
                  <div className="border-l-2 border-blue-600 pl-4">
                    <p className="text-sm text-gray-600 mb-1">8 hours ago</p>
                    <p className="text-gray-900">Red Cross distributes relief supplies to 2,000 families</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl text-gray-900 mb-4">Rainfall Statistics</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">Ratnapura</span>
                      <span className="text-gray-900">245mm</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '98%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">Colombo</span>
                      <span className="text-gray-900">142mm</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '57%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">Galle</span>
                      <span className="text-gray-900">98mm</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '39%' }}></div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-3">Last 24 hours - Source: Meteorology Dept.</p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl text-gray-900 mb-4">Subscribe to Alerts</h3>
                <p className="text-gray-700 mb-4">Get flood warnings via SMS</p>
                <div className="space-y-2">
                  <input
                    type="tel"
                    placeholder="Your mobile number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <Users className="w-8 h-8 text-green-600" />
            <h2 className="text-4xl text-gray-900">Community Stories</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl text-gray-900 mb-3 text-center">Village Unity Saves Lives</h3>
              <p className="text-gray-700 mb-4">
                When floods hit Bulathkohupitiya, the entire village worked together to evacuate elderly residents 
                and ensure no one was left behind. Their coordinated effort and preparedness saved countless lives.
              </p>
              <a href="#" className="text-green-600 hover:text-green-700 flex items-center justify-center gap-1">
                Read their story →
              </a>
            </article>

            <article className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl text-gray-900 mb-3 text-center">Teacher Turns Hero</h3>
              <p className="text-gray-700 mb-4">
                A school teacher in Kaduwela used her emergency training to organize a safe evacuation of her 
                neighborhood, helping 50 families reach safety during sudden flooding.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-700 flex items-center justify-center gap-1">
                Read their story →
              </a>
            </article>

            <article className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl text-gray-900 mb-3 text-center">Youth Volunteers Make Impact</h3>
              <p className="text-gray-700 mb-4">
                A group of young volunteers in Ratnapura district organized relief efforts, distributing food 
                and supplies to over 200 affected families while supporting recovery operations.
              </p>
              <a href="#" className="text-purple-600 hover:text-purple-700 flex items-center justify-center gap-1">
                Read their story →
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* Educational Videos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <Play className="w-8 h-8 text-red-600" />
            <h2 className="text-4xl text-gray-900">Educational Videos & PSAs</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <div className="relative h-48 bg-gray-300 flex items-center justify-center">
                <Play className="w-16 h-16 text-white" />
                <img
                  src="https://images.unsplash.com/photo-1761599934469-999a86c52830?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyZ2VuY3klMjBraXQlMjBzdXBwbGllcyUyMHByZXBhcmF0aW9ufGVufDF8fHx8MTc3MjExNzQ3Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Video thumbnail"
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg text-gray-900 mb-2">How to Prepare an Emergency Kit</h3>
                <p className="text-sm text-gray-600">Duration: 5:32</p>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <div className="relative h-48 bg-gray-300 flex items-center justify-center">
                <Play className="w-16 h-16 text-white" />
                <img
                  src="https://images.unsplash.com/photo-1768472085854-5cb0a4e140ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG9vZCUyMHdhdGVyJTIwZW1lcmdlbmN5JTIwcmVzY3VlfGVufDF8fHx8MTc3MjExNzQ3MXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Video thumbnail"
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg text-gray-900 mb-2">What to Do During a Flood</h3>
                <p className="text-sm text-gray-600">Duration: 7:18</p>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <div className="relative h-48 bg-gray-300 flex items-center justify-center">
                <Play className="w-16 h-16 text-white" />
                <img
                  src="https://images.unsplash.com/photo-1651264042790-5455c73adf78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYSUyMGZsb29kJTIwZGlzYXN0ZXIlMjBhZXJpYWwlMjB2aWV3fGVufDF8fHx8MTc3MjExNzQ3MXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Video thumbnail"
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg text-gray-900 mb-2">Understanding Flood Risks in Sri Lanka</h3>
                <p className="text-sm text-gray-600">Duration: 10:45</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awareness Campaigns */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl text-white mb-4">Join Our Awareness Campaign</h2>
          <p className="text-xl text-blue-100 mb-8">
            Help spread flood safety knowledge in your community. Download materials and share information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-md hover:bg-blue-50 transition-colors">
              Download Posters
            </button>
            <button className="px-8 py-4 bg-yellow-500 text-gray-900 rounded-md hover:bg-yellow-400 transition-colors">
              Share on Social Media
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
