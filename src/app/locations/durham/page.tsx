import { Metadata } from 'next';
import LocationPageTemplate from '@/components/LocationPageTemplate';

export const metadata: Metadata = {
  title: 'Asphalt Maintenance in Durham, NC',
  description: 'Professional sealcoating, crack repair, and asphalt maintenance services in Durham, NC. Free quotes from Freedom Asphalt.',
};

export default function DurhamPage() {
  return (
    <LocationPageTemplate
      city="Durham"
      description="Quality asphalt maintenance for the Bull City. We serve Research Triangle Park, Duke University area, and all of Durham County."
      serviceAreas={['Raleigh', 'Chapel Hill', 'Cary', 'Hillsborough', 'Morrisville']}
    />
  );
}
