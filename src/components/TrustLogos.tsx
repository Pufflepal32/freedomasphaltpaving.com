export default function TrustLogos() {
  const logos = [
    {
      name: 'BBB Accredited',
      svg: (
        <svg viewBox="0 0 120 40" className="h-8 md:h-10 w-auto" fill="currentColor">
          <rect x="2" y="2" width="116" height="36" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
          <text x="60" y="16" textAnchor="middle" fontSize="10" fontWeight="bold" fill="currentColor">BBB</text>
          <text x="60" y="28" textAnchor="middle" fontSize="6" fill="currentColor">ACCREDITED</text>
          <text x="60" y="35" textAnchor="middle" fontSize="5" fill="currentColor">BUSINESS</text>
        </svg>
      ),
    },
    {
      name: 'Google Reviews',
      svg: (
        <svg viewBox="0 0 120 40" className="h-8 md:h-10 w-auto" fill="currentColor">
          <text x="60" y="20" textAnchor="middle" fontSize="14" fontWeight="bold" fill="currentColor">Google</text>
          <g transform="translate(30, 24)">
            {[0, 1, 2, 3, 4].map((i) => (
              <text key={i} x={i * 12} y="10" fontSize="10" fill="currentColor">&#9733;</text>
            ))}
          </g>
        </svg>
      ),
    },
    {
      name: 'Angi',
      svg: (
        <svg viewBox="0 0 120 40" className="h-8 md:h-10 w-auto" fill="currentColor">
          <text x="60" y="22" textAnchor="middle" fontSize="16" fontWeight="bold" fill="currentColor">Angi</text>
          <text x="60" y="34" textAnchor="middle" fontSize="6" fill="currentColor">TOP RATED</text>
        </svg>
      ),
    },
    {
      name: 'Yelp',
      svg: (
        <svg viewBox="0 0 120 40" className="h-8 md:h-10 w-auto" fill="currentColor">
          <text x="60" y="22" textAnchor="middle" fontSize="16" fontWeight="bold" fill="currentColor">Yelp</text>
          <text x="60" y="34" textAnchor="middle" fontSize="6" fill="currentColor">5-STAR RATED</text>
        </svg>
      ),
    },
    {
      name: 'HomeAdvisor',
      svg: (
        <svg viewBox="0 0 140 40" className="h-8 md:h-10 w-auto" fill="currentColor">
          <text x="70" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="currentColor">HomeAdvisor</text>
          <text x="70" y="34" textAnchor="middle" fontSize="6" fill="currentColor">APPROVED</text>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-8 md:py-10 bg-gray-50 border-b border-gray-200 texture-lines">
      <div className="container-custom content-above">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-gray-400 font-bold mb-6">
          As Seen On
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="text-gray-400 grayscale hover:grayscale-0 hover:text-primary transition-all duration-300 cursor-pointer"
              title={logo.name}
            >
              {logo.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
