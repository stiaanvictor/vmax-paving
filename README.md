# Vmax Paving — Website

A polished, single-page marketing site for Vmax Paving (Cape Town). Built with
**Next.js 14 (App Router)**, **Tailwind CSS**, and **Framer Motion**.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

## Editing content (no code needed)

Almost everything is in **`lib/site.js`**:

| What | Where |
|------|-------|
| Phone numbers | `SITE.phones` |
| WhatsApp number (quote form) | `SITE.whatsapp` (international, no `+` or spaces) |
| Facebook link | `SITE.facebook` |
| Service area / years | `SITE.area`, `SITE.yearsExperience` |
| Services list & images | `SERVICES` |
| Gallery images | `GALLERY` |
| Process steps | `PROCESS` |
| "Why us" points | `WHY` |

### Images
All photos are **placeholders** (Unsplash). Replace the `img` URLs in
`lib/site.js` (and the two hero/why images in `components/Hero.jsx` /
`components/WhyUs.jsx`) with your own. If an image ever fails to load, a tasteful
stone-gradient placeholder shows instead — nothing breaks.

### Logo
When your logo is ready, drop it into `components/Header.jsx` and
`components/Footer.jsx` (currently a simple "V" mark + wordmark).

## How the quote form works
The form **does not email**. On submit it opens **WhatsApp** with a pre-filled
message to `SITE.whatsapp`, ready for the customer to send. Logic lives in
`buildWhatsAppLink()` in `lib/site.js`.

## Sections
Header · Hero · Services · Why Vmax · Our Work (gallery) · Process · Quote form · Footer
