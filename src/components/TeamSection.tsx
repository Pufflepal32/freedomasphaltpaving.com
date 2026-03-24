const teamMembers = [
  { name: 'Wesley', role: 'Owner / Operator' },
  { name: 'Marcus T.', role: 'Lead Foreman' },
  { name: 'Chris D.', role: 'Sealcoating Specialist' },
  { name: 'Andre W.', role: 'Striping & Marking Lead' },
];

function AvatarPlaceholder() {
  return (
    <svg viewBox="0 0 200 260" className="w-full h-full" aria-hidden="true">
      <rect width="200" height="260" fill="#e5e7eb" />
      <circle cx="100" cy="95" r="40" fill="#9ca3af" />
      <ellipse cx="100" cy="210" rx="65" ry="50" fill="#9ca3af" />
    </svg>
  );
}

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
                <AvatarPlaceholder />
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
