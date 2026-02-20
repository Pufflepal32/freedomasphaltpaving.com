import { Metadata } from 'next';
import LocationPageTemplate from '@/components/LocationPageTemplate';

export const metadata: Metadata = {
  title: 'Asphalt Maintenance in Greensboro, NC',
  description: 'Professional sealcoating, crack repair, and asphalt maintenance services in Greensboro, NC. Free quotes from Freedom Asphalt.',
};

export default function GreensboroPage() {
  return (
    <LocationPageTemplate
      city="Greensboro"
      description="Extending our professional asphalt services to the Triad. We serve Greensboro businesses, industrial parks, and commercial properties."
      serviceAreas={['High Point', 'Burlington', 'Winston-Salem', 'Durham', 'Raleigh']}
    />
  );
}
