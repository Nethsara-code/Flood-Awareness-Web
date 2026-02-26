import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Floods
                </Link>
              </li>
              <li>
                <Link to="/preparedness" className="hover:text-white transition-colors">
                  Safety Guidelines
                </Link>
              </li>
              <li>
                <Link to="/emergency" className="hover:text-white transition-colors">
                  Emergency Contacts
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4">Emergency Contacts</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>1990 - Emergency</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>011 2136136 - DMC</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>119 - Police</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Weather Alerts
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Evacuation Centers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Download Guide (PDF)
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="mt-4 text-sm">
              Stay informed about flood alerts and safety updates
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>© 2026 Flood Awareness & Safety Sri Lanka. All rights reserved.</p>
          <p className="mt-2">
            A public service initiative by the Disaster Management Centre
          </p>
        </div>
      </div>
    </footer>
  );
}
