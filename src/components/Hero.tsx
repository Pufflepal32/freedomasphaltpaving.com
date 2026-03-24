import Link from 'next/link';
import HeroQuoteForm from './HeroQuoteForm';

interface HeroProps {
  title?: string;
  subtitle?: string;
  showCTA?: boolean;
  showForm?: boolean;
  backgroundImage?: string;
  overlay?: boolean;
}

export default function Hero({
  title = "RALEIGH'S BEST ASPHALT MAINTENANCE SERVICES",
  subtitle = "Professional sealcoating, crack repair, striping, and asphalt repair for commercial and residential properties in Raleigh, NC and the Triangle area.",
  showCTA = true,
  showForm = false,
  backgroundImage = "/images/hero/hero-1.jpg",
  overlay = true,
}: HeroProps) {
  return (
    <section
      className="relative min-h-[650px] md:min-h-[85vh] flex items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {overlay && (
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
          <div className="absolute inset-0 texture-lines-light" style={{ zIndex: 2 }} />
        </>
      )}
      <div className={`relative z-10 container-custom py-24 ${showForm ? 'grid grid-cols-1 lg:grid-cols-2 gap-10 items-center' : 'text-center'}`}>
        <div className={showForm ? 'text-white' : 'text-white max-w-4xl mx-auto'}>
          <p className="text-primary font-bold text-sm md:text-base uppercase tracking-[0.2em] mb-4">
            Freedom Asphalt Maintenance &amp; Repair
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[0.95] uppercase tracking-tight">
            {title}
          </h1>
          <p className={`text-lg md:text-2xl mb-10 text-gray-200 leading-relaxed ${showForm ? 'max-w-xl' : 'max-w-3xl mx-auto'}`}>
            {subtitle}
          </p>
          {showCTA && (
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote"
                className="bg-primary text-white px-10 py-5 rounded font-bold hover:bg-primary-dark transition-colors text-lg uppercase tracking-wider text-center"
              >
                Request a Quote
              </Link>
              <a
                href="tel:919-945-6371"
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-10 py-5 rounded font-bold hover:bg-white hover:text-secondary transition-colors text-lg uppercase tracking-wider text-center"
              >
                Call (919) 945-6371
              </a>
            </div>
          )}
        </div>
        {showForm && (
          <div className="lg:ml-auto w-full max-w-md mx-auto lg:mx-0">
            <HeroQuoteForm />
          </div>
        )}
      </div>
    </section>
  );
}
