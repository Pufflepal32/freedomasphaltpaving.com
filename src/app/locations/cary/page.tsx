import { Metadata } from 'next';
import LocationPageTemplate from '@/components/LocationPageTemplate';

export const metadata: Metadata = {
  title: 'Asphalt Maintenance in Cary, NC',
  description: 'Professional sealcoating, crack repair, and asphalt maintenance services in Cary, NC. Free quotes from Freedom Asphalt.',
};

export default function CaryPage() {
  return (
    <LocationPageTemplate
      city="Cary"
      description="Expert asphalt maintenance for Cary's premier business parks, shopping centers, and residential communities. Quality service you can trust."
      serviceAreas={['Raleigh', 'Apex', 'Morrisville', 'Durham', 'Holly Springs']}
    />
  );
}
