---
name: getting-started
---

# Getting started

A couple of things to note about JAMstack before we dive in:

1. JAMstack is more of a terminlogy than a "stack"
2. Development and deployment are decoupled

## Development

However you decide to generate your HTML assets is up to you. The three most common approaches are:

1. Hand coding the HTML
2. Generating HTML files
3. Frontend framework

### Hand coding

Simple and effective method of writing HTML, it's ideal for super simple pages.
Examples:

- [trump-countdown](https://github.com/peduarte/trump-countdown)
- [fastgoodcheap](https://github.com/ibrennan/fastgoodcheap)

### Static Site Generators

Most JAMstack sites are powered by a static site generator. There's no enforcement on which SSG you decide to use.

Examples:

- Gatsby
- Next.js
- Hugo
- Eleventy
- Jekyll
- Middleman

More SSG's [here](https://www.staticgen.com/)

### Frontend Framework

Most frameworks don't output static HTML files, however it is possible to do that but it requires more tooling experience and maintainance.

Examples:

- React
- Vue
- Angular 2

## Dedployment

Your built site needs to be hosted somewhere. There are great services that provides this for free and with ease.

Examples:

- Netlify
- Zeit
- Github Pages

## Dynamic parts

There are a lot of great third party services for static sites, such as:

- Typeform: awesome forms that can be embedded
- Snipcart: include a few lines of code for a full online shop
- Algolia: search API that delivers instant and relevant results
- Staticman: handle user-generated content like comments and reviews

More services [here](https://github.com/agarrharr/awesome-static-website-services#e-commerce)

## CMS

JAMstack sites can also be controlled via a CMS. Once a change in the CMS is made, a new build of your site will be triggered and then deployed as static assets.

Examples:

- Netlify CMS
- Contentful
- Ghost
- Strapi

More examples [here](https://headlesscms.org/)
