---
name: what-is-jamstack
---

# What is JAMstack

## Meaning

JAM stands for Javascript, API & Markup. The term JAMstack was popularised by [Mathias Biilmann](https://twitter.com/biilmann) (CEO & Co-founder of Netlify) to describe "a modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup".

Let's look a bit closer into what each of those pilars mean.

### Javascript

Dynamic functionalities are handled by Javascript. There is no restriction on which framework or library you must use.

### APIs

Server side operations are abstracted into reusable APIs and accessed over HTTPS with Javascript. These can be third party services or your custom function.

### Markup

Web sites are served as static HTML files. These can be generated from source files, such as Markown, using a Static Site Generator.

## Best practices

#### Content Delivery Network

Since all the markup and assets are pre-built, they can be served via CDN. This provides better performance and easier scalibility.

#### Atomic deploys

Each deploy is a full snapshot of the site. This helps guarantee a consistent version of the site globally.

### Cache invalidation

Once your build is uploaded, the CDN invalidates its cache. This means that your new build is live in an instant.

More information [here](https://www.netlify.com/blog/2015/09/11/instant-cache-invalidation/).

### Everything in version control

Your codebase lives in Version Control System, such as Git. The main benefits are: change history of every file, collaborators and traceability.

More information [here](https://www.atlassian.com/git/tutorials/what-is-version-control).

### Automated builds

Your server is notified when a new build is required, typically via webhooks. Server builds the project, updates the CDNs and the site is live.
