import { 
  Package, 
  MapPin, 
  Radio, 
  Home,
  AlertTriangle,
  ThumbsUp,
  ThumbsDown,
  HeartPulse,
  Droplets
} from 'lucide-react';

export function PreparednessPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-96 bg-green-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1761599934469-999a86c52830?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyZ2VuY3klMjBraXQlMjBzdXBwbGllcyUyMHByZXBhcmF0aW9ufGVufDF8fHx8MTc3MjExNzQ3Mnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Emergency preparedness"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div>
            <h1 className="text-5xl text-white mb-4">Preparedness & Safety Guidelines</h1>
            <p className="text-xl text-green-100 max-w-2xl">
              Essential steps to protect yourself and your family before, during, and after a flood
            </p>
          </div>
        </div>
      </section>

      {/* Before a Flood */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Package className="w-7 h-7 text-blue-600" />
            </div>
            <h2 className="text-4xl text-gray-900">Before a Flood</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl text-gray-900 mb-4 flex items-center gap-2">
                <Package className="w-6 h-6 text-blue-600" />
                Emergency Kit Preparation
              </h3>
              <p className="text-gray-700 mb-4">
                Prepare a waterproof emergency kit and keep it easily accessible:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span><strong>Food & Water:</strong> Non-perishable food for 3 days, 3 liters of water per person per day</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span><strong>First Aid Kit:</strong> Bandages, antiseptics, prescription medications, pain relievers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span><strong>Light & Power:</strong> Flashlight with extra batteries, portable phone charger</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span><strong>Communication:</strong> Battery-powered radio, whistle for signaling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span><strong>Hygiene Items:</strong> Soap, sanitizer, toilet paper, feminine products</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span><strong>Clothing:</strong> Change of clothes, sturdy shoes, rain gear</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span><strong>Tools:</strong> Multi-tool, duct tape, plastic sheeting, rope</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span><strong>Cash:</strong> Small bills and coins (ATMs may not work)</span>
                </li>
              </ul>
            </div>

            <div className="space-y-8">
              <div className="bg-green-50 p-8 rounded-lg">
                <h3 className="text-2xl text-gray-900 mb-4 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-green-600" />
                  Evacuation Planning
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Identify nearest evacuation centers in your area</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Plan multiple evacuation routes from your home</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Establish a family meeting point if separated</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Practice evacuation with all family members</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Know how to turn off gas, water, and electricity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Arrange care for elderly or disabled family members</span>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-8 rounded-lg">
                <h3 className="text-2xl text-gray-900 mb-4 flex items-center gap-2">
                  <Radio className="w-6 h-6 text-yellow-600" />
                  Monitor Weather Alerts
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">✓</span>
                    <span>Follow Department of Meteorology forecasts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">✓</span>
                    <span>Register for SMS flood alerts with DMC</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">✓</span>
                    <span>Listen to local radio for emergency announcements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">✓</span>
                    <span>Stay connected with community leaders</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-purple-50 p-8 rounded-lg">
            <h3 className="text-2xl text-gray-900 mb-4">Protect Important Documents</h3>
            <p className="text-gray-700 mb-4">
              Store these in a waterproof container or digital backup:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-gray-700">
                <li>• National Identity Cards</li>
                <li>• Birth certificates</li>
                <li>• Property deeds and land documents</li>
                <li>• Insurance policies</li>
              </ul>
              <ul className="space-y-2 text-gray-700">
                <li>• Bank account information</li>
                <li>• Medical records and prescriptions</li>
                <li>• Family photographs</li>
                <li>• Emergency contact numbers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* During a Flood */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-7 h-7 text-red-600" />
            </div>
            <h2 className="text-4xl text-gray-900">During a Flood</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-red-50 p-8 rounded-lg border-l-4 border-red-500">
              <h3 className="text-2xl text-gray-900 mb-4">Safe Evacuation Steps</h3>
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                  <span>Evacuate immediately if authorities order it. Don't wait until it's too late.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                  <span>Move to higher ground or upper floors if evacuation is not possible.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                  <span>Take your emergency kit, but don't delay evacuation to gather belongings.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                  <span>Turn off utilities (gas, electricity, water) if time permits and safe to do so.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">5</span>
                  <span>Lock your home and mark that you've evacuated (if safe).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">6</span>
                  <span>Follow designated evacuation routes. Avoid shortcuts through unfamiliar areas.</span>
                </li>
              </ol>
            </div>

            <div className="bg-orange-50 p-8 rounded-lg border-l-4 border-orange-500">
              <h3 className="text-2xl text-gray-900 mb-4">Avoid Floodwater Hazards</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Droplets className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Never Walk Through Floodwater</p>
                    <p className="text-gray-700">Just 15cm (6 inches) of moving water can knock you down. Water may be deeper than it appears.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Droplets className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Don't Drive Through Floods</p>
                    <p className="text-gray-700">30cm of water can float most cars. Turn around, don't drown!</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Droplets className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Beware of Contamination</p>
                    <p className="text-gray-700">Floodwater contains sewage, chemicals, and debris. Avoid contact with skin and mouth.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Droplets className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Watch for Hidden Dangers</p>
                    <p className="text-gray-700">Floodwater can hide open manholes, broken glass, sharp objects, and electrical hazards.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl text-gray-900 mb-4">Emergency Survival Tips</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Stay calm and help others stay calm</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Keep mobile phone charged and conserve battery</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Signal for help using whistle, flashlight, or bright cloth</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Stay away from windows during heavy winds</span>
                </li>
              </ul>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Don't use candles or open flames (risk of gas leaks)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Ration food and water supplies carefully</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Stay on upper floors if trapped in building</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Listen to radio for rescue information</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Do's and Don'ts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-gray-900 mb-12 text-center">Flood Safety: Do's and Don'ts</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-6">
                <ThumbsUp className="w-8 h-8 text-green-600" />
                <h3 className="text-2xl text-gray-900">DO</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Evacuate immediately when authorities advise</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Move valuable items to upper floors</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Turn off utilities before evacuating</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Keep emergency numbers programmed in your phone</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Inform neighbors, especially elderly or disabled</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Follow instructions from emergency responders</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Stay informed through radio and official channels</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Help others if you can do so safely</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-6">
                <ThumbsDown className="w-8 h-8 text-red-600" />
                <h3 className="text-2xl text-gray-900">DON'T</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-red-600 text-xl">✗</span>
                  <span>Don't ignore evacuation orders</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-red-600 text-xl">✗</span>
                  <span>Don't walk or drive through floodwater</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-red-600 text-xl">✗</span>
                  <span>Don't touch electrical equipment if wet</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-red-600 text-xl">✗</span>
                  <span>Don't use contaminated water for drinking or cooking</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-red-600 text-xl">✗</span>
                  <span>Don't return home before authorities say it's safe</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-red-600 text-xl">✗</span>
                  <span>Don't spread unverified information or rumors</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-red-600 text-xl">✗</span>
                  <span>Don't forget to check on elderly neighbors</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-red-600 text-xl">✗</span>
                  <span>Don't underestimate the power of water</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* After a Flood */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <Home className="w-7 h-7 text-purple-600" />
            </div>
            <h2 className="text-4xl text-gray-900">After a Flood</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl text-gray-900 mb-4">Returning Home Safely</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">1.</span>
                  <span>Wait for official confirmation that it's safe to return</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">2.</span>
                  <span>Inspect your home for structural damage before entering</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">3.</span>
                  <span>Watch for loose power lines and report them immediately</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">4.</span>
                  <span>Check for gas leaks - smell of gas or hissing sound</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">5.</span>
                  <span>Take photos of damage for insurance claims</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">6.</span>
                  <span>Ventilate your home to remove moisture and odors</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl text-gray-900 mb-4 flex items-center gap-2">
                <HeartPulse className="w-6 h-6 text-red-600" />
                Health Precautions
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Boil water before drinking or use bottled water</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Wash hands frequently, especially before eating</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Watch for signs of waterborne diseases (diarrhea, fever)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Seek medical attention for any cuts or wounds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Protect against mosquitoes to prevent dengue</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Discard food that has been in contact with floodwater</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl text-gray-900 mb-4">Cleaning and Recovery</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Remove standing water and mud as soon as possible</li>
                <li>• Clean and disinfect everything that got wet</li>
                <li>• Dry out your home completely to prevent mold</li>
                <li>• Use fans and dehumidifiers if available</li>
                <li>• Discard porous materials that were soaked (mattresses, carpets)</li>
                <li>• Clean water tanks thoroughly before use</li>
                <li>• Have electrical systems inspected before use</li>
              </ul>
            </div>

            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-2xl text-gray-900 mb-4">Mental Wellbeing Support</h3>
              <p className="text-gray-700 mb-4">
                Floods can be traumatic. It's normal to feel stressed, anxious, or overwhelmed.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Talk about your feelings with family and friends</li>
                <li>• Maintain routines as much as possible</li>
                <li>• Take breaks from recovery work</li>
                <li>• Accept help from community and support organizations</li>
                <li>• Seek professional counseling if needed</li>
                <li>• Be patient with yourself and others</li>
                <li>• Focus on what can be done, one step at a time</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Kit Checklist Download */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Package className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl text-white mb-4">Download Your Safety Checklist</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a printable PDF with complete preparedness guidelines and emergency kit checklist
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-md hover:bg-blue-50 transition-colors">
            Download PDF Guide
          </button>
        </div>
      </section>
    </div>
  );
}
