# Design System Strategy: The Curated Pulse

## 1. Overview & Creative North Star: "The Digital Curator"
This design system moves away from the rigid, boxed-in layouts of traditional e-commerce. The "Digital Curator" philosophy treats product reviews not as data points, but as an editorial magazine experience. We embrace **intentional asymmetry**, high-fidelity depth, and a "Gen Z" aesthetic that prioritizes breathing room, bold typography scales, and organic movement.

To break the "template" look:
- **Asymmetric Balance:** Avoid perfectly centered grids. Offset images and text blocks to create a dynamic flow.
- **Overlapping Elements:** Allow product images or review chips to slightly overlap container boundaries to create a sense of physical layering.
- **High-Contrast Impact:** Use the deep Indigo (`primary`) against the ultra-clean Slate (`surface`) to create an authoritative yet fresh presence.

---

## 2. Colors: Tonal Depth & The "No-Line" Rule
The palette is rooted in Indigo and Slate, but its sophistication comes from how these tones are layered.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning. Boundaries must be defined solely through background color shifts. To separate a review card from the background, place a `surface-container-lowest` (#ffffff) card onto a `surface` (#f7f9fb) background.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the hierarchy below to "stack" importance:
- **Base Layer:** `surface` (#f7f9fb) – The canvas.
- **Section Layer:** `surface-container-low` (#f2f4f6) – For grouping multiple reviews.
- **Object Layer:** `surface-container-lowest` (#ffffff) – Individual cards or input fields.

### The "Glass & Gradient" Rule
To achieve a premium "Gen Z" polish, main CTAs and floating badges should utilize:
- **Signature Gradients:** Transition from `primary` (#3525cd) to `primary_container` (#4f46e5) at a 135-degree angle.
- **Glassmorphism:** For floating navigation or "Verified" badges, use `surface_container_lowest` at 70% opacity with a `24px` backdrop blur.

---

## 3. Typography: Editorial Authority
We utilize two distinct typefaces to create a "High-Fidelity" contrast. **Plus Jakarta Sans** provides a modern, geometric punch for headers, while **Inter** ensures maximum readability for long-form reviews.

| Level | Token | Font | Size | Weight | Intent |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display** | `display-lg` | Plus Jakarta Sans | 3.5rem | 700 | Hero review scores / Quotes |
| **Headline** | `headline-md` | Plus Jakarta Sans | 1.75rem | 600 | Section titles |
| **Title** | `title-lg` | Inter | 1.375rem | 600 | Reviewer names / Product names |
| **Body** | `body-lg` | Inter | 1.0rem | 400 | The review content text |
| **Label** | `label-md` | Inter | 0.75rem | 500 | Timestamps / Metadata |

---

## 4. Elevation & Depth: Tonal Layering
Forget heavy dropshadows. We define space through light and tone.

- **The Layering Principle:** Depth is achieved by placing a lighter surface on a darker one (e.g., a white card on a slate background). This "lift" is perceived naturally without visual clutter.
- **Ambient Shadows:** Only use shadows for "floating" interactive elements (e.g., an active 'Write a Review' button). Use a large blur (`32px`) at 6% opacity, tinted with the `on-surface` color.
- **The Ghost Border Fallback:** If accessibility requires a stroke, use `outline_variant` at **15% opacity**. It should be felt, not seen.
- **Interaction Depth:** On hover, a card should not grow a shadow; instead, transition its background from `surface-container-lowest` to `surface-bright`.

---

## 5. Components

### Cards & Lists
**Constraint:** No horizontal dividers.
- **Design:** Use `32px` or `48px` vertical spacing (from the spacing scale) to separate reviews.
- **Style:** `16px` (xl) rounded corners are mandatory. Cards should feel like "smooth stones."

### Buttons (The "Action" Set)
- **Primary:** Gradient fill (`primary` to `primary_container`), white text, `9999px` (full) pill shape.
- **Secondary:** `surface-container-high` background with `on-surface` text. No border.
- **Tertiary:** Pure text in `primary` with an icon, no background container.

### Review Chips (Tags)
- Use `secondary_container` with `on_secondary_container` text.
- Shape: `0.75rem` (md) roundedness to distinguish them from pill-shaped buttons.

### Input Fields
- **Background:** `surface_container_low`.
- **Active State:** Change background to `surface_container_lowest` and add a `2px` `primary` "Ghost Border" at 20% opacity.

### Additional Signature Component: The "Vibe Meter"
Instead of standard 5-star icons, use a series of 5 vertical bars of varying heights (asymmetric) that fill with the `primary` Indigo gradient to represent the product rating.

---

## 6. Do’s and Don’ts

### Do
- **Do** use massive amounts of whitespace. If it feels like "too much," it’s probably just right for this aesthetic.
- **Do** use `on_surface_variant` (#464555) for secondary metadata like "3 days ago" to keep the hierarchy clear.
- **Do** lean into the Indigo primary for "high-energy" moments (e.g., a "Recommended" badge).

### Don't
- **Don't** use black (#000000) for text. Use `on_surface` (#191c1e) to maintain a soft, premium feel.
- **Don't** use 1px lines to separate the star rating from the user's name. Use a simple dot separator or space.
- **Don't** use standard "system" blues. Stick strictly to the Indigo and Slate tokens provided to ensure the "editorial" look remains cohesive.