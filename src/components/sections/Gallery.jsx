import SectionHeader from '../ui/SectionHeader';
import ImagePlaceholder from '../ui/ImagePlaceholder';
import { StaggerContainer, StaggerItem } from '../ui/AnimatedSection';

const GALLERY_ITEMS = [
  { label: 'Operations — BSF Facility' },
  { label: 'Operations — RDF Production Line' },
  { label: 'Operations — Geocell Manufacturing' },
  { label: 'Operations — Gasification Plant' },
  { label: 'Team — Working Together' },
  { label: 'Facility — Office / HQ' },
];

export default function Gallery() {
  return (
    <section className="relative py-24 lg:py-32 bg-gray-50 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Gallery"
          title="Our"
          titleGradient="Operations"
          subtitle="A glimpse into CWM's waste processing facilities, production lines, and team at work."
        />

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, i) => (
            <StaggerItem key={i}>
              <ImagePlaceholder
                src={null}
                label={item.label}
                aspectRatio="1/1"
                className="shadow-sm hover:shadow-md transition-shadow duration-300"
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
