import { Metadata } from 'next';
import LocationPageTemplate from '@/components/LocationPageTemplate';

export const metadata: Metadata = {
  title: 'Asphalt Maintenance in Wake Forest, NC',
  description: 'Professional sealcoating, crack repair, and asphalt maintenance services in Wake Forest, NC. Free quotes from Freedom Asphalt.',
};

export default function WakeForestPage() {
  return (
    <LocationPageTemplate
      city="Wake Forest"
      description="Professional asphalt maintenance for the growing Wake Forest community. We serve businesses, neighborhoods, and commercial properties throughout the area."
      serviceAreas={['Raleigh', 'Durham', 'Youngsville', 'Rolesville', 'Creedmoor']}
    />
  );
}
