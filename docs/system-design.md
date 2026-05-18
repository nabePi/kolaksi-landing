# Kolaksi Design System

> Dokumen referensi untuk menjaga konsistensi visual antara landing page dan dashboard.
> Versi: 1.2 | Terakhir diperbarui: 2026-05-15

---

## 1. Brand Identity

### Nama & Tagline
- **Nama**: Kolaksi
- **Tagline**: CRM WhatsApp Official untuk UMKM
- **Positioning**: Platform CRM WhatsApp yang membantu UMKM meningkatkan konversi penjualan dan manajemen tim CS tanpa takut blokir.

### Supported Channels
| Channel | Status | Badge Color |
|---------|--------|-------------|
| WhatsApp | Live | emerald |
| Instagram DM | Coming Soon | amber |
| Facebook Messenger | Coming Soon | amber |

*Instagram DM dan Facebook Messenger ditampilkan sebagai "Segera Hadir" di landing page untuk membangun awareness dan menunjukkan roadmap produk.*

### Tone of Voice
- Bahasa Indonesia (casual, friendly)
- Direct, no fluff — fokus pada benefit bisnis
- Menggunakan "kamu" (bukan "Anda")
- Problem-solution oriented

### Logo
- SVG: `/public/favicon.svg`
- Rounded square dengan huruf "K" putih di atas background biru (`#2563EB`)
- Corner radius: 22% (rounded-xl)

---

## 2. Color System

### Brand Palette (Primary)

| Token | Hex | Usage |
|-------|-----|-------|
| `brand-50` | `#eff6ff` | Background highlight, badge bg |
| `brand-100` | `#dbeafe` | Section badges, subtle fills |
| `brand-200` | `#bfdbfe` | Decorative blobs, hover bg |
| `brand-300` | `#93c5fd` | Gradients |
| `brand-400` | `#60a5fa` | Gradients, avatar gradients |
| `brand-500` | `#3b82f6` | Icon accents, secondary highlights |
| `brand-600` | `#2563eb` | **Primary CTA**, links, logo bg, nav active |
| `brand-700` | `#1d4ed8` | CTA hover state |
| `brand-800` | `#1e40af` | Dark accents |
| `brand-900` | `#1e3a8a` | Dark sections (CTA bg), footer bg |

### Accent Color

| Token | Hex | Usage |
|-------|-----|-------|
| `accent-500` | `#0ea5e9` | Gradient pairings with brand |

### Neutral Palette (Slate)

| Token | Hex | Usage |
|-------|-----|-------|
| `slate-50` | `#f8fafc` | Page background |
| `slate-100` | `#f1f5f9` | Card backgrounds, borders |
| `slate-200` | `#e2e8f0` | Borders, dividers |
| `slate-300` | `#cbd5e1` | Disabled states |
| `slate-400` | `#94a3b8` | Muted text, placeholders |
| `slate-500` | `#64748b` | Secondary text |
| `slate-600` | `#475569` | Body text |
| `slate-700` | `#334155` | Strong text |
| `slate-800` | `#1e293b` | Headings, dark UI elements |
| `slate-900` | `#0f172a` | Primary headings |

### Semantic Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Emerald | `#10b981` | Success states, checkmarks, online indicators |
| Red | `#ef4444` | Error states, alerts, banned notifications |
| Orange | `#f97316` | Warnings, CS ghost indicators |
| Amber | `#f59e0b` | Star ratings |
| WhatsApp Green | `#25D366` | WhatsApp icon, WhatsApp CTA borders |
| Pink | `#ec4899` | Instagram icon, Instagram-related elements |
| Purple | `#a855f7` | Instagram gradient pairings |
| Blue | `#3b82f6` | Facebook Messenger icon, Messenger-related elements |
| Sky | `#0ea5e9` | Messenger gradient pairings |

### Color Usage Rules

1. **Primary actions**: `brand-600` background, white text
2. **Secondary actions**: White/slate bg, `slate-700` text, `slate-200` border
3. **Success/positive**: `emerald-500` or `emerald-400`
4. **Danger/negative**: `red-500` or `red-400`
5. **Gradients**: `brand-600` → `accent-500` for text highlights
6. **Dark sections**: `brand-900` background with white text

---

## 3. Typography

### Font Family
- **Primary**: `Plus Jakarta Sans` (Google Fonts)
- **Fallback**: `ui-sans-serif`, `system-ui`, `sans-serif`
- **Weights**: 400, 500, 600, 700, 800

### Type Scale

| Style | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|------|--------|-------------|----------------|-------|
| Display | 3rem / 4.5rem | 800 | tight | -0.025em | Hero H1 |
| H2 | 1.875rem / 2.25rem | 700 | tight | -0.025em | Section headings |
| H3 | 1.5rem / 1.875rem | 700 | tight | normal | Card headings |
| H4 | 1.25rem | 700 | normal | normal | Sub-headings |
| Body Large | 1.125rem / 1.25rem | 400 / 500 | relaxed | normal | Lead paragraphs |
| Body | 0.875rem / 1rem | 400 / 500 | relaxed | normal | Card text, descriptions |
| Small | 0.75rem / 0.875rem | 500 | normal | wide | Badges, labels, captions |

### Text Color Hierarchy
- **Headings**: `slate-900`
- **Body**: `slate-600`
- **Muted/secondary**: `slate-500`
- **Links**: `brand-600` (hover: `brand-700`)
- **White on dark**: `white` or `brand-100`

---

## 4. Spacing & Layout

### Container
- **Max width**: `80rem` (1280px) — `max-w-7xl`
- **Padding**: `1rem` mobile, `1.5rem` tablet, `2rem` desktop

### Grid
- **Default**: Single column (mobile-first)
- **Tablet (md)**: 2 columns
- **Desktop (lg)**: 3 columns (features, pricing), 4 columns (footer)
- **Gap**: `1.5rem` (24px) standard

### Section Spacing
- **Standard section**: `py-24` (96px vertical)
- **Compact section**: `py-16` (64px vertical)
- **Hero**: `pt-32 pb-20` (top padding accounts for fixed nav)

### Border Radius Scale
- `rounded-lg`: 0.5rem (8px) — buttons, small elements
- `rounded-xl`: 0.75rem (12px) — cards, CTAs
- `rounded-2xl`: 1rem (16px) — feature cards, pricing cards
- `rounded-full`: pill shape — primary CTAs, badges

---

## 5. Components

### Buttons

#### Primary Button
```
- Background: brand-600
- Text: white, font-bold
- Padding: px-8 py-4 (large), px-5 py-2 (small)
- Radius: rounded-full (pill)
- Shadow: shadow-lg shadow-brand-600/20
- Hover: bg-brand-700, shadow increase, -translate-y-0.5
- Icon: left side, gap-2
```

#### Secondary Button
```
- Background: white / transparent
- Border: border-slate-200
- Text: slate-700, font-bold
- Padding: same as primary
- Radius: rounded-full
- Hover: border-slate-300, bg-slate-50
```

#### WhatsApp Contact Button
```
- Background: white / transparent
- Border: border-emerald-200
- Text: emerald-700, font-semibold
- Icon: WhatsAppIcon (green)
- Hover: bg-emerald-50, border-emerald-300
```

### Cards

#### Feature Card
```
- Background: white
- Border: border-slate-100
- Radius: rounded-2xl
- Padding: p-6 (24px)
- Shadow: shadow-sm (default), shadow-lg (hover)
- Hover: -translate-y-1, shadow increase
- Icon container: 40x40px, bg-brand-50, text-brand-600
- Icon hover: bg-brand-600, text-white
```

#### Testimonial Card
```
- Background: white
- Border: border-slate-100
- Radius: rounded-2xl
- Padding: p-8 (32px)
- Shadow: shadow-sm (default), shadow-lg (hover)
- Stars: amber-400, 5 stars
- Avatar: 40px circle, gradient bg brand-400 → indigo-500
```

#### Pricing Card
```
- Background: white
- Border: border-slate-100 (default), border-brand-500 (featured)
- Radius: rounded-2xl
- Padding: p-8 (32px)
- Featured shadow: shadow-xl shadow-brand-900/10
- Badge: "Paling Populer" — absolute positioned, brand-600 bg
```

### Badges / Labels

#### Section Badge
```
- Background: brand-100
- Text: brand-700, uppercase, tracking-wide, font-bold
- Text size: text-xs
- Radius: rounded-full
- Padding: px-3 py-1
```

#### Tag Badge (WhatsApp official, etc.)
```
- Background: slate-800
- Text: slate-300, font-medium
- Radius: rounded-full
- Padding: px-4 py-2
- Icon: colored icon left side
```

#### Coming Soon Card (Feature Preview)
```
- Background: gradient (channel-specific)
  - Instagram: from pink-50 to purple-50
  - Messenger: from blue-50 to sky-50
- Border: channel-specific (border-pink-100 or border-blue-100)
- Radius: rounded-2xl
- Padding: p-6 (24px)
- Shadow: shadow-sm (default), shadow-lg (hover)
- Badge: absolute top-3 right-3, amber-700 text on amber-100 bg, "Segera Hadir"
- Icon container: 40x40px, channel-specific bg and text
  - Instagram: bg-pink-100, text-pink-600
  - Messenger: bg-blue-100, text-blue-600
- Text: slate-600 description
- Purpose: preview upcoming features to build awareness
```

### Navigation

#### Desktop Navbar
```
- Position: fixed, w-full, z-50
- Background: white/80 + backdrop-blur-md
- Border: border-b border-slate-100
- Height: h-16 (64px)
- Links: text-sm, slate-600, hover:text-brand-600
```

#### Mobile Menu
```
- Background: white
- Border: border-b border-slate-100
- Shadow: shadow-lg
- Links: text-base, py-6, space-y-4
- CTA buttons: full width, stacked, pt-4 border-t
```

---

## 6. Icons

### Icon Library
- **Lucide React** (`lucide-react`)
- **Size**: 16px (badges), 18px (buttons), 20px (CTAs), 28px (feature highlights)

### WhatsApp Icon
- Custom SVG component
- `viewBox="0 0 24 24"`, `fill="currentColor"`
- Default color: `text-emerald-500`
- Sizes: 16px (inline), 18px (buttons), 20px (CTAs)

### Instagram Icon
- Custom SVG component (provided path)
- `viewBox="0 0 24 24"`, `fill="currentColor"`
- Default color: `text-pink-500`
- Sizes: 16px (inline), 20px (feature cards)

### Messenger Icon
- Custom SVG component (provided path)
- `viewBox="0 0 24 24"`, `fill="currentColor"`
- Default color: `text-blue-500`
- Sizes: 16px (inline), 20px (feature cards)

### Icon Color Rules
- **Default**: `text-slate-600` or `text-brand-600`
- **Success**: `text-emerald-500`
- **Warning**: `text-amber-400` (stars)
- **Feature hover**: icon container flips to `bg-brand-600` + `text-white`

---

## 7. Animation & Motion

### Page Load
- Hero elements: no entrance animation (static)
- Focus on immediate content visibility

### Scroll Effects
- `scroll-behavior: smooth` on html

### Hover Effects
- **Cards**: `hover:-translate-y-1 hover:shadow-lg`, duration 300ms
- **Buttons**: `hover:-translate-y-0.5`, shadow increase
- **Icons**: container color flip (brand-50 → brand-600)
- **Links**: color transition to brand-600

### Background Effects
- **Blob animation**: `animate-blob`, 7s infinite, scale + translate
- **Delay variants**: `animation-delay-2000`, `animation-delay-4000`
- **Pattern overlay**: cubes pattern at 10% opacity on dark sections

### Transition Defaults
```css
transition-all duration-300  /* cards, general */
transition-colors           /* links, buttons */
transition-transform duration-500  /* dashboard mockup */
```

---

## 8. Patterns & Conventions

### Section Structure
Every section follows this pattern:
```
<section className="py-24 bg-white|bg-slate-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header: badge + h2 + description */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <div className="badge">Label</div>
      <h2>Heading</h2>
      <p>Description</p>
    </div>
    {/* Content grid */}
    <div className="grid ... gap-6">
      {/* Cards */}
    </div>
  </div>
</section>
```

### Background Alternation
- Sections alternate: `bg-white` → `bg-slate-50` → `bg-white`
- Dark CTA section: `bg-brand-900`

### Z-Index Hierarchy
- Background blobs: `-z-10`
- Content: default
- Navbar: `z-50`
- Mobile sticky CTA: `z-50`
- Modal/mobile menu: `absolute` within nav

---

## 9. Responsive Breakpoints

| Name | Width | Tailwind Prefix |
|------|-------|-----------------|
| Mobile | < 768px | default (no prefix) |
| Tablet | >= 768px | `md:` |
| Desktop | >= 1024px | `lg:` |
| Wide | >= 1280px | `xl:` |

### Responsive Patterns
- **Mobile sticky CTA**: `md:hidden` (hidden on desktop)
- **Desktop nav**: `hidden md:flex` (hidden on mobile)
- **Grid columns**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- **Hero layout**: stacked mobile, `lg:grid-cols-2` on desktop
- **Button widths**: `w-full sm:w-auto`

---

## 10. Dashboard Application Guidelines

When applying this system to the Kolaksi dashboard:

### Sidebar
- Background: `slate-900` (same as dashboard mockup)
- Active item: `bg-brand-600` or `bg-slate-800`
- Icon color: `text-slate-400`, active: `text-white`
- Width: `w-16` (icon-only) or expanded

### Main Content Area
- Background: `slate-50` or `white`
- Cards: same `bg-white border-slate-100 rounded-2xl shadow-sm`

### Chat Interface
- Incoming: `bg-white border-slate-100 rounded-2xl rounded-tl-none`
- Outgoing: `bg-brand-600 text-white rounded-2xl rounded-tr-none`
- Online indicator: `bg-green-500`
- Timestamp: `text-slate-400` or `text-brand-200`

### Tables / Lists
- Header: `bg-slate-50/50 border-b border-slate-100`
- Row hover: `hover:bg-slate-50`
- Active row: `bg-brand-50 border-l-2 border-brand-500`
- Tags: small badges with contextual colors

### Forms / Inputs
- Background: `bg-slate-50`
- Border: `border-slate-200`
- Focus: `focus:ring-2 focus:ring-brand-600`
- Placeholder: `text-slate-400`

### Status Indicators
- **Online**: green dot + "Online" text
- **Hot lead**: `bg-yellow-100 text-yellow-700`
- **Unreplied**: `bg-red-100 text-red-600`
- **Closed**: `bg-emerald-100 text-emerald-700`

### Multi-Channel Inbox (Future: Instagram DM & FB Messenger)
When additional channels launch, apply these patterns:
- **WhatsApp messages**: brand-600 outgoing bubbles, emerald icons
- **Instagram DM**: pink-500 outgoing bubbles, pink icons
- **Facebook Messenger**: blue-500 outgoing bubbles, blue icons
- **Unified inbox**: channel indicator badge on each message
  - WhatsApp = emerald
  - Instagram = pink
  - Messenger = blue
- **Channel filter**: tabs or dropdown to filter by source channel

---

## 11. Asset References

### Images
| File | Location | Usage |
|------|----------|-------|
| fashion.jpg | `/images/fashion.jpg` | Use Cases card |
| wedding.jpg | `/images/wedding.jpg` | Use Cases card |
| clinic.jpg | `/images/clinic.jpg` | Use Cases card |
| frozen-food.jpg | `/images/frozen-food.jpg` | Use Cases card |
| teknostore.jpg | `/images/teknostore.jpg` | Use Cases card |

### SVG
| File | Location | Usage |
|------|----------|-------|
| favicon.svg | `/favicon.svg` | Browser tab icon |

### External Patterns
- Cubes pattern: `https://www.transparenttextures.com/patterns/cubes.png` (dark CTA bg overlay)

---

## 12. Do's and Don'ts

### Do
- Use `slate` for all neutral UI (never gray)
- Use `brand-600` for primary actions only
- Maintain section background alternation
- Use `Plus Jakarta Sans` for all text
- Keep border radius consistent within components
- Use `shadow-sm` → `shadow-lg` hover progression

### Don't
- Introduce new accent colors beyond brand + emerald + amber
- Use black (`#000`) — use `slate-900` instead
- Mix `rounded-lg` and `rounded-xl` within the same card
- Use borders darker than `slate-200` on light backgrounds
- Add animations that delay content visibility

---

*Dokumen ini akan diperbarui seiring evolusi design system.*
