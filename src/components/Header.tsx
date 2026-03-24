'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface NavItem {
  name: string;
  href: string;
  children?: { name: string; href: string }[];
}

const navigation: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Services',
    href: '/services',
    children: [
      { name: 'Sealcoating', href: '/services/sealcoating' },
      { name: 'Crack Repair', href: '/services/crack-repair' },
      { name: 'Striping', href: '/services/striping' },
      { name: 'Asphalt Repair', href: '/services/asphalt-repair' },
      { name: 'Patching', href: '/services/patching' },
      { name: 'Pressure Washing', href: '/services/pressure-washing' },
    ],
  },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'Blog', href: '/blog' },
  {
    name: 'Locations',
    href: '/locations',
    children: [
      { name: 'Raleigh', href: '/locations/raleigh' },
      { name: 'Durham', href: '/locations/durham' },
      { name: 'Cary', href: '/locations/cary' },
      { name: 'Wake Forest', href: '/locations/wake-forest' },
      { name: 'Chapel Hill', href: '/locations/chapel-hill' },
      { name: 'Greensboro', href: '/locations/greensboro' },
      { name: 'Fayetteville', href: '/locations/fayetteville' },
      { name: 'Apex', href: '/locations/apex' },
    ],
  },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMobileDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <header className="bg-navy-gradient sticky top-0 z-50">
      <nav className="container-custom py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Freedom Asphalt"
              width={80}
              height={80}
              className="h-14 w-auto xl:h-16"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-5">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="font-[var(--font-teko)] text-white hover:text-accent transition-colors font-semibold uppercase tracking-wide text-lg flex items-center gap-1"
                  style={{ fontFamily: 'var(--font-teko), Teko, sans-serif' }}
                >
                  {item.name}
                  {item.children && (
                    <svg className="w-3 h-3 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown */}
                {item.children && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="bg-white shadow-xl rounded-b-lg py-2 min-w-[200px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-5 py-2.5 text-secondary hover:text-primary hover:bg-gray-50 transition-colors font-medium text-sm"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Phone CTA Button */}
          <div className="hidden xl:block">
            <a
              href="tel:919-945-6371"
              className="bg-primary text-white px-5 py-2.5 rounded font-bold hover:bg-primary-dark transition-colors uppercase tracking-wide flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              (919) 945-6371
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="xl:hidden text-white p-2"
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              if (mobileMenuOpen) setOpenDropdown(null);
            }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-4 pb-4 border-t border-gray-700">
            {/* Phone CTA at top of mobile menu */}
            <a
              href="tel:919-945-6371"
              className="flex items-center justify-center gap-2 bg-primary text-white py-3 mt-4 rounded font-bold uppercase tracking-wide"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              (919) 945-6371
            </a>

            <div className="flex flex-col space-y-1 pt-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() => toggleMobileDropdown(item.name)}
                        className="w-full flex items-center justify-between text-white hover:text-accent transition-colors font-semibold uppercase tracking-wide py-2"
                        style={{ fontFamily: 'var(--font-teko), Teko, sans-serif' }}
                      >
                        <span className="text-lg">{item.name}</span>
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${openDropdown === item.name ? 'rotate-180' : ''}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {openDropdown === item.name && (
                        <div className="pl-4 pb-2 space-y-1">
                          <Link
                            href={item.href}
                            className="block text-gray-300 hover:text-accent transition-colors py-1.5 text-sm"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            All {item.name}
                          </Link>
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block text-gray-300 hover:text-accent transition-colors py-1.5 text-sm"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-white hover:text-accent transition-colors font-semibold uppercase tracking-wide py-2 text-lg"
                      style={{ fontFamily: 'var(--font-teko), Teko, sans-serif' }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
