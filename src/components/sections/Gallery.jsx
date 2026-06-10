import SectionHeader from '../ui/SectionHeader';
import ImagePlaceholder from '../ui/ImagePlaceholder';
import { StaggerContainer, StaggerItem } from '../ui/AnimatedSection';

const GALLERY_ITEMS = [
  { label: 'Operasional — Fasilitas BSF' },
  { label: 'Operasional — Lini Produksi RDF' },
  { label: 'Operasional — Pabrik Geocell' },
  { label: 'Operasional — Pabrik Gasifikasi' },
  { label: 'Tim — Bekerja Bersama' },
  { label: 'Fasilitas — Kantor / HQ' },
];

export default function Gallery() {
  return (
    <section className="relative py-24 lg:py-32 bg-gray-50 dark:bg-slate-950 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Galeri"
          title="Operasional"
          titleGradient="Kami"
          subtitle="Sekilas fasilitas pengolahan sampah, lini produksi, dan tim CWM dalam aksi."
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
