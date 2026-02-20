import { Metadata } from 'next';
import Image from 'next/image';
import Hero from '@/components/Hero';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Our Projects',
  description: 'View our portfolio of asphalt maintenance projects in Raleigh, NC. Sealcoating, crack repair, striping, and more.',
};

const projects = [
  {
    title: 'Commercial Sealcoating',
    location: 'Raleigh, NC',
    description: 'Full parking lot sealcoating for a retail shopping center',
    image: '/images/projects/project-1.jpg',
    services: ['Sealcoating', 'Crack Repair'],
  },
  {
    title: 'Parking Lot Striping',
    location: 'Cary, NC',
    description: 'Complete re-striping with ADA compliant markings',
    image: '/images/projects/project-2.jpg',
    services: ['Striping', 'ADA Markings'],
  },
  {
    title: 'Crack Filling Project',
    location: 'Durham, NC',
    description: 'Extensive crack repair for an office complex parking area',
    image: '/images/projects/project-3.jpg',
    services: ['Crack Repair', 'Sealcoating'],
  },
  {
    title: 'Asphalt Repair',
    location: 'Wake Forest, NC',
    description: 'Pothole repair and surface restoration for a warehouse facility',
    image: '/images/projects/project-4.jpg',
    services: ['Asphalt Repair', 'Patching'],
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Hero
        title="Our Projects"
        subtitle="See the quality of our work across the Triangle"
        showCTA={false}
        backgroundImage="/images/hero/hero-2.jpg"
      />

      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative aspect-video">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-secondary">{project.title}</h3>
                    <span className="text-sm text-gray-500">{project.location}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service) => (
                      <span
                        key={service}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Projects Coming */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-secondary mb-4">
            More Projects Coming Soon
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We&apos;re constantly working on new projects throughout the Triangle.
            Check back soon to see more examples of our work, or contact us to discuss your project.
          </p>
        </div>
      </section>

      <CTASection
        title="Ready to Start Your Project?"
        subtitle="Contact us today for a free estimate on your asphalt maintenance needs."
      />
    </>
  );
}
