# Design System — Company Profile

> **Proyek:** Company Profile Website
> **Tech Stack:** Next.js 14+ (App Router), TypeScript, Tailwind CSS, next-intl
> **Dokumen ini:** PRD Visual & Design Guideline untuk seluruh proses pembangunan frontend

---

## 1. Brand Identity

### 1.1 Warna

| Token | Hex | Usage |
|-------|-----|-------|
| `brand-50` | `#f2f7f8` | Background section ringan |
| `brand-100` | `#e0edef` | Hover state ringan, badge background |
| `brand-200` | `#a2c4c9` | **Primary brand** — tombol utama, link, aksen |
| `brand-300` | `#7faeb5` | Hover state tombol, border aktif |
| `brand-400` | `#5d97a1` | Active/pressed state |
| `brand-500` | `#4a7d86` | Teks brand pada background terang |
| `brand-600` | `#37636b` | Teks brand pada background putih |
| `brand-700` | `#244950` | Dark variant, footer background |
| `brand-800` | `#1a363c` | Extra dark |
| `brand-900` | `#122428` | Hampir hitam untuk header/footer gelap |

**Neutral colors:**

| Token | Hex | Usage |
|-------|-----|-------|
| `white` | `#ffffff` | Background utama |
| `neutral-50` | `#f8fafc` | Background sekunder |
| `neutral-100` | `#f1f5f9` | Card background, section divider |
| `neutral-200` | `#e2e8f0` | Border ringan, input border |
| `neutral-300` | `#cbd5e1` | Border, divider |
| `neutral-400` | `#94a3b8` | Placeholder text, icon pasif |
| `neutral-500` | `#64748b` | Meta text, caption |
| `neutral-600` | `#475569` | Body text (default) |
| `neutral-700` | `#334155` | Heading teks |
| `neutral-800` | `#1e293b` | Heading utama |
| `neutral-900` | `#0f172a` | Hampir hitam |

**Semantic colors:**

| Token | Hex | Usage |
|-------|-----|-------|
| `success` | `#22c55e` | Sukses, notifikasi positif |
| `warning` | `#f59e0b` | Peringatan, perhatian |
| `error` | `#ef4444` | Error, validasi gagal |
| `info` | `#3b82f6` | Informasi |

### 1.2 Tipografi

**Font Utama:** Plus Jakarta Sans (Variable)

```css
/* Google Fonts import */
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');
```

**Type Scale:**

| Level | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| `6xl` | 60px / 3.75rem | 700–800 | 1.1 | Hero heading (desktop) |
| `5xl` | 48px / 3rem | 700 | 1.15 | Hero heading (mobile), page title |
| `4xl` | 36px / 2.25rem | 700 | 1.2 | Section heading utama |
| `3xl` | 30px / 1.875rem | 600–700 | 1.25 | Sub-section heading |
| `2xl` | 24px / 1.5rem | 600 | 1.3 | Card title, modal title |
| `xl` | 20px / 1.25rem | 600 | 1.4 | Lead paragraph, nav item |
| `lg` | 18px / 1.125rem | 500 | 1.5 | Body large, intro text |
| `base` | 16px / 1rem | 400–500 | 1.6 | Body text default |
| `sm` | 14px / 0.875rem | 400–500 | 1.5 | Caption, meta, footer text |
| `xs` | 12px / 0.75rem | 400–500 | 1.4 | Label kecil, copyright |

**Font weight rules:**
- Body text: minimal **400** (jangan kurang)
- Lead/intro: **500**
- Subheading: **600**
- Heading: **700**
- Hero heading: **700–800**
- Jangan gunakan weight di bawah 400 untuk teks konten

### 1.3 Spacing & Grid

- **Base unit:** 4px (Tailwind default)
- **Container max-width:** `max-w-7xl` (1280px)
- **Gutter:** px-4 (mobile), px-6 (tablet), px-8 (desktop)
- **Section padding:** py-16 (mobile), py-20–24 (desktop)

**Breakpoints:**

| Breakpoint | Min width | Container |
|------------|-----------|-----------|
| `sm` | 640px | 640px |
| `md` | 768px | 768px |
| `lg` | 1024px | 1024px |
| `xl` | 1280px | 1280px |
| `2xl` | 1536px | 1280px |

---

## 2. UI/UX Principles — Clean & Professional

### 2.1 Core Philosophy

> **"Clarity over creativity."** Setiap elemen visual harus memiliki tujuan. Desain yang baik adalah desain yang tidak perlu dijelaskan.

### 2.2 Clean Style

| Prinsip | Penerapan |
|---------|-----------|
| **Whitespace dominance** | Minimal 40% area kosong per viewport; jangan penuhi layar dengan konten |
| **Warna terbatas** | Maksimal 2–3 warna per halaman: brand (`#a2c4c9`), neutral, dan 1 accent (jika perlu) |
| **Typography-driven layout** | Hierarki font sebagai struktur utama — bukan border, shadow, atau background pattern |
| **Minimal decoration** | Tidak ada gradien tidak perlu, pattern berulang, atau elemen dekoratif yang tidak mendukung konten |
| **Grid alignment ketat** | Setiap elemen terikat pada grid 8px; tidak boleh ada elemen "floating" tanpa baseline |
| **Border radius terkendali** | Hanya `rounded-sm` (4px) untuk elemen kecil, `rounded-lg` (8px) untuk card/section; jangan berlebihan |

### 2.3 Professional Look

| Prinsip | Penerapan |
|---------|-----------|
| **Refined spacing** | Padding minimum 16px pada card/section; gutter konsisten antar semua halaman |
| **Subtle shadows** | Gunakan shadow paling ringan (`shadow-sm`) atau tanpa shadow sama sekali; hindari shadow tebal |
| **Polished typography** | Line-height 1.5–1.75 untuk body, 1.1–1.25 untuk heading; letter-spacing normal |
| **High-quality imagery** | Foto profesional dengan palette warna terkontrol; hindari stock photo generik |
| **Consistent micro-interactions** | Semua elemen interaktif memiliki `transition-all duration-200 ease-out` |
| **Business-appropriate tone** | Animasi hanya fade/slide halus; tidak ada efek "lucu" atau playful |
| **Accessible contrast** | Rasio kontras minimal 4.5:1 untuk body text terhadap background |

### 2.4 UX Tenets

1. **Consistency** — Pola komponen, spacing, dan interaksi seragam di seluruh halaman
2. **Accessibility** — Kontras memadai, focus states terlihat, semantic HTML, alt text pada gambar
3. **Visual hierarchy** — Tipografi & spacing membedakan prioritas informasi secara jelas
4. **Mobile-first** — Semua komponen dirancang dari mobile ke desktop (progressive enhancement)
5. **Performance-aware** — Animasi menggunakan GPU (transform/opacity), lazy loading gambar
6. **Error prevention** — Form validation real-time, konfirmasi sebelum aksi destruktif
7. **Feedback** — Setiap interaksi memiliki feedback visual (loading, success, error state)

### 2.5 Anti-Patterns Checklist (Larangan)

- ❌ Tidak ada centering vertikal paksa pada hero (kecuali konten sangat sedikit)
- ❌ Tidak ada teks yang menumpuk di atas background kompleks (gunakan overlay)
- ❌ Tidak ada pop-up/gangguan yang muncul tanpa interaksi pengguna
- ❌ Tidak ada font weight < 400 untuk body text
- ❌ Tidak ada warna teks abu-abu muda (di bawah `#666`) untuk body
- ❌ Tidak ada elemen yang "menempel" tanpa padding (jarak antar elemen minimal 8px)
- ❌ Tidak ada animasi yang tidak perlu (parallax berlebihan, particle effects)
- ❌ Tidak ada underline pada teks yang bukan link
- ❌ Tidak ada border merah tanpa pesan error yang jelas
- ❌ Tidak ada horizontal scroll pada viewport 360px–1920px

---

## 3. Design Tokens

### 3.1 Tailwind CSS Configuration

```ts
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f2f7f8",
          100: "#e0edef",
          200: "#a2c4c9",
          300: "#7faeb5",
          400: "#5d97a1",
          500: "#4a7d86",
          600: "#37636b",
          700: "#244950",
          800: "#1a363c",
          900: "#122428",
        },
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
```

### 3.2 CSS Custom Properties (Global CSS)

```css
/* app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');

@layer base {
  :root {
    --color-brand: #a2c4c9;
    --color-text-body: #475569;
    --color-text-heading: #1e293b;
    --radius-sm: 4px;
    --radius-lg: 8px;
    --transition-base: 200ms ease-out;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    @apply text-neutral-600 antialiased;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply text-neutral-800 font-bold leading-tight;
  }
}
```

---

## 4. Component Design Guidelines

### 4.1 Button System

| Variant | Background | Text | Border | Hover |
|---------|-----------|------|--------|-------|
| **Primary** | `brand-200` | `white` | none | `brand-300` |
| **Outline** | transparent | `brand-200` | `brand-200` 1px | bg `brand-50` |
| **Ghost** | transparent | `neutral-600` | none | bg `neutral-100` |

**Size:**

| Size | Padding X | Padding Y | Font Size | Icon Gap |
|------|-----------|-----------|-----------|----------|
| `sm` | px-4 | py-1.5 | text-sm | gap-1.5 |
| `md` | px-6 | py-2.5 | text-base | gap-2 |
| `lg` | px-8 | py-3.5 | text-lg | gap-2.5 |

**Rules:**
- Border radius: `rounded-lg` (8px)
- Transition: `transition-all duration-200 ease-out`
- Focus: `outline-2 outline-offset-2 outline-brand-200`
- Disabled: `opacity-50 cursor-not-allowed`
- Ikon: hanya di kiri (sebelum teks) atau kanan (setelah teks), pilih salah satu

### 4.2 Card Component

```tsx
// Default card pattern
<div className="rounded-lg bg-white p-6 shadow-sm border border-neutral-100 
                transition-all duration-200 ease-out 
                hover:shadow-md hover:border-brand-100">
  {/* konten */}
</div>
```

### 4.3 Form Elements

| Element | Border | Focus | Error State |
|---------|--------|-------|-------------|
| Input | `neutral-200` | `brand-200` ring-2 | `error` border + ring |
| Textarea | `neutral-200` | `brand-200` ring-2 | `error` border + ring |
| Select | `neutral-200` | `brand-200` ring-2 | `error` border + ring |
| Checkbox/Radio | `neutral-300` checked `brand-200` | `brand-200` ring-2 | `error` border |

**Padding:** `px-4 py-3`
**Border radius:** `rounded-lg`
**Label:** `text-sm font-medium text-neutral-700 mb-1.5`
**Helper text:** `text-xs text-neutral-400 mt-1`
**Error message:** `text-xs text-error mt-1`

### 4.4 Navigation

- **Sticky navbar** — bg putih/transparan dengan blur backdrop
- **Desktop** — menu horizontal, logo di kiri, CTA button di kanan
- **Mobile** — hamburger menu, slide-in drawer dari kanan, full height
- **Active state:** underline atau dot indikator dengan `brand-200`
- **Smooth scroll** — untuk anchor link satu halaman
- **Z-index:** `z-50`

### 4.5 Section Patterns

| Section | Background | Padding Y |
|---------|-----------|-----------|
| Hero | `brand-50` atau putih | py-20 md:py-28 |
| Features/Grid | putih | py-16 md:py-20 |
| About/Content | `neutral-50` | py-16 md:py-20 |
| Testimonial | `brand-50` | py-16 md:py-20 |
| CTA | `brand-200` | py-12 md:py-16 |
| Contact | putih | py-16 md:py-20 |
| Footer | `brand-700` atau `neutral-900` | py-12 |

### 4.6 Footer

- Multi-column layout (4 kolom desktop, 2 kolom tablet, 1 kolom mobile)
- Brand description + social icons di kolom pertama
- Link groups (Perusahaan, Layanan, Dukungan, Legal)
- Copyright bar di bagian bawah dengan border-top tipis

---

## 5. Animation & Interaction

### 5.1 Principles

| Aspek | Value |
|-------|-------|
| Duration default | 200ms–300ms |
| Easing | `cubic-bezier(0.4, 0, 0.2, 1)` — ease-out |
| Easing (exit) | `cubic-bezier(0.4, 0, 1, 1)` — ease-in |
| Animasi prefered | `transform` & `opacity` (GPU accelerated) |
| Durasi scroll reveal | 600ms, delay per item 100ms |

### 5.2 Micro-interactions

- **Hover link:** `text-brand-200` atau subtle underline
- **Hover card:** translateY(-2px) + shadow increase
- **Button click:** scale(0.97) quick
- **Form focus:** ring muncul smooth
- **Page transition:** fade in 300ms
- **Scroll reveal:** fade-up dengan stagger children

### 5.3 Implementation

```tsx
// Framer Motion pattern
import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
};
```

---

## 6. SEO & Meta

- Setiap halaman wajib memiliki `generateMetadata()` dengan title, description, dan open graph
- Title format: `Nama Halaman | Nama Perusahaan`
- Canonical URL di setiap halaman
- Meta description 150–160 karakter
- Open Graph image 1200×630px
- Sitemap.xml untuk seluruh rute (termasuk locale)
- Favicon dalam format .ico + .svg

---

## 7. Internationalization (i18n)

| Key | Bahasa |
|-----|--------|
| Locales | `id`, `en` |
| Default | `id` |
| Routing | `/id/...` dan `/en/...` |
| Middleware | Negotiation berdasarkan `Accept-Language` |

**Struktur file:**
```
messages/
├── id.json    # Bahasa Indonesia
└── en.json    # English
```

### 7.1 Rute

| Halaman | Path ID | Path EN |
|---------|---------|---------|
| Beranda | `/id` | `/en` |
| Tentang Kami | `/id/about` | `/en/about` |
| Katalog | `/id/catalog` | `/en/catalog` |
| Kontak | `/id/contact` | `/en/contact` |

---

## 8. File & Folder Structure

```
src/
├── app/
│   ├── [locale]/
│   │   ├── page.tsx                     # Beranda
│   │   ├── layout.tsx                   # Root layout dengan NextIntlClientProvider
│   │   ├── not-found.tsx                # Halaman 404
│   │   ├── about/
│   │   │   └── page.tsx                 # Tentang Kami
│   │   ├── services/
│   │   │   └── page.tsx                 # Layanan
│   │   └── contact/
│   │       └── page.tsx                 # Kontak
│   └── api/
│       └── contact/
│           └── route.ts                 # Form handler
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── MobileNav.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── AboutPreview.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── Testimonials.tsx
│   │   ├── CTA.tsx
│   │   └── ContactForm.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Input.tsx
│       ├── SectionHeading.tsx
│       └── AnimatedSection.tsx
├── i18n/
│   └── request.ts                       # next-intl request config
├── lib/
│   └── utils.ts                         # Utility functions
messages/
├── id.json
└── en.json
```

---

## 9. Contact Form API

- **Method:** POST
- **Content-Type:** application/json
- **Body:** `{ name, email, phone, subject, message }`
- **Validation:** Server-side dengan Zod
- **Response success:** `{ success: true, message: "Pesan berhasil dikirim" }`
- **Response error:** `{ success: false, errors: [...] }`

---

## 10. Performance Targets

| Metrik | Target |
|--------|--------|
| Lighthouse Performance | ≥ 90 |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |
| Time to Interactive | < 3.0s |
| Image optimization | Next/Image dengan lazy loading |
| Bundle size | < 200KB (initial JS) |

---

*Dokumen ini adalah panduan utama untuk seluruh proses pengembangan visual. Setiap deviasi harus didiskusikan dan disetujui sebelum diimplementasikan.*
