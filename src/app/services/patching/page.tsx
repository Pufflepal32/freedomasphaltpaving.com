import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Asphalt Patching Services',
  description: 'Professional asphalt patching services in Raleigh, NC. Cost-effective repairs for localized damage by Freedom Asphalt.',
};

export default function PatchingPage() {
  return (
    <ServicePageTemplate
      title="Patching"
      description="Professional patching solutions for localized damage. Our patching services repair specific problem areas without the cost of full resurfacing, extending your pavement life cost-effectively."
      benefits={[
        'Targeted repairs for specific problem areas',
        'Cost-effective alternative to full resurfacing',
        'Quick completion minimizes downtime',
        'Extends overall pavement lifespan',
        'Addresses damage before it spreads',
        'Quality materials for lasting repairs',
        'Seamless integration with existing surface',
        'Improves safety and appearance',
      ]}
      process={[
        {
          title: 'Identification',
          description: 'We identify all areas requiring patching and mark boundaries.',
        },
        {
          title: 'Cutting',
          description: 'Damaged areas are saw-cut for clean, straight edges.',
        },
        {
          title: 'Removal',
          description: 'Old asphalt is removed and the base is inspected.',
        },
        {
          title: 'Installation',
          description: 'New asphalt is installed and compacted to match surrounding surface.',
        },
      ]}
      relatedServices={[
        { title: 'Asphalt Repair', href: '/services/asphalt-repair' },
        { title: 'Crack Repair', href: '/services/crack-repair' },
        { title: 'Sealcoating', href: '/services/sealcoating' },
      ]}
    />
  );
}
