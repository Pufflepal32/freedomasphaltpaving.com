import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Pressure Washing Services',
  description: 'Professional pressure washing services in Raleigh, NC. Remove oil stains, dirt, and debris from your parking lot with Freedom Asphalt.',
};

export default function PressureWashingPage() {
  return (
    <ServicePageTemplate
      title="Pressure Washing"
      description="Remove oil stains, dirt, debris, and contaminants with commercial pressure washing. Proper cleaning prepares surfaces for sealcoating and dramatically improves your property&apos;s appearance."
      benefits={[
        'Removes oil stains and automotive fluids',
        'Eliminates dirt, grime, and debris buildup',
        'Essential preparation for sealcoating',
        'Improves overall property appearance',
        'Reveals hidden damage for assessment',
        'Removes slippery algae and mold',
        'Extends pavement life through proper maintenance',
        'Creates a cleaner, safer environment',
      ]}
      process={[
        {
          title: 'Assessment',
          description: 'We evaluate the surface and identify heavy stain areas.',
        },
        {
          title: 'Pre-Treatment',
          description: 'Oil stains and tough spots are pre-treated with degreasers.',
        },
        {
          title: 'Washing',
          description: 'Commercial-grade pressure washing removes contaminants.',
        },
        {
          title: 'Final Rinse',
          description: 'Complete rinse ensures a clean surface ready for next steps.',
        },
      ]}
      relatedServices={[
        { title: 'Sealcoating', href: '/services/sealcoating' },
        { title: 'Striping', href: '/services/striping' },
        { title: 'Crack Repair', href: '/services/crack-repair' },
      ]}
    />
  );
}
