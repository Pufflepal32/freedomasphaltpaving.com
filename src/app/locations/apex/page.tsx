import { Metadata } from 'next';
import LocationPageTemplate from '@/components/LocationPageTemplate';

export const metadata: Metadata = {
  title: 'Asphalt Maintenance in Apex, NC',
  description: 'Professional sealcoating, crack repair, and asphalt maintenance services in Apex, NC. Free quotes from Freedom Asphalt.',
};

export default function ApexPage() {
  return (
    <LocationPageTemplate
      city="Apex"
      description="Quality asphalt maintenance for the Peak of Good Living. We serve Apex's growing business community, neighborhoods, and commercial centers."
      serviceAreas={['Cary', 'Raleigh', 'Holly Springs', 'Fuquay-Varina', 'Morrisville']}
    />
  );
}
