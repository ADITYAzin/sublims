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

Berikut adalah revisi **Design System** yang telah disesuaikan agar sejalan dengan prinsip **Nomor 4 (Anti-Flat, Bento Grid, Glassmorphism, & Layered Depth)** tanpa kehilangan karakter korporat B2B yang profesional.

Bagian yang bertentangan (seperti pembatasan *shadow* yang terlalu flat, serta *border-radius* yang terlalu kaku) telah ditingkatkan ke standar visual yang lebih modern dan berdimensi.

---

# DESIGN SYSTEM REVISED (ANTI-FLAT & CORPORATE)

## 1. Spacing & Grid

* **Base unit:** 4px (Tailwind default)
* **Container max-width:** `max-w-7xl` (1280px)
* **Gutter:** `px-4` (mobile), `px-6` (tablet), `px-8` (desktop)
* **Section padding:** `py-16` (mobile), `py-20`–`py-24` (desktop)

**Breakpoints:**

| Breakpoint | Min width | Container |
| --- | --- | --- |
| `sm` | 640px | 640px |
| `md` | 768px | 768px |
| `lg` | 1024px | 1024px |
| `xl` | 1280px | 1280px |
| `2xl` | 1536px | 1280px |

---

## 2. UI/UX Principles — Modern, Deep & Professional

### 2.1 Core Philosophy

> **"Depth with Purpose."** Kejelasan informasi tetap utama, namun visual dikemas dengan estetika modern melalui permainan lapisan (*layering*), efek transparan, dan struktur grid yang kokoh untuk membangun impresi korporat premium.

### 2.2 Anti-Flat Style (Revisi 4.0)

| Prinsip | Penerapan |
| --- | --- |
| **Whitespace dominance** | Minimal 40% area kosong per viewport; memberikan ruang bernapas pada elemen logistik yang padat. |
| **Warna & Transparansi** | Maksimal 2–3 warna solid utama. Memanfaatkan efek *opacity* dan *backdrop blur* untuk elemen *overlay* premium. |
| **Layered Structure Layout** | Hierarki informasi dipertegas menggunakan elevasi komponen (*z-index* dan *shadow layering*) untuk memisahkan konten prioritas. |
| **Sophisticated Decoration** | Mengizinkan penggunaan efek *frosted glass* dan gradasi halus khusus pada komponen interaktif/header untuk menghindari kesan flat. |
| **Bento Grid Alignment** | Tata letak menggunakan sistem *grid* asimetris modern yang presisi, memberikan variasi visual yang dinamis namun tetap rapi. |
| **Organic Border Radius** | Menggunakan `rounded-xl` (12px) hingga `rounded-2xl` (16px) untuk area *card* dan kompartemen Bento Grid agar terasa modern dan tidak kaku. |

### 2.3 Professional Look & Depth

| Prinsip | Penerapan |
| --- | --- |
| **Refined spacing** | Padding minimum 24px pada *card* skala besar; menciptakan impresi eksklusif dan bersih. |
| **Layered Depth Shadows** | Menggunakan bayangan bertingkat (*multi-layered shadow*) yang halus dan menyebar luas. Menghindari *shadow* hitam pekat atau flat kasar. |
| **Polished typography** | Line-height 1.5–1.75 untuk body text, 1.1–1.25 untuk heading; Plus Jakarta Sans sebagai fondasi utama. |
| **High-quality imagery** | Foto produk dengan sudut perspektif/diagonal beresolusi tinggi dengan pencahayaan natural gudang fisik. |
| **Fluid Micro-interactions** | Respons transisi interaktif menggunakan durasi `300ms` dengan *easing* melandai untuk kesan gerakan yang berkelas. |
| **Business-appropriate tone** | Animasi terbatas pada tipe *fade-up*, *staggered reveal*, dan *subtle scale* (tidak ada efek *playful* melompat). |

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
      borderRadius: {
        'bento-sm': '12px',
        'bento-lg': '16px',
      },
      boxShadow: {
        // Multi-layered shadow untuk efek anti-flat yang korporat & halus
        'layered-sm': '0 2px 4px rgba(36, 73, 80, 0.02), 0 4px 12px rgba(36, 73, 80, 0.04)',
        'layered-md': '0 4px 8px rgba(36, 73, 80, 0.04), 0 12px 24px rgba(36, 73, 80, 0.06)',
        'layered-lg': '0 20px 40px rgba(36, 73, 80, 0.08), 0 1px 3px rgba(0, 0, 0, 0.02)',
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
    
    /* Update Radius sesuai Prinsip Baru */
    --radius-sm: 6px;
    --radius-md: 12px;
    --radius-lg: 16px;
    
    --transition-smooth: 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    @apply text-neutral-600 antialiased bg-slate-50/50;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply text-neutral-800 font-bold leading-tight tracking-tight;
  }
}

/* Utilitas khusus untuk Glassmorphism Premium */
@layer utilities {
  .glass-header {
    background: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(224, 237, 239, 0.6);
  }
  
  .glass-card {
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }
}

```

---

## 4. Component Design Guidelines

### 4.1 Button System

| Variant | Background | Text | Border | Hover / Interaction State |
| --- | --- | --- | --- | --- |
| **Primary** | `brand-500` | `white` | none | bg `brand-600`, scale-98, shadow-layered-sm |
| **Outline** | transparent | `brand-600` | `brand-200` 1.5px | bg `brand-50`, border `brand-300` |
| **Ghost** | transparent | `neutral-600` | none | bg `neutral-100/80`, `backdrop-blur` |

**Rules:**

* Border radius: `rounded-xl` (12px) untuk menyelaraskan dengan komponen Bento Grid.
* Transition: `transition-all duration-300 cubic-bezier(0.4, 0, 0.2, 1)`.

### 4.2 Card Component (Bento & Anti-Flat Pattern)

Mengimplementasikan *layered shadow* dan *smooth lift-up animation* agar tidak flat saat berinteraksi.

```tsx
// Anti-flat elevated card pattern
<div className="rounded-bento-lg bg-white p-6 shadow-layered-sm border border-neutral-100/80 
                transition-all duration-300 ease-[0.4,0,0.2,1] 
                hover:-translate-y-1.5 hover:shadow-layered-md hover:border-brand-200/50">
  {/* Konten Utama */}
</div>

```

### 4.3 Form Penawaran (RFQ) & Input Elements

| Element | Background | Border | Focus State |
| --- | --- | --- | --- |
| Input / Textarea | `white` | `neutral-200` | `border-brand-400` + `ring-4` `ring-brand-100/50` |
| Select Dropdown | `white` | `neutral-200` | `border-brand-400` + `ring-4` `ring-brand-100/50` |

**Rules:**

* Border radius: `rounded-xl` (12px).
* Sisi visual form menggunakan *subtle inner shadow* tipis agar terlihat rapi dan presisi di dalam layout *split-screen*.

### 4.4 Navigation (Glassmorphism Spec)

* **Header Component:** Menggunakan *class* `.glass-header` (`backdrop-filter` aktif). Efek tembus pandang bertekstur buram ini mencegah elemen menu terlihat datar sekaligus menjaga teks navigasi tetap terbaca jelas.
* **Z-index:** `z-50` mutlak untuk menjaga posisi layer selalu berada di lapisan teratas konversi.

---

## 5. Animation & Interaction (GPU Accelerated)

* **Hover Link & Menu:** Transisi warna mengalir halus ke `text-brand-500` disertai penambahan garis bawah mikro yang melebar dari tengah (*expanding underline*).
* **Modal Box Pop-Up:** Menggunakan kombinasi efek *scale up* ringan (dari `95%` ke `100%`) dan *fade-in* simultan selama `300ms` untuk memberikan ilusi kedalaman ruang spasial saat dibuka.

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
