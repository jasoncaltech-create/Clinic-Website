# 生成示意圖：提示詞與檔名 Image-generation prompts

The images in this folder are **illustrated stand-ins**: simple flat-vector drawings of doctors, a dentist and patients, made for this site. They are still meant to be replaced by more polished versions. Generate each image below, then save it **with exactly the same file name** in this folder, replacing the stand-in. Nothing else needs to change; the pages already point to these files.

All of these images are shown on the site with a small **示意圖** (illustration) label, because they are not photos of the real clinic or its staff. Keep that label.

The two clinics use two related styles:

- **本一診所** (families, high volume): warm, cute and playful.
- **本一牙醫診所** (premium, self-pay): the same flat-vector family, but refined and grown-up.

## Shared style (add to every prompt)

> Flat vector illustration, soft rounded shapes, no outlines, gentle shading, warm and calm. Palette: warm sand, cream, dusty rose, mauve, deep navy, small champagne-gold accents, a little sage green for plants. Simple friendly faces. A window in the background shows a soft view of a mountain by a river. Generic people who do not resemble any real person. **No text, no letters, no logos, no needles, no blood, no instruments inside a mouth.**

Negative prompt (if your tool has one): `text, letters, watermark, logo, needle, syringe, blood, open mouth with instruments, scary, clinical close-up, harsh light, photorealistic`

**本一診所 style (add to its prompts):**

> Cute and playful: big round heads, dot eyes, small smiles, rosy cheeks, chunky rounded bodies, cheerful warm colours.

**本一牙醫診所 style (add to its prompts):**

> Refined and elegant: slim adult proportions, small heads, calm poses, minimal faces (closed smiling eyes, small smile), lots of empty space, palette weighted toward mauve, navy and champagne gold, premium private-practice mood.

## Slots

| File name | Aspect ratio | Size to save | Where it appears | Style |
| --- | --- | --- | --- | --- |
| `about.jpg` | 3:4 (portrait) | 1200 × 1600 | 首頁「關於我們」 | between the two |
| `clinic-hero.jpg` | 4:3 | 1600 × 1200 | 本一診所 頁面上方 | 本一診所 |
| `clinic-intro.jpg` | 4:3 | 1600 × 1200 | 本一診所「診所介紹」 | 本一診所 |
| `dental-hero.jpg` | 4:3 | 1600 × 1200 | 本一牙醫診所 頁面上方 | 本一牙醫診所 |
| `dental-intro.jpg` | 4:3 | 1600 × 1200 | 本一牙醫診所「診所介紹」 | 本一牙醫診所 |
| `dental-wide.jpg` | 16:9 | 1920 × 1080 | 本一牙醫診所，捲動時放大 | 本一牙醫診所 |

Save as JPEG at about 80% quality; try to keep each file under 300 KB. On phones, `dental-wide.jpg` is cropped to 4:3 from the centre, so keep the people and the screen near the middle.

### about.jpg (3:4)
> A friendly doctor in a white coat with a stethoscope and a dentist in a white coat stand on the right, smiling and waving to welcome a family on the left: a grandparent with grey hair and glasses, a parent, and a small child holding the parent's hand and waving back. A tall arched window behind them shows a mountain by a river at sunset. [shared style] Medium proportions, halfway between cute and refined.

### clinic-hero.jpg (4:3)
> A pediatrician in a white coat, sitting on a round stool, gently listens to a small child's heartbeat with a stethoscope. The child sits on a padded bench, smiling; the parent stands behind with a hand on the child's shoulder. Small hearts float above. An arched window shows a mountain by a river. [shared style] [本一診所 style]

### clinic-intro.jpg (4:3)
> A doctor in a white coat checks an older adult's blood pressure at a small round table: a soft cuff on the patient's upper arm connected to a small monitor. The older adult has grey hair in a bun and round glasses; both are smiling at each other. A plant and an arched window behind. [shared style] [本一診所 style]

### dental-hero.jpg (4:3)
> A relaxed adult patient sits in a modern, sleek dental chair, holding up a hand mirror and smiling at their reflection. A slim dentist in a white coat stands beside the chair, gesturing kindly. A large window with a mountain view, a slim olive tree, a minimal overhead lamp, a thin gold line along the wall. [shared style] [本一牙醫診所 style]

### dental-intro.jpg (4:3)
> A dentist in a white coat sits across a stone-topped table from an adult patient, explaining a treatment plan using a large white tooth model on the table. Upholstered mauve chairs, a pendant lamp, an arched window with a mountain view. [shared style] [本一牙醫診所 style]

### dental-wide.jpg (16:9)
> A dentist in a white coat and an adult patient stand side by side, looking at a large wall screen that shows an abstract, light-line drawing of an arch of teeth and a single tooth on a navy background (no text or numbers). The dentist points at the screen. A tall arched window and a slim plant on the left. [shared style] [本一牙醫診所 style]
