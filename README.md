# 本一聯合診所 網站

Website for 本一聯合診所 (pyclinic.com): a homepage plus one page each for 本一診所 and 本一牙醫診所.
It is plain HTML and CSS with no build step, so any file you edit on GitHub goes live as-is.

| File | Page |
| --- | --- |
| `index.html` | 聯合診所首頁 (hero, departments, 關於我們, 常見問題, 聯絡資訊) |
| `clinic.html` | 本一診所 |
| `dental.html` | 本一牙醫診所 |
| `assets/css/style.css` | Colors, fonts and layout for every page (the dental page's own look is the last section) |
| `sitemap.xml`, `robots.txt` | For Google |

## How to edit text

1. Open the file on GitHub and click the pencil icon.
2. Search the page (Ctrl+F / Cmd+F) for `✏️`. Every editable area (hours, FAQ, physicians, services, contact details) has a comment with that mark explaining what it is.
3. Change only the Chinese text between the tags, then click **Commit changes**.

The header and footer are repeated in all three pages. If you change the address or phone number, change it in all three files.

## Details filled in from public sources

The FAQ answers, services and doctor profiles were completed from the clinic's business cards, its Google listing, New Taipei City government clinic lists, and a public health-information listing. Search the pages for `✏️` if anything needs correcting. If you change an FAQ answer, also change the matching text in the `FAQPage` part of the `<script type="application/ld+json">` block near the top of `index.html`.

## Images and animation

- `assets/images/photos/`: the clinic's own photos (exterior, straightened to a front-on view, and the reception area) on the homepage, plus licensed free stock photos on the two department pages, marked 示意圖 (illustration) on the page. Sources and licences are listed in `assets/images/photos/README.md`. Replace any of them with new photos using the same file names.
- `assets/images/luzhou/`: the 觀音山 and 淡水河 sunset illustration. It is no longer shown anywhere; the top of the homepage now uses the same plain light background as the other pages. The files are kept in case it is wanted again.
- Page transitions: moving between pages fades the old page out and slides the new one in, like apple.com. This is set in `assets/css/style.css`.
- `assets/js/main.js`: gentle fade-in effects while scrolling. They switch off automatically for visitors who turn on "reduce motion" in their device settings.
- Colours for the homepage and 本一診所 are set at the top of `assets/css/style.css`: bright warm white, light stone, deep navy, a pale blue-grey accent, and champagne gold used only for thin lines.

## 本一牙醫診所 page (`dental.html`)

The dental page has its own look, kept in the last section of `assets/css/style.css` and switched on by `class="page-dental"` on the page's `<body>`. Nothing in that section affects the other two pages.

- **Layout:** a header bar that floats over a full-width photo, centred headings with a small English label beneath each (ABOUT, SERVICES, DOCTOR, HOURS, CONTACT), the three services as a numbered list beside a photo, a beige band for 醫師介紹, and the phone number as one large outlined box. The labels, the 01. 02. 03. numerals, the arrows and the check marks are decoration only.
- **Colours:** white (with a faint paper grain), pale band `#F6F2EE`, beige `#E0D5C7`, header bar `#F1EEE9`, charcoal text `#312D2F`, gold buttons `#8F6B22` with white text, gold lines and large numerals `#B18A3C` (never for small text), gold label text `#7D5E1E` (`#74561A` on beige). They are variables at the top of the dental section.
- **Typeface:** headings use Noto Serif TC, loaded only by `dental.html`. Body text is Noto Sans TC as on the rest of the site.
- **Photos:** two slots, both using stand-ins for now. Search `dental.html` for `✏️ 主視覺照片` and `✏️ 診療項目旁的照片`; each comment says which file to upload (`dental-hero.jpg`, `dental-services.jpg`) and what to change. See `assets/images/photos/README.md`.
- **Homepage card:** the 本一牙醫診所 card in 診療部門 on the homepage carries a matching gold accent (`dept-dental` in `index.html`).

After changing the CSS or JS, increase the `?v=` number where `style.css` and `main.js` are linked in each page, so browsers load the new version immediately.

## Logo and photos

- **Logo:** upload it as `assets/images/logo.png`, then follow the comment next to `class="logo"` in each page.
- **More photos:** see `assets/images/photos/README.md`.

## Publishing with GitHub Pages

In the repository on GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main`, folder `/ (root)` → Save.**
After a minute or two the site appears at `https://jasoncaltech-create.github.io/Clinic-Website/`.

To use `pyclinic.com` instead, type it in the **Custom domain** box on that same page and update the domain's DNS as GitHub describes there. Only do this when you are ready to replace the current pyclinic.com site.
