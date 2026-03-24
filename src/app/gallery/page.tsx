'use client';

import Image from 'next/image';
import { useState } from 'react';
import CTASection from '@/components/CTASection';

const categories = ['All', 'Sealcoating', 'Crack Repair', 'Striping', 'Asphalt Repair', 'Patching'];

const projects = [
  {
    image: '/images/projects/project-1.jpg',
    alt: 'Commercial sealcoating project in Raleigh NC',
    category: 'Sealcoating',
    title: 'Commercial Parking Lot Sealcoating',
    location: 'Raleigh, NC',
  },
  {
    image: '/images/projects/project-2.jpg',
    alt: 'Parking lot striping in Cary NC',
    category: 'Striping',
    title: 'Shopping Center Line Striping',
    location: 'Cary, NC',
  },
  {
    image: '/images/projects/project-3.jpg',
    alt: 'Crack repair services in Durham NC',
    category: 'Crack Repair',
    title: 'Driveway Crack Sealing',
    location: 'Durham, NC',
  },
  {
    image: '/images/projects/project-4.jpg',
    alt: 'Asphalt repair in Wake Forest NC',
    category: 'Asphalt Repair',
    title: 'Parking Lot Asphalt Repair',
    location: 'Wake Forest, NC',
  },
  {
    image: '/images/hero/hero-1.jpg',
    alt: 'Residential sealcoating in Apex NC',
    category: 'Sealcoating',
    title: 'Residential Driveway Sealcoating',
    location: 'Apex, NC',
  },
  {
    image: '/images/hero/hero-2.jpg',
    alt: 'Asphalt patching in Garner NC',
    category: 'Patching',
    title: 'Pothole Patching & Repair',
    location: 'Garner, NC',
  },
  {
    image: '/images/projects/project-1.jpg',
    alt: 'Commercial striping project in Raleigh NC',
    category: 'Striping',
    title: 'ADA Compliant Parking Striping',
    location: 'Raleigh, NC',
  },
  {
    image: '/images/projects/project-3.jpg',
    alt: 'Crack repair in Chapel Hill NC',
    category: 'Crack Repair',
    title: 'Commercial Lot Crack Filling',
    location: 'Chapel Hill, NC',
  },
  {
    image: '/images/projects/project-2.jpg',
    alt: 'Sealcoating in Knightdale NC',
    category: 'Sealcoating',
    title: 'Church Parking Lot Sealcoating',
    location: 'Knightdale, NC',
  },
  {
    image: '/images/projects/project-4.jpg',
    alt: 'Asphalt repair in Morrisville NC',
    category: 'Asphalt Repair',
    title: 'Full-Depth Asphalt Repair',
    location: 'Morrisville, NC',
  },
  {
    image: '/images/hero/hero-1.jpg',
    alt: 'Patching services in Holly Springs NC',
    category: 'Patching',
    title: 'Parking Lot Patching',
    location: 'Holly Springs, NC',
  },
  {
    image: '/images/hero/hero-2.jpg',
    alt: 'Sealcoating in Fayetteville NC',
    category: 'Sealcoating',
    title: 'Industrial Lot Sealcoating',
    location: 'Fayetteville, NC',
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

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
            Our Work
          </p>
          <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase">
            Project Gallery
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-2xl mx-auto">
            Browse our completed asphalt maintenance projects across the Raleigh-Durham Triangle area.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 bg-gray-50 border-b border-gray-200 sticky top-0 z-30">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded font-semibold text-sm uppercase tracking-wide transition-colors ${
                  activeCategory === cat
                    ? 'bg-primary text-white'
                    : 'bg-white text-secondary border border-gray-300 hover:border-primary hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, index) => (
              <button
                key={`${project.title}-${index}`}
                onClick={() => setLightbox(index)}
                className="group relative h-72 rounded-lg overflow-hidden shadow-lg cursor-pointer text-left"
              >
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wide mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  <p className="text-gray-300 text-sm">{project.location}</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white/90 rounded-full p-3">
                    <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative max-w-4xl w-full h-[70vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={filtered[lightbox].image}
              alt={filtered[lightbox].alt}
              fill
              className="object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-center">
              <h3 className="text-white font-bold text-lg">{filtered[lightbox].title}</h3>
              <p className="text-gray-300 text-sm">{filtered[lightbox].location} &mdash; {filtered[lightbox].category}</p>
            </div>
          </div>
          {/* Navigation arrows */}
          {lightbox > 0 && (
            <button
              className="absolute left-4 text-white hover:text-primary transition-colors"
              onClick={(e) => { e.stopPropagation(); setLightbox(lightbox - 1); }}
              aria-label="Previous image"
            >
              <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          {lightbox < filtered.length - 1 && (
            <button
              className="absolute right-4 text-white hover:text-primary transition-colors"
              onClick={(e) => { e.stopPropagation(); setLightbox(lightbox + 1); }}
              aria-label="Next image"
            >
              <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      )}

      <CTASection
        title="Ready to See Results Like These?"
        subtitle="Contact Freedom Asphalt for a free estimate on your asphalt maintenance project."
      />
    </>
  );
}
