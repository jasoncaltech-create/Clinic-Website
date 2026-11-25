# 本一聯合診所 網站

Website for 本一聯合診所 (pyclinic.com): a homepage plus one page each for 本一診所 and 本一牙醫診所.
It is plain HTML and CSS with no build step, so any file you edit on GitHub goes live as-is.

| File | Page |
| --- | --- |
| `index.html` | 聯合診所首頁 (hero, departments, 關於我們, 診所環境, 常見問題, 聯絡資訊) |
| `clinic.html` | 本一診所 |
| `dental.html` | 本一牙醫診所 |
| `404.html` | Page shown for a wrong address |
| `assets/css/style.css` | Colours, fonts, layout and scroll effects for every page |
| `assets/js/main.js` | Scroll effects and the tap-to-load map |
| `sitemap.xml`, `robots.txt` | For Google |

## How to edit text

1. Open the file on GitHub and click the pencil icon.
2. Search the page (Ctrl+F / Cmd+F) for `✏️`. Every editable area (hours, FAQ, physicians, services, contact details, photos) has a comment with that mark explaining what it is.
3. Change only the Chinese text between the tags, then click **Commit changes**.

The header and footer are repeated in all three pages. If you change the address or phone number, change it in all three files.
If you change an FAQ answer, also change the matching text in the `FAQPage` part of the `<script type="application/ld+json">` block near the top of `index.html`. If you change clinic hours, also change `openingHoursSpecification` in the same kind of block in `clinic.html` and `index.html`.

## Details filled in from public sources

The FAQ answers, services and doctor profiles were completed from the clinic's business cards, its Google listing, New Taipei City government clinic lists, and a public health-information listing. Search the pages for `✏️` if anything needs correcting.

## Design

- **Time of day:** the homepage opens on an illustration of the Tamsui River and Guanyin Mountain at sunset. As you scroll down, the background moves from sunset (warm sand) to dusk (dusty rose) and twilight (soft mauve), and the contact section and footer are the navy evening. The two department pages start at dusk.
- **Illustration:** `assets/images/scene/` holds the sky, mountains, river and reeds as separate SVG layers, so they can move at different speeds while scrolling. `assets/images/bg/` holds the faint mountain, river, reed and star line art in the section backgrounds.
- **Colours and fonts** are set at the top of `assets/css/style.css`. Headings use Noto Serif TC; body text uses Noto Sans TC.

## Scroll effects

- The hero layers move at different speeds and the headline scales down and fades. Section headings rise in line by line, cards arrive one after another, wide photos grow from a small card, and 診所環境 stays on screen while the waiting-room photo expands.
- Browsers that support CSS scroll-driven animations run the effects in CSS. In other browsers, `main.js` drives the same animations.
- Visitors who turn on "reduce motion" in their device settings see everything without animation. If JavaScript fails, all content still appears.
- Moving between pages fades the old page out and slides the new one in.

After changing the CSS or JS, increase the `?v=` number where `style.css` and `main.js` are linked in each page (currently `v=8`), so browsers load the new version immediately.

## Images

- `assets/images/photos/`: the clinic's real photos. The storefront appears in the 聯絡資訊 section of every page so patients can recognise the building; the waiting room appears in 診所環境. See `assets/images/photos/README.md`.
- `assets/images/generated/`: placeholders for generated interior images, each labelled 示意圖 on the page. `PROMPTS.md` there has one prompt per image with its aspect ratio and file name. Generate the image, save it with the same file name, and commit.
- `assets/images/og.jpg`: the preview image shown when the site is shared on LINE or Facebook.
- `assets/images/icons/` and `favicon.ico`: browser and home-screen icons.

## Logo

Upload it as `assets/images/logo.png`, then follow the comment next to `class="logo"` in each page.

## Publishing with GitHub Pages

In the repository on GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main`, folder `/ (root)` → Save.**
After a minute or two the site appears at `https://jasoncaltech-create.github.io/Clinic-Website/`.

## Switching pyclinic.com to this site

pyclinic.com currently shows a Wix "ConnectYourDomain" error page: the domain points at Wix, but no Wix site is connected to it. To show this site there instead:

1. **Find where the domain's DNS is managed.** If you bought pyclinic.com through Wix, it is in Wix under **Domains → pyclinic.com → Manage DNS Records**. Otherwise it is at the company you bought the domain from.
2. **Optional but recommended:** in GitHub, open your profile **Settings → Pages → Add a domain** and verify `pyclinic.com`. GitHub shows a TXT record to add in the same DNS settings. This stops anyone else from using your domain on GitHub Pages.
3. **Change the DNS records** (remove any existing A, AAAA or CNAME records that point to Wix for these names):

   | Type | Host / Name | Value |
   | --- | --- | --- |
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | AAAA | `@` | `2606:50c0:8000::153` |
   | AAAA | `@` | `2606:50c0:8001::153` |
   | AAAA | `@` | `2606:50c0:8002::153` |
   | AAAA | `@` | `2606:50c0:8003::153` |
   | CNAME | `www` | `jasoncaltech-create.github.io` |

4. **In this repository: Settings → Pages → Custom domain**, type `pyclinic.com` and click **Save**. GitHub adds a `CNAME` file to the repository for you. Do this at the same time as step 3, not before: once the custom domain is set, the github.io address redirects to pyclinic.com.
5. Wait for the DNS check on that page to pass (minutes to a few hours), then tick **Enforce HTTPS**.

If something goes wrong, removing the custom domain on that page brings the github.io address back.
