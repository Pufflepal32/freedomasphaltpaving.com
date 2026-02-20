import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Crack Repair Services',
  description: 'Professional crack filling and repair services in Raleigh, NC. Stop cracks from spreading and prevent water damage with Freedom Asphalt.',
};

export default function CrackRepairPage() {
  return (
    <ServicePageTemplate
      title="Crack Repair"
      description="Stop cracks from spreading and prevent costly damage with our professional crack filling services. We use hot rubberized crack filler that flexes with temperature changes for long-lasting repairs."
      benefits={[
        'Prevents water from penetrating the pavement base',
        'Stops existing cracks from spreading further',
        'Protects against freeze-thaw damage cycles',
        'Hot rubberized sealant flexes with temperature changes',
        'Extends the life of your pavement surface',
        'Prevents potholes from forming',
        'Prepares surface for sealcoating application',
        'Cost-effective maintenance solution',
      ]}
      process={[
        {
          title: 'Assessment',
          description: 'We evaluate all cracks to determine the best repair method for each.',
        },
        {
          title: 'Cleaning',
          description: 'Cracks are cleaned of debris, vegetation, and loose material using compressed air.',
        },
        {
          title: 'Filling',
          description: 'Hot rubberized crack sealant is applied at the proper temperature for optimal adhesion.',
        },
        {
          title: 'Finishing',
          description: 'Excess material is smoothed for a clean appearance and proper surface level.',
        },
      ]}
      relatedServices={[
        { title: 'Sealcoating', href: '/services/sealcoating' },
        { title: 'Asphalt Repair', href: '/services/asphalt-repair' },
        { title: 'Patching', href: '/services/patching' },
      ]}
    />
  );
}
