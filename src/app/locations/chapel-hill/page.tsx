import { Metadata } from 'next';
import LocationPageTemplate from '@/components/LocationPageTemplate';

export const metadata: Metadata = {
  title: 'Asphalt Maintenance in Chapel Hill, NC',
  description: 'Professional sealcoating, crack repair, and asphalt maintenance services in Chapel Hill, NC. Free quotes from Freedom Asphalt.',
};

export default function ChapelHillPage() {
  return (
    <LocationPageTemplate
      city="Chapel Hill"
      description="Quality asphalt maintenance for Chapel Hill and Carrboro. We serve the University area, downtown businesses, and surrounding communities."
      serviceAreas={['Durham', 'Carrboro', 'Hillsborough', 'Pittsboro', 'Cary']}
    />
  );
}
