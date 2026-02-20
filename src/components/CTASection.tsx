import Link from 'next/link';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  background?: 'primary' | 'secondary' | 'white';
}

export default function CTASection({
  title = "Ready to Transform Your Parking Lot?",
  subtitle = "Contact us today for a free, no-obligation quote on your asphalt maintenance project.",
  primaryButtonText = "Get a Free Quote",
  primaryButtonHref = "/quote",
  secondaryButtonText = "Call (919) 945-6371",
  secondaryButtonHref = "tel:919-945-6371",
  background = 'primary',
}: CTASectionProps) {
  const bgClasses = {
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-white',
    white: 'bg-gray-100 text-secondary',
  };

  const primaryBtnClasses = {
    primary: 'bg-white text-primary hover:bg-gray-100',
    secondary: 'bg-primary text-white hover:bg-primary-dark',
    white: 'bg-primary text-white hover:bg-primary-dark',
  };

  const secondaryBtnClasses = {
    primary: 'border-white text-white hover:bg-white hover:text-primary',
    secondary: 'border-white text-white hover:bg-white hover:text-secondary',
    white: 'border-primary text-primary hover:bg-primary hover:text-white',
  };

  return (
    <section className={`py-16 md:py-20 ${bgClasses[background]}`}>
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryButtonHref}
            className={`px-8 py-4 rounded font-semibold transition-colors text-lg uppercase tracking-wide ${primaryBtnClasses[background]}`}
          >
            {primaryButtonText}
          </Link>
          <a
            href={secondaryButtonHref}
            className={`px-8 py-4 rounded font-semibold transition-colors text-lg uppercase tracking-wide border-2 ${secondaryBtnClasses[background]}`}
          >
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
