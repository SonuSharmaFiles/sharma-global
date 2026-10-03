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

Already done (October 2026):

- ✅ Business email: business.dipaksharma@gmail.com
- ✅ Phones: +977 9829951058 (Nepal), +1 (307) 200-2803 (USA)
- ✅ Registered address: 30 N Gould St, Ste R, Sheridan, WY 82801, USA
- ✅ Registration jurisdiction: Wyoming, United States
- ✅ Founder photo at `public/images/founder/dipak-sharma-founder.jpg`
- ✅ Contact form delivery via FormSubmit.co (`CONTACT_WEBHOOK_URL` in
  `.env.local`). **One-time step:** click the "Activate Form" link in
  the email FormSubmit sent to the business Gmail; until then
  submissions are not delivered.

Still to do — edit `src/config/company.ts`:

1. **`siteUrl`** — your real domain (required for SEO/sitemap/OG tags).
2. **Social links** in `company.social`.
3. **Policy dates** — confirm `policyEffectiveDate` / `policyLastUpdated`.
4. **Amazon storefront** — when your seller profile is live, set `url`
   in `src/config/marketplaces.ts`. The "View Store" button appears
   automatically.
5. **Lifestyle images** — add licensed photos to
   `public/images/lifestyle/` and `public/images/products/`, then set
   the `image` paths in `src/data/product-categories.ts`. Placeholder
   graphics are swapped automatically.
6. **Legal review** — the Terms still have one marked note (the exact
   governing-law clause needs a legal adviser's review).
7. **Founder copy approval** — the founder biography and the founder's
   message on `/founder` are drafts; Dipak Sharma should approve the
   wording before launch.
8. **When deploying:** add `CONTACT_WEBHOOK_URL` as an environment
   variable in Vercel too (it is only in `.env.local` locally).

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
