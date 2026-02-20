import { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Service Areas',
  description: 'Freedom Asphalt serves Raleigh, Durham, Cary, Chapel Hill, and surrounding areas in North Carolina with professional asphalt maintenance services.',
};

const locations = [
  {
    name: 'Raleigh',
    slug: 'raleigh',
    description: 'Serving the capital city and surrounding Wake County',
  },
  {
    name: 'Durham',
    slug: 'durham',
    description: 'Professional asphalt services in the Bull City',
  },
  {
    name: 'Cary',
    slug: 'cary',
    description: 'Quality maintenance for Cary businesses and HOAs',
  },
  {
    name: 'Wake Forest',
    slug: 'wake-forest',
    description: 'Serving the growing Wake Forest community',
  },
  {
    name: 'Chapel Hill',
    slug: 'chapel-hill',
    description: 'Asphalt services for Chapel Hill and Carrboro',
  },
  {
    name: 'Greensboro',
    slug: 'greensboro',
    description: 'Extending our services to the Triad area',
  },
  {
    name: 'Fayetteville',
    slug: 'fayetteville',
    description: 'Professional service for Cumberland County',
  },
  {
    name: 'Apex',
    slug: 'apex',
    description: 'Quality asphalt maintenance in the Peak of Good Living',
  },
];

export default function LocationsPage() {
  return (
    <>
      <Hero
        title="Service Areas"
        subtitle="Proudly serving the greater Raleigh-Durham area and beyond with professional asphalt maintenance services"
        showCTA={false}
        backgroundImage="/images/hero/hero-2.jpg"
      />

      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="bg-white border border-gray-200 p-6 rounded-lg hover:border-primary hover:shadow-lg transition-all group"
              >
                <h2 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                  {location.name}, NC
                </h2>
                <p className="text-gray-600">{location.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-secondary mb-4">
            Don&apos;t See Your City?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We serve many areas throughout central North Carolina. Contact us to see if we service your location.
          </p>
          <a
            href="tel:919-945-6371"
            className="inline-block bg-primary text-white px-8 py-4 rounded font-semibold hover:bg-primary-dark transition-colors text-lg uppercase tracking-wide"
          >
            Call (919) 945-6371
          </a>
        </div>
      </section>

      <CTASection />
    </>
  );
}
