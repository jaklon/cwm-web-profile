# CWM Website Images

Drop your image files into the appropriate sub-folders and update the `src` props:

| Section       | Component File                            | Prop to Update             |
|---------------|-------------------------------------------|----------------------------|
| Hero          | src/components/sections/Hero.jsx          | `src={null}` → `src="/images/hero/hero-main.jpg"` |
| About         | src/components/sections/About.jsx         | `src={null}` → `src="/images/about/company-overview.jpg"` |
| Product (BSF) | src/data/products.js → id: "bsf"          | `productImage` field       |
| Product (RDF) | src/data/products.js → id: "rdf"          | `productImage` field       |
| Geocell       | src/data/products.js → id: "geocell"      | `productImage` field       |
| Gasification  | src/data/products.js → id: "gasification" | `productImage` field       |
| Team photos   | src/data/management.js                    | `photo` field per member   |
| Gallery       | src/components/sections/Gallery.jsx       | `src={null}` → image path  |

## Folder Structure

```
public/images/
├── hero/        ← hero-main.jpg, hero-bg.jpg
├── about/       ← company-overview.jpg, team-group.jpg
├── products/    ← bsf.jpg, rdf.jpg, geocell.jpg, gasification.jpg
├── team/        ← yamin-pakaya.jpg, salman-putra.jpg, a-haris.jpg, ronny-kembuan.jpg, dita-asrini.jpg
└── gallery/     ← ops-1.jpg through ops-6.jpg
```

## Quick Start

1. Add your image file to the appropriate subfolder (e.g. `public/images/hero/hero-main.jpg`)
2. Update the `src` prop in the corresponding component from `null` to the image path
3. The `ImagePlaceholder` component will automatically show the real image once `src` is set
