# AGENTS.md

## Project Overview

This repository contains the website of an independent yoga teacher based in **Celerina, Upper Engadin, Switzerland**.

The website is primarily a professional online presence intended for:

- potential new clients,
- existing clients,
- people interested in yoga classes,
- people interested in retreats,
- visitors and residents of the Upper Engadin region.

The website should communicate trust, calmness, professionalism, personality, and a strong connection to the Upper Engadin.

This is **not** intended to become a web application.

The project should remain a lightweight, mostly static website.

---

## Working Brand

The current working brand is:

Corinne
Free in Flow

Treat this as a temporary text-based wordmark.

Do not create a graphical logo or permanently encode this naming into
architectural abstractions. It may change before launch.

---

# Core Principles

When making implementation decisions, prefer:

1. simplicity,
2. maintainability,
3. accessibility,
4. privacy,
5. performance,
6. semantic HTML,
7. progressive enhancement,
8. minimal client-side JavaScript.

Avoid adding complexity unless it solves a concrete problem.

Do not introduce abstractions, dependencies, frameworks, services, or architectural layers speculatively.

---

# Technology Stack

The intended stack is:

- Astro
- TypeScript
- Vanilla CSS
- pnpm
- Node.js 24 LTS

Do not introduce React, Vue, Svelte, Solid, Tailwind, Bootstrap, Sass, or similar technologies unless explicitly requested.

Astro components should be preferred for reusable UI.

Client-side JavaScript should only be used where actual browser-side interactivity requires it.

---

# Package Management

Use **pnpm exclusively**.

Do not use:

- npm
- yarn
- bun

The lockfile must remain committed:

```text
pnpm-lock.yaml
```

Do not modify dependencies without a concrete reason.

Before adding a dependency, determine whether the functionality can reasonably be implemented using:

- Astro,
- browser APIs,
- CSS,
- a small local utility.

A dependency should only be added when it provides clear value over implementing the required functionality locally.

---

# Node.js

The project targets:

```text
Node.js 24 LTS
```

The repository contains an `.nvmrc`.

Use:

```bash
nvm use
```

before development if necessary.

Do not change the Node major version without explicit discussion.

---

# Development Commands

Use the scripts defined in `package.json`.

Typical commands are:

```bash
pnpm dev
pnpm build
pnpm preview
```

Before considering significant changes complete, verify at minimum:

```bash
pnpm build
```

The production build must succeed without errors.

---

# Website Architecture

The website is a **multi-page website**, not a one-page site.

The primary content areas are:

- Home
- Yoga as a Path
- About
- Offerings
- Retreats
- Contact

The site is available in:

- German
- English

Both languages should use explicit URL prefixes.

Expected routing structure:

```text
/de/
/de/yoga-als-weg
/de/ueber-mich
/de/angebote
/de/retreats
/de/kontakt
/de/datenschutz

/en/
/en/yoga-as-a-path
/en/about
/en/offerings
/en/retreats
/en/contact
/en/privacy
```

The root route `/` should eventually redirect to the German version unless another behavior is explicitly decided.

Do not implement IP-based geolocation or automatic location detection.

Do not store language preferences in cookies unless explicitly requested.

---

# Internationalization

German is the default language.

English is a first-class translation, not an afterthought.

Do not implement translations through client-side DOM replacement.

Each language must have its own crawlable URL.

SEO metadata must support the multilingual structure, including appropriate:

- canonical URLs,
- `hreflang` references,
- page titles,
- meta descriptions.

Short interface strings may be stored centrally in `src/i18n/`.

Examples:

- navigation labels,
- accessibility labels,
- common buttons,
- generic interface text.

Long editorial content should not be stored in large TypeScript translation objects.

---

# Expected Source Structure

The project should generally evolve toward the following structure:

```text
src/
├── assets/
│   └── images/
│
├── components/
│   ├── common/
│   ├── layout/
│   ├── sections/
│   └── ui/
│
├── data/
│   └── retreats/
│
├── i18n/
│
├── layouts/
│   └── BaseLayout.astro
│
├── pages/
│   ├── de/
│   └── en/
│
├── styles/
│   ├── global.css
│   ├── tokens.css
│   ├── typography.css
│   └── utilities.css
│
└── content.config.ts
```

This is a guideline, not a requirement to create empty directories prematurely.

Only create directories when they are actually needed.

---

# Astro Conventions

Use Astro's file-based routing.

Files inside `src/pages/` should primarily compose reusable components rather than becoming large monolithic templates.

Prefer:

```astro
<BaseLayout>
  <Hero />
  <IntroSection />
  <OfferPreview />
</BaseLayout>
```

over pages containing hundreds of lines of duplicated markup.

However, do not create components solely to reduce line count.

A component should represent a meaningful reusable or conceptually independent piece of UI.

Avoid unnecessary component fragmentation.

---

# Layouts

The primary layout should be:

```text
src/layouts/BaseLayout.astro
```

It should eventually handle common document-level concerns such as:

- `<html lang>`
- `<head>`
- page title
- meta description
- canonical URL
- `hreflang`
- OpenGraph metadata
- favicon
- global navigation
- footer

Additional layouts should only be introduced if structurally necessary.

---

# CSS

Use modern **vanilla CSS**.

Prefer:

- CSS Custom Properties,
- CSS Grid,
- Flexbox,
- `clamp()`,
- `min()`,
- `max()`,
- `aspect-ratio`,
- container queries where appropriate,
- logical properties,
- modern media queries.

Do not introduce a CSS framework without explicit approval.

Do not introduce Sass merely for nesting or variables.

---

# Design Tokens

Global visual values should be represented as CSS custom properties.

Use a centralized design-token layer such as:

```text
src/styles/tokens.css
```

Tokens should eventually cover areas such as:

```text
colors
typography
spacing
border radii
content widths
page gutters
transitions
z-index layers
```

Avoid repeating arbitrary magic values across components.

At the same time, do not create hundreds of tokens for values that are only used once.

---

# Responsive Design

The website must provide a high-quality experience across:

- small smartphones,
- large smartphones,
- tablets,
- laptops,
- desktops,
- large displays.

Do not treat responsiveness as a desktop layout with a few corrective breakpoints.

Prefer intrinsically responsive components.

Use breakpoints where the layout actually requires a structural change rather than targeting particular device models.

Avoid fixed dimensions where fluid sizing is more appropriate.

Typography should generally scale fluidly where appropriate.

---

# Accessibility

Target **WCAG 2.2 AA** as the quality baseline.

Implementation should include:

- semantic HTML,
- meaningful heading hierarchy,
- keyboard accessibility,
- visible focus indicators,
- sufficient color contrast,
- descriptive link text,
- appropriate alternative text,
- accessible navigation,
- adequately sized touch targets,
- sensible landmark elements,
- reduced-motion support.

Respect:

```css
@media (prefers-reduced-motion: reduce);
```

Do not make important functionality dependent on hover.

Do not add ARIA where native semantic HTML already provides the correct semantics.

---

# Design Direction

The site should be:

- calm,
- modern,
- distinctive,
- editorial,
- spacious,
- natural,
- precise.

Avoid generic yoga and wellness aesthetics.

In particular, avoid clichés such as:

- lotus symbols,
- excessive beige,
- stereotypical spiritual iconography,
- generic stock wellness photography,
- unnecessary gradients,
- decorative visual noise.

The visual identity should draw inspiration from the **Upper Engadin**.

Potential references include:

- alpine landscapes,
- stone,
- larch and Swiss stone pine,
- Engadin lakes,
- muted natural colors,
- traditional Engadin architecture,
- abstract interpretations of Sgraffito ornamentation.

Regional references should remain subtle and contemporary rather than folkloric.

---

# Navigation

The desktop navigation is intended to become a lightly translucent, rounded, floating navigation element.

It should include the primary pages and a visually secondary language switcher.

The mobile navigation should be specifically designed for small screens rather than merely compressing the desktop navigation.

Do not sacrifice accessibility or text contrast for glassmorphism effects.

---

# Images

All primary photography will be provided by the website owner.

**Do not generate AI images for this project.**

Do not substitute missing final photography with AI-generated content.

Temporary development placeholders may be used when necessary but should clearly remain placeholders.

Primary photographic assets should generally live under:

```text
src/assets/images/
```

so that Astro can process and optimize them.

Use `public/` primarily for assets that should be copied unchanged, such as:

- favicon files,
- manifest files,
- robots.txt,
- selected font files.

Use Astro's image capabilities where appropriate.

Responsive image delivery should be considered from the beginning.

Avoid shipping unnecessarily large source images directly to browsers.

---

# Typography

The intended direction is a combination of:

- a distinctive editorial display typeface,
- a highly readable humanist or neutral sans-serif body typeface.

Fonts should preferably be self-hosted.

Do not load fonts from Google Fonts or another external font CDN at runtime.

Typography must remain readable and performant.

---

# Privacy

Privacy-by-design is a core project requirement.

The website should process as little personal data as reasonably possible.

The current project intentionally has:

- no contact form,
- no booking system,
- no newsletter,
- no user accounts,
- no analytics,
- no advertising trackers,
- no marketing pixels.

Do not add any such functionality without explicit approval.

---

# Cookies

The intended website should not require a cookie consent banner.

Therefore, do not introduce:

- tracking cookies,
- analytics cookies,
- marketing cookies,
- unnecessary persistent storage.

Do not use cookies merely to store minor UI preferences unless explicitly approved.

If new functionality would require consent or materially alter the privacy model, stop and raise the issue before implementation.

---

# Third-Party Services

Avoid third-party requests wherever reasonable.

In particular, do not automatically embed:

- Google Maps,
- Instagram feeds,
- Facebook widgets,
- YouTube videos,
- analytics scripts,
- Google Fonts,
- advertising networks.

The Instagram profile should be linked normally rather than embedded.

If maps are eventually required, prefer a privacy-conscious implementation or a simple external link unless explicitly decided otherwise.

---

# Contact

There is no contact form.

Contact should be provided through direct links to:

- email,
- telephone,
- Instagram.

Use appropriate URI schemes where useful:

```text
mailto:
tel:
```

Do not create backend endpoints for contact handling.

---

# Retreats

Retreats are expected to become repeatable structured content.

They may therefore use Astro Content Collections or another Astro-native structured-content mechanism.

Potential retreat metadata may include:

```text
title
slug
date
location
image
status
price
description
```

Do not prematurely build booking or payment functionality around retreats.

For the first version, retreats are informational content only.

---

# Privacy Policy

The website will contain:

```text
/de/datenschutz
/en/privacy
```

The privacy policy must describe the actual technical implementation.

Do not add boilerplate mentioning services that the website does not use.

If infrastructure or third-party services change, the privacy implications must be reviewed.

---

# Legal Scope

The website is operated in Switzerland.

Do not blindly apply German website boilerplate or German legal assumptions.

A dedicated traditional German-style `Impressum` page is currently not planned.

Relevant operator/contact information may still appear on the contact page and/or footer.

If the project later introduces:

- online booking,
- ecommerce,
- payment processing,
- newsletters,
- accounts,
- analytics,
- advertising,
- substantially expanded EU-targeted services,

the legal and privacy requirements must be reassessed before implementation.

Do not silently introduce features that alter the regulatory scope.

---

# SEO

SEO should be technically sound but not intrusive.

Implement or prepare for:

- meaningful page titles,
- meta descriptions,
- canonical URLs,
- `hreflang`,
- semantic heading structure,
- sitemap,
- robots.txt,
- OpenGraph metadata,
- structured data where genuinely appropriate,
- descriptive image alt text,
- clean URLs.

Avoid keyword stuffing.

Location-related content such as Celerina, Engadin, and Upper Engadin should appear naturally where contextually relevant.

---

# Performance

Performance is a first-class requirement.

Prefer static HTML and CSS whenever possible.

Avoid shipping JavaScript for content that does not require JavaScript.

Do not add large animation libraries for simple effects.

Avoid:

- unnecessary hydration,
- oversized JavaScript bundles,
- huge hero images,
- autoplay background videos,
- large icon libraries,
- multiple unnecessary font weights.

Images should be optimized and responsively delivered.

Prevent avoidable layout shifts by defining image dimensions or aspect ratios.

---

# Animation

Animation should be subtle and purposeful.

Acceptable examples include:

- restrained hover feedback,
- gentle navigation transitions,
- subtle reveal transitions,
- minor decorative movement.

Avoid:

- excessive scroll animations,
- parallax everywhere,
- animation that blocks interaction,
- animation that reduces readability,
- gratuitous WebGL,
- animation purely for spectacle.

Animations must respect reduced-motion preferences.

---

# JavaScript

The default assumption is that JavaScript is unnecessary until demonstrated otherwise.

Use CSS for purely visual behavior where appropriate.

Use native browser APIs before introducing libraries.

Avoid global client-side state.

Do not introduce application patterns such as:

```text
stores/
contexts/
providers/
services/
hooks/
```

unless the project genuinely evolves into needing them.

---

# TypeScript

Use TypeScript for project logic and structured data.

Keep strict type checking enabled.

Type:

- component props,
- navigation definitions,
- locale definitions,
- structured content,
- metadata.

Avoid `any` unless there is a documented reason.

Prefer straightforward types over elaborate generic abstractions.

---

# Code Quality

Prefer code that is:

- explicit,
- readable,
- boring in the good sense,
- easy to delete,
- easy to modify.

Avoid cleverness where a straightforward implementation exists.

Do not create abstraction layers for hypothetical future requirements.

Do not duplicate substantial markup or logic when a meaningful reusable abstraction exists.

Keep component interfaces small.

---

# Naming

Use clear semantic names.

Prefer:

```text
Navigation.astro
LanguageSwitch.astro
ImageTextSection.astro
RetreatPreview.astro
```

Avoid names such as:

```text
Component1.astro
NewHero.astro
HeroFinal.astro
Stuff.ts
Helpers2.ts
```

Use English names for source-code identifiers and filenames unless there is a strong content-specific reason not to.

German and English user-facing text naturally remain localized.

---

# Git

Do not commit generated or machine-local files such as:

```text
node_modules/
dist/
.astro/
.env
.DS_Store
```

Do commit:

```text
package.json
pnpm-lock.yaml
astro.config.mjs
tsconfig.json
.nvmrc
source files
public assets
project configuration
```

Keep commits logically scoped.

Avoid combining unrelated architectural changes, dependency changes, and large visual rewrites where practical.

---

# Environment Variables

Do not introduce environment variables unless there is an actual configuration requirement.

Secrets must never be committed.

If environment variables become necessary, document their names through:

```text
.env.example
```

without including sensitive values.

---

# Verification

After meaningful implementation work, check at minimum:

```bash
pnpm build
```

When relevant, also verify:

- responsive layouts,
- keyboard navigation,
- focus states,
- both locales,
- navigation between locales,
- missing images,
- broken links,
- browser console errors.

Do not claim a change is complete if the production build fails.

---

# Browser Support

Prioritize current mainstream browsers:

- Safari,
- Chrome,
- Firefox,
- Chromium-based browsers.

Safari is particularly important because a significant portion of mobile visitors may use iPhones.

Do not rely on experimental browser behavior without a reasonable fallback.

---

# Scope Discipline

The first release intentionally does **not** include:

- online booking,
- payments,
- user accounts,
- login,
- CMS,
- contact forms,
- newsletter subscription,
- analytics,
- marketing tracking,
- embedded social feeds,
- elaborate web-app functionality.

Do not implement these unless explicitly requested.

---

# Decision Rule

When multiple implementations are possible, choose the option that:

1. produces the least complexity,
2. sends the least JavaScript,
3. exposes the least user data,
4. requires the fewest dependencies,
5. remains accessible,
6. remains easy for another developer or coding agent to understand.

If a proposed change conflicts with these principles or materially changes the project architecture, raise it before implementing it.
