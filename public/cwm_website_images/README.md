# CWM Website Image Assets
**Extracted from:** Compro_PT_CWM_20251_250718_1916381.pdf
**Total files:** 23 images
**Generated:** Automated extraction via Claude

---

## Folder Structure

```
public/images/
├── logo/
│   └── logo-cwm.jpg            ← CWM logo (use in Navbar + Footer)
├── hero/
│   ├── hero-bg.jpg             ← Full cover page (Hero background)
│   └── hero-products-grid.jpg  ← 4 product previews grid (Hero section)
├── products/
│   ├── bsf-maggot-closeup.jpg          ← BSF main product photo
│   ├── bsf-facility-automation.jpg     ← BSF facility/equipment
│   ├── bsf-card-thumb.jpg              ← BSF card thumbnail
│   ├── rdf-briquette-product.jpg       ← RDF briquette product
│   ├── rdf-processing-equipment.jpg    ← RDF equipment
│   ├── rdf-card-thumb.jpg              ← RDF card thumbnail
│   ├── geocell-field-installation.jpg  ← Geocell field use-case
│   ├── geocell-factory-machinery.jpg   ← Geocell factory machines
│   ├── geocell-card-thumb.jpg          ← Geocell card thumbnail
│   ├── gasification-plant-render.jpg   ← Gasification 3D render
│   ├── gasification-system-diagram.jpg ← Gasification flow diagram
│   └── gasification-card-thumb.jpg     ← Gasification card thumbnail
└── legalitas/
    ├── legal-akta-notaris.jpg          ← Akta Notaris No.28 (Feb 2023)
    ├── legal-sk-kemenkumham.jpg        ← SK AHU-0016240 (Kemenkumham)
    ├── legal-sk-kemenkumham-lampiran.jpg ← Lampiran SK (Susunan Saham)
    ├── legal-nib-perizinan.jpg         ← NIB 1003230037872
    ├── legal-nib-lampiran.jpg          ← Lampiran NIB (Bidang Usaha)
    ├── legal-npwp.jpg                  ← NPWP 0401850631008000
    ├── legal-skt-terdaftar.jpg         ← SKT Terdaftar DJP (Mei 2025)
    └── legal-pkp-pengukuhan.jpg        ← Pengukuhan PKP (10 Jun 2025)
```

---

## Usage in React Components

### Logo (Navbar.jsx)
```jsx
import logo from '@/assets/images/logo/logo-cwm.jpg'
// OR if in public folder:
<img src="/images/logo/logo-cwm.jpg" alt="CWM Logo" className="h-12 w-auto" />
```

### Hero Section (Hero.jsx)
```jsx
// Background image
<div
  className="min-h-screen bg-cover bg-center"
  style={{ backgroundImage: 'url(/images/hero/hero-bg.jpg)' }}
>
```

### Products Section (Services.jsx)
```jsx
const products = [
  {
    id: 'bsf',
    image: '/images/products/bsf-maggot-closeup.jpg',
    facilityImage: '/images/products/bsf-facility-automation.jpg',
    thumb: '/images/products/bsf-card-thumb.jpg',
    // ... rest of data
  },
  {
    id: 'rdf',
    image: '/images/products/rdf-briquette-product.jpg',
    facilityImage: '/images/products/rdf-processing-equipment.jpg',
    thumb: '/images/products/rdf-card-thumb.jpg',
  },
  {
    id: 'geocell',
    image: '/images/products/geocell-field-installation.jpg',
    facilityImage: '/images/products/geocell-factory-machinery.jpg',
    thumb: '/images/products/geocell-card-thumb.jpg',
  },
  {
    id: 'gasification',
    image: '/images/products/gasification-plant-render.jpg',
    facilityImage: '/images/products/gasification-system-diagram.jpg',
    thumb: '/images/products/gasification-card-thumb.jpg',
  },
]
```

### Legalitas Section (Legal.jsx)
```jsx
const legalDocs = [
  { name: 'Akta Notaris', file: '/images/legalitas/legal-akta-notaris.jpg' },
  { name: 'SK Kemenkumham', file: '/images/legalitas/legal-sk-kemenkumham.jpg' },
  { name: 'NIB', file: '/images/legalitas/legal-nib-perizinan.jpg' },
  { name: 'NPWP', file: '/images/legalitas/legal-npwp.jpg' },
  { name: 'SKT Terdaftar', file: '/images/legalitas/legal-skt-terdaftar.jpg' },
  { name: 'Pengukuhan PKP', file: '/images/legalitas/legal-pkp-pengukuhan.jpg' },
]
```

---

## Installation Steps

1. Copy the entire `images/` folder into your project's `public/` directory:
   ```
   D:\Jascon\CWM\cwm-website\public\images\
   ```

2. Images are accessible at runtime via `/images/...` paths (no import needed for public folder).

3. For optimized loading, consider using Vite's `import` syntax for critical images.

---

**Note:** Images are extracted from the official company profile PDF.
All images are property of PT. Circular Waste Management.
