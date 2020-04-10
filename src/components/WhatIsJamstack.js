import React from 'react';
import { Chapter } from './Chapter';
import { Box, Text, Link } from '@peduarte/wallop-system';
import {
  Section,
  SectionTitle,
  SubSectionTitle,
  SubSection,
  SubSectionText,
} from './Section';
import { ReadMore } from './ReadMore';
import { JamDiagram } from './JamDiagram';
import { TimelineDiagram } from './TimelineDiagram';
import { WorkflowDiagram } from './WorkflowDiagram';

export function WhatIsJamstack() {
  return (
    <Chapter
      title="What is JAMstack"
      id="what-is-jamstack"
      sx={{
        bg: 'black',
        color: 'white',
      }}
    >
      <Section>
        <SectionTitle id="meaning">Meaning</SectionTitle>
        <Text as="p" size="5">
          JAM stands for JavaScript, API &amp; Markup.
        </Text>

        <Text
          as="blockquote"
          my={[4, 5]}
          pl={[4, 5]}
          size="5"
          sx={{ color: 'gray' }}
        >
          "A modern web development architecture based on client-side
          JavaScript, reusable APIs, and prebuilt Markup"
          <Text as="p" size="2" mt={3}>
            — Mathias Biilmann (CEO & Co-founder of Netlify).
          </Text>
        </Text>

        <JamDiagram />

        <SubSection>
          <SubSectionTitle>JavaScript</SubSectionTitle>
          <SubSectionText>
            Dynamic functionalities are handled by JavaScript. There is no
            restriction on which framework or library you must use.
          </SubSectionText>

          <SubSectionTitle>APIs</SubSectionTitle>
          <SubSectionText>
            Server side operations are abstracted into reusable APIs and
            accessed over HTTPS with JavaScript. These can be third party
            services or your custom function.
          </SubSectionText>

          <SubSectionTitle>Markup</SubSectionTitle>
          <SubSectionText>
            Websites are served as static HTML files. These can be generated
            from source files, such as Markdown, using a Static Site Generator.
          </SubSectionText>
        </SubSection>
      </Section>

      <Section>
        <SectionTitle id="benefits">Benefits</SectionTitle>
        <Text as="p" size="5">
          Here are the main benefits provided by the JAMstack
        </Text>

        <SubSection>
          <SubSectionTitle>Faster performance</SubSectionTitle>
          <SubSectionText>
            Serve pre-built markup and assets over a CDN
          </SubSectionText>

          <SubSectionTitle>More secure</SubSectionTitle>
          <SubSectionText>
            No need to worry about server or database vulnerabilities
          </SubSectionText>

          <SubSectionTitle>Less expensive</SubSectionTitle>
          <SubSectionText>
            Hosting of static files are cheap or{' '}
            <Link href="https://netlify.com" color="pink">
              even free
            </Link>
          </SubSectionText>

          <SubSectionTitle>Better developer experience</SubSectionTitle>
          <SubSectionText>
            Front end developers can focus on the front end, without being tied
            to a monolithic architecture. This usually means quicker and more
            focused development
          </SubSectionText>

          <SubSectionTitle>Scalability</SubSectionTitle>
          <SubSectionText>
            If your product suddenly goes viral and has many active users, the
            CDN seamlessly compensates
          </SubSectionText>
        </SubSection>
      </Section>

      <Section>
        <SectionTitle id="best-practices">Best practices</SectionTitle>
        <Text as="p" size="5">
          The following tips will help you leverage the best out of the stack.
        </Text>

        <SubSection>
          <SubSectionTitle>Content delivery network</SubSectionTitle>
          <SubSectionText>
            Since all the markup and assets are pre-built, they can be served
            via CDN. This provides better performance and easier scalability.
          </SubSectionText>
          <ReadMore
            title="Read more about CDN"
            href="https://www.cloudflare.com/learning/cdn/what-is-a-cdn/"
          >
            Learn more
          </ReadMore>

          <SubSectionTitle>Atomic deploys</SubSectionTitle>
          <SubSectionText>
            Each deploy is a full snapshot of the site. This helps guarantee a
            consistent version of the site globally.
          </SubSectionText>
          <ReadMore
            title="Read more about atomic deploys"
            href="https://buddy.works/blog/introducing-atomic-deployments#what-are-atomic-deployments"
          >
            Learn more
          </ReadMore>

          <SubSectionTitle>Cache invalidation</SubSectionTitle>
          <SubSectionText>
            Once your build is uploaded, the CDN invalidates its cache. This
            means that your new build is live in an instant.
          </SubSectionText>
          <ReadMore
            title="Read more about cache invalidation"
            href="https://www.netlify.com/blog/2015/09/11/instant-cache-invalidation/"
          >
            Learn more
          </ReadMore>

          <SubSectionTitle>Everything in version control</SubSectionTitle>
          <SubSectionText>
            Your codebase lives in Version Control System, such as Git. The main
            benefits are: change history of every file, collaborators and
            traceability.
          </SubSectionText>
          <ReadMore
            title="Read more about version control"
            href="https://www.atlassian.com/git/tutorials/what-is-version-control"
          >
            Learn more
          </ReadMore>

          <SubSectionTitle>Automated builds</SubSectionTitle>
          <SubSectionText>
            Your server is notified when a new build is required, typically via
            webhooks. Server builds the project, updates the CDNs and the site
            is live.
          </SubSectionText>
          <ReadMore
            title="Read more about automated builds"
            href="https://www.agilealliance.org/glossary/automated-build"
          >
            Learn more
          </ReadMore>
        </SubSection>
      </Section>

      <Section>
        <SectionTitle id="workflow">Workflow</SectionTitle>
        <Text as="p" size="5">
          Here's how an ideal JAMstack workflow would look like
        </Text>

        <WorkflowDiagram />
      </Section>

      <Section hideDivider>
        <SectionTitle id="timeline">Timeline</SectionTitle>
        <Text as="p" size="5">
          A brief history of stack shows its growth in popularity
        </Text>

        <TimelineDiagram />

        <Box fontSize={['1', '3']} mt={[4, 5]}>
          <ReadMore href="https://snipcart.com/blog/jamstack">
            Source: SnipCart
          </ReadMore>
        </Box>
      </Section>
    </Chapter>
  );
}
