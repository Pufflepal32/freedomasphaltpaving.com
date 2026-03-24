import Link from 'next/link';
import Image from 'next/image';

const services = [
  { name: 'Sealcoating', href: '/services/sealcoating' },
  { name: 'Crack Repair', href: '/services/crack-repair' },
  { name: 'Striping', href: '/services/striping' },
  { name: 'Asphalt Repair', href: '/services/asphalt-repair' },
  { name: 'Patching', href: '/services/patching' },
  { name: 'Pressure Washing', href: '/services/pressure-washing' },
];

const locations = [
  { name: 'Raleigh', href: '/locations/raleigh' },
  { name: 'Durham', href: '/locations/durham' },
  { name: 'Cary', href: '/locations/cary' },
  { name: 'Wake Forest', href: '/locations/wake-forest' },
  { name: 'Chapel Hill', href: '/locations/chapel-hill' },
  { name: 'Greensboro', href: '/locations/greensboro' },
  { name: 'Fayetteville', href: '/locations/fayetteville' },
  { name: 'Apex', href: '/locations/apex' },
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-white texture-lines-light">
      <div className="container-custom py-12 content-above">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Freedom Asphalt"
              width={120}
              height={120}
              className="h-24 w-auto mb-4"
            />
            <p className="text-gray-400 mb-4">
              Your parking lot is the first impression your clients see.
              Maintenance is easy with Freedom Asphalt.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/FreedomAsphaltMaintenance"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase tracking-wide">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase tracking-wide">Service Areas</h3>
            <ul className="space-y-2">
              {locations.map((location) => (
                <li key={location.name}>
                  <Link
                    href={location.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {location.name}, NC
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase tracking-wide">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 mt-0.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:919-945-6371" className="hover:text-white transition-colors">
                  (919) 945-6371
                </a>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 mt-0.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:Wesley@FreedomAsphaltPaving.com" className="hover:text-white transition-colors break-all">
                  Wesley@FreedomAsphaltPaving.com
                </a>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 mt-0.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Raleigh, NC</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 mt-0.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Mon - Fri: 8AM - 5PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Freedom Asphalt Maintenance &amp; Repair, LLC. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
