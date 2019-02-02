import React from 'react';
import { Chapter } from './Chapter';
import { color } from '../styles/colors';
import { Box, Text } from 'rebass';
import { Section, SectionTitle, SectionSubTitle } from './Section';
import { ReadMore } from './ReadMore';
import { JamDiagram } from './JamDiagram';
import { TimelineDiagram } from './TimelineDiagram';
import { WorkflowDiagram } from './WorkflowDiagram';

export function WhatIsJamstack() {
  return (
    <Chapter
      title="What is JAMstack"
      id="what-is-jamstack"
      bg={color.black}
      color="white"
    >
      <Section>
        <SectionTitle id="meaning">Meaning</SectionTitle>
        <p>
          JAM stands for Javascript, API &amp; Markup. The term JAMstack was
          popularised by{' '}
          <a
            title="Mathias Biilmann's Twitter"
            href="https://twitter.com/biilmann"
          >
            Mathias Biilmann
          </a>{' '}
          (CEO &amp; Co-founder of Netlify) to describe "a modern web
          development architecture based on client-side JavaScript, reusable
          APIs, and prebuilt Markup".
        </p>

        <JamDiagram />

        <SectionSubTitle>Javascript</SectionSubTitle>
        <p>
          Dynamic functionalities are handled by Javascript. There is no
          restriction on which framework or library you must use.
        </p>

        <SectionSubTitle>APIs</SectionSubTitle>
        <p>
          Server side operations are abstracted into reusable APIs and accessed
          over HTTPS with Javascript. These can be third party services or your
          custom function.
        </p>

        <SectionSubTitle>Markup</SectionSubTitle>
        <p>
          Web sites are served as static HTML files. These can be generated from
          source files, such as Markown, using a Static Site Generator.
        </p>
      </Section>

      <Section>
        <SectionTitle id="best-practices">Best practices</SectionTitle>

        <SectionSubTitle>Content delivery network</SectionSubTitle>
        <p>
          Since all the markup and assets are pre-built, they can be served via
          CDN. This provides better performance and easier scalibility.
        </p>

        <SectionSubTitle>Atomic deploys</SectionSubTitle>
        <p>
          Each deploy is a full snapshot of the site. This helps guarantee a
          consistent version of the site globally.
        </p>

        <SectionSubTitle>Cache invalidation</SectionSubTitle>
        <p>
          Once your build is uploaded, the CDN invalidates its cache. This means
          that your new build is live in an instant.
        </p>
        <ReadMore
          title="Read more about cache invalidation"
          href="https://www.netlify.com/blog/2015/09/11/instant-cache-invalidation/"
        >
          Learn more
        </ReadMore>

        <SectionSubTitle>Everything in version control</SectionSubTitle>
        <p>
          Your codebase lives in Version Control System, such as Git. The main
          benefits are: change history of every file, collaborators and
          traceability.
        </p>
        <ReadMore
          title="Read more about version control"
          href="https://www.atlassian.com/git/tutorials/what-is-version-control"
        >
          Learn more
        </ReadMore>

        <SectionSubTitle>Automated builds</SectionSubTitle>
        <p>
          Your server is notified when a new build is required, typically via
          webhooks. Server builds the project, updates the CDNs and the site is
          live.
        </p>
      </Section>

      <Section>
        <SectionTitle id="timeline">Timeline</SectionTitle>

        <TimelineDiagram />

        <Box fontSize={[1, 3]} mt={[4, 5]}>
          <ReadMore href="https://snipcart.com/blog/jamstack">
            Source: SnipCart
          </ReadMore>
        </Box>
      </Section>

      <Section>
        <SectionTitle id="workflow">Workflow</SectionTitle>

        <WorkflowDiagram />
      </Section>

      <Section hideDivider>
        <SectionTitle id="benefits">Benefits</SectionTitle>

        <SectionSubTitle>Faster performance</SectionSubTitle>
        <p>Serve pre-built markup and assets over a CDN</p>

        <SectionSubTitle>More secure</SectionSubTitle>
        <p>No need to worry about server or database vulnerabilities</p>

        <SectionSubTitle>Less expensive</SectionSubTitle>
        <p>
          Hosting of static files are cheap or{' '}
          <a href="https://netlify.com">even free</a>
        </p>

        <SectionSubTitle>Better developer experience</SectionSubTitle>
        <p>
          Front end developers can focus on the front end, without being tight
          to a monolithic architecture. This usually means quicker and more
          focused development
        </p>

        <SectionSubTitle>Scalability</SectionSubTitle>
        <p>
          If you're product suddenly goes viral and has many active users, the
          CDN seamlessly compensates
        </p>
      </Section>
    </Chapter>
  );
}
