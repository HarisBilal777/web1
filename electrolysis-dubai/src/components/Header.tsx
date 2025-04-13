import React from 'react';
import Link from 'next/link';
import { PhoneCall, Mail, Clock, Facebook, Instagram } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';

const Header = () => {
  return (
    <header className="bg-white shadow-sm w-full">
      <div className="container mx-auto">
        {/* Top bar */}
        <div className="flex flex-col md:flex-row justify-between items-center py-2 text-sm border-b">
          <div className="flex flex-col md:flex-row items-center gap-4 mb-2 md:mb-0">
            <div className="flex items-center gap-2">
              <PhoneCall size={16} className="text-primary" />
              <a href="tel:+97145477131" className="hover:text-primary transition-colors">04 547 7131</a>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-primary" />
              <a href="mailto:info@electrolysisdubai.com" className="hover:text-primary transition-colors">info@electrolysisdubai.com</a>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-primary" />
              <span>Tuesday to Sunday: 09:00 AM to 07:00 PM</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://electrolysisdubai.com" aria-label="Facebook">
              <Facebook size={18} className="text-gray-600 hover:text-primary transition-colors" />
            </a>
            <a href="https://electrolysisdubai.com" aria-label="Instagram">
              <Instagram size={18} className="text-gray-600 hover:text-primary transition-colors" />
            </a>
          </div>
        </div>

        {/* Main header */}
        <div className="flex flex-col md:flex-row justify-between items-center py-4">
          <Link href="/" className="mb-4 md:mb-0">
            <div className="relative h-16 w-48">
              <Image
                src="https://ext.same-assets.com/3874975817/896225312.webp"
                alt="Electrolysis Dubai Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="https://electrolysisdubai.com" className="font-medium hover:text-primary transition-colors">Home</Link>
            <Link href="https://electrolysisdubai.com" className="font-medium hover:text-primary transition-colors">About</Link>
            <Link href="https://electrolysisdubai.com" className="font-medium hover:text-primary transition-colors">Services</Link>
            <Link href="https://electrolysisdubai.com" className="font-medium hover:text-primary transition-colors">Contact</Link>
            <Button className="ml-4" size="sm">
              Book Now
            </Button>
          </nav>

          <div className="flex md:hidden w-full justify-between items-center mt-4">
            <Button variant="ghost" className="font-medium hover:bg-primary/10">Menu</Button>
            <Button size="sm">Book Now</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
