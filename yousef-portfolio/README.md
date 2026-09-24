# Yousef Ehab — Engineering Portfolio

A complete, responsive portfolio built with React, TypeScript, Tailwind CSS 4, and Next.js-compatible App Router pages. The Sites preview uses Vinext; the same application also has standard Next.js commands for independent hosting. All personal content is centralized in **`src/data/portfolioData.ts`**.

Includes five project case studies, automatic category filters, experience, skills, education, certificates, leadership, volunteering, downloadable CV, a persistent light/dark theme, and OpenGraph metadata. No database, account, or AI service is needed to maintain it.

## 1. Install and run on your Windows computer

Prerequisites: Node.js 22.13+ (your Node 24 installation is suitable), Git, VS Code, and pnpm.

1. Download and extract the source ZIP into a normal project folder, for example `D:\yousef-portfolio`.
2. Open that folder in VS Code: **File → Open Folder**.
3. Open **Terminal → New Terminal** and run:

```sh
npm install -g pnpm
pnpm install
pnpm run dev:next
```

4. Open the localhost address printed in the terminal, normally `http://localhost:3000`.
5. Edit a file and save it. The browser updates automatically. Stop with **Ctrl+C**.

Use `pnpm` consistently because the repository includes `pnpm-lock.yaml`. Do not commit `node_modules`.

```sh
pnpm run typecheck     # Catch TypeScript mistakes
pnpm run build:next    # Standard Next.js production build
pnpm run start:next    # Run that production build locally
pnpm run export       # Create a static website in out/
```

The default `dev` script supports the managed Sites environment. The default `build` script creates a portable static export. For your own computer and Vercel, use the explicit `:next` commands above.

## 2. Project organization

| Path                                   | Purpose                                                                  |
| -------------------------------------- | ------------------------------------------------------------------------ |
| `src/data/portfolioData.ts`            | All personal details, projects, skills, education, links, and activities |
| `src/components/`                      | Reusable navbar, project card, tags, and links                           |
| `src/sections/`                        | Home-page sections: hero, projects, background, contact                  |
| `src/hooks/useTheme.ts`                | Theme selection and local storage                                        |
| `app/page.tsx`                         | Composes the home page                                                   |
| `app/projects/[slug]/page.tsx`         | Generates every project detail page from data                            |
| `app/layout.tsx`                       | Shared layout and SEO metadata                                           |
| `app/globals.css`                      | Design tokens, styling, responsive rules, animations                     |
| `public/images/`                       | Profile, project, organization, certificate, and social images           |
| `public/cv/Yousef-Ehab-CV.pdf`         | Downloadable resume                                                      |
| `scripts/export-static.mjs`            | Cross-platform static export command                                     |
| `components/ui/`                       | Bundled reusable UI primitives; not needed for routine content edits     |
| `build/`, `.openai/`, other `scripts/` | Sites deployment support; leave alone for content edits                  |

## 3. Edit your information

Open `src/data/portfolioData.ts`. Change text inside quotes. Keep commas, brackets, and field names intact. VS Code will underline syntax mistakes.

- `personalInfo`: name, role, location, availability, headline, biography, interests, image, CV, rotating roles.
- `socialLinks`: GitHub, LinkedIn, email, and additional links.
- `education`: degree, university, dates, optional GPA, and coursework.
- `experience`: internships and training.
- `projects`: cards and detail pages.
- `skills`: grouped skill tags, without arbitrary percentages.
- `certificates`: training and credentials.
- `activities` and `volunteering`: team roles and event work.
- `achievements`: optional milestones; the section appears when populated.
- `contact`: contact email and invitation text.
- `seo`: page title, description, site URL, and social-preview image.

The email appears in both `contact.email` and the Email entry in `socialLinks`; update both when it changes. Optional unknown dates, GPA, credential links, and project links are intentionally empty. Do not publish unverified claims. Course and skill lists should reflect what you can discuss; remove or refine entries as needed.

## 4. Add a project

Copy an existing project object in `projects`, paste it before the array's closing `]`, and edit it. Every project needs a unique lowercase `slug` with hyphens. Its URL is `/projects/your-slug/`.

```ts
{
  slug: 'my-new-project',
  title: 'My New Project',
  description: 'One clear sentence explaining the value.',
  fullDescription: 'A fuller overview for the project page.',
  technologies: ['Python', 'TensorFlow'],
  image: '/images/projects/my-project.webp',
  github: 'https://github.com/YOUR-USERNAME/YOUR-REPOSITORY',
  demo: '',
  date: '2026',
  category: 'Machine Learning',
  featured: true,
  status: 'In development',
  problem: 'What problem motivated it?',
  solution: 'How does it address the problem?',
  features: ['First feature', 'Second feature'],
  architecture: 'Explain the main parts and their relationships.',
  challenges: 'What was difficult?',
  results: 'What did you achieve? State benchmark conditions.',
  learned: 'What did you learn?',
  screenshots: [
    { src: '/images/projects/my-project-screen.webp', alt: 'Project dashboard' },
  ],
  metrics: [{ label: 'Test accuracy', value: '85%' }],
},
```

`metrics` is optional. Use `screenshots: []` if you have none. Blank `github` and `demo` links are hidden; no fake links are created. Featured projects sort first. Filters are generated from actual categories, so adding `AI`, `Networking`, or any new category automatically adds a filter. There is no fixed project limit.

**Remove a project:** delete its entire object, including its trailing comma. Its card and generated route disappear on the next deployment. **Hide it temporarily:** move the object into a separate local note; there is no hidden/published flag.

The included diagram covers are conceptual placeholders, not claimed screenshots. Replace them with your real application screenshots when available.

## 5. Add experience

Add an object to `experience`:

```ts
{
  organization: 'Company name',
  role: 'Software Engineering Intern',
  date: 'Jul – Sep 2027',
  location: 'Cairo, Egypt',
  description: 'Describe what you actually contributed and learned.',
  skills: ['Python', 'Git'],
  certificate: '/images/certificates/internship.pdf',
},
```

An empty certificate string hides the certificate button. Training is presented as training, not an exam certification; RHCSA training does not imply passing EX200.

## 6. Add certificates

Add to `certificates`:

```ts
{
  name: 'Certificate title',
  organization: 'Issuing organization',
  date: 'Sep 2026',
  credential: 'https://issuer.example/verify/your-id',
  image: '/images/certificates/my-certificate.webp',
  skills: ['Linux', 'Networking'],
},
```

Use empty strings for missing image/credential fields. Certificate images show only when supplied. An award icon is the default; it does not fabricate a certificate image.

## 7. Change photos and project images

1. Put a profile image in `public/images/profile/yousef.webp`.
2. Set `personalInfo.profileImage` to `/images/profile/yousef.webp`.
3. Put project covers in `public/images/projects/` and update each project's `image` field.
4. Add real screenshots to that project's `screenshots` array.
5. Certificate scans go in `public/images/certificates/`.

Paths omit `public`. Filenames are case-sensitive after hosting. Use compressed WebP/JPEG images (roughly 1200px wide for project images), descriptive alt text for screenshots, and avoid multi-megabyte uploads. Supplied SVG covers work offline and have no external-image dependency.

## 8. Replace the CV

Replace **`public/cv/Yousef-Ehab-CV.pdf`** with your new PDF, keeping exactly the same filename. Both downloading and deployment will then use the new file. To rename it, also update `personalInfo.cv`.

## 9. Change colors and theme

Edit the variables at the top of **`app/globals.css`**:

```css
:root {
  --accent: #235df5;
  --bg: #fbfcfe;
  --ink: #142237;
}
```

The `:root[data-theme=dark]` block controls dark mode. Keep contrast readable in both modes. Visitors switch themes using the navbar button; selection is saved on their device. Default is light. Animations use lightweight CSS, with reduced-motion preferences respected; no animation library is required.

## 10. Add social links

Add an object to `socialLinks`, such as:

```ts
{ label: 'Research profile', url: 'https://example.com/profile', icon: 'link' },
```

Recognized icon values are `github`, `linkedin`, and `email`. Other values use the default link icon. Use complete `https://` URLs or `mailto:` links. Empty URLs are hidden.

## 11. Contact behavior

The email link opens the visitor's email application; GitHub and LinkedIn open your profiles. There is no pretend success message, form submission, or backend.

If you later want a form, add a component in `src/components/ContactForm.tsx` and embed it in `src/sections/Contact.tsx`. A hosted service such as Formspree can receive standard fields (`name`, `email`, `subject`, `message`). Configure your real service endpoint, handle errors and successful submissions honestly, and keep secret API keys out of client code. No form is required for the existing contact links to work.

## 12. Push to your GitHub account

Create an empty GitHub repository first, without generating a README. In the extracted project folder:

```sh
git init
git add .
git commit -m "Create engineering portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/yousef-portfolio.git
git push -u origin main
```

Replace the URL with your repository's real HTTPS URL. If you already cloned a repository, skip `git init` and `git remote add origin`; check `git remote -v` first. Sign in through Git's normal authentication prompt; never put access tokens in source files.

For each update:

```sh
pnpm run typecheck
pnpm run build:next
git add .
git commit -m "Update projects and experience"
git push
```

## 13. Deploy on Vercel

1. Push the repository to GitHub.
2. Import the repository in your Vercel account.
3. Select **Next.js** as the framework. The included `vercel.json` sets the build command to `pnpm run build:next` and output to `.next`.
4. Deploy. No environment variables or backend are required.
5. Put your final public origin, e.g. `https://your-domain.com`, into `seo.siteUrl` and redeploy.
6. Future pushes to the connected production branch trigger updates.

This conversation's hosted Sites version is separate from your own Vercel deployment; a GitHub push updates Vercel only once you connect that repository.

## 14. Deploy on Netlify

Connect the GitHub repository. The included `netlify.toml` uses `pnpm run export` and publishes `out`. Project pages are pre-generated, so direct links and refreshes work without a catch-all SPA rewrite. Future pushes rebuild the site. Set `seo.siteUrl` to your public domain.

## 15. GitHub Pages

The easiest setup is a **user site** repository named `YOUR-USERNAME.github.io`; this site uses root-relative assets and links.

1. Run `pnpm run export`.
2. Publish the contents of `out` to your Pages publishing branch (not the parent `out` folder).
3. Include an empty `.nojekyll` file at the published root, so `_next` assets are served.
4. Configure Pages to serve that branch from its root.
5. Re-export and publish `out` after updates.

For a project URL such as `username.github.io/portfolio/`, you must additionally configure a Next.js `basePath` and prefix all root-relative image, CV, navigation, and metadata paths. This repository intentionally documents the simpler root-domain setup; a subpath deployment is not preconfigured.

## 16. SEO and maintenance checklist

- Set `seo.siteUrl` after selecting your permanent public domain.
- Edit title and description in `portfolioData.ts`.
- Replace `public/images/social-preview.png` for social sharing (1200 × 630 recommended).
- Replace `public/favicon.svg` to change the browser icon.
- Before publishing, run typecheck and build, test project filtering, dark mode, CV download, project detail links, and a narrow mobile viewport.
- Keep claims, metrics, dates, and URLs accurate. Missing repository/demo/credential links remain blank intentionally.
- Data changes require a rebuild/deployment; this is source-maintained content, not a CMS.
- The original starter contains hosting support and optional UI components. You do not need to modify them to maintain your portfolio.

You own and can maintain all application source. Adding content requires no AI, subscription-based CMS, or redesign.
