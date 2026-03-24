import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import TeamSection from '@/components/TeamSection';
import CTASection from '@/components/CTASection';
import FAQAccordion from '@/components/FAQAccordion';

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

const locations = [
  'Raleigh', 'Durham', 'Cary', 'Wake Forest', 'Chapel Hill',
  'Greensboro', 'Fayetteville', 'Apex', 'Garner', 'Holly Springs',
  'Knightdale', 'Morrisville',
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
    question: 'How much does asphalt repair cost in Raleigh?',
    answer: 'Costs vary based on the size of the area, type of damage, and specific services needed. We offer free estimates so you know exactly what to expect. Most residential projects range from a few hundred to a couple thousand dollars.',
  },
  {
    question: 'Do you work with commercial properties?',
    answer: 'Yes! We serve both commercial and residential properties throughout the Raleigh-Durham area. Our commercial services include parking lot sealcoating, line striping, crack repair, pothole patching, and full asphalt maintenance programs.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We serve the greater Raleigh-Durham Triangle area including Raleigh, Durham, Cary, Apex, Wake Forest, Chapel Hill, Garner, Holly Springs, Knightdale, Morrisville, Greensboro, and Fayetteville.',
  },
  {
    question: 'How often should I have my parking lot maintained?',
    answer: 'We recommend sealcoating every 2-3 years, crack filling annually or as needed, and striping refreshed every 1-2 years. A regular maintenance schedule can extend your asphalt life by decades and save thousands in replacement costs.',
  },
  {
    question: 'Can you repair potholes and large damaged areas?',
    answer: 'Absolutely. We handle everything from small pothole repairs to large-scale asphalt patching. Our team assesses the damage and recommends the most cost-effective solution, whether it\'s patching, overlay, or full-depth repair.',
  },
  {
    question: 'Do you offer free estimates?',
    answer: 'Yes! We provide free, no-obligation estimates for all our services. Contact us by phone or through our online form, and we\'ll schedule a time to assess your property and provide a detailed quote.',
  },
];

export default function Home() {
  return (
    <>
      {/* 1. Hero Section with Inline Quote Form */}
      <Hero showForm={true} />

      {/* 2. Trust Badges + Logos Combined */}
      <section className="bg-navy-gradient py-8 texture-lines-light">
        <div className="container-custom content-above">
          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center mb-8">
            {[
              {
                icon: (
                  <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                text: 'Licensed & Insured',
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                text: 'Locally Owned',
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                text: 'Free Estimates',
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
                text: 'Satisfaction Guaranteed',
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ),
                text: '5-Star Rated',
              },
            ].map((badge) => (
              <div key={badge.text} className="flex items-center justify-center gap-2">
                {badge.icon}
                <span className="font-bold text-white text-sm uppercase tracking-wide">
                  {badge.text}
                </span>
              </div>
            ))}
          </div>

          {/* Review Logos Row */}
          <div className="border-t border-white/10 pt-6">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {/* Google */}
              <div className="flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                <div className="flex items-center gap-2 mb-1.5">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span className="text-white font-bold text-sm tracking-wide">Google</span>
                </div>
                <div className="flex gap-0.5">
                  {[0,1,2,3,4].map((i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Facebook */}
              <div className="flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                <div className="flex items-center gap-2 mb-1.5">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="#1877F2" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854V15.47H7.078V12h3.047V9.356c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874V12h3.328l-.532 3.47h-2.796v8.385C19.612 22.954 24 17.99 24 12z"/>
                  </svg>
                  <span className="text-white font-bold text-sm tracking-wide">Facebook</span>
                </div>
                <div className="flex gap-0.5">
                  {[0,1,2,3,4].map((i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Yelp */}
              <div className="flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                <div className="flex items-center gap-2 mb-1.5">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.271 6.724c-.109 1.632-.376 4.568-.529 6.26-.068.746.088 1.037.482 1.037.396 0 .85-.285 1.418-.854l3.744-3.744c.564-.564.723-1.088.332-1.48-.392-.392-.916-.232-1.48.332L12.27 6.724zM10.932 13.378c-.483-.264-.908-.024-1.042.518l-1.758 7.088c-.134.542.09 1.028.598 1.028.392 0 .84-.226 1.314-.698l3.156-3.156c.47-.47.698-.922.698-1.314 0-.508-.486-.732-1.028-.598l-1.938.478v-3.346zM9.176 11.832c.26-.486.02-.91-.526-1.042L1.56 9.032c-.546-.134-1.03.09-1.03.598 0 .392.228.84.7 1.314l3.156 3.156c.472.472.924.7 1.316.7.506 0 .73-.488.596-1.03l-.48-1.938h3.358zM11.854 5.686c.268.482.024.906-.518 1.042l-7.088 1.758c-.542.134-1.028-.09-1.028-.598 0-.392.226-.84.698-1.314l3.156-3.156c.47-.47.922-.698 1.314-.698.508 0 .732.486.598 1.028l-.478 1.938h3.346zM13.378 10.932c.482.26.908.024 1.042-.518l1.758-7.088c.134-.542-.09-1.028-.598-1.028-.392 0-.84.226-1.314.698l-3.156 3.156c-.47.47-.698.922-.698 1.314 0 .508.486.732 1.028.598l1.938-.478v3.346z" fill="#D32323"/>
                  </svg>
                  <span className="text-white font-bold text-sm tracking-wide">Yelp</span>
                </div>
                <div className="flex gap-0.5">
                  {[0,1,2,3,4].map((i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* 5.0 Rating Badge */}
              <div className="flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span className="text-red-500 font-black text-2xl leading-none">5.0</span>
                  <span className="text-white font-bold text-xs uppercase tracking-wider leading-none">Rating</span>
                </div>
                <div className="flex gap-0.5">
                  {[0,1,2,3,4].map((i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. About / Intro Section */}
      <section className="py-20 md:py-28 texture-dots">
        <div className="container-custom content-above">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-bold text-sm uppercase tracking-[0.15em] mb-3">
                Raleigh, NC Asphalt Experts
              </p>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6 uppercase leading-[1]">
                Asphalt Maintenance Solutions You Can Count On
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Freedom Asphalt Maintenance &amp; Repair is the Triangle&apos;s trusted choice for
                professional sealcoating, crack repair, striping, and asphalt maintenance. We serve
                commercial and residential properties throughout Raleigh, Durham, Cary, and the
                surrounding areas with honest pricing, quality materials, and results that last.
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
                alt="Asphalt maintenance services in Raleigh NC"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Service Cards */}
      <section className="py-20 md:py-28 bg-gray-100 texture-lines divider-angle-top">
        <div className="container-custom content-above">
          <div className="text-center mb-12">
            <p className="text-primary font-bold text-sm uppercase tracking-[0.15em] mb-3">
              Our Services
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-secondary uppercase">
              How Can We Serve You?
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
                  alt={service.alt}
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

      {/* 5. Urgency CTA Bar */}
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

      {/* 5b. Team Member Cards */}
      <TeamSection />

      {/* 6. Team / About Section */}
      <section className="py-20 md:py-28 bg-navy-gradient texture-lines-light">
        <div className="container-custom content-above">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-48 md:h-64 rounded-lg overflow-hidden ring-2 ring-primary/30">
                <Image
                  src="/images/projects/project-1.jpg"
                  alt="Freedom Asphalt team at work in Raleigh NC"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 md:h-64 rounded-lg overflow-hidden mt-8 ring-2 ring-primary/30">
                <Image
                  src="/images/projects/project-2.jpg"
                  alt="Asphalt maintenance crew Raleigh NC"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 md:h-64 rounded-lg overflow-hidden ring-2 ring-primary/30">
                <Image
                  src="/images/projects/project-3.jpg"
                  alt="Professional asphalt services Raleigh NC"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 md:h-64 rounded-lg overflow-hidden mt-8 ring-2 ring-primary/30">
                <Image
                  src="/images/projects/project-4.jpg"
                  alt="Asphalt paving team Raleigh NC"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-primary font-bold text-sm uppercase tracking-[0.15em] mb-3">
                About Us
              </p>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 uppercase leading-[1]">
                Meet Our Dedicated Team
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                At Freedom Asphalt, we&apos;re more than just a maintenance company — we&apos;re
                your neighbors. As a locally owned and operated business serving the Raleigh-Durham
                area, we take pride in every project we complete.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Our experienced crew brings years of asphalt expertise to every job, from small
                residential driveways to large commercial parking lots. We treat every property like
                it&apos;s our own because our reputation is built one satisfied customer at a time.
              </p>
              <Link
                href="/quote"
                className="inline-block bg-primary text-white px-8 py-4 rounded font-bold hover:bg-primary-dark transition-colors text-lg uppercase tracking-wider"
              >
                Get a Fast Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Service Area Map Section */}
      <section className="py-20 md:py-28 texture-dots">
        <div className="container-custom content-above">
          <div className="text-center mb-12">
            <p className="text-primary font-bold text-sm uppercase tracking-[0.15em] mb-3">
              Where We Work
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-secondary uppercase">
              Asphalt Maintenance at Your Fingertips!
            </h2>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              Proudly serving the greater Raleigh-Durham Triangle area and beyond
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1797416.3023034055!2d-80.89846974202216!3d35.10488330675053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x813939ed70d9a1a7%3A0xc01b0c623bb7c747!2sFreedom%20Asphalt%20Maintenance%20and%20Repair%20LLC.!5e1!3m2!1sen!2sus!4v1774062778548!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Freedom Asphalt service area map - Raleigh NC"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-secondary mb-6 uppercase">
                Cities We Serve
              </h3>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {locations.map((location) => (
                  <Link
                    key={location}
                    href={`/locations/${location.toLowerCase().replace(' ', '-')}`}
                    className="flex items-center gap-2 bg-white shadow-sm accent-bar-left hover:bg-primary hover:text-white text-secondary p-3 rounded-lg font-semibold transition-colors"
                  >
                    <svg className="w-4 h-4 text-primary shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {location}, NC
                  </Link>
                ))}
              </div>
              <a
                href="tel:919-945-6371"
                className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded font-bold hover:bg-primary-dark transition-colors text-lg uppercase tracking-wider"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us Today
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Benefits Grid */}
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

      {/* 9. Testimonials Section */}
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

      {/* 10. Satisfaction Guarantee */}
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
              to every customer in the Raleigh-Durham area.
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

      {/* 12. 3-Step Process */}
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

      {/* 13. FAQ Section */}
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
          <div className="text-center mt-10">
            <Link
              href="/faq"
              className="inline-block bg-secondary text-white px-8 py-4 rounded font-bold hover:bg-gray-800 transition-colors text-lg uppercase tracking-wider"
            >
              View More FAQs
            </Link>
          </div>
        </div>
      </section>

      {/* 14. Final CTA */}
      <CTASection
        title="Ready for Your Asphalt Solution?"
        subtitle="Contact Freedom Asphalt today for a free, no-obligation quote. Serving Raleigh, NC and the entire Triangle area."
      />
    </>
  );
}
