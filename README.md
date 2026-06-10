# FAUNA Website

**Friends All United for Natchitoches Animals** — official website built with Next.js 15, Tailwind CSS, and deployed on Netlify.

---

## 🚀 Deploy to Netlify via GitHub

### 1. Create a GitHub Repository
```bash
git init
git add .
git commit -m "Initial FAUNA website build"
gh repo create fauna-website --public --push
```

### 2. Connect to Netlify
1. Go to [netlify.com](https://netlify.com) and log in
2. Click **Add new site → Import an existing project**
3. Choose **GitHub** and select your `fauna-website` repo
4. Build settings are auto-detected from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
5. Click **Deploy site**

### 3. Custom Domain (npfauna.org)
1. In Netlify → **Domain settings → Add custom domain**
2. Enter `npfauna.org`
3. Update your DNS records at your domain registrar to point to Netlify

---

## 🏗️ Local Development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## 📄 Pages
- `/` — Home
- `/programs` — Programs & Services
- `/adopt-foster` — Adopt or Foster
- `/events` — Events
- `/employment` — Employment & Volunteering
- `/capital-campaign` — Edwina & Sam Friedman Pet Adoption & Welfare Center
- `/donate` — Donate

## 🛠️ Tech Stack
- [Next.js 15](https://nextjs.org/) — App Router
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Netlify](https://netlify.com/) — hosting & CI/CD

---

*FAUNA is an all-volunteer 501(c)(3) nonprofit • Natchitoches, LA*
