import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts, formatDate } from '@/lib/blog-data';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Asphalt Maintenance Blog | Tips & Guides for Raleigh NC',
  description: 'Expert asphalt maintenance tips, sealcoating guides, and parking lot care advice for property owners in Raleigh, NC and the Triangle area.',
};

export default function BlogPage() {
  return (
    <>
      {/* Page Header */}
      <section
        className="relative py-24 md:py-32 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/hero/hero-1.jpg)' }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 container-custom text-center text-white">
          <p className="text-primary font-bold text-sm uppercase tracking-[0.2em] mb-3">
            Resources
          </p>
          <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase">
            Asphalt Maintenance Blog
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-2xl mx-auto">
            Expert tips, guides, and insights to help you protect your asphalt investment in Raleigh and the Triangle.
          </p>
        </div>
      </section>

      {/* Blog Listing */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-56">
                  <Image
                    src={post.image}
                    alt={post.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <p className="text-primary text-sm font-bold uppercase tracking-wide mb-2">
                    {formatDate(post.date)}
                  </p>
                  <h2 className="font-heading text-2xl font-bold text-secondary uppercase group-hover:text-primary transition-colors mb-3">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <span className="text-primary font-bold uppercase tracking-wide text-sm group-hover:underline">
                    Read More &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need Professional Asphalt Maintenance?"
        subtitle="Contact Freedom Asphalt for expert service throughout the Raleigh-Durham Triangle."
      />
    </>
  );
}
