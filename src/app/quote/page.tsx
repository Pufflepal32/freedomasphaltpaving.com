import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Get a Free Quote',
  description: 'Request a free quote for asphalt maintenance services in Raleigh, NC. Sealcoating, crack repair, striping, and more.',
};

export default function QuotePage() {
  return (
    <>
      {/* Hero Section - PPC Optimized */}
      <section className="bg-secondary py-12 md:py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Get Your Free Quote Today
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Professional asphalt maintenance services in Raleigh, NC and surrounding areas.
                Fill out the form and we&apos;ll get back to you within 24 hours.
              </p>

              {/* Trust Indicators */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Free, No-Obligation Estimates</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Fast Response Time</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Quality Workmanship Guaranteed</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Locally Owned &amp; Operated</span>
                </div>
              </div>

              {/* Phone CTA */}
              <div className="mt-8 p-6 bg-white/10 rounded-lg">
                <p className="text-gray-300 mb-2">Prefer to talk? Call us directly:</p>
                <a
                  href="tel:919-945-6371"
                  className="text-3xl font-bold text-white hover:text-primary transition-colors"
                >
                  (919) 945-6371
                </a>
              </div>
            </div>

            {/* Quote Form */}
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h2 className="text-2xl font-bold text-secondary mb-2">
                Request Your Free Quote
              </h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below and we&apos;ll contact you shortly.
              </p>
              <ContactForm
                showServiceSelect={true}
                showTimeSelect={true}
                submitButtonText="Get My Free Quote"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-secondary mb-8 text-center">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Sealcoating',
                description: 'Protect your asphalt from weather, UV rays, and chemical damage.',
              },
              {
                title: 'Crack Repair',
                description: 'Stop cracks from spreading with professional crack filling.',
              },
              {
                title: 'Striping',
                description: 'ADA compliant parking lot striping and marking.',
              },
              {
                title: 'Asphalt Repair',
                description: 'Fix potholes and damaged sections.',
              },
              {
                title: 'Patching',
                description: 'Cost-effective repairs for localized damage.',
              },
              {
                title: 'Pressure Washing',
                description: 'Remove stains and prepare surfaces.',
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-lg font-bold text-secondary mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-primary">
        <div className="container-custom text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-6 opacity-90">
            Call now for immediate assistance or scroll up to fill out our form.
          </p>
          <a
            href="tel:919-945-6371"
            className="inline-block bg-white text-primary px-8 py-4 rounded font-semibold hover:bg-gray-100 transition-colors text-lg uppercase tracking-wide"
          >
            Call (919) 945-6371
          </a>
        </div>
      </section>
    </>
  );
}
