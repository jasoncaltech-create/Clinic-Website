# 本一聯合診所 網站

Website for 本一聯合診所 (pyclinic.com): a homepage plus one page each for 本一診所 and 本一牙醫診所.
It is plain HTML and CSS with no build step, so any file you edit on GitHub goes live as-is.

| File | Page |
| --- | --- |
| `index.html` | 聯合診所首頁 (hero, departments, 關於我們, 交通指引, 常見問題, 聯絡資訊) |
| `clinic.html` | 本一診所 |
| `dental.html` | 本一牙醫診所 |
| `404.html` | Page shown for a wrong address |
| `assets/css/style.css` | Colours, fonts, layout and scroll effects for every page |
| `assets/js/main.js` | Scroll effects and the 本一診所 「今日門診」 strip |
| `sitemap.xml`, `robots.txt` | For Google and AI assistants |
| `llms.txt` | A plain-text fact sheet for AI assistants (names, address, hours, services, doctors) |

## How to edit text

1. Open the file on GitHub and click the pencil icon.
2. Search the page (Ctrl+F / Cmd+F) for `✏️`. Every editable area (hours, FAQ, physicians, services, contact details, photos) has a comment with that mark explaining what it is.
3. Change only the Chinese text between the tags, then click **Commit changes**.

The header and footer are repeated in all three pages. If you change the address or phone number, change it in all three files.
Each page's `<script type="application/ld+json">` block near the top describes the page for Google and AI assistants. Keep it in step with the page:

- **FAQ answers:** each page has its own FAQ. If you change an answer, change the matching text in that page's `FAQPage` block.
- **本一診所 hours:** change the hours table in `clinic.html`, the `openingHoursSpecification` in its `<script>` block, the 「週六、週日也有看診」 and 「夜診」 tags (in `clinic.html` and on the homepage card), and the hours in `llms.txt`. The 「今日門診」 strip reads the table itself, so it needs no change.
- **Address, phone, doctors or services:** also update `llms.txt`.

## Details filled in from public sources

The FAQ answers, services and doctor profiles were completed from the clinic's business cards, its Google listing, New Taipei City government clinic lists, and a public health-information listing. Search the pages for `✏️` if anything needs correcting.

## Design

- **One background, morning to night:** every page sits in front of the same illustration of the Tamsui River and Guanyin Mountain (`assets/images/scene/`). As you scroll, the sun rises on the left, is high at noon and sets behind Guanyin Mountain on the right, while the sky moves through morning, noon, golden afternoon and sunset colours. When 聯絡資訊 comes into view it becomes night, with stars and a moon, through the footer. The sky colours are set in `assets/css/style.css` under 「背景插畫」.
- **Two audiences:** 本一牙醫診所 is spacious, slower and expert-led (credentials under the title, treatment blocks with 診療流程, a 來電預約諮詢 button). 本一診所 is brighter and quicker: a 「今日門診」 strip under the title shows today's hours and whether the clinic is open (Taipei time, read from the hours table), and phones get a bottom bar with 來電掛號 and Google Maps 導航.
- **Colours and fonts** are set at the top of `assets/css/style.css`. Headings use Noto Serif TC; body text uses Noto Sans TC.

## Scroll effects

- The sun and sky follow your scroll position (see Design). In the first screen the mountains and reeds settle lower and the headline scales down and fades. Section headings rise in line by line, cards arrive one after another, the wide dental illustration grows from a small card, and on desktop 交通指引 stays on screen while the storefront photo grows and the directions appear.
- Browsers that support CSS scroll-driven animations run the effects in CSS. In other browsers, `main.js` drives the same animations.
- Visitors who turn on "reduce motion" in their device settings see a still morning scene and no animation; 聯絡資訊 is still night. If JavaScript fails, all content still appears.
- The Google map is embedded on every page and loads as the visitor scrolls near it.
- Moving between pages fades the old page out and slides the new one in.

After changing the CSS or JS, increase the `?v=` number where `style.css` and `main.js` are linked in each page (currently `v=10`), so browsers load the new version immediately.

## Images

- `assets/images/photos/`: the clinic's real storefront photo, shown in the homepage 交通指引 and in 聯絡資訊 on the two clinic pages so patients can recognise the building. See `assets/images/photos/README.md`.
- `assets/images/generated/`: illustrated stand-ins of doctors, a dentist and patients, each labelled 示意圖 on the page. `PROMPTS.md` there has one prompt per image with its aspect ratio and file name. Generate a polished version, save it with the same file name, and commit.
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
