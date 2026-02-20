import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Sealcoating Services',
  description: 'Professional sealcoating services in Raleigh, NC. Protect your asphalt from weather, UV rays, and chemical damage with Freedom Asphalt.',
};

export default function SealcoatingPage() {
  return (
    <ServicePageTemplate
      title="Sealcoating"
      description="Protect your asphalt investment with professional sealcoating. Our premium coal-tar or asphalt-based sealant creates a protective barrier that extends the life of your pavement."
      benefits={[
        'Extends pavement life by 3-5 years or more',
        'Protects against damaging UV rays and oxidation',
        'Creates a waterproof barrier to prevent water infiltration',
        'Resists oil, gas, and chemical spills',
        'Enhances curb appeal with a fresh, black appearance',
        'Fills small surface voids and cracks',
        'Makes cleaning and maintenance easier',
        'Cost-effective preventive maintenance',
      ]}
      process={[
        {
          title: 'Inspection',
          description: 'We assess your pavement condition and identify any repairs needed before sealcoating.',
        },
        {
          title: 'Preparation',
          description: 'We clean the surface thoroughly, removing dirt, debris, and oil spots.',
        },
        {
          title: 'Crack Filling',
          description: 'Any cracks are filled with hot rubberized sealant before the sealcoat is applied.',
        },
        {
          title: 'Application',
          description: 'Two coats of premium sealant are applied for maximum protection and durability.',
        },
      ]}
      relatedServices={[
        { title: 'Crack Repair', href: '/services/crack-repair' },
        { title: 'Striping', href: '/services/striping' },
        { title: 'Pressure Washing', href: '/services/pressure-washing' },
      ]}
    />
  );
}
