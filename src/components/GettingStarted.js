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
            Most Jamstack sites are powered by a static site generator. There's
            no enforcement on which SSG you decide to use.
          </SubSectionText>

          <Ul>
            <Li>
              <Link variant="ghost" title="Next.js" href="https://nextjs.org/">
                Next.js
              </Link>
            </Li>
            <Li>
              <Link
                variant="ghost"
                title="Gatsby"
                href="https://www.gatsbyjs.com/"
              >
                Gatsby
              </Link>
            </Li>
            <Li>
              <Link variant="ghost" title="Hugo" href="https://gohugo.io/">
                Hugo
              </Link>
            </Li>
          </Ul>
          <Box mt={[4, 5]}>
            <ReadMore href="https://jamstack.org/generators/">
              See more SSGs
            </ReadMore>
          </Box>

          <SubSectionTitle>Site Builders</SubSectionTitle>
          <SubSectionText>
            Tools that bring Jamstack to less technical users, while enabling
            developers to customize sites through modern tooling.
          </SubSectionText>

          <Ul>
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
              <Link
                variant="ghost"
                title="Builder.io"
                href="https://www.builder.io/"
              >
                Builder.io
              </Link>
            </Li>
            <Li>
              <Link
                variant="ghost"
                title="CloudCannon"
                href="https://cloudcannon.com/"
              >
                CloudCannon
              </Link>
            </Li>
          </Ul>
        </SubSection>
      </Section>

      <Section>
        <SectionTitle id="deployment">Deployment</SectionTitle>
        <Text as="p" size="5">
          Your built site needs to be hosted somewhere. There are great services
          that provide this for free and with ease.
        </Text>

        <Ul>
          <Li>
            <Link
              variant="ghost"
              title="Netlify"
              href="https://www.netlify.com/"
            >
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
              title="Digital Ocean"
              href="https://www.digitalocean.com/"
            >
              Digital Ocean
            </Link>
          </Li>
          <Li>
            <Link
              variant="ghost"
              title="Azure Static Web Apps"
              href="https://azure.microsoft.com/en-us/services/app-service/static/"
            >
              Azure Static Web Apps
            </Link>
          </Li>
        </Ul>
        <Box mt={[4, 5]}>
          <ReadMore href="https://www.tnd.dev/tools/hosting-deployment/">
            See more deployment services
          </ReadMore>
        </Box>
      </Section>

      <Section>
        <SectionTitle id="dynamic-parts">Dynamic parts</SectionTitle>
        <Text as="p" size="5">
          Jamstack websites don't have to be static. There are great services
          available to help bring some dynamic data to your product.
        </Text>

        <SubSection>
          <SubSectionTitle>Custom functions</SubSectionTitle>
          <SubSectionText>
            You can also abstract your own functions into reusable APIs.
          </SubSectionText>

          <Ul>
            <Li>
              <Link
                title="AWS lambda functions"
                href="https://aws.amazon.com/lambda/features/"
              >
                AWS lambda functions
              </Link>
            </Li>
            <Li>
              <Link
                title="Netlify Functions"
                href="https://functions.netlify.com/examples/"
              >
                Netlify Functions
              </Link>
            </Li>
          </Ul>

          <SubSectionTitle>Custom data</SubSectionTitle>
          <SubSectionText>
            As you add features to your site, you may want to store user
            profiles, shopping cart data, game levels, or other dynamic data.
            There are many DBaaS (database as a service) tools out there today.
          </SubSectionText>

          <Ul>
            <Li>
              <Link title="Fauna" href="https://fauna.com/">
                Fauna
              </Link>
            </Li>
            <Li>
              <Link title="Hasura" href="https://hasura.io/">
                Hasura
              </Link>
            </Li>
            <Li>
              <Link
                title="MongoDB Atlas"
                href="https://www.mongodb.com/cloud/atlas"
              >
                MongoDB Atlas
              </Link>
            </Li>
            <Li>
              <Link
                title="AWS DynamoDB"
                href="https://aws.amazon.com/dynamodb/"
              >
                AWS DynamoDB
              </Link>
            </Li>
            <Li>
              <Link title="Tigris" href="https://www.tigrisdata.com">
                Tigris
              </Link>
            </Li>
          </Ul>

          <SubSectionTitle>Comments</SubSectionTitle>
          <SubSectionText>
            Many Jamstack products have dynamic comment sections. These are
            typically used on blogs.
          </SubSectionText>

          <Ul>
            <Li>
              <Link
                title="Staticman"
                href="https://github.com/eduardoboucas/staticman"
              >
                Staticman
              </Link>
            </Li>
            <Li>
              <Link title="Disqus" href="https://disqus.com/">
                Disqus
              </Link>
            </Li>
          </Ul>

          <SubSectionTitle>Forms</SubSectionTitle>
          <SubSectionText>
            A great way to interact with your audience. Tools like Netlify
            support this by default, though there are other form-based services.
          </SubSectionText>

          <Ul>
            <Li>
              <Link
                title="Netlify Forms"
                href="https://www.netlify.com/products/forms/"
              >
                Netlify Forms
              </Link>
            </Li>
            <Li>
              <Link title="Getform" href="https://getform.io/">
                Getform
              </Link>
            </Li>
            <Li>
              <Link title="FormKeep" href="https://formkeep.com/">
                FormKeep
              </Link>
            </Li>
          </Ul>

          <SubSectionTitle>E-Commerce</SubSectionTitle>
          <SubSectionText>
            Setting up an online store on the Jamstack has never been easier.
          </SubSectionText>

          <Ul>
            <Li>
              <Link
                title="Shopify"
                href="https://www.shopify.com/plus/solutions/headless-commerce"
              >
                Shopify
              </Link>
            </Li>
            <Li>
              <Link title="Snipcart" href="https://snipcart.com/">
                Snipcart
              </Link>
            </Li>
            <Li>
              <Link title="Commerce Layer" href="https://commercelayer.io/">
                Commerce Layer
              </Link>
            </Li>
          </Ul>

          <SubSectionTitle>Search</SubSectionTitle>
          <SubSectionText>
            Rely on third party services to integrate a search functionality.
          </SubSectionText>

          <Ul>
            <Li>
              <Link title="Algolia" href="https://www.algolia.com/">
                Algolia
              </Link>
            </Li>
            <Li>
              <Link title="fuse.js" href="https://fusejs.io/">
                fuse.js
              </Link>
            </Li>
            <Li>
              <Link title="Lunr.js" href="https://lunrjs.com/">
                Lunr.js
              </Link>
            </Li>
          </Ul>
        </SubSection>
        <Box mt={[4, 5]}>
          <ReadMore href="https://github.com/agarrharr/awesome-static-website-services">
            See more static services
          </ReadMore>
        </Box>
      </Section>

      <Section hideDivider>
        <SectionTitle id="cms">CMS</SectionTitle>
        <Text as="p" size="5">
          Jamstack sites can also be controlled via a Content Management System,
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
              href="https://www.contentful.com/"
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
              href="https://ghost.org/docs/content-api/"
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
            <Link variant="ghost" title="Kontent" href="https://kontent.ai/">
              Kontent
            </Link>
          </Li>
          <Li>
            <Link variant="ghost" title="GraphCMS" href="https://graphcms.com/">
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
          <ReadMore href="https://jamstack.org/headless-cms/">
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
