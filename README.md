# SignTooling

A short list of the documents Click Plumbing and Electrical asks people to sign, each linking to its DocuSeal signing form. Published at [signtooling.com](https://signtooling.com). Plain HTML and one stylesheet — no framework, no JavaScript, no build step, nothing stored.

## Pages

- `index.html` — the documents, in three groups (confidentiality · on site · the work).
- `about.html` — how signing works, and what this site is.
- `contracts.html` — a redirect to the home page (the list used to live here).

## Changing the list

Each document is one `.doc` block in `index.html`: a name, a one-line description, and the DocuSeal link (`https://docuseal.com/d/…`). To add one, copy a block and change the three. To retire one, delete its block. The templates themselves — wording, fields, who gets the signed copy — are managed in DocuSeal, not here.
