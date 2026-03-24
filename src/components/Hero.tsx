import Image from 'next/image';
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
      <div className={`relative z-10 container-custom py-24 ${showForm ? 'flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:items-center' : 'text-center'}`}>
        {/* H1, subtitle, paragraph */}
        <div className={`order-1 ${showForm ? 'text-white text-center lg:text-left' : 'text-white max-w-4xl mx-auto'}`}>
          <p className="text-primary font-bold text-sm md:text-base uppercase tracking-[0.2em] mb-4">
            Freedom Asphalt Maintenance &amp; Repair
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[0.95] uppercase tracking-tight">
            {title}
          </h1>
          <p className={`text-lg md:text-2xl mb-6 lg:mb-10 text-gray-200 leading-relaxed ${showForm ? 'max-w-xl mx-auto lg:mx-0' : 'max-w-3xl mx-auto'}`}>
            {subtitle}
          </p>
          {/* CTAs - hidden on mobile, shown on desktop in this position */}
          {showCTA && (
            <div className="hidden lg:flex flex-col sm:flex-row gap-4">
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

        {/* Trust banner icons - mobile: after paragraph (order-2), desktop: under form on right */}
        {showForm && (
          <div className="order-2 lg:order-none lg:hidden flex justify-center">
            <Image
              src="/images/general/trust-banner-ratings.png"
              alt="5-Star Ratings on Google, Facebook, and Yelp - Freedom Asphalt Paving Raleigh NC"
              width={800}
              height={100}
              className="w-full max-w-md h-auto"
            />
          </div>
        )}

        {/* CTAs - mobile only (order-3) */}
        {showCTA && (
          <div className="order-3 lg:hidden flex flex-col sm:flex-row gap-4">
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

        {/* Form + icons on desktop (order-4 on mobile, right column on desktop) */}
        {showForm && (
          <div className="order-4 lg:order-2 lg:ml-auto w-full max-w-md mx-auto lg:mx-0">
            <HeroQuoteForm />
            <div className="mt-4 hidden lg:flex justify-center w-[130%] -ml-[15%]">
              <Image
                src="/images/general/trust-banner-ratings.png"
                alt="5-Star Ratings on Google, Facebook, and Yelp - Freedom Asphalt Paving Raleigh NC"
                width={800}
                height={100}
                className="w-full h-auto"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
