# Prashanth Kumar Reddy · Portfolio

Personal developer portfolio: https://prashanth-reddy-portfolio.netlify.app/

Built with **React 19 + TypeScript + Vite + Tailwind CSS v4**, deployed on **Netlify**.

## Scripts

| Command               | What it does                                          |
| --------------------- | ----------------------------------------------------- |
| `npm run dev`         | Start the dev server                                  |
| `npm run build`       | Type-check and build to `dist/`                       |
| `npm run preview`     | Serve the production build locally                    |
| `npm test`            | Run the test suite (Vitest + Testing Library)         |
| `npm run check:links` | Check every external URL in `src/data` and `index.html` |

## Updating content

All content lives in `src/data/`. Components only render it.

- `profile.ts`: name, title, intro, about, contact details, resume path, nav
- `experience.ts`: companies, roles, dates, responsibilities, stack
- `skills.ts`: skill categories and icons
- `projects.ts`: professional projects, personal projects (links, features, stack, screenshots)
- `education.ts`: education and achievements

The resume (`Prashanth_Kumar_Reddy_Resume_Final.pdf`) is the source of truth. Only add what the resume supports.

**Resume:** replace `public/Prashanth_Kumar_Reddy_Resume.pdf`, keeping the same file name.

**Project screenshots:** add 480px and 960px wide WebP images (16:10) to `src/assets/projects/` and import them in `projects.ts`.

## Structure

```
src/
  components/
    layout/      Navbar, Footer
    sections/    Hero, About, Experience, Skills, Projects, Education, Contact
    projects/    ProjectCard
    contact/     ContactForm (EmailJS)
    ui/          Section, CallToAction, Reveal, Chip, SocialLinks
  data/          all portfolio content (see above)
  hooks/         useReveal, useActiveSection
  config/        emailjs.ts
  test/          Vitest tests
public/          resume PDF, favicon, OG image, sitemap, robots, 404 page
netlify.toml     build settings, headers, redirects
```

## Deployment (Netlify)

`netlify.toml` sets the build command (`npm run build`), the publish directory (`dist`) and Node 22. The contact form uses EmailJS. The IDs default to the existing account. You can optionally override them with `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID` and `VITE_EMAILJS_PUBLIC_KEY` in Netlify environment variables.
