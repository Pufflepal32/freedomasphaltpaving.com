import Link from 'next/link';

interface HeroProps {
  title?: string;
  subtitle?: string;
  showCTA?: boolean;
  backgroundImage?: string;
  overlay?: boolean;
}

export default function Hero({
  title = "Professional Asphalt Maintenance",
  subtitle = "Your parking lot is the first impression your clients see. Maintenance is easy with Freedom Asphalt.",
  showCTA = true,
  backgroundImage = "/images/hero/hero-1.jpg",
  overlay = true,
}: HeroProps) {
  return (
    <section
      className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {overlay && (
        <div className="absolute inset-0 bg-black/60" />
      )}
      <div className="relative z-10 container-custom text-center text-white py-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
          {subtitle}
        </p>
        {showCTA && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-primary text-white px-8 py-4 rounded font-semibold hover:bg-primary-dark transition-colors text-lg uppercase tracking-wide"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:919-945-6371"
              className="bg-white text-primary px-8 py-4 rounded font-semibold hover:bg-gray-100 transition-colors text-lg uppercase tracking-wide"
            >
              Call (919) 945-6371
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
