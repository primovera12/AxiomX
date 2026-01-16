# Asset Migration Guide

> **For Claude Code:** This document catalogs all reusable assets from the previous developer's implementation (`Old AxiomX/`). Migrate these assets to the new Next.js project structure.

---

## Source Location

```
Old AxiomX/assets/
├── css/         # Styles (reference only, don't migrate)
├── js/          # Scripts (reference only, don't migrate)
├── fonts/       # Font files (migrate if self-hosting)
├── webfonts/    # FontAwesome (use Lucide instead)
├── img/         # Images (MIGRATE ALL)
└── video/       # Video files (MIGRATE ALL)
```

---

## Target Directory Structure

Create this structure in the new project:

```
public/
├── images/
│   ├── logo/
│   │   ├── logo.png
│   │   ├── x-logo.png
│   │   └── x-logo.svg
│   ├── backgrounds/
│   │   ├── bg-1.jpg
│   │   ├── bg-2.jpg
│   │   ├── bg-3.jpg
│   │   ├── services-bg.jpg
│   │   ├── team-bg.jpg
│   │   └── vission.jpg
│   ├── partners/
│   │   ├── l-1.png
│   │   ├── l-2.png
│   │   └── ... (l-1 through l-20)
│   ├── icons/
│   │   ├── idea.png
│   │   ├── innovation.png
│   │   ├── adaptation.png
│   │   ├── iteration.png
│   │   └── icon-about.png
│   ├── services/
│   │   └── service-1.jpg
│   ├── team/
│   │   └── member-1.png
│   └── ui/
│       ├── play-btn.svg
│       └── bike.png
├── videos/
│   ├── video-1.mov
│   └── video-2.mp4
└── fonts/
    ├── Alexandria/
    │   ├── Alexandria-Bold.ttf
    │   ├── Alexandria-ExtraBold.ttf
    │   ├── Alexandria-Light.ttf
    │   ├── Alexandria-Medium.ttf
    │   ├── Alexandria-SemiBold.ttf
    │   └── Alexandria-VariableFont_wght.ttf
    └── AloeveraDisplay-Regular.otf
```

---

## Image Assets Inventory

### Logos

| Source File | Target Path | Size | Usage |
|-------------|-------------|------|-------|
| `img/logo-2.png` | `/images/logo/logo.png` | ~50KB | Header, footer logo |
| `img/x-logo.png` | `/images/logo/x-logo.png` | ~20KB | Services accordion icon |
| `img/x-logo-2.svg` | `/images/logo/x-logo.svg` | ~5KB | SVG version for scalability |

### Background Images

| Source File | Target Path | Size | Usage |
|-------------|-------------|------|-------|
| `img/bg-1.jpg` | `/images/backgrounds/bg-1.jpg` | 97KB | Hero/About backgrounds |
| `img/bg-2.jpg` | `/images/backgrounds/bg-2.jpg` | 84KB | About carousel slide |
| `img/bg-3.jpg` | `/images/backgrounds/bg-3.jpg` | 283KB | Additional section backgrounds |
| `img/services-bg.jpg` | `/images/backgrounds/services-bg.jpg` | ~100KB | Services section |
| `img/team-bg.jpg` | `/images/backgrounds/team-bg.jpg` | ~150KB | Careers section |
| `img/vission.jpg` | `/images/backgrounds/vision.jpg` | ~100KB | Vision/Mission section |

### Partner Logos (20 files)

| Source Files | Target Path | Format | Notes |
|--------------|-------------|--------|-------|
| `img/l-1.png` through `img/l-20.png` | `/images/partners/` | PNG/WebP/JPEG | Partner company logos |

**Partner Logo Sizes:**
- Some logos need `.logo-long` class (wider logos)
- Some logos need `.logo-box` class (square/tall logos)

### Brand Value Icons

| Source File | Target Path | Size | Usage |
|-------------|-------------|------|-------|
| `img/idea.png` | `/images/icons/idea.png` | ~30KB | "Challenge Status Quo" value |
| `img/innovation.png` | `/images/icons/innovation.png` | ~30KB | "Innovate With Purpose" value |
| `img/adaptation.png` | `/images/icons/adaptation.png` | ~30KB | "Agile and Adaptable" value |
| `img/iteration.png` | `/images/icons/iteration.png` | ~30KB | "Proactive and Bold" value |
| `img/icon-about.png` | `/images/icons/icon-about.png` | ~20KB | About section icon |

### Service Images

| Source File | Target Path | Size | Usage |
|-------------|-------------|------|-------|
| `img/service-1.jpg` | `/images/services/service-1.jpg` | ~100KB | Service feature image |

**Note:** You may need additional service images. Use placeholders if not available.

### Team & UI Images

| Source File | Target Path | Size | Usage |
|-------------|-------------|------|-------|
| `img/member-1.png` | `/images/team/member-1.png` | 2.1MB | Team member (NEEDS OPTIMIZATION) |
| `img/play-btn.svg` | `/images/ui/play-btn.svg` | ~2KB | Video play button |
| `img/bike.png` | `/images/ui/bike.png` | 56KB | Tracking widget decoration |

---

## Video Assets

| Source File | Target Path | Size | Duration | Usage |
|-------------|-------------|------|----------|-------|
| `video/video-1.mov` | `/videos/video-1.mov` | 1.2 MB | - | Hero carousel slide 1 background |
| `video/video-2.mp4` | `/videos/video-2.mp4` | 33.9 MB | - | Hero carousel slide 2 background |

### Video Implementation

```tsx
// Hero video background component
<div className="relative w-full h-screen">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/videos/video-1.mov" type="video/quicktime" />
    <source src="/videos/video-1.mp4" type="video/mp4" />
  </video>

  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

  {/* Content */}
  <div className="relative z-10">
    {/* Hero content here */}
  </div>
</div>
```

### Video Optimization Recommendations

1. **Convert video-2.mp4** (33.9MB is too large):
   - Compress to under 10MB
   - Consider WebM format for better compression
   - Use lower resolution for mobile

2. **Convert video-1.mov** to MP4:
   - MOV format has limited browser support
   - Create MP4 version as fallback

3. **Next.js Video Config**:
```javascript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/videos/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};
```

---

## Font Files

### Alexandria Font Family

| Source File | Format | Weight |
|-------------|--------|--------|
| `fonts/Alexandria-Light.ttf` | TTF | 300 |
| `fonts/Alexandria-Medium.ttf` | TTF | 500 |
| `fonts/Alexandria-SemiBold.ttf` | TTF | 600 |
| `fonts/Alexandria-Bold.ttf` | TTF | 700 |
| `fonts/Alexandria-ExtraBold.ttf` | TTF | 800 |
| `fonts/Alexandria-VariableFont_wght.ttf` | TTF | Variable (100-900) |

**Recommendation:** Use Google Fonts CDN instead of self-hosting for better performance and caching.

### Aloevera Display

| Source File | Format | Weight |
|-------------|--------|--------|
| `fonts/AloeveraDisplay-Regular.otf` | OTF | 400 |

**Note:** This is a custom font for service tags. Self-host if used, or replace with similar Google Font.

### Font Loading (if self-hosting)

```css
/* In globals.css */
@font-face {
  font-family: 'Alexandria';
  src: url('/fonts/Alexandria/Alexandria-VariableFont_wght.ttf') format('truetype');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Aloevera Display';
  src: url('/fonts/AloeveraDisplay-Regular.otf') format('opentype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

---

## Migration Steps

### Step 1: Create Directory Structure

```bash
# From project root
mkdir -p public/images/{logo,backgrounds,partners,icons,services,team,ui}
mkdir -p public/videos
mkdir -p public/fonts/Alexandria
```

### Step 2: Copy Images

```bash
# Copy logos
cp "Old AxiomX/assets/img/logo-2.png" public/images/logo/logo.png
cp "Old AxiomX/assets/img/x-logo.png" public/images/logo/
cp "Old AxiomX/assets/img/x-logo-2.svg" public/images/logo/x-logo.svg

# Copy backgrounds
cp "Old AxiomX/assets/img/bg-1.jpg" public/images/backgrounds/
cp "Old AxiomX/assets/img/bg-2.jpg" public/images/backgrounds/
cp "Old AxiomX/assets/img/bg-3.jpg" public/images/backgrounds/
cp "Old AxiomX/assets/img/vission.jpg" public/images/backgrounds/vision.jpg

# Copy partner logos
cp Old AxiomX/assets/img/l-*.png public/images/partners/
cp Old AxiomX/assets/img/l-*.webp public/images/partners/
cp Old AxiomX/assets/img/l-*.jpg public/images/partners/

# Copy icons
cp "Old AxiomX/assets/img/idea.png" public/images/icons/
cp "Old AxiomX/assets/img/innovation.png" public/images/icons/
cp "Old AxiomX/assets/img/adaptation.png" public/images/icons/
cp "Old AxiomX/assets/img/iteration.png" public/images/icons/

# Copy service images
cp "Old AxiomX/assets/img/service-1.jpg" public/images/services/

# Copy team images
cp "Old AxiomX/assets/img/member-1.png" public/images/team/

# Copy UI elements
cp "Old AxiomX/assets/img/play-btn.svg" public/images/ui/
cp "Old AxiomX/assets/img/bike.png" public/images/ui/
```

### Step 3: Copy Videos

```bash
cp "Old AxiomX/assets/video/video-1.mov" public/videos/
cp "Old AxiomX/assets/video/video-2.mp4" public/videos/
```

### Step 4: Copy Fonts (if self-hosting)

```bash
cp Old AxiomX/assets/fonts/Alexandria*.ttf public/fonts/Alexandria/
cp "Old AxiomX/assets/fonts/AloeveraDisplay-Regular.otf" public/fonts/
```

---

## Image Optimization Recommendations

### Images Needing Optimization

| Image | Current Size | Target Size | Action |
|-------|--------------|-------------|--------|
| `member-1.png` | 2.1 MB | < 200KB | Compress, resize, convert to WebP |
| `video-2.mp4` | 33.9 MB | < 10MB | Compress video, reduce resolution |
| `bg-3.jpg` | 283 KB | < 150KB | Compress |

### Optimization Commands

```bash
# Using sharp or imagemin for image optimization
# Install: npm install sharp

# Convert to WebP (recommended for web)
npx sharp-cli public/images/team/member-1.png -o public/images/team/member-1.webp --webp

# Resize and compress
npx sharp-cli public/images/team/member-1.png -o public/images/team/member-1-optimized.png --resize 800
```

### Next.js Image Optimization

```tsx
// Use Next.js Image component for automatic optimization
import Image from 'next/image';

<Image
  src="/images/team/member-1.png"
  alt="Team member"
  width={400}
  height={400}
  quality={80}
  placeholder="blur"
  blurDataURL="/images/team/member-1-placeholder.jpg"
/>
```

---

## Assets NOT to Migrate

| Asset | Reason |
|-------|--------|
| `css/bootstrap.min.css` | Using Tailwind CSS instead |
| `css/owl.carousel.min.css` | Using Embla Carousel instead |
| `css/fontawesome.css` | Using Lucide React instead |
| `js/jquery.min.js` | Not using jQuery |
| `js/owl.carousel.min.js` | Using Embla Carousel instead |
| `webfonts/*` | Using Lucide React for icons |
| `.DS_Store` files | Mac system files |

---

## Partner Logos Data

Create this data file after migration:

```typescript
// data/partners.ts
export interface Partner {
  id: string;
  name: string;
  logo: string;
  className?: 'logo-long' | 'logo-box';
}

export const partners: Partner[] = [
  { id: "partner-1", name: "Partner 1", logo: "/images/partners/l-1.png" },
  { id: "partner-2", name: "Partner 2", logo: "/images/partners/l-2.png" },
  { id: "partner-3", name: "Partner 3", logo: "/images/partners/l-3.png" },
  { id: "partner-4", name: "Partner 4", logo: "/images/partners/l-4.png" },
  { id: "partner-5", name: "Partner 5", logo: "/images/partners/l-5.webp" },
  // ... add all 20 partners
  { id: "partner-20", name: "Partner 20", logo: "/images/partners/l-20.png" },
];
```

---

## Verification Checklist

After migration, verify:

- [ ] All logo variants display correctly
- [ ] Background images load on all sections
- [ ] All 20 partner logos appear in carousel
- [ ] Brand value icons display properly
- [ ] Videos play on hero section
- [ ] Fonts render correctly (if self-hosting)
- [ ] No 404 errors in browser console
- [ ] Images are optimized (check file sizes)
- [ ] Mobile responsive images load correctly

---

*Asset inventory from Old AxiomX implementation. Total size: ~51MB (35MB videos, 16MB images/fonts).*
