import { Metadata } from 'next';
import LocationPageTemplate from '@/components/LocationPageTemplate';

export const metadata: Metadata = {
  title: 'Asphalt Maintenance in Raleigh, NC',
  description: 'Professional sealcoating, crack repair, and asphalt maintenance services in Raleigh, NC. Free quotes from Freedom Asphalt.',
};

export default function RaleighPage() {
  return (
    <LocationPageTemplate
      city="Raleigh"
      description="Professional asphalt maintenance services for the capital city. We serve businesses, HOAs, and commercial properties throughout Raleigh and Wake County."
      serviceAreas={['Durham', 'Cary', 'Wake Forest', 'Apex', 'Garner', 'Clayton']}
    />
  );
}
