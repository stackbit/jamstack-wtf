import React from 'react';
import { Chapter } from './Chapter';
import { Section, SectionTitle, SectionSubTitle } from './Section';

export function GettingStarted() {
  return (
    <Chapter title="Getting started" id="getting-started">
      <Section>
        <SectionTitle id="development">Development</SectionTitle>

        <p>
          However you decide to generate your HTML assets is up to you. The
          three most common approaches are:
        </p>
        <ol>
          <li>Hand coding the HTML</li>
          <li>Generating HTML files</li>
          <li>Frontend framework</li>
        </ol>

        <SectionSubTitle>Hand coding</SectionSubTitle>
        <p>
          Simple and effective method of writing HTML, it's ideal for super
          simple pages.
        </p>

        <SectionSubTitle>Static Site Generators</SectionSubTitle>
        <p>
          Most JAMstack sites are powered by a static site generator. There's no
          enforcement on which SSG you decide to use.
        </p>
        <ul>
          <li>Gatsby</li>
          <li>Next.js</li>
          <li>Hugo</li>
          <li>Eleventy</li>
          <li>Jekyll</li>
          <li>Middleman</li>
        </ul>

        <SectionSubTitle>Frontend Framework</SectionSubTitle>
        <p>
          Most frameworks don't output static HTML files, however it is possible
          to do that but it requires more tooling experience and maintainance.
        </p>
      </Section>

      <Section>
        <SectionTitle id="deployment">Deployment</SectionTitle>
        <p>
          Your built site needs to be hosted somewhere. There are great services
          that provides this for free and with ease.
        </p>
      </Section>
    </Chapter>
  );
}
