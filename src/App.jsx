import { lazy, Suspense, useEffect, useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Products from './components/sections/Products';
import Gallery from './components/sections/Gallery';
import Management from './components/sections/Management';
import Legality from './components/sections/Legality';
import Contact from './components/sections/Contact';

const ProductModal = lazy(() => import('./components/ui/ProductModal'));

function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setWidth(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      id="scroll-progress"
      style={{ width: `${width}%` }}
    />
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="
        fixed bottom-8 right-8 z-50
        w-12 h-12 rounded-full
        bg-gradient-to-br from-green-500 to-emerald-600
        shadow-glow-green hover:shadow-[0_0_30px_rgba(34,197,94,0.4)]
        flex items-center justify-center
        text-white transition-all duration-300
        hover:scale-110 active:scale-95
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m18 15-6-6-6 6" />
      </svg>
    </button>
  );
}

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="bg-white text-slate-900 overflow-x-hidden">
      <ScrollProgress />
      <Navbar />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="services">
          <Products onSelectProduct={setSelectedProduct} />
        </section>

        <section id="gallery">
          <Gallery />
        </section>

        <section id="team">
          <Management />
        </section>

        <section id="legal">
          <Legality />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
      <BackToTop />

      <Suspense fallback={null}>
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </Suspense>
    </div>
  );
}
