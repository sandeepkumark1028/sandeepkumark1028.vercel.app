# Sandeep Kumar K · Embedded Engineer Portfolio

Personal portfolio of **Sandeep Kumar K**, an Embedded Engineer working on firmware, board bring-up, BLE Audio and Auracast.
It is a hand-written static website with no framework, no build step and no dependencies to install.

**Live site:** https://sandeepkportfolio.vercel.app

---

## Table of contents

1. [What is on the site](#what-is-on-the-site)
2. [Tech stack](#tech-stack)
3. [Repository structure](#repository-structure)
4. [Run it locally](#run-it-locally)
5. [How to edit content](#how-to-edit-content)
6. [Apps Script backend](#apps-script-backend)
7. [Contact form](#contact-form)
8. [Deployment](#deployment)
9. [Resume](#resume)
10. [Browser support and accessibility](#browser-support-and-accessibility)
11. [Contact](#contact)

---

## What is on the site

The home page (`index.html`) is a single scrolling page with these sections:

| Section | What it shows |
| --- | --- |
| **Home** | Name, role, a circuit-board themed hero, **Download Resume** and **Contact** buttons, and email, LinkedIn and GitHub icons |
| **About** | Short bio, photo and a summary of focus areas |
| **Experience** | Timeline of roles: OpenEcore (formerly Kruthak Technology), Factana Computing and Pi Square Technologies |
| **Projects** | Auto-cycling project viewer with a card for each project and a link to its detail page |
| **Skills** | Grouped skills with logos: languages, microcontrollers, RTOS and SDKs, protocols, tools, debugging |
| **Contact** | A standard contact form, plus copyable email and links to LinkedIn and GitHub |

### Project detail pages (`projects/`)

Each project has its own page with an overview, how it works, my contribution, key features and technology.

| Page | Project |
| --- | --- |
| `auracast-devices.html` | Auracast Transmitter, Receiver and Assistant Devices (BLE Audio, LC3, I2S/TDM) |
| `skyamour.html` | SkyAmour Connect, an Android app that enables Auracast on phones without native support |
| `cofro.html` | COFRO, a Semi-Automated Robotics coffee bean plucking machine |
| `apm-ocr-dwk.html` | APM, OCR and DWK commercial device lines at Factana |
| `alcohol-drowsiness-detection.html` | Alcohol and Drowsiness Detection System at Pi Square Technologies |
| `smart-gardener.html` | Smart Gardener, an autonomous lawn-cutting robot (final-year project) |

Project pages share `projects/project.css` and `projects/project.js`.

### Highlights

- Dark, amber-accented PCB and circuit design with animated reveals
- Right-aligned navigation that hides on scroll down and returns on scroll up
- "On this page" table of contents on project pages that tracks your position
- Works on phones, tablets and desktop
- Respects the `prefers-reduced-motion` setting

---

## Tech stack

- **HTML, CSS and vanilla JavaScript.** One self-contained file per page, with styles and scripts inline in `index.html`.
- **Fonts:** Space Grotesk, IBM Plex Sans and JetBrains Mono from Google Fonts.
- **Hosting:** Vercel (primary) and GitHub Pages.
- **Backend for the contact form:** a Google Apps Script web app that sends the emails.

---

## Repository structure

```
.
├── index.html                  Main one-page site (styles and scripts inline)
├── contact.js                  Shared send function for the contact form
├── photo.jpg                   Profile photo used in the About section
├── Sandeep_Kumar_K_Resume.pdf  Resume served by the Download Resume button
├── logos/                      Company and college logos (Factana, MVJ, OpenEcore, Pi Square, ...)
├── projects/
│   ├── project.css             Shared styles for all project pages
│   ├── project.js              Shared behaviour (table of contents, reveal animations)
│   ├── *.html                  One detail page per project
│   └── *.jpg / *.svg           Project images and the SkyAmour icon
├── .gitignore
└── README.md
```

Files that are intentionally **not** committed:

- `site.html` is listed in `.gitignore`. It is the same page without the `<html>` and `<head>` wrapper, used to publish a copy as a claude.ai artifact.
- Draft design folders (`concepts/`, `gallery200/`, `styles/`, `themes/`) are untracked experiments and are not part of the live site.

---

## Run it locally

No install is needed. Any static file server works.

```bash
git clone https://github.com/sandeepkumark1028/sandeepkumark1028.vercel.app.git
cd sandeepkumark1028.vercel.app

# pick one
python3 -m http.server 8000
npx serve .
```

Open http://localhost:8000.

You can also open `index.html` directly in a browser. A local server is better, because some browsers restrict features such as `localStorage` and `fetch` on `file://` pages.

---

## How to edit content

| To change | Edit |
| --- | --- |
| Bio, experience bullets, skills, hero text | `index.html` |
| A project's details | the matching file in `projects/` |
| Colors, fonts, spacing on project pages | `projects/project.css` |
| Contact email shown on the site | search for the address in `index.html`, `contact.js` and `projects/*.html` |
| GitHub and LinkedIn links | `index.html` (hero icons and the Contact section) |
| Resume | replace `Sandeep_Kumar_K_Resume.pdf` |
| Profile photo | replace `photo.jpg` |

After editing, commit and push. Both hosts redeploy automatically.

```bash
git add -A
git commit -m "Describe the change"
git push
```

---

## Apps Script backend

The contact form sends messages through a Google Apps Script web app.

The backend code lives outside this repository. When you deploy or update it:

- **Execute as:** Me
- **Who has access:** Anyone
- After editing the script, publish it with **Deploy → Manage deployments → ✏️ Edit → New version → Deploy**. Editing the existing deployment keeps the same `/exec` link. Creating a **New deployment** makes a new link, which must then be copied into `contact.js`.

---

## Contact form

The Contact section has a standard form with name, email, optional subject and message.

- It validates the fields, then sends them to the Apps Script web app (`window.skSend`, defined in `contact.js`).
- If sending fails, the page shows a link that opens the visitor's mail app with the message already filled in.
- Spam protection: rate limits in the script.

---

## Deployment

### Vercel (primary)

1. Import the GitHub repository in Vercel.
2. Framework preset: **Other**. Leave Build Command, Output Directory and Install Command empty.
3. Deploy. Every push to `main` redeploys.
4. Under **Settings → Domains** choose or rename the `*.vercel.app` address.

### GitHub Pages (optional)

A repository named `<username>.github.io` is published automatically by GitHub Pages at `https://<username>.github.io`. If you rename your GitHub account, rename the repository to match.

---

## Resume

`Sandeep_Kumar_K_Resume.pdf` is served by the **Download Resume** button. It is a one-page PDF with the portfolio and LinkedIn links. When the resume changes, replace the PDF here and push.

---

## Browser support and accessibility

- Current versions of Chrome, Edge, Firefox and Safari.
- Semantic HTML, labelled controls, visible focus styles and keyboard-friendly navigation.
- Animations are reduced when the operating system's reduced-motion setting is on.

---

## Contact

- **Email:** sandeepkumark1028@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/sandeepkumark1028
- **GitHub:** https://github.com/sandeepkumark1028

© 2026 Sandeep Kumar K. All rights reserved. The code is shown for portfolio purposes. Please ask before reusing it.
