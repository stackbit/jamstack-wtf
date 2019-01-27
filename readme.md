# jamstack-cheatsheet

A straight-to-the-point guide to help you get on the JAMstack.

## Table of Contents

- What is JAMstack
  - Meaning
  - Best Practices
  - Timeline
  - Workflow
  - Benefits
- Getting Started
  - Development
  - Deployment
  - Dynamic parts
  - CMS
- Resources
- Examples
- Contribute

## What is JAMstack

### Meaning

JAM stands for Javascript, API & Markup. The term JAMstack was popularised by [Mathias Biilmann](https://twitter.com/biilmann) (CEO & Co-founder of Netlify) to describe "a modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup".

Let's look a bit closer into what each of those pilars mean.

#### Javascript

Dynamic functionalities are handled by Javascript. There is no restriction on which framework or library you must use.

#### APIs

Server side operations are abstracted into reusable APIs and accessed over HTTPS with Javascript. These can be third party services or your custom function.

#### Markup

Web sites are served as static HTML files. These can be generated from source files, such as Markown, using a Static Site Generator.

### Best practices

#### Content Delivery Network

Since all the markup and assets are pre-built, they can be served via CDN. This provides better performance and easier scalibility.

#### Atomic deploys

Each deploy is a full snapshot of the site. This helps guarantee a consistent version of the site globally.

#### Cache invalidation

Once your build is uploaded, the CDN invalidates its cache. This means that your new build is live in an instant.

More information [here](https://www.netlify.com/blog/2015/09/11/instant-cache-invalidation/).

#### Everything in version control

Your codebase lives in Version Control System, such as Git. The main benefits are: change history of every file, collaborators and traceability.

More information [here](https://www.atlassian.com/git/tutorials/what-is-version-control).

#### Automated builds

Your server is notified when a new build is required, typically via webhooks. Server builds the project, updates the CDNs and the site is live.

### Timeline

When was the term coined and where are we not?

- 2015: Static sites are becoming popular due to the popularity of certain SSG such as Jekyll
- 2016: A small group of developers believe that Static sites don't have to be static and the term "JAMstack" comes to life
- 2017: The modern web revolution starts prioritising the importance of performance, scalability and developer experience. The term JAMstack starts to be adopted by a wider group of developers and the first enterprise JAMStack projects are announced.
- 2018: Tool likes Netlify, Gatsby and Contentful have helped promote the term and the community is rapidly growing. This was also the year of the first JAMStack Conference.

Source: [SnipCart](https://snipcart.com/blog/jamstack)

### Workflow

### Benefits

Below are some of the key benefits of a JAMstack site

- Faster perfornance: serve pre-built markup and assets over a CDN
- More secure: no need to worry about server or database vulnerabilities
- Less expensive: hosting of static files are cheap or [even free](https://netlify.com)
- Better developer experience: frond end developers can focus on the front end, without being tight to a monolithic architecture. This usually means quicker and more focused development
- Scalability: if you're product suddenly goes viral and has many active users, the CDN seamlessly compensates

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

## Contribute

Please contribute to keep this document up-to-date and relevant with new up and coming technlogies. Refer to [Contributing](./contributing.md)
