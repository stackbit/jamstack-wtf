import React from 'react';
import { Text, Link } from '@peduarte/wallop-system';
import { Chapter } from './Chapter';
import { Section, SubSectionTitle, SubSection } from './Section';
import { Ul, Li } from './SimpleList';

export function Resources() {
  return (
    <Chapter
      title="Resources"
      id="resources"
      sx={{ bg: 'black', color: 'white' }}
    >
      <Section hideDivider>
        <Text as="p" size="5">
          Here's a list of hand-picked JAMstack resources ranging from learning
          materials to third party services.
        </Text>

        <SubSection>
          <SubSectionTitle>Services</SubSectionTitle>
          <Ul>
            <Li>
              <Link
                variant="ghost"
                href="https://github.com/agarrharr/awesome-static-website-services"
              >
                Awesome Static Website Services
              </Link>
            </Li>
            <Li>
              <Link variant="ghost" href="https://headlesscms.org/">
                A List of Content Management Systems for JAMstack Sites
              </Link>
            </Li>
            <Li>
              <Link variant="ghost" href="https://www.staticgen.com/">
                A List of Static Site Generators for JAMstack Sites
              </Link>
            </Li>
            <Li>
              <Link variant="ghost" href="https://jamstackthemes.dev/">
                A List of Themes and Starters for JAMstack Sites
              </Link>
            </Li>
            <Li>
              <Link variant="ghost" href="https://www.thenewdynamic.org/tool/">
                A curated collection of tools and services
              </Link>
            </Li>
          </Ul>
        </SubSection>

        <SubSection>
          <SubSectionTitle>Articles</SubSectionTitle>
          <Ul>
            <Li>
              <Link variant="ghost" href="https://snipcart.com/blog/jamstack">
                New to JAMstack? Everything You Need to Know to Get Started
              </Link>
            </Li>
            <Li>
              <Link
                variant="ghost"
                href="https://www.quora.com/What-is-the-concept-behind-JAMstack"
              >
                What is the concept behind JAMstack
              </Link>
            </Li>
            <Li>
              <Link
                variant="ghost"
                href="https://bejamas.io/blog/jamstack/"
              >
                JAMstack modern web development
              </Link>
            </Li>
            <Li>
              <Link
                variant="ghost"
                href="https://www.netlify.com/blog/2017/03/16/smashing-magazine-just-got-10x-faster/"
              >
                Smashing Magazine just got 10x faster
              </Link>
            </Li>
            <Li>
              <Link variant="ghost" href="https://blog.ghost.org/jamstack/">
                Ghost on the JAMstack
              </Link>
            </Li>
            <Li>
              <Link
                variant="ghost"
                href="https://medium.com/netlify/jamstack-with-gatsby-netlify-and-netlify-cms-a300735e2c5d"
              >
                JAMstack with Gatsby, Netlify and Netlify CMS
              </Link>
            </Li>
                <Li>
              <Link
                variant="ghost"
                href="https://bejamas.io/blog/jamstack-ecosystem/"
              >
                Jamstack Ecosystem
              </Link>
            </Li>
          </Ul>
        </SubSection>

        <SubSection>
          <SubSectionTitle>Videos</SubSectionTitle>
          <Ul>
            <Li>
              <Link
                variant="ghost"
                href="https://www.youtube.com/watch?v=uWTMEDEPw8c"
              >
                The Rise of the JAMstack talk by Mathias Biilmann
              </Link>
            </Li>
            <Li>
              <Link variant="ghost" href="https://vimeo.com/163522126">
                The New Front-end Stack talk by Mathias Biilmann
              </Link>
            </Li>
            <Li>
              <Link variant="ghost" href="https://www.thenewdynamic.org/video/">
                The New Dynamic curated videos
              </Link>
            </Li>
            <Li>
              <Link
                variant="ghost"
                href="https://www.youtube.com/watch?v=e5H7CI3yqPY"
              >
                How freeCodeCamp Serves Millions of Learners Using the JAMstack
              </Link>
            </Li>
          </Ul>
        </SubSection>

        <SubSection>
          <SubSectionTitle>Books</SubSectionTitle>
          <Ul>
            <Li>
              <Link
                variant="ghost"
                href="https://www.netlify.com/oreilly-jamstack/"
              >
                Modern Web Development on the JAMstack (O'Reilly, 2019)
              </Link>
            </Li>
            <Li>
              <Link
                variant="ghost"
                href="http://shop.oreilly.com/product/0636920051879.do"
              >
                Working with Static Sites (O'Reilly, 2017)
              </Link>
            </Li>
          </Ul>
        </SubSection>

        <SubSection>
          <SubSectionTitle>Podcast</SubSectionTitle>
          <Ul>
            <Li>
              <Link
                variant="ghost"
                href="https://www.heavybit.com/library/podcasts/jamstack-radio/"
              >
                JAMstack Radio
              </Link>
            </Li>
          </Ul>
        </SubSection>

        <SubSection>
          <SubSectionTitle>Report</SubSectionTitle>
          <Ul>
            <Li>
              <Link
                variant="ghost"
                href="https://tracker.kontent.ai/942894/the-state-of-jamstack-report-2020"
              >
                The State of Jamstack 2020 Report
              </Link>
            </Li>
          </Ul>
        </SubSection>

        <SubSection>
          <SubSectionTitle>Community</SubSectionTitle>
          <Ul>
            <Li>
              <Link variant="ghost" href="https://www.jamstack.org/slack">
                JAMstack community Slack
              </Link>
            </Li>
          </Ul>
        </SubSection>
      </Section>
    </Chapter>
  );
}
