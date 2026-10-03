# SHARMA GLOBAL LLC — Corporate Website

A production-ready corporate website for **SHARMA GLOBAL LLC**, an
e-commerce company focused on Home & Kitchen products sold through
online marketplaces.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS v4 +
Lucide icons**. Server components by default; client JavaScript is used
only where needed (mobile menu, contact form).

---

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Production build:

```bash
npm run build
npm start
```

> Note: don't run `npm run build` while `npm run dev` is running — stop
> the dev server first.

---

## Where everything lives

| What | File |
| --- | --- |
| **All company details** (name, email, addresses, dates, domain) | `src/config/company.ts` |
| Navigation links | `src/config/navigation.ts` |
| Marketplace links | `src/config/marketplaces.ts` |
| Product categories & future products | `src/data/product-categories.ts` |
| Design tokens (colors, fonts, radii) | `src/app/globals.css` |
| Contact form validation | `src/lib/validation.ts` |
| Contact form server handling | `src/app/contact/actions.ts` |

**Rule of thumb:** to change an email, link, or company detail, edit a
config file — never a page component.

---

## ✅ Owner checklist before launch

Everything below is currently a placeholder (`null`) and hidden from
the public site until you fill it in. Edit `src/config/company.ts`:

1. **`siteUrl`** — your real domain (required for SEO/sitemap/OG tags).
2. **`businessEmail`** — official verified email.
3. **`registrationJurisdiction`** — e.g. "Wyoming, United States".
4. **`registeredAddress`** — registered/business address (only if you
   want it public).
5. **`businessPhone` / `businessHours`** — only if they exist.
6. **Social links** in `company.social`.
7. **Policy dates** — confirm `policyEffectiveDate` / `policyLastUpdated`.

Then:

8. **Founder photo** — add the real photograph at
   `public/images/founder/dipak-sharma-founder.jpg`, update
   `founder.photoPath` and set `founder.photoAvailable: true`.
   (Strip EXIF/location metadata from the photo first.)
9. **Amazon storefront** — when your seller profile is live, set `url`
   in `src/config/marketplaces.ts`. The "View Store" button appears
   automatically.
10. **Lifestyle images** — add licensed photos to
    `public/images/lifestyle/` and `public/images/products/`, then set
    the `image` paths in `src/data/product-categories.ts`. Placeholder
    graphics are swapped automatically.
11. **Contact form** — copy `.env.example` to `.env.local` and set
    `CONTACT_WEBHOOK_URL` (Formspree/Web3Forms/your own endpoint).
    Until then the form politely tells visitors it is not active.
12. **Legal review** — the Privacy Policy, Terms, and Disclaimer
    contain clearly marked "to be confirmed" notes (jurisdiction,
    governing law). Have them reviewed once the jurisdiction is known.
13. **Founder copy approval** — the founder biography and the founder's
    message on `/founder` are drafts; Dipak Sharma should approve the
    wording before launch.

---

## Deploying (Vercel)

1. Push this folder to a GitHub repository.
2. Import the repo at https://vercel.com/new (defaults work as-is).
3. Add the `CONTACT_WEBHOOK_URL` environment variable in Vercel →
   Project → Settings → Environment Variables.
4. Add your custom domain in Vercel → Domains, and set `siteUrl` in
   `src/config/company.ts` to match. Redeploy.

### Google Search Console

1. Add your domain as a property in Search Console.
2. Choose the HTML-tag verification method and copy the token.
3. Paste it into `googleSiteVerification` in `src/config/company.ts`
   and redeploy.
4. Submit `https://your-domain.com/sitemap.xml` under "Sitemaps".

---

## What's intentionally NOT here

- **No shopping cart / checkout** — this is a corporate site; sales
  happen on marketplaces.
- **No analytics or tracking cookies** — the Cookie Policy reflects
  that honestly. If you add analytics later, update the Cookie Policy
  and Privacy Policy and add a consent banner first.
- **No invented facts** — no fake testimonials, statistics, addresses,
  or registration numbers anywhere.

## Known limitations

- Placeholder graphics stand in for lifestyle photography until real
  licensed images are added.
- Contact form rate limiting is in-memory (fine for a single serverless
  region; use a durable store if abuse ever becomes an issue).
- Unused Next.js scaffold icons remain in `public/` (`next.svg`,
  `vercel.svg`, etc.) — safe to delete whenever you like.
