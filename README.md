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

## Details filled in from public sources

The FAQ answers, services and doctor profiles were completed from the clinic's business cards, its Google listing, New Taipei City government clinic lists, and a public health-information listing. Search the pages for `✏️` if anything needs correcting. If you change an FAQ answer, also change the matching text in the `FAQPage` part of the `<script type="application/ld+json">` block near the top of `index.html`.

## Images and animation

- `assets/images/photos/`: the clinic's own photos (exterior, straightened to a front-on view, and the reception area) on the homepage, plus licensed free stock photos on the two department pages, marked 示意圖 (illustration) on the page. Sources and licences are listed in `assets/images/photos/README.md`. Replace any of them with new photos using the same file names.
- `assets/images/luzhou/`: the 觀音山 and 淡水河 sunset illustration behind the top of the homepage.
- Page transitions: moving between pages fades the old page out and slides the new one in, like apple.com. This is set at the bottom of `assets/css/style.css`.
- `assets/js/main.js`: gentle fade-in effects while scrolling. They switch off automatically for visitors who turn on "reduce motion" in their device settings.
- Colours are set at the top of `assets/css/style.css`: bright warm white, light stone, deep navy, a pale blue-grey accent, and champagne gold used only for thin lines.

After changing the CSS or JS, increase the `?v=` number where `style.css` and `main.js` are linked in each page, so browsers load the new version immediately.

## Logo and photos

- **Logo:** upload it as `assets/images/logo.png`, then follow the comment next to `class="logo"` in each page.
- **More photos:** see `assets/images/photos/README.md`.

## Publishing with GitHub Pages

In the repository on GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main`, folder `/ (root)` → Save.**
After a minute or two the site appears at `https://jasoncaltech-create.github.io/Clinic-Website/`.

To use `pyclinic.com` instead, type it in the **Custom domain** box on that same page and update the domain's DNS as GitHub describes there. Only do this when you are ready to replace the current pyclinic.com site.
