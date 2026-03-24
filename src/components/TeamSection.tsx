import Image from 'next/image';

const teamMembers = [
  {
    name: 'Wesley',
    role: 'Owner / Operator',
    image: '/images/projects/project-1.jpg',
    alt: 'Wesley - Owner of Freedom Asphalt Raleigh NC',
  },
  {
    name: 'Marcus T.',
    role: 'Lead Foreman',
    image: '/images/projects/project-2.jpg',
    alt: 'Marcus - Lead Foreman Freedom Asphalt Raleigh NC',
  },
  {
    name: 'Chris D.',
    role: 'Sealcoating Specialist',
    image: '/images/projects/project-3.jpg',
    alt: 'Chris - Sealcoating Specialist Freedom Asphalt Raleigh NC',
  },
  {
    name: 'Andre W.',
    role: 'Striping & Marking Lead',
    image: '/images/projects/project-4.jpg',
    alt: 'Andre - Striping Lead Freedom Asphalt Raleigh NC',
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 md:py-28 texture-dots">
      <div className="container-custom content-above">
        <div className="text-center mb-12">
          <p className="text-primary font-bold text-sm uppercase tracking-[0.15em] mb-3">
            Our Team
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-secondary uppercase">
            The Crew Behind Your Results
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Meet the experienced professionals who take pride in every asphalt project across the Raleigh-Durham area.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group text-center"
            >
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden mb-4 card-elevated border-b-4 border-primary">
                <Image
                  src={member.image}
                  alt={member.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <h3 className="text-xl font-bold text-secondary uppercase">
                {member.name}
              </h3>
              <p className="text-primary font-semibold text-sm uppercase tracking-wide">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
