import Link from 'next/link';
import Hero from './Hero';
import CTASection from './CTASection';

interface LocationPageTemplateProps {
  city: string;
  description: string;
  serviceAreas?: string[];
}

const services = [
  { title: 'Sealcoating', href: '/services/sealcoating', description: 'Protect your asphalt from weather and UV damage' },
  { title: 'Crack Repair', href: '/services/crack-repair', description: 'Stop cracks from spreading and causing more damage' },
  { title: 'Striping', href: '/services/striping', description: 'Professional parking lot marking and striping' },
  { title: 'Asphalt Repair', href: '/services/asphalt-repair', description: 'Fix potholes and damaged sections' },
  { title: 'Patching', href: '/services/patching', description: 'Cost-effective repairs for localized damage' },
  { title: 'Pressure Washing', href: '/services/pressure-washing', description: 'Remove stains and prepare surfaces' },
];

export default function LocationPageTemplate({
  city,
  description,
  serviceAreas = [],
}: LocationPageTemplateProps) {
  return (
    <>
      <Hero
        title={`Asphalt Maintenance in ${city}, NC`}
        subtitle={description}
        showCTA={true}
        backgroundImage="/images/hero/hero-1.jpg"
      />

      {/* Services Available */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-secondary mb-8 text-center">
            Services Available in {city}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="bg-white border border-gray-200 p-6 rounded-lg hover:border-primary hover:shadow-lg transition-all group"
              >
                <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Local Matters */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">
                Your Local {city} Asphalt Experts
              </h2>
              <p className="text-gray-600 mb-4">
                Freedom Asphalt Maintenance &amp; Repair proudly serves {city} and the surrounding areas.
                We understand the unique challenges that North Carolina weather presents for asphalt surfaces.
              </p>
              <p className="text-gray-600 mb-4">
                From the hot summers that can soften asphalt to the freeze-thaw cycles of winter,
                your parking lot needs proper maintenance to stay safe and attractive.
              </p>
              <p className="text-gray-600 mb-6">
                Our team has years of experience helping {city} businesses maintain their parking lots
                and driveways. We use quality materials and proven techniques to deliver lasting results.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/quote"
                  className="bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-primary-dark transition-colors uppercase tracking-wide"
                >
                  Get a Free Quote
                </Link>
                <a
                  href="tel:919-945-6371"
                  className="border-2 border-primary text-primary px-6 py-3 rounded font-semibold hover:bg-primary hover:text-white transition-colors uppercase tracking-wide"
                >
                  Call (919) 945-6371
                </a>
              </div>
            </div>
            <div className="bg-gray-200 aspect-video rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-lg">Map / Local Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      {serviceAreas.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-secondary mb-8 text-center">
              We Also Serve Nearby Areas
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {serviceAreas.map((area) => (
                <Link
                  key={area}
                  href={`/locations/${area.toLowerCase().replace(' ', '-')}`}
                  className="bg-gray-100 hover:bg-primary hover:text-white text-secondary p-4 rounded-lg text-center font-semibold transition-colors"
                >
                  {area}, NC
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title={`Ready for a Free Quote in ${city}?`}
        subtitle="Contact us today for professional asphalt maintenance services."
      />
    </>
  );
}
