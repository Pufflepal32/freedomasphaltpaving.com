import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Parking Lot Striping Services',
  description: 'Professional parking lot striping and marking services in Raleigh, NC. ADA compliant markings, fire lanes, and custom stenciling by Freedom Asphalt.',
};

export default function StripingPage() {
  return (
    <ServicePageTemplate
      title="Striping & Marking"
      description="Improve safety and maximize parking capacity with professional striping services. We handle parking spaces, handicap markings, fire lanes, directional arrows, and custom stenciling to keep your lot organized and compliant."
      benefits={[
        'Maximizes parking lot capacity and efficiency',
        'ADA compliant handicap markings and spaces',
        'Clearly marked fire lanes for emergency access',
        'Improves traffic flow with directional arrows',
        'Enhances safety for pedestrians and drivers',
        'Professional appearance for your business',
        'Custom stenciling for logos and messages',
        'High-visibility, long-lasting paint',
      ]}
      process={[
        {
          title: 'Layout Design',
          description: 'We assess your lot and create an optimal layout for maximum efficiency and compliance.',
        },
        {
          title: 'Surface Prep',
          description: 'The surface is cleaned to ensure proper paint adhesion.',
        },
        {
          title: 'Measurement',
          description: 'Precise measurements ensure straight lines and proper spacing.',
        },
        {
          title: 'Application',
          description: 'Professional-grade traffic paint is applied for durability and visibility.',
        },
      ]}
      relatedServices={[
        { title: 'Sealcoating', href: '/services/sealcoating' },
        { title: 'Pressure Washing', href: '/services/pressure-washing' },
        { title: 'Asphalt Repair', href: '/services/asphalt-repair' },
      ]}
    />
  );
}
