import { Metadata } from 'next';
import LocationPageTemplate from '@/components/LocationPageTemplate';

export const metadata: Metadata = {
  title: 'Asphalt Maintenance in Fayetteville, NC',
  description: 'Professional sealcoating, crack repair, and asphalt maintenance services in Fayetteville, NC. Free quotes from Freedom Asphalt.',
};

export default function FayettevillePage() {
  return (
    <LocationPageTemplate
      city="Fayetteville"
      description="Professional asphalt maintenance for Cumberland County. We serve Fort Bragg area businesses, shopping centers, and commercial properties."
      serviceAreas={['Raleigh', 'Southern Pines', 'Sanford', 'Spring Lake', 'Hope Mills']}
    />
  );
}
