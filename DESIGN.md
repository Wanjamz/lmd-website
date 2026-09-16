---
name: LMD Consulting Group
description: Evidence, communication and digital partner for development work in the Horn of Africa.
colors:
  lmd-navy: "#1a4875"
  deep-navy: "#0b2f4f"
  marigold-signal: "#e3a02a"
  marigold-signal-hover: "#f2b243"
  marigold-ink: "#7a4d00"
  navy-ink: "#0e1b27"
  cool-paper: "#edeff0"
  white-sheet: "#ffffff"
  slate-muted: "#56676f"
  hairline: "rgba(14, 27, 39, 0.14)"
  faint-rule: "rgba(14, 27, 39, 0.09)"
  navy-wash: "rgba(26, 72, 117, 0.06)"
  on-dark: "#e8eef4"
  on-dark-muted: "rgba(232, 238, 244, 0.62)"
  on-dark-rule: "rgba(232, 238, 244, 0.18)"
  danger: "#b3123c"
typography:
  display:
    fontFamily: "Fraunces, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2.9rem, 7vw, 6rem)"
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Fraunces, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2.1rem, 4.2vw, 3.4rem)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  page-title:
    fontFamily: "Fraunces, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2.4rem, 5.2vw, 4.4rem)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Fraunces, Georgia, 'Times New Roman', serif"
    fontSize: "1.3rem"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  body-small:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.88rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0"
rounded:
  hairline: "1px"
  sm: "3px"
spacing:
  gutter: "4vw"
  section: "5.5rem"
  section-page: "5rem"
  hero-top: "9.5rem"
  card: "1.75rem"
  card-lg: "2.5rem 2rem"
  measure: "66ch"
components:
  button-primary:
    backgroundColor: "{colors.marigold-signal}"
    textColor: "{colors.navy-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0.85rem 1.75rem"
  button-primary-hover:
    backgroundColor: "{colors.marigold-signal-hover}"
    textColor: "{colors.navy-ink}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.lmd-navy}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0.85rem 1.75rem"
  button-outline-hover:
    backgroundColor: "{colors.lmd-navy}"
    textColor: "{colors.white-sheet}"
  button-outline-on-dark:
    backgroundColor: "transparent"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.sm}"
    padding: "0.85rem 1.75rem"
  button-outline-on-dark-hover:
    backgroundColor: "{colors.on-dark}"
    textColor: "{colors.deep-navy}"
  nav-cta:
    backgroundColor: "{colors.lmd-navy}"
    textColor: "{colors.white-sheet}"
    rounded: "{rounded.sm}"
    padding: "0.55rem 1.2rem"
  tag:
    backgroundColor: "{colors.navy-wash}"
    textColor: "{colors.lmd-navy}"
    rounded: "{rounded.sm}"
    padding: "0.2rem 0.55rem"
  filter-tab:
    backgroundColor: "transparent"
    textColor: "{colors.slate-muted}"
    rounded: "{rounded.sm}"
    padding: "0.4rem 0.9rem"
  filter-tab-active:
    backgroundColor: "{colors.marigold-signal}"
    textColor: "{colors.navy-ink}"
  work-card:
    backgroundColor: "{colors.white-sheet}"
    textColor: "{colors.navy-ink}"
    rounded: "{rounded.sm}"
    padding: "{spacing.card}"
  service-card:
    backgroundColor: "{colors.white-sheet}"
    textColor: "{colors.navy-ink}"
    padding: "{spacing.card-lg}"
  input:
    backgroundColor: "{colors.cool-paper}"
    textColor: "{colors.navy-ink}"
    rounded: "{rounded.sm}"
    padding: "0.7rem 0.9rem"
  hero-field:
    backgroundColor: "{colors.deep-navy}"
    textColor: "{colors.on-dark}"
    padding: "9.5rem 4vw 5.5rem"
  footer:
    backgroundColor: "{colors.navy-ink}"
    textColor: "{colors.on-dark-muted}"
    padding: "3.5rem 4vw"
---

# Design System: LMD Consulting Group

## Overview

**Creative North Star: "The Field Dossier"**

The site should read like a sober, well-kept evidence file handed across a table to a procurement panel. Navy gives the structure, hairline rules divide the page, and serif headings are set with care. One marigold tab marks where to act next. Nothing on the page is there to impress. The proof, the names and the typesetting do the persuading, the way a well-produced donor report does.

The system is flat and ruled. Depth comes from tone (cool paper ground, white sheets on it, and a deep navy field for heroes), never from shadow. Density is moderate: generous section rhythm (5.5rem), comfortable reading measures (52–66ch), and compact labels in sentence case with no tracking. Motion follows one idea: the dossier is ruled, and rules get drawn. The hero title is set line by line and the marigold rule is drawn under it, once, on load. The same drawn rule marks the practice areas and the five-stage process as they arrive. Everything else is short feedback or continuity, and reduced-motion users get no travel at all.

Colour follows the LMD mark. The logo is navy and nothing else, so navy is the structural identity, not an accent. Marigold is the page's only other hue, and it has exactly two jobs: the primary action and the live/active state.

**Key Characteristics:**
- Navy is the identity; marigold is only for action and active state
- Flat surfaces separated by 1px hairlines; no drop shadows
- Near-square corners (3px) everywhere
- Fraunces serif headings with a quiet italic clause; Archivo for everything else
- One loud moment per page: the solid navy hero field
- Sentence-case labels, no uppercase tracking, no decorative rules before labels
- The speech-bubble quote card, taken from the logo, is the only ornament

## Colors

A cool, near-monochrome navy system with a single warm signal.

### Primary
- **LMD Navy** (`lmd-navy`): The brand colour. Section labels, service icons, step numbers, card-type labels, tag text, the nav CTA, focus borders on inputs, and outline-button text. It carries structure, not emphasis.
- **Deep Navy** (`deep-navy`): The inverted field. Home hero, page heroes, and the contact-page info panel. Also the hover colour of the nav CTA.

### Secondary
- **Marigold Signal** (`marigold-signal`): The primary button fill, the active filter tab, the global `:focus-visible` outline, the 3px hairline under the hero title, the 3rem marigold tab on callouts, and the dot in the footer wordmark. Text selection uses it at 35%. It lightens to `marigold-signal-hover` on hover.
- **Marigold Ink** (`marigold-ink`): Marigold dark enough to set text in, when a signal-coloured word must pass contrast on a light ground.

### Neutral
- **Navy Ink** (`navy-ink`): Body text, button text on marigold, and the footer ground.
- **Cool Paper** (`cool-paper`): The page ground and input backgrounds. It is deliberately cool so it never reads as cream.
- **White Sheet** (`white-sheet`): Raised surfaces such as cards, services and contact bands, the ticker, and the translucent nav (92% white with a blur).
- **Slate Muted** (`slate-muted`): Secondary copy, intros, card descriptions, inactive nav links and meta text.
- **Hairline** (`hairline`) and **Faint Rule** (`faint-rule`): 1px borders and section dividers. Hairline is used for cards and inputs; faint rule for section edges.
- **Navy Wash** (`navy-wash`): Tag fills, callout grounds, media placeholders and the 3px input focus halo.
- **On-Dark set** (`on-dark`, `on-dark-muted`, `on-dark-rule`): Text, secondary text and borders on any navy field.
- **Danger** (`danger`): Form errors only: required marks, error messages, invalid field borders and the send-failure notice. Never decoration.

### Named Rules
**The Two-Jobs Rule.** Marigold is used only for the primary action and the live/active state (plus the focus ring and its one graphic hairline). It never tints headings, icons, links or backgrounds. If you are reaching for marigold to make something "pop", use navy or type weight instead.

**The Navy-Is-Structure Rule.** Navy is not an accent to sprinkle. It is the frame: labels, marks, fields. No third hue enters the palette.

**The One Inversion Rule.** Every panel on navy inverts the same way (on-dark text, on-dark-muted labels, on-dark-rule borders, outline buttons that fill with on-dark on hover, tags at 10% white). A new dark section reuses this rule and never invents its own overrides.

## Typography

**Display Font:** Fraunces (with Georgia, Times New Roman)
**Body Font:** Archivo (with Helvetica Neue, Arial)
**Label Font:** Archivo. There is no monospace in the system.

**Character:** Fraunces is a variable, optically sized serif that gives headings a considered, publication-grade voice. Archivo is a sturdy, plain grotesque that keeps labels and body copy direct and readable. The pairing reads as a typeset report rather than a startup page.

### Hierarchy
- **Display** (500, clamp 2.9–6rem, 0.98, −0.035em): Home hero title only, white on deep navy, followed by a 4.5rem marigold hairline.
- **Page Title** (500, clamp 2.4–4.4rem, 1.02, −0.03em, max 20ch): The h1 in inner-page heroes.
- **Headline** (500, clamp 2.1–3.4rem, 1.08, −0.025em): Section titles (`h2.section-title`) and the contact CTA heading.
- **Title** (500, 1.1–1.3rem, 1.25–1.3, −0.015em): Card and step headings in serif.
- **Body** (400, 17px, 1.6): Default copy. Intros run at 1rem with a 1.7 line height and a 52–60ch measure; the global measure token is 66ch.
- **Body Small** (400, 0.88rem, 1.6–1.7): Card descriptions and step copy in slate muted.
- **Label** (600, 0.85rem, no tracking, sentence case): Section labels in navy, form labels, card-type labels and contact labels.

### Named Rules
**The Change-of-Voice Italic Rule.** An italic clause inside a heading (`em`) drops to weight 400 and keeps the heading's colour. It is a shift in voice, never a highlighter.

**The Quiet Label Rule.** Labels are sentence case, 0.85rem, weight 600, with zero letter-spacing and no leading rule or dash. The label names the section and gets out of the way; the title carries the weight.

## Layout

- **Page frame:** Full-width sections with a fluid 4vw side gutter. The `.container` caps content at 1300px.
- **Vertical rhythm:** One rhythm for the whole site. Sections are 5.5rem top and bottom on home and 5rem on inner pages. Heroes open with 9.5rem of top padding to clear the fixed nav. Consecutive page sections are divided by a faint-rule top border rather than extra space.
- **Grids:**
  - The home hero is a two-column grid (1.12fr / 0.88fr, 4.5rem gap).
  - The work grid is three equal columns with a 1.5rem gap.
  - Services use an auto-fit grid (min 280px) with a 1px gap over a hairline backing, so the lines between cards are the grid itself.
  - Process is 1fr / 2fr.
  - The contact CTA and service detail pages use two equal columns with a 5rem gap.
- **Responsive:** Breakpoints at 1024px (the contact CTA stacks), 900px (the main two-column layouts and nav collapse), 760px/768px (insights, Mapped), 640px and 600px (form rows stack, overflow fixes). The mobile nav is a full-screen cool-paper sheet listing links in 2rem Fraunces with hairline dividers.

## Elevation & Depth

The system is flat. Depth comes from tonal layering only: a cool paper ground, white sheets on top, and deep navy for inverted fields. Edges come from 1px hairlines. The `--shadow` token (a 1px, 6% opacity lift) exists but is effectively unused. The only glow is the 3px navy-wash focus halo on form fields. The fixed nav separates itself with 92% white, a 10px backdrop blur and a faint bottom rule, not a shadow.

### Named Rules
**The Ruled-Not-Raised Rule.** Surfaces never cast drop shadows. To separate things, use a hairline, a tonal step (paper → white sheet), or the navy field. Hover states change border colour or background tone, never elevation.

## Shapes

- **Corners:** Nearly square. Every button, card, tag, input and callout uses a 3px radius. The focus outline uses 1px, and a few Mapped elements use 2px. There are no pills, circles or large rounded cards.
- **Borders:** 1px throughout. There are no side stripes. Callouts, the case-study impact panel and form confirmations carry a marigold tab (3rem × 3px) at the top-left corner, the same mark the hero title ends on.
- **Signature shape:** The speech-bubble quote card, a white sheet with a small triangular tail at the bottom left, taken from the LMD mark. It is the only ornamental form in the system.

### Named Rules
**The Near-Square Rule.** Corners never go above 3px. A rounder corner makes the system read as an app rather than a dossier.

## Components

### Buttons
Plain, firm and typeset: they look like actions in a document, not candy.
- **Shape:** Near-square (3px), 1px border, 0.85rem × 1.75rem padding, Archivo 0.9rem weight 600.
- **Primary:** Marigold signal fill with navy ink text. It is the one warm object in any view.
- **Hover:** The fill lightens to the marigold hover tone over 0.18s. There is no lift or scale.
- **Outline (light ground):** Transparent with a hairline border and navy text. On hover it fills with LMD navy and the text turns white.
- **Outline (on navy):** On-dark text and on-dark-rule border. On hover it fills with on-dark and the text turns deep navy.
- **Ghost (on navy, full width):** A faint on-dark border that brightens on hover, with an 8% white fill.
- **Focus:** A global 2px marigold outline, offset 2px.

### Tags
- **Style:** Navy-wash fill, LMD navy text, Archivo 0.85rem weight 500, 3px radius, no border. On navy fields they become 10% white with on-dark text.

### Filter Tabs
- **Default:** Transparent, hairline border, slate muted text. On hover the border and text turn navy.
- **Active:** Marigold fill, navy ink text, weight 600. This is the second of marigold's two jobs.

### Cards / Containers
- **Work card:**
  - A white sheet with a hairline border and 3px radius, 1.75rem padding, and a full-bleed 190px media band at the top with a hairline beneath it.
  - The meta row pairs the type (navy, 600) with the client (muted), followed by a Fraunces 1.15rem title and muted description.
  - On hover only the border turns navy.
- **Service card:**
  - A white sheet sitting in a hairline-backed 1px-gap grid with 2.5rem × 2rem padding.
  - It has a navy Lucide icon, a Fraunces 1.3rem title and tags.
  - On hover the background shifts to cool paper and a navy arrow fades in.
- **Callout:** A navy-wash ground, 3px radius, 1.75rem × 2rem padding, with the marigold tab at the top-left.
- **Shadow strategy:** None (see Elevation & Depth).

### Inputs / Fields
- **Style:** Cool paper fill, hairline border, 3px radius, 0.7rem × 0.9rem padding, Archivo 0.95rem. Labels sit above in weight 600 and 0.85rem. Selects use a custom chevron.
- **Focus:** The border turns LMD navy with a 3px navy-wash halo.
- **Error:** Invalid fields get a danger border, and a 0.85rem danger message sits under the field (linked with `aria-describedby`). A failed send shows a danger-outlined notice offering the email address.
- **Success:** A navy-wash panel with the marigold tab and a Fraunces message, drawn open from the left.

### Navigation
- **Desktop:** Fixed, 92% white with a blur and a faint bottom rule. The wordmark is in Fraunces 1.35rem. Links are Archivo 0.9rem weight 500 in slate muted with a 2rem gap, turning navy on hover.
- **CTA:** A solid LMD navy "button" that deepens to deep navy on hover. The nav uses navy, not marigold, so marigold stays reserved for in-page action.
- **Mobile:** A hamburger opens a full-screen cool-paper sheet with 2rem Fraunces links divided by hairlines and a CTA below.

### Hero Field
- **The one loud moment on the page.** A solid deep navy field: a display title with a marigold hairline under it, muted on-dark subcopy, a primary button plus an on-dark outline button, and a right column with a stat grid or quote card.
- **Motion:** Each title line rises out of its own mask (0.9s, `cubic-bezier(0.16, 1, 0.3, 1)`, 90ms apart). The marigold rule then draws left to right (0.7s, from 0.5s), and the subcopy, buttons and right column settle 8px with a fade. This runs once. Inner-page heroes reuse the navy field without the display scale or the sequence.

### Ticker
- **A slow client/service marquee on a white sheet** (44s loop, pauses on hover, stops under reduced motion). Clients are in muted text and services in navy weight 600.

### Footer
- **A navy ink field** with on-dark-muted text in Archivo 0.85rem. The Fraunces wordmark is white with a marigold dot. The layout is two columns, with the copyright right-aligned.

## Do's and Don'ts

### Do:
- **Do** keep marigold (`marigold-signal`) to the primary button, the active filter or state, the focus ring, the hero hairline and the callout tab.
- **Do** build every new dark panel with the One Inversion Rule tokens (`on-dark`, `on-dark-muted`, `on-dark-rule`) instead of ad-hoc overrides.
- **Do** separate surfaces with 1px hairlines and tonal steps (cool paper → white sheet → deep navy).
- **Do** set headings in Fraunces weight 500 with negative tracking, and use a weight-400 italic clause in the same colour for a change of voice.
- **Do** keep labels sentence case, 0.85rem, weight 600, with zero tracking.
- **Do** keep corners at 3px and hover states to border or background changes over 0.18s.
- **Do** honour `prefers-reduced-motion`. Nothing travels: the hero lines, drawn rules, menu links and ticker stay still, while opacity and colour changes that confirm state remain.
- **Do** use a drawn rule (`scaleX` from the left, `--ease-out`) when motion needs a signature. It is the system's one motion idea.

### Don't:
- **Don't** add drop shadows, lifted hover states or glassy cards.
- **Don't** introduce a third hue, or use marigold for headings, icons, links or decorative fills.
- **Don't** use uppercase tracked eyebrow labels, dash-and-rule prefixes before labels, or monospace as a style (all deliberately removed).
- **Don't** put a coloured stripe down the side of a card or callout; use the top-left marigold tab.
- **Don't** round corners beyond 3px, or use pill buttons.
- **Don't** add slide-up entrance animations to every section. Only the hero is staged; sections resolve with a 0.45s opacity fade.
- **Don't** add ornament beyond the logo-derived speech-bubble quote card, including outline ghost wordmarks, background text or decorative blobs.
- **Don't** use a warm cream ground. The paper stays cool (`cool-paper`).
