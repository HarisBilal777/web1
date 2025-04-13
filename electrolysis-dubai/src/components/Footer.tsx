import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <div className="relative h-16 w-48 mb-4 bg-white p-2 rounded">
              <Image
                src="https://ext.same-assets.com/3874975817/896225312.webp"
                alt="Electrolysis Dubai Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-white/90 mb-4">
              Our Dubai clinic utilizes the latest electrolysis technology to provide safe and effective treatments for all skin tones and hair types. Achieve lasting results you can trust.
            </p>
            <div className="flex space-x-4">
              <a href="https://electrolysisdubai.com" aria-label="Facebook" className="hover:text-white/80 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://electrolysisdubai.com" aria-label="Instagram" className="hover:text-white/80 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="https://electrolysisdubai.com" className="hover:text-white/80 transition-colors flex items-center">
                  <span className="mr-2">→</span> Home
                </Link>
              </li>
              <li>
                <Link href="https://electrolysisdubai.com" className="hover:text-white/80 transition-colors flex items-center">
                  <span className="mr-2">→</span> About Us
                </Link>
              </li>
              <li>
                <Link href="https://electrolysisdubai.com" className="hover:text-white/80 transition-colors flex items-center">
                  <span className="mr-2">→</span> Services
                </Link>
              </li>
              <li>
                <Link href="https://electrolysisdubai.com" className="hover:text-white/80 transition-colors flex items-center">
                  <span className="mr-2">→</span> Testimonials
                </Link>
              </li>
              <li>
                <Link href="https://electrolysisdubai.com" className="hover:text-white/80 transition-colors flex items-center">
                  <span className="mr-2">→</span> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="https://electrolysisdubai.com" className="hover:text-white/80 transition-colors flex items-center">
                  <span className="mr-2">→</span> Electrolysis Hair Removal
                </Link>
              </li>
              <li>
                <Link href="https://electrolysisdubai.com" className="hover:text-white/80 transition-colors flex items-center">
                  <span className="mr-2">→</span> Laser Hair Removal
                </Link>
              </li>
              <li>
                <Link href="https://electrolysisdubai.com" className="hover:text-white/80 transition-colors flex items-center">
                  <span className="mr-2">→</span> Facial Treatments
                </Link>
              </li>
              <li>
                <Link href="https://electrolysisdubai.com" className="hover:text-white/80 transition-colors flex items-center">
                  <span className="mr-2">→</span> Skin Rejuvenation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 flex-shrink-0" />
                <span>123 Sheikh Zayed Road, Dubai, UAE</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 flex-shrink-0" />
                <a href="tel:+97145477131" className="hover:text-white/80 transition-colors">04 547 7131</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 flex-shrink-0" />
                <a href="mailto:info@electrolysisdubai.com" className="hover:text-white/80 transition-colors">info@electrolysisdubai.com</a>
              </li>
              <li className="flex items-start">
                <Clock size={20} className="mr-3 mt-1 flex-shrink-0" />
                <span>Tuesday to Sunday<br />09:00 AM to 07:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-12 pt-6 text-center text-white/70">
          <p>© {new Date().getFullYear()} Electrolysis Dubai. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
