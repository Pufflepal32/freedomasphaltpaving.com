import { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Asphalt Maintenance Services',
  description: 'Professional asphalt maintenance services including sealcoating, crack repair, striping, asphalt repair, patching, and pressure washing in Raleigh, NC.',
};

const services = [
  {
    title: 'Sealcoating',
    slug: 'sealcoating',
    description: 'Protect your asphalt investment with professional sealcoating. Our premium sealant creates a protective barrier against water, UV rays, oil, and chemical damage, extending the life of your pavement by years.',
    features: ['Extends pavement life', 'Protects against UV damage', 'Prevents water infiltration', 'Enhances curb appeal'],
  },
  {
    title: 'Crack Repair',
    slug: 'crack-repair',
    description: 'Stop cracks from spreading and prevent costly damage with our professional crack filling services. We use hot rubberized crack filler that flexes with temperature changes for long-lasting repairs.',
    features: ['Prevents water damage', 'Stops crack spreading', 'Hot rubberized filler', 'Flexible seal'],
  },
  {
    title: 'Striping & Marking',
    slug: 'striping',
    description: 'Improve safety and maximize parking capacity with professional striping services. We handle parking spaces, handicap markings, fire lanes, directional arrows, and custom stenciling.',
    features: ['ADA compliant markings', 'Parking lot layout', 'Fire lanes & arrows', 'Custom stenciling'],
  },
  {
    title: 'Asphalt Repair',
    slug: 'asphalt-repair',
    description: 'Restore your parking lot with comprehensive asphalt repair services. We fix potholes, depressions, and damaged areas to create a smooth, safe surface for vehicles and pedestrians.',
    features: ['Pothole repair', 'Depression fixes', 'Surface restoration', 'Safety improvements'],
  },
  {
    title: 'Patching',
    slug: 'patching',
    description: 'Professional patching solutions for localized damage. Our patching services repair specific problem areas without the cost of full resurfacing, extending your pavement life cost-effectively.',
    features: ['Localized repairs', 'Cost-effective solution', 'Quality materials', 'Quick turnaround'],
  },
  {
    title: 'Pressure Washing',
    slug: 'pressure-washing',
    description: 'Remove oil stains, dirt, debris, and contaminants with commercial pressure washing. Proper cleaning prepares surfaces for sealcoating and improves your property appearance.',
    features: ['Oil stain removal', 'Surface preparation', 'Improved appearance', 'Deep cleaning'],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Our Services"
        subtitle="Comprehensive asphalt maintenance solutions to protect and enhance your property"
        showCTA={false}
        backgroundImage="/images/hero/hero-2.jpg"
      />

      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="grid gap-12">
            {services.map((service, index) => (
              <div
                key={service.slug}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="lg:w-1/2">
                  <div className="bg-gray-200 aspect-video rounded-lg flex items-center justify-center">
                    <span className="text-gray-500 text-lg">Service Image</span>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <h2 className="text-3xl font-bold text-secondary mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="grid grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-block bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-primary-dark transition-colors uppercase tracking-wide"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
