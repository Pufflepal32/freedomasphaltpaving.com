import Link from 'next/link';
import Hero from './Hero';
import CTASection from './CTASection';

interface ServicePageTemplateProps {
  title: string;
  description: string;
  benefits: string[];
  process: { title: string; description: string }[];
  relatedServices: { title: string; href: string }[];
}

export default function ServicePageTemplate({
  title,
  description,
  benefits,
  process,
  relatedServices,
}: ServicePageTemplateProps) {
  return (
    <>
      <Hero
        title={title}
        subtitle={description}
        showCTA={true}
        backgroundImage="/images/hero/hero-2.jpg"
      />

      {/* Benefits Section */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">
                Benefits of {title}
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-200 aspect-video rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-lg">Before/After Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-secondary mb-12 text-center">
            Our {title} Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-secondary mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-secondary mb-8 text-center">
            Related Services
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {relatedServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="bg-gray-100 hover:bg-primary hover:text-white text-secondary p-4 rounded-lg text-center font-semibold transition-colors"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
