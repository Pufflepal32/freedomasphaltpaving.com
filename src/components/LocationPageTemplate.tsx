import Image from 'next/image';
import Link from 'next/link';
import Hero from './Hero';
import CTASection from './CTASection';
import FAQAccordion from './FAQAccordion';

interface LocationPageTemplateProps {
  city: string;
  description: string;
  serviceAreas?: string[];
}

const services = [
  {
    title: 'Sealcoating',
    href: '/services/sealcoating',
    image: '/images/projects/project-1.jpg',
    alt: 'Sealcoating services in Raleigh NC',
  },
  {
    title: 'Crack Repair',
    href: '/services/crack-repair',
    image: '/images/projects/project-3.jpg',
    alt: 'Crack repair services in Raleigh NC',
  },
  {
    title: 'Striping',
    href: '/services/striping',
    image: '/images/projects/project-2.jpg',
    alt: 'Parking lot striping in Raleigh NC',
  },
  {
    title: 'Asphalt Repair',
    href: '/services/asphalt-repair',
    image: '/images/projects/project-4.jpg',
    alt: 'Asphalt repair services in Raleigh NC',
  },
  {
    title: 'Patching',
    href: '/services/patching',
    image: '/images/hero/hero-2.jpg',
    alt: 'Asphalt patching services in Raleigh NC',
  },
  {
    title: 'Pressure Washing',
    href: '/services/pressure-washing',
    image: '/images/hero/hero-1.jpg',
    alt: 'Pressure washing services in Raleigh NC',
  },
];

const benefits = [
  {
    title: 'Free Consultations',
    description: 'Get a no-obligation assessment and quote for your asphalt project.',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    title: 'Prompt Service',
    description: 'We show up on time and get the job done efficiently — no delays.',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Affordable Prices',
    description: 'Competitive pricing without cutting corners on quality.',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Top Rated Service',
    description: '5-star reviews from satisfied commercial and residential clients.',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    title: 'Quality Materials',
    description: 'Premium-grade materials and equipment for lasting results.',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Honest Pricing',
    description: 'Transparent quotes with no hidden fees or surprise charges.',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    name: 'James R.',
    location: 'Raleigh, NC',
    text: 'Freedom Asphalt did an outstanding job sealcoating our commercial parking lot. The team was professional, on time, and the results speak for themselves. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Sarah M.',
    location: 'Cary, NC',
    text: 'We had significant cracking in our driveway and they repaired it beautifully. Fair pricing and excellent communication throughout the project.',
    rating: 5,
  },
  {
    name: 'David K.',
    location: 'Durham, NC',
    text: 'Best asphalt maintenance company in the Triangle. They handled our striping and sealcoating in one visit. Our property looks brand new.',
    rating: 5,
  },
];

const faqItems = [
  {
    question: 'What is sealcoating and why does my asphalt need it?',
    answer: 'Sealcoating is a protective layer applied to asphalt surfaces that shields against UV rays, water, oil, and chemical damage. It extends the life of your pavement by 15-20 years and gives it a fresh, dark appearance. We recommend sealcoating every 2-3 years for optimal protection.',
  },
  {
    question: 'How long does sealcoating take to dry?',
    answer: 'Sealcoating typically takes 24-48 hours to fully cure, depending on weather conditions. We recommend keeping traffic off the surface for at least 24 hours. We always schedule around weather forecasts to ensure the best results.',
  },
  {
    question: 'Do you work with commercial properties?',
    answer: 'Yes! We serve both commercial and residential properties throughout the Raleigh-Durham area. Our commercial services include parking lot sealcoating, line striping, crack repair, pothole patching, and full asphalt maintenance programs.',
  },
  {
    question: 'How often should I have my parking lot maintained?',
    answer: 'We recommend sealcoating every 2-3 years, crack filling annually or as needed, and striping refreshed every 1-2 years. A regular maintenance schedule can extend your asphalt life by decades and save thousands in replacement costs.',
  },
  {
    question: 'Do you offer free estimates?',
    answer: 'Yes! We provide free, no-obligation estimates for all our services. Contact us by phone or through our online form, and we\'ll schedule a time to assess your property and provide a detailed quote.',
  },
];

export default function LocationPageTemplate({
  city,
  description,
  serviceAreas = [],
}: LocationPageTemplateProps) {
  return (
    <>
      {/* Hero */}
      <Hero
        title={`Asphalt Maintenance in ${city}, NC`}
        subtitle={description}
        showCTA={true}
        backgroundImage="/images/hero/hero-1.jpg"
      />

      {/* Service Cards */}
      <section className="py-20 md:py-28 bg-gray-100 texture-lines divider-angle-top">
        <div className="container-custom content-above">
          <div className="text-center mb-12">
            <p className="text-primary font-bold text-sm uppercase tracking-[0.15em] mb-3">
              Our Services
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-secondary uppercase">
              Services Available in {city}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group relative h-64 rounded-lg overflow-hidden shadow-lg border border-gray-200 border-b-4 border-b-primary card-elevated"
              >
                <Image
                  src={service.image}
                  alt={`${service.title} services in ${city} NC`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white uppercase tracking-wide group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-block bg-secondary text-white px-8 py-4 rounded font-bold hover:bg-gray-800 transition-colors text-lg uppercase tracking-wider"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stat Cards */}
      <section className="py-10 md:py-14 texture-dots">
        <div className="container-custom content-above">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ),
                stat: '5-Star',
                description: 'Reviewed & Trusted',
              },
              {
                icon: (
                  <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                stat: '500+',
                description: 'Successfully Completed Projects',
              },
              {
                icon: (
                  <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                ),
                stat: '10+ Years',
                description: 'Experience in the Asphalt Industry',
              },
            ].map((card) => (
              <div key={card.stat} className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 text-center">
                <div className="flex justify-center mb-4">{card.icon}</div>
                <h3 className="text-3xl md:text-4xl font-black text-secondary uppercase mb-2">
                  {card.stat}
                </h3>
                <p className="text-gray-600 font-medium">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Intro Section */}
      <section className="py-20 md:py-28 texture-dots">
        <div className="container-custom content-above">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-bold text-sm uppercase tracking-[0.15em] mb-3">
                {city}, NC Asphalt Experts
              </p>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6 uppercase leading-[1]">
                Your Local {city} Asphalt Maintenance Team
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Freedom Asphalt Maintenance &amp; Repair proudly serves {city} and the surrounding areas
                with professional sealcoating, crack repair, striping, and asphalt maintenance. We understand
                the unique challenges that North Carolina weather presents for asphalt surfaces.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Your parking lot is the first thing your customers see. Don&apos;t let cracked,
                faded asphalt hurt your curb appeal. Our experienced crew delivers fast, affordable
                service that protects your investment and keeps your property looking its best.
              </p>
              <Link
                href="/quote"
                className="inline-block bg-primary text-white px-8 py-4 rounded font-bold hover:bg-primary-dark transition-colors text-lg uppercase tracking-wider"
              >
                Get a Fast Quote
              </Link>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl border-l-4 border-primary">
              <Image
                src="/images/hero/hero-2.jpg"
                alt={`Asphalt maintenance services in ${city} NC`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 md:py-28 bg-white texture-dots">
        <div className="container-custom content-above">
          <div className="text-center mb-12">
            <p className="text-primary font-bold text-sm uppercase tracking-[0.15em] mb-3">
              Why Choose Us
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-secondary uppercase">
              Benefits You Can Enjoy with Freedom Asphalt
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white p-8 rounded-lg shadow-md border border-gray-200 accent-bar-left card-elevated hover:border-primary"
              >
                <div className="text-primary mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-secondary mb-2 uppercase">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgency CTA Bar */}
      <section className="bg-primary py-10 md:py-14 texture-lines-light divider-angle-top">
        <div className="container-custom text-center content-above">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase mb-6">
            In a Rush? Let&apos;s Talk Now!
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:919-945-6371"
              className="inline-flex items-center justify-center gap-3 bg-white text-primary px-8 py-4 rounded font-bold hover:bg-gray-100 transition-colors text-lg uppercase tracking-wider"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (919) 945-6371
            </a>
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white px-8 py-4 rounded font-bold hover:bg-white hover:text-primary transition-colors text-lg uppercase tracking-wider"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send Us a Message
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-gray-100 texture-lines">
        <div className="container-custom content-above">
          <div className="text-center mb-12">
            <p className="text-primary font-bold text-sm uppercase tracking-[0.15em] mb-3">
              Testimonials
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-secondary uppercase">
              What Clients Say About Our Asphalt Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white p-8 rounded-lg border border-gray-100 border-l-4 border-l-primary card-elevated"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed text-lg">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div>
                  <p className="font-bold text-secondary">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Satisfaction Guarantee */}
      <section
        className="relative py-20 md:py-28 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url(/images/hero/hero-1.jpg)' }}
      >
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 texture-lines-light" style={{ zIndex: 2 }} />
        <div className="relative z-10 container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6 flex justify-center">
              <svg className="w-20 h-20 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase mb-6">
              100% Satisfaction Guaranteed
            </h2>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              We stand behind every project we complete. If you&apos;re not completely satisfied
              with our work, we&apos;ll make it right. That&apos;s the Freedom Asphalt promise
              to every customer in {city} and the surrounding area.
            </p>
            <Link
              href="/quote"
              className="inline-block bg-primary text-white px-10 py-5 rounded font-bold hover:bg-primary-dark transition-colors text-lg uppercase tracking-wider"
            >
              Get Your Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="py-20 md:py-28 bg-navy-gradient text-white texture-lines-light divider-angle-top">
        <div className="container-custom content-above">
          <div className="text-center mb-14">
            <p className="text-primary font-bold text-sm uppercase tracking-[0.15em] mb-3">
              How It Works
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase">
              Get the Best Asphalt Services in Just Three Easy Steps
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Easy Consultation',
                description:
                  'Call us or fill out our online form. We\'ll discuss your needs and schedule a free on-site assessment of your property.',
              },
              {
                step: '02',
                title: 'Choose Your Solution',
                description:
                  'We\'ll provide a detailed, transparent quote with recommended services tailored to your property and budget.',
              },
              {
                step: '03',
                title: 'Problem Solved',
                description:
                  'Our experienced crew gets to work and delivers professional results that protect and enhance your asphalt surfaces.',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-black mx-auto mb-6 ring-4 ring-primary/30">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 uppercase">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/quote"
              className="inline-block bg-primary text-white px-8 py-4 rounded font-bold hover:bg-primary-dark transition-colors text-lg uppercase tracking-wider"
            >
              Get a Fast Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Service Area / Nearby Areas */}
      {serviceAreas.length > 0 && (
        <section className="py-20 md:py-28 texture-dots">
          <div className="container-custom content-above">
            <div className="text-center mb-12">
              <p className="text-primary font-bold text-sm uppercase tracking-[0.15em] mb-3">
                Where We Work
              </p>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-secondary uppercase">
                Serving {city} &amp; Nearby Areas
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-3xl mx-auto">
              {serviceAreas.map((area) => (
                <Link
                  key={area}
                  href={`/locations/${area.toLowerCase().replace(' ', '-')}`}
                  className="flex items-center gap-2 bg-white shadow-sm accent-bar-left hover:bg-primary hover:text-white text-secondary p-3 rounded-lg font-semibold transition-colors"
                >
                  <svg className="w-4 h-4 text-primary shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {area}, NC
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-20 md:py-28 texture-dots">
        <div className="container-custom content-above">
          <div className="text-center mb-12">
            <p className="text-primary font-bold text-sm uppercase tracking-[0.15em] mb-3">
              FAQs
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-secondary uppercase">
              Frequently Asked Asphalt Service Questions
            </h2>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title={`Ready for a Free Quote in ${city}?`}
        subtitle={`Contact Freedom Asphalt today for professional asphalt maintenance services in ${city}, NC and the surrounding area.`}
      />
    </>
  );
}
