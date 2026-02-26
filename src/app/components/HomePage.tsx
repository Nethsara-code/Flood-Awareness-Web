import { Link } from 'react-router-dom';
import { 
  AlertTriangle, 
  Shield, 
  BookOpen, 
  Users, 
  TrendingUp, 
  ChevronRight,
  Phone,
  FileText,
  Heart
} from 'lucide-react';

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-blue-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1651264042790-5455c73adf78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYSUyMGZsb29kJTIwZGlzYXN0ZXIlMjBhZXJpYWwlMjB2aWV3fGVufDF8fHx8MTc3MjExNzQ3MXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Flood awareness"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl text-white mb-6">
              Flood Awareness & Safety
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Protecting communities across Sri Lanka through education, preparation, and timely action. 
              Learn how to stay safe before, during, and after flood disasters.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/about"
                className="px-6 py-3 bg-white text-blue-900 rounded-md hover:bg-blue-50 transition-colors flex items-center gap-2"
              >
                Learn More <ChevronRight className="w-5 h-5" />
              </Link>
              <Link
                to="/emergency"
                className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Emergency Help
              </Link>
              <Link
                to="/preparedness"
                className="px-6 py-3 bg-yellow-500 text-gray-900 rounded-md hover:bg-yellow-400 transition-colors flex items-center gap-2"
              >
                <Shield className="w-5 h-5" />
                Stay Prepared
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistic */}
      <section className="bg-red-50 border-b-4 border-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <AlertTriangle className="w-12 h-12 text-red-600" />
              <div>
                <div className="text-3xl text-red-600">2.5 Million+</div>
                <div className="text-gray-700">People affected by floods annually in Sri Lanka</div>
              </div>
            </div>
            <Link
              to="/about"
              className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
              Learn About Flood Risks
            </Link>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-gray-900 mb-4">How We Help</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive resources and information to keep you and your community safe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <AlertTriangle className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl text-gray-900 mb-3">Early Warning</h3>
              <p className="text-gray-600 mb-4">
                Real-time flood alerts, weather updates, and monsoon forecasts to help you prepare in advance.
              </p>
              <Link to="/news" className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
                View Alerts <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl text-gray-900 mb-3">Safety Guidelines</h3>
              <p className="text-gray-600 mb-4">
                Step-by-step instructions on what to do before, during, and after a flood to protect your family.
              </p>
              <Link to="/preparedness" className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
                Learn Safety <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl text-gray-900 mb-3">Emergency Support</h3>
              <p className="text-gray-600 mb-4">
                Access to emergency hotlines, evacuation centers, and rescue services across Sri Lanka.
              </p>
              <Link to="/emergency" className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
                Get Help <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Information Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1640624728340-a7cc8fda4a7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWF2eSUyMHJhaW5mYWxsJTIwbW9uc29vbiUyMGNsb3Vkc3xlbnwxfHx8fDE3NzIxMTc0NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="About floods"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <BookOpen className="w-10 h-10 mb-3" />
                  <h3 className="text-2xl mb-2">Understanding Floods</h3>
                  <p className="mb-4">Learn about causes, patterns, and high-risk areas in Sri Lanka</p>
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300"
                  >
                    Read More <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1761599934469-999a86c52830?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyZ2VuY3klMjBraXQlMjBzdXBwbGllcyUyMHByZXBhcmF0aW9ufGVufDF8fHx8MTc3MjExNzQ3Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Preparedness"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <FileText className="w-10 h-10 mb-3" />
                  <h3 className="text-2xl mb-2">Emergency Preparedness</h3>
                  <p className="mb-4">Create your emergency kit and evacuation plan today</p>
                  <Link
                    to="/preparedness"
                    className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300"
                  >
                    Get Started <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Stories */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-4xl text-gray-900 mb-4">Community Impact</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Together we build resilient communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <TrendingUp className="w-8 h-8 text-green-600 mb-3" />
              <div className="text-3xl text-gray-900 mb-2">150,000+</div>
              <p className="text-gray-600">People trained in flood safety</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Shield className="w-8 h-8 text-blue-600 mb-3" />
              <div className="text-3xl text-gray-900 mb-2">500+</div>
              <p className="text-gray-600">Evacuation centers nationwide</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Heart className="w-8 h-8 text-red-600 mb-3" />
              <div className="text-3xl text-gray-900 mb-2">24/7</div>
              <p className="text-gray-600">Emergency response availability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl text-white mb-4">Stay Informed, Stay Safe</h2>
          <p className="text-xl text-blue-100 mb-8">
            Subscribe to receive flood alerts and safety updates directly
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/news"
              className="px-8 py-4 bg-white text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
            >
              View Latest Alerts
            </Link>
            <Link
              to="/preparedness"
              className="px-8 py-4 bg-yellow-500 text-gray-900 rounded-md hover:bg-yellow-400 transition-colors"
            >
              Download Safety Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
