# SalesHero Static Site Generator

## Installation
If you're startig first time, you need to install gatsby

`npm install -g gatsby-cli`

Followed by:

`npm install`

## Start in dev mode:

Run:

`npm run develop`

## Creating/editing pages
Just create a new markdown file in `/src/pages` folder. Extension should be `.md`. Each file should have frontmatter.
```markdown
---
title: 'Some title'
---
Rest of the content
```

P.S. We need to define the fields for frontmatter.

## Deploy:
Run:

`npm run build`

Copy everything from `public` folder and paste to our S3.
