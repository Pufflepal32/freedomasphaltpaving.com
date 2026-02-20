import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Asphalt Repair Services',
  description: 'Professional asphalt repair services in Raleigh, NC. Fix potholes, depressions, and damaged areas with Freedom Asphalt.',
};

export default function AsphaltRepairPage() {
  return (
    <ServicePageTemplate
      title="Asphalt Repair"
      description="Restore your parking lot with comprehensive asphalt repair services. We fix potholes, depressions, and damaged areas to create a smooth, safe surface for vehicles and pedestrians."
      benefits={[
        'Eliminates dangerous potholes and tripping hazards',
        'Restores damaged sections to like-new condition',
        'Prevents further deterioration of surrounding areas',
        'Improves safety for vehicles and pedestrians',
        'Enhances property appearance and value',
        'Cost-effective alternative to full replacement',
        'Quick turnaround minimizes business disruption',
        'Professional results with quality materials',
      ]}
      process={[
        {
          title: 'Assessment',
          description: 'We inspect the damage to determine the best repair method and materials.',
        },
        {
          title: 'Excavation',
          description: 'Damaged asphalt is removed and the base is properly prepared.',
        },
        {
          title: 'Compaction',
          description: 'The base is compacted to provide a stable foundation.',
        },
        {
          title: 'Paving',
          description: 'New hot mix asphalt is applied and compacted for a seamless finish.',
        },
      ]}
      relatedServices={[
        { title: 'Patching', href: '/services/patching' },
        { title: 'Crack Repair', href: '/services/crack-repair' },
        { title: 'Sealcoating', href: '/services/sealcoating' },
      ]}
    />
  );
}
