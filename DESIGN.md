# Website design statement

This is a personal portfolio and writing space for Pratham Babu. It should feel like a concise, readable journal: calm, direct, and focused on the work and the writing. The homepage is a brief introduction and index; the blog is for deeper context.

## Visual language

- Keep the single, centered text column (`.journal-shell`, maximum 36rem) and generous vertical spacing. Content should read comfortably on narrow screens without horizontal scrolling.
- Use the existing pale pink paper background (`#FBEFEF`), deep purple text (`#40234F`), and Avenir Next/system sans-serif stack from `src/index.css`. Keep one consistent color and type system across the homepage and blog.
- Favor plain text, modest weight changes, and underlined links. Avoid cards, gradients, shadows, decorative illustrations, badges, and large promotional sections unless a future brief explicitly calls for them.
- Keep headings and metadata quiet. Let article titles, the work itself, and the writing carry emphasis. Preserve the `PV` site mark and the current simple navigation patterns.

## Structure and interaction

- Build with the existing React components and CSS patterns. The homepage flows from introduction to work experience, education, tools, and contact. Blog pages share the same shell, mark, typography, and footer language.
- Use semantic headings, lists, links, and form controls. Keep keyboard focus visible, links recognizable without color alone, and touch targets comfortable. Maintain readable line lengths and responsive wrapping.
- Add content in the existing layout before adding new interface elements. A short work item is a role and organization; expand it only when the user supplies a clear reason and verified details.
- Highlight a current product with one concise sentence and a descriptive text link in the existing masthead. Keep it specific to what the product does, without adding a promotional card or separate visual system.

## Editorial voice

- Write in the first person where appropriate, with specific, plain claims. Distinguish implemented work from experiments, local verification, and plans.
- Do not imply production deployment, live model quality, or measured outcomes unless the source material supports them. Keep the homepage concise and reserve technical detail for articles.

## Source of truth

`src/index.css` holds the implemented tokens, spacing, and component styles; the React pages show the actual content structure. This statement guides future work, but the current site is the visual reference. If the design changes intentionally, update this file with the implementation.
