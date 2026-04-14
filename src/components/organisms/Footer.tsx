import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Building2 } from 'lucide-react';
import { COLLEGE_INFO, SOCIAL_LINKS } from '@/constants';

export function Footer() {
  return (
    <footer className="bg-[#404144] text-white/80 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <Link to="/" className="flex items-center">
            <img 
              src="/images/logo.png" 
              alt="Anna Adarsh College for Women" 
              className="h-14 w-auto object-contain brightness-0 invert" 
            />
          </Link>
          <div className="space-y-2 text-sm">
            <p className="text-white font-bold">(AUTONOMOUS)</p>
            <p className="text-xs">Affiliated to {COLLEGE_INFO.affiliation}</p>
            <p className="text-[10px] leading-relaxed text-white/50 italic">
              Re-accredited by {COLLEGE_INFO.accreditation} in the 3rd cycle
            </p>
          </div>
          <div className="flex gap-4 pt-2">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
              >
                {social.icon === 'Facebook' && <Facebook size={16} />}
                {social.icon === 'Instagram' && <Instagram size={16} />}
                {social.icon === 'Twitter' && <Twitter size={16} />}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-white font-serif font-bold mb-6 flex items-center gap-2">
            <MapPin size={18} className="text-primary" />
            Contact Details
          </h3>
          <ul className="space-y-4 text-xs leading-relaxed">
            <li>
              <p className="text-white/50 uppercase tracking-widest font-semibold mb-1">Campus Address</p>
              <span>{COLLEGE_INFO.address.street}, {COLLEGE_INFO.address.area}, {COLLEGE_INFO.address.city} - {COLLEGE_INFO.address.pincode}</span>
            </li>
            <li className="space-y-1">
              <p className="text-white/50 uppercase tracking-widest font-semibold mb-1">Phone</p>
              <div className="flex flex-col gap-1">
                {COLLEGE_INFO.phone.map((p) => (
                  <a key={p} href={`tel:${p}`} className="hover:text-primary transition-colors">
                    {p}
                  </a>
                ))}
              </div>
            </li>
            <li className="space-y-1">
              <p className="text-white/50 uppercase tracking-widest font-semibold mb-1">Email</p>
              <div className="flex flex-col gap-1">
                {COLLEGE_INFO.email.map((e) => (
                  <a key={e} href={`mailto:${e}`} className="hover:text-primary transition-colors">
                    {e}
                  </a>
                ))}
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-serif font-bold mb-6 flex items-center gap-2">
            <Building2 size={18} className="text-primary" />
            Management
          </h3>
          <ul className="space-y-4 text-xs leading-relaxed">
            <li>
              <p className="text-primary font-bold mb-2">Punjab Association</p>
              <div className="space-y-3">
                <div>
                  <p className="text-white/50 uppercase tracking-widest font-semibold mb-1">Regd. Office</p>
                  <p>"Lajpat Rai Bhawan", Chennai-14.</p>
                </div>
                <div>
                  <p className="text-white/50 uppercase tracking-widest font-semibold mb-1">Admn. Office</p>
                  <p>New No.97/Old No.46, V.M. Street, Royapettah, Chennai-14.</p>
                </div>
                <div>
                  <p className="text-white/50 uppercase tracking-widest font-semibold mb-1">Phone</p>
                  <a href="tel:04428471513" className="hover:text-primary transition-colors">
                    044 2847 1513
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-serif font-bold mb-6">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/about" className="hover:text-primary transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/about/vision-mission" className="hover:text-primary transition-colors">
                Vision & Mission
              </Link>
            </li>
            <li>
              <Link to="/about/punjab-association" className="hover:text-primary transition-colors">
                Punjab Association
              </Link>
            </li>
            <li>
              <Link to="/courses" className="hover:text-primary transition-colors">
                Academic Courses
              </Link>
            </li>
            <li>
              <Link to="/admissions" className="hover:text-primary transition-colors">
                Admissions 2026
              </Link>
            </li>
            <li>
              <Link to="/placements" className="hover:text-primary transition-colors">
                Placement Cell
              </Link>
            </li>
            <li>
              <Link to="/infrastructure" className="hover:text-primary transition-colors">
                Infrastructure
              </Link>
            </li>
            <li>
              <Link to="/campus-life" className="hover:text-primary transition-colors">
                Campus Life
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 text-center text-[10px] uppercase tracking-widest font-semibold">
        <p className="text-white/50">
          {COLLEGE_INFO.name} © 2026. All rights reserved.
        </p>
      </div>
    </footer>
  );
}