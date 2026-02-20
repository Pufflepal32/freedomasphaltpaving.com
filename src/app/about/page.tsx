import { Metadata } from 'next';
import Image from 'next/image';
import Hero from '@/components/Hero';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Freedom Asphalt Maintenance & Repair, your trusted asphalt maintenance partner in Raleigh, NC. Meet owner Wesley Puckett and our team.',
};

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About Freedom Asphalt"
        subtitle="Your trusted partner for professional asphalt maintenance in the Triangle"
        showCTA={false}
        backgroundImage="/images/hero/hero-2.jpg"
      />

      {/* Company Story */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                Freedom Asphalt Maintenance &amp; Repair, LLC was founded with a simple mission:
                to provide honest, quality asphalt maintenance services to businesses and property
                owners throughout the Raleigh-Durham area.
              </p>
              <p className="text-gray-600 mb-4">
                Owner Wesley Puckett brings years of experience in the asphalt industry, combined
                with a commitment to customer satisfaction that sets us apart from the competition.
              </p>
              <p className="text-gray-600 mb-4">
                We understand that your parking lot is often the first impression your customers
                have of your business. That&apos;s why we treat every project with the same level of
                care and attention to detail, whether it&apos;s a small retail lot or a large commercial
                property.
              </p>
              <p className="text-gray-600">
                When you work with Freedom Asphalt, you&apos;re not just getting a contractor &mdash; you&apos;re
                getting a partner who cares about the long-term success of your property.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/logo.png"
                alt="Freedom Asphalt Logo"
                width={400}
                height={400}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-secondary mb-12 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">Quality First</h3>
              <p className="text-gray-600">
                We use premium materials and proven techniques to deliver results that last.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">Customer Focus</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We communicate clearly and deliver on our promises.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">Fair Pricing</h3>
              <p className="text-gray-600">
                Transparent, competitive pricing with no hidden fees or surprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-secondary mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ready to discuss your asphalt maintenance needs? Contact Wesley directly.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <svg className="w-8 h-8 text-primary mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-600">Phone</span>
                <a href="tel:919-945-6371" className="font-semibold text-secondary hover:text-primary">
                  (919) 945-6371
                </a>
              </div>
              <div className="flex flex-col items-center">
                <svg className="w-8 h-8 text-primary mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-600">Email</span>
                <a href="mailto:Wesley@FreedomAsphaltPaving.com" className="font-semibold text-secondary hover:text-primary break-all">
                  Wesley@FreedomAsphaltPaving.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <svg className="w-8 h-8 text-primary mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-600">Hours</span>
                <span className="font-semibold text-secondary">Mon - Fri: 8AM - 5PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
