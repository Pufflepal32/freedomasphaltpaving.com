import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Customer Reviews | Asphalt Maintenance Raleigh NC',
  description: 'Read what our customers say about Freedom Asphalt Maintenance & Repair. 5-star rated sealcoating, crack repair, and striping services in Raleigh, NC.',
};

const reviews = [
  {
    name: 'James R.',
    location: 'Raleigh, NC',
    text: 'Freedom Asphalt did an outstanding job sealcoating our commercial parking lot. The team was professional, on time, and the results speak for themselves. Highly recommend!',
    rating: 5,
    service: 'Sealcoating',
  },
  {
    name: 'Sarah M.',
    location: 'Cary, NC',
    text: 'We had significant cracking in our driveway and they repaired it beautifully. Fair pricing and excellent communication throughout the project.',
    rating: 5,
    service: 'Crack Repair',
  },
  {
    name: 'David K.',
    location: 'Durham, NC',
    text: 'Best asphalt maintenance company in the Triangle. They handled our striping and sealcoating in one visit. Our property looks brand new.',
    rating: 5,
    service: 'Sealcoating & Striping',
  },
  {
    name: 'Patricia L.',
    location: 'Apex, NC',
    text: 'Wesley and his crew were fantastic. They sealcoated our entire HOA parking area in one day. The communication was excellent from start to finish, and the pricing was very fair. We\'ve already scheduled them for next year.',
    rating: 5,
    service: 'Sealcoating',
  },
  {
    name: 'Michael B.',
    location: 'Wake Forest, NC',
    text: 'Had several potholes in our office parking lot that were becoming a liability issue. Freedom Asphalt patched them all in a single morning. Professional, fast, and affordable. Will definitely use again.',
    rating: 5,
    service: 'Patching',
  },
  {
    name: 'Jennifer W.',
    location: 'Garner, NC',
    text: 'Our residential driveway was in terrible shape — cracking everywhere and totally faded. They did crack repair and sealcoating, and it looks like a brand new driveway. Neighbors have been asking who we used!',
    rating: 5,
    service: 'Crack Repair & Sealcoating',
  },
  {
    name: 'Robert T.',
    location: 'Chapel Hill, NC',
    text: 'We manage several commercial properties and Freedom Asphalt handles all of our striping needs. Always on time, clean work, and fair prices. They\'re our go-to for any asphalt maintenance.',
    rating: 5,
    service: 'Striping',
  },
  {
    name: 'Lisa G.',
    location: 'Knightdale, NC',
    text: 'Called for a quote on Monday and they were out Tuesday morning. The sealcoating job on our church parking lot turned out great. Very respectful crew and the price was exactly what they quoted — no surprises.',
    rating: 5,
    service: 'Sealcoating',
  },
  {
    name: 'Thomas H.',
    location: 'Holly Springs, NC',
    text: 'I got three quotes for our parking lot repair and Freedom Asphalt wasn\'t the cheapest, but they were the most thorough in their assessment. They found issues the other companies missed. Glad we went with quality.',
    rating: 5,
    service: 'Asphalt Repair',
  },
  {
    name: 'Amanda C.',
    location: 'Morrisville, NC',
    text: 'Needed pressure washing and sealcoating for our restaurant parking lot. They did both services in one visit and worked around our business hours. The lot looks amazing now. Thank you, Freedom Asphalt!',
    rating: 5,
    service: 'Pressure Washing & Sealcoating',
  },
  {
    name: 'Kevin D.',
    location: 'Raleigh, NC',
    text: 'Wesley personally came out to assess our property and gave honest advice about what we actually needed vs. what we thought we needed. Saved us money and the results were excellent. That kind of honesty is rare.',
    rating: 5,
    service: 'Asphalt Repair',
  },
];

export default function ReviewsPage() {
  return (
    <>
      {/* Page Header */}
      <section
        className="relative py-24 md:py-32 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/hero/hero-2.jpg)' }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 container-custom text-center text-white">
          <p className="text-primary font-bold text-sm uppercase tracking-[0.2em] mb-3">
            Testimonials
          </p>
          <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase">
            Customer Reviews
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-2xl mx-auto">
            See why homeowners and businesses across the Raleigh-Durham Triangle trust Freedom Asphalt.
          </p>
        </div>
      </section>

      {/* Overall Rating Bar */}
      <section className="bg-gray-100 py-8 border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="text-center">
              <span className="font-heading text-6xl font-bold text-secondary">5.0</span>
              <div className="flex gap-1 justify-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <div className="text-center md:text-left">
              <p className="text-lg font-bold text-secondary">Based on {reviews.length}+ Reviews</p>
              <p className="text-gray-600">Google, Angi, Yelp, & Direct Feedback</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 border-l-4 border-l-primary hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="inline-block bg-gray-100 text-primary text-xs font-bold px-3 py-1 rounded uppercase tracking-wide mb-3">
                  {review.service}
                </span>
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div>
                  <p className="font-bold text-secondary">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leave a Review CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-secondary uppercase mb-4">
            Had a Great Experience?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            We&apos;d love to hear about it! Leave us a review on Google or share your feedback directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-primary text-white px-8 py-4 rounded font-bold hover:bg-primary-dark transition-colors text-lg uppercase tracking-wider"
            >
              Get Your Free Quote
            </Link>
            <a
              href="tel:919-945-6371"
              className="bg-secondary text-white px-8 py-4 rounded font-bold hover:bg-gray-800 transition-colors text-lg uppercase tracking-wider"
            >
              Call (919) 945-6371
            </a>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Experience 5-Star Service?"
        subtitle="Join hundreds of satisfied customers across the Raleigh-Durham area."
        background="secondary"
      />
    </>
  );
}
