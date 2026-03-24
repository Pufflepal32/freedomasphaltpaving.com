import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { blogPosts, getBlogPost, formatDate } from '@/lib/blog-data';
import CTASection from '@/components/CTASection';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

function renderMarkdown(content: string) {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let listItems: string[] = [];

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`list-${elements.length}`} className="list-disc list-inside space-y-1 text-gray-600 mb-6 ml-4">
          {listItems.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
          ))}
        </ul>
      );
      listItems = [];
    }
  };

  const formatInline = (text: string): string => {
    return text
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-primary font-semibold hover:underline">$1</a>');
  };

  lines.forEach((line, i) => {
    const trimmed = line.trim();

    if (trimmed.startsWith('## ')) {
      flushList();
      elements.push(
        <h2 key={i} className="font-heading text-3xl md:text-4xl font-bold text-secondary uppercase mt-10 mb-4">
          {trimmed.replace('## ', '')}
        </h2>
      );
    } else if (trimmed.startsWith('### ')) {
      flushList();
      elements.push(
        <h3 key={i} className="font-heading text-2xl font-bold text-secondary uppercase mt-8 mb-3">
          {trimmed.replace('### ', '')}
        </h3>
      );
    } else if (trimmed.startsWith('- ')) {
      listItems.push(trimmed.replace('- ', ''));
    } else if (trimmed === '') {
      flushList();
    } else {
      flushList();
      elements.push(
        <p key={i} className="text-gray-600 text-lg leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: formatInline(trimmed) }} />
      );
    }
  });

  flushList();
  return elements;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      {/* Article Header */}
      <section
        className="relative py-24 md:py-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${post.image})` }}
      >
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 container-custom text-center text-white">
          <p className="text-primary font-bold text-sm uppercase tracking-[0.2em] mb-3">
            {formatDate(post.date)}
          </p>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold uppercase max-w-4xl mx-auto">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-8 text-sm">
              <Link href="/" className="text-primary hover:underline">Home</Link>
              <span className="mx-2 text-gray-400">/</span>
              <Link href="/blog" className="text-primary hover:underline">Blog</Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-500">{post.title}</span>
            </nav>

            {/* Content */}
            <div>{renderMarkdown(post.content)}</div>

            {/* Article CTA */}
            <div className="mt-12 bg-gray-50 rounded-lg p-8 border border-gray-200 text-center">
              <h3 className="font-heading text-3xl font-bold text-secondary uppercase mb-3">
                Need Asphalt Maintenance?
              </h3>
              <p className="text-gray-600 mb-6">
                Freedom Asphalt serves Raleigh, Durham, Cary, and the entire Triangle area with professional, affordable service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quote"
                  className="bg-primary text-white px-8 py-4 rounded font-bold hover:bg-primary-dark transition-colors uppercase tracking-wider"
                >
                  Get a Free Quote
                </Link>
                <a
                  href="tel:919-945-6371"
                  className="bg-secondary text-white px-8 py-4 rounded font-bold hover:bg-gray-800 transition-colors uppercase tracking-wider"
                >
                  Call (919) 945-6371
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {otherPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="font-heading text-4xl font-bold text-secondary uppercase text-center mb-10">
              More From Our Blog
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {otherPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group bg-white rounded-lg overflow-hidden shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48">
                    <Image
                      src={related.image}
                      alt={related.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-primary text-sm font-bold mb-2">{formatDate(related.date)}</p>
                    <h3 className="font-heading text-xl font-bold text-secondary uppercase group-hover:text-primary transition-colors">
                      {related.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title="Protect Your Asphalt Investment"
        subtitle="Schedule your free consultation with Freedom Asphalt today."
      />
    </>
  );
}
