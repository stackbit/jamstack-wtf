import React from 'react';
import styled from 'styled-components';
import { Box, Text } from 'rebass';
import { Chapter } from './Chapter';
import {
  Section,
  SectionTitle,
  SubSection,
  SubSectionTitle,
  SubSectionText,
} from './Section';
import { ReadMore } from './ReadMore';
import { Ul, Li } from './SimpleList';

export function GettingStarted() {
  return (
    <Chapter title="Getting started" id="getting-started">
      <Section>
        <SectionTitle id="development">Development</SectionTitle>
        <p>
          However you decide to generate your HTML assets is up to you. The
          three most common approaches are:
        </p>

        <SubSection>
          <SubSectionTitle>Hand coding</SubSectionTitle>
          <SubSectionText>
            Simple and effective method of writing HTML, it's ideal for super
            simple pages.
          </SubSectionText>

          <SubSectionTitle>Static Site Generators</SubSectionTitle>
          <SubSectionText>
            Most JAMstack sites are powered by a static site generator. There's
            no enforcement on which SSG you decide to use.
          </SubSectionText>

          <Ul>
            <Li>
              <a title="Gatsby" href="https://www.gatsbyjs.org/">
                Gatsby
              </a>
            </Li>
            <Li>
              <a title="Next.js" href="https://nextjs.org/">
                Next.js
              </a>
            </Li>
            <Li>
              <a title="Hugo" href="https://gohugo.io/">
                Hugo
              </a>
            </Li>
          </Ul>
          <Box mt={[4, 5]}>
            <ReadMore href="https://www.staticgen.com/">See more SSGs</ReadMore>
          </Box>

          <SubSectionTitle>Frontend Framework</SubSectionTitle>
          <SubSectionText>
            Most frameworks don't output static HTML files, however it is
            possible to do that but it requires more tooling experience and
            maintenance.
          </SubSectionText>
          <Ul>
            <Li>
              <a title="React" href="http://reactjs.org">
                React
              </a>
            </Li>
            <Li>
              <a title="Vue.js" href="https://vuejs.org/">
                Vue.js
              </a>
            </Li>
            <Li>
              <a title="Preact" href="https://preactjs.com/">
                Preact
              </a>
            </Li>
          </Ul>
        </SubSection>
      </Section>

      <Section>
        <SectionTitle id="deployment">Deployment</SectionTitle>
        <p>
          Your built site needs to be hosted somewhere. There are great services
          that provides this for free and with ease.
        </p>

        <Ul>
          <Li>
            <a title="Netlify" href="https://netlify.com">
              Netlify
            </a>
          </Li>
          <Li>
            <a title="Zeit" href="https://zeit.co/">
              Zeit
            </a>
          </Li>
          <Li>
            <a title="Github Pages" href="https://pages.github.com/">
              Github Pages
            </a>
          </Li>
        </Ul>
        <Box mt={[4, 5]}>
          <ReadMore href="https://www.thenewdynamic.org/tools/hosting-deployment/">
            See more deployment services
          </ReadMore>
        </Box>
      </Section>

      <Section>
        <SectionTitle id="dynamic-parts">Dynamic parts</SectionTitle>
        <p>
          JAMstack websites don't have to be static. There are great services
          available to help bring some dynamic data to your product.
        </p>

        <SubSection>
          <SubSectionTitle>Custom functions</SubSectionTitle>
          <SubSectionText>
            You can also abstract your own functions into reusable APIs. For
            this you can use{' '}
            <a
              title="AWS lambda functions"
              href="https://aws.amazon.com/lambda/features/"
            >
              AWS lambda functions
            </a>{' '}
            or{' '}
            <a
              title="Netlify Functions"
              href="https://functions.netlify.com/examples/"
            >
              Netlify Functions
            </a>
          </SubSectionText>
    
          <SubSectionTitle>Custom data</SubSectionTitle>
          <SubSectionText>
            As you add features to your site, you may want to store user profiles, 
            shopping cart data, game levels, or other dynamic data. Get started for
            free with{' '}
            <a
              title="FaunaDB Serverless GraphQL"
              href="https://fauna.com/"
            >
              FaunaDB Serverless GraphQL
            </a>
          </SubSectionText>

          <SubSectionTitle>Comments</SubSectionTitle>
          <SubSectionText>
            Many JAMstack products have dynamic comment sections. These are
            typically used on blogs
          </SubSectionText>

          <SubSectionTitle>Forms</SubSectionTitle>
          <SubSectionText>
            A great way to interact with your audience
          </SubSectionText>

          <SubSectionTitle>E-Commerce</SubSectionTitle>
          <SubSectionText>
            Setting up an online store on the JAMstack has never been easier
          </SubSectionText>

          <SubSectionTitle>Search</SubSectionTitle>
          <SubSectionText>
            Rely on third party services to integrate a search functionality
          </SubSectionText>
        </SubSection>
        <Box mt={[4, 5]}>
          <ReadMore href="https://github.com/agarrharr/awesome-static-website-services#e-commerce">
            See more static services
          </ReadMore>
        </Box>
      </Section>

      <Section hideDivider>
        <SectionTitle id="cms">CMS</SectionTitle>
        <p>
          JAMstack sites can also be controlled via a Content Management System,
          these are typically known as Headless CMS. Once a change in the CMS is
          made, a new build of your site will be triggered and then deployed as
          static assets.
        </p>

        <Ul>
          <Li>
            <a title="Netlify CMS" href="https://www.netlifycms.org/">
              Netlify CMS
            </a>
          </Li>
          <Li>
            <a title="Contentful" href="http://contentful.com">
              Contentful
            </a>
          </Li>
          <Li>
            <a
              title="Headless WordPress"
              href="https://developer.wordpress.org/rest-api/"
            >
              Headless WordPress
            </a>
          </Li>
          <Li>
            <a title="Ghost" href="https://docs.ghost.org/api/content/">
              Ghost
            </a>
          </Li>
          <Li>
            <a title="Strapi" href="https://strapi.io/">
              Strapi
            </a>
          </Li>
          <Li>
            <a title="Forestry" href="https://forestry.io/">
              Forestry
            </a>
          </Li>    
        </Ul>
        <Box mt={[4, 5]}>
          <ReadMore href="https://headlesscms.org/">
            See more CMS services
          </ReadMore>
        </Box>
      </Section>
    </Chapter>
  );
}

const ListItem = styled(Text)`
  border-bottom: 1px solid;
`;
ListItem.defaultProps = {
  as: 'li',
};
