import React from 'react';
import { Box, Text, Link } from '@peduarte/wallop-system';
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
        <Text as="p" size="5">
          However you decide to generate your HTML assets is up to you. The
          three most common approaches are:
        </Text>

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
              <Link
                variant="ghost"
                title="Gatsby"
                href="https://www.gatsbyjs.org/"
              >
                Gatsby
              </Link>
            </Li>
            <Li>
              <Link variant="ghost" title="Next.js" href="https://nextjs.org/">
                Next.js
              </Link>
            </Li>
            <Li>
              <Link variant="ghost" title="Hugo" href="https://gohugo.io/">
                Hugo
              </Link>
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
              <Link variant="ghost" title="React" href="http://reactjs.org">
                React
              </Link>
            </Li>
            <Li>
              <Link variant="ghost" title="Vue.js" href="https://vuejs.org/">
                Vue.js
              </Link>
            </Li>
            <Li>
              <Link variant="ghost" title="Preact" href="https://preactjs.com/">
                Preact
              </Link>
            </Li>
          </Ul>
        </SubSection>
      </Section>

      <Section>
        <SectionTitle id="deployment">Deployment</SectionTitle>
        <Text as="p" size="5">
          Your built site needs to be hosted somewhere. There are great services
          that provides this for free and with ease.
        </Text>

        <Ul>
          <Li>
            <Link variant="ghost" title="Netlify" href="https://netlify.com">
              Netlify
            </Link>
          </Li>
          <Li>
            <Link variant="ghost" title="Vercel" href="https://vercel.com/">
              Vercel
            </Link>
          </Li>
          <Li>
            <Link
              variant="ghost"
              title="Github Pages"
              href="https://pages.github.com/"
            >
              Github Pages
            </Link>
          </Li>
          <Li>
            <Link
              variant="ghost"
              title="Stackbit"
              href="https://www.stackbit.com/"
            >
              Stackbit
            </Link>
          </Li>
          <Li>
            <Link variant="ghost" title="Meli" href="https://github.com/getmeli/meli">
              Meli
            </Link>
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
        <Text as="p" size="5">
          JAMstack websites don't have to be static. There are great services
          available to help bring some dynamic data to your product.
        </Text>

        <SubSection>
          <SubSectionTitle>Custom functions</SubSectionTitle>
          <SubSectionText>
            You can also abstract your own functions into reusable APIs. For
            this you can use{' '}
            <Link
              color="pink"
              title="AWS lambda functions"
              href="https://aws.amazon.com/lambda/features/"
            >
              AWS lambda functions
            </Link>{' '}
            or{' '}
            <Link
              color="pink"
              title="Netlify Functions"
              href="https://functions.netlify.com/examples/"
            >
              Netlify Functions
            </Link>
          </SubSectionText>

          <SubSectionTitle>Custom data</SubSectionTitle>
          <SubSectionText>
            As you add features to your site, you may want to store user
            profiles, shopping cart data, game levels, or other dynamic data.
            Get started for free with{' '}
            <Link
              color="pink"
              title="FaunaDB Serverless GraphQL"
              href="https://fauna.com/"
            >
              FaunaDB Serverless GraphQL
            </Link>
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
        <Text as="p" size="5">
          JAMstack sites can also be controlled via a Content Management System,
          these are typically known as Headless CMS. Once a change in the CMS is
          made, a new build of your site will be triggered and then deployed as
          static assets.
        </Text>

        <Ul>
          <Li>
            <Link
              variant="ghost"
              title="Netlify CMS"
              href="https://www.netlifycms.org/"
            >
              Netlify CMS
            </Link>
          </Li>
          <Li>
            <Link
              variant="ghost"
              title="Contentful"
              href="http://contentful.com"
            >
              Contentful
            </Link>
          </Li>
          <Li>
            <Link
              variant="ghost"
              title="Headless WordPress"
              href="https://developer.wordpress.org/rest-api/"
            >
              Headless WordPress
            </Link>
          </Li>
          <Li>
            <Link
              variant="ghost"
              title="Ghost"
              href="https://docs.ghost.org/api/content/"
            >
              Ghost
            </Link>
          </Li>
          <Li>
            <Link variant="ghost" title="Strapi" href="https://strapi.io/">
              Strapi
            </Link>
          </Li>
          <Li>
            <Link variant="ghost" title="Forestry" href="https://forestry.io/">
              Forestry
            </Link>
          </Li>
          <Li>
            <Link variant="ghost" title="Sanity" href="https://www.sanity.io/">
              Sanity.io
            </Link>
          </Li>
          <Li>
            <Link
              variant="ghost"
              title="Kontent"
              href="https://www.kontent.ai/"
            >
              Kontent
            </Link>
          </Li>
          <Li>
            <Link variant="ghost" title="GraphCMS" href="http://graphcms.com">
              GraphCMS
            </Link>
          </Li>
          <Li>
            <Link
              variant="ghost"
              title="TakeShape"
              href="https://www.takeshape.io/"
            >
              TakeShape
            </Link>
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

const ListItem = props => (
  <Text as="li" {...props} sx={{ borderBottom: '1px solid', ...props.sx }} />
);
