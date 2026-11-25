# 本一聯合診所 網站

Website for 本一聯合診所 (pyclinic.com): a homepage plus one page each for 本一診所 and 本一牙醫診所.
It is plain HTML and CSS with no build step, so any file you edit on GitHub goes live as-is.

| File | Page |
| --- | --- |
| `index.html` | 聯合診所首頁 (hero, departments, 關於我們, 常見問題, 聯絡資訊) |
| `clinic.html` | 本一診所 |
| `dental.html` | 本一牙醫診所 |
| `assets/css/style.css` | Colors, fonts and layout for every page |
| `sitemap.xml`, `robots.txt` | For Google |

## How to edit text

1. Open the file on GitHub and click the pencil icon.
2. Search the page (Ctrl+F / Cmd+F) for `✏️`. Every editable area (hours, FAQ, physicians, services, contact details) has a comment with that mark explaining what it is.
3. Change only the Chinese text between the tags, then click **Commit changes**.

The header and footer are repeated in all three pages. If you change the address or phone number, change it in all three files.

## Before publishing: things to confirm

Search every page for **待確認**. Each one is shown on the page in a dashed gold box and must be filled in or removed before the site goes public:

- FAQ answers: parking, public transport, what to bring, appointments, 健保, accessibility
- Each physician's medical/dental school (學歷) and 趙文惠院長's 專長
- The "其他服務" lists taken from the business cards (keep or delete)

When you fill in an FAQ answer, also add it to the `FAQPage` part of the `<script type="application/ld+json">` block near the top of `index.html` so Google can read it. If you change clinic hours, also update `openingHoursSpecification` in that same block of `clinic.html` and `index.html`.

## Background images

The soft backgrounds (window light with leaf shadows, a fine linen texture, and a row of thin gold arches) are drawn in code as SVG files in `assets/images/bg/`. They are abstract on purpose, so nobody mistakes them for photos of the clinic. To remove one, delete its `url("../images/bg/...")` line in `assets/css/style.css`.

## Logo and photos

- **Logo:** upload it as `assets/images/logo.png`, then follow the comment next to `class="logo"` in each page.
- **Photos:** see `assets/images/photos/README.md`. The site looks complete without them.

## Publishing with GitHub Pages

In the repository on GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main`, folder `/ (root)` → Save.**
After a minute or two the site appears at `https://jasoncaltech-create.github.io/Clinic-Website/`.

To use `pyclinic.com` instead, type it in the **Custom domain** box on that same page and update the domain's DNS as GitHub describes there. Only do this when you are ready to replace the current pyclinic.com site.
