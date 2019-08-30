import React from 'react';
import { Chapter } from './Chapter';
import { color } from '../styles/colors';
import { Section, SubSectionTitle, SubSection } from './Section';
import { Ul, Li } from './SimpleList';

export function Resources() {
  return (
    <Chapter title="Resources" id="resources" bg={color.black} color="white">
      <Section hideDivider>
        <p>
          Here's a list of hand-picked JAMstack resources ranging from learning
          materials to third party services.
        </p>

        <SubSection>
          <SubSectionTitle>Services</SubSectionTitle>
          <Ul>
            <Li>
              <a href="https://github.com/agarrharr/awesome-static-website-services">
                Awesome Static Website Services
              </a>
            </Li>
            <Li>
              <a href="https://headlesscms.org/">
                A List of Content Management Systems for JAMstack Sites
              </a>
            </Li>
            <Li>
              <a href="https://www.staticgen.com/">
                A List of Static Site Generators for JAMstack Sites
              </a>
            </Li>
            <Li>
              <a href="https://www.thenewdynamic.org/tool/">
                A curated collection of tools and services
              </a>
            </Li>
          </Ul>
        </SubSection>

        <SubSection>
          <SubSectionTitle>Articles</SubSectionTitle>
          <Ul>
            <Li>
              <a href="https://snipcart.com/blog/jamstack">
                New to JAMstack? Everything You Need to Know to Get Started
              </a>
            </Li>
            <Li>
              <a href="https://www.quora.com/What-is-the-concept-behind-JAMstack">
                What is the concept behind JAMstack
              </a>
            </Li>
            <Li>
              <a href="https://bejamas.io/blog/jamstack-modern-web-development/">
                JAMstack modern web development
              </a>
            </Li>
            <Li>
              <a href="https://www.netlify.com/blog/2017/03/16/smashing-magazine-just-got-10x-faster/">
                Smashing Magazine just got 10x faster
              </a>
            </Li>
            <Li>
              <a href="https://blog.ghost.org/jamstack/">
                Ghost on the JAMstack
              </a>
            </Li>
            <Li>
              <a href="https://medium.com/netlify/jamstack-with-gatsby-netlify-and-netlify-cms-a300735e2c5d">
                JAMstack with Gatsby, Netlify and Netlify CMS
              </a>
            </Li>
          </Ul>
        </SubSection>

        <SubSection>
          <SubSectionTitle>Videos</SubSectionTitle>
          <Ul>
            <Li>
              <a href="https://www.youtube.com/watch?v=uWTMEDEPw8c">
                The Rise of the JAMstack talk by Mathias Biilmann
              </a>
            </Li>
            <Li>
              <a href="https://vimeo.com/163522126">
                The New Front-end Stack talk by Mathias Biilmann
              </a>
            </Li>
            <Li>
              <a href="https://www.thenewdynamic.org/video/">
                The New Dynamic curated videos
              </a>
            </Li>
            <Li>
              <a href="https://www.youtube.com/watch?v=e5H7CI3yqPY">
                How freeCodeCamp Serves Millions of Learners Using the JAMstack
              </a>
            </Li>
          </Ul>
        </SubSection>

        <SubSection>
          <SubSectionTitle>Podcast</SubSectionTitle>
          <Ul>
            <Li>
              <a href="https://www.heavybit.com/library/podcasts/jamstack-radio/">
                JAMstack Radio
              </a>
            </Li>
          </Ul>
        </SubSection>
    
        <SubSection>
          <SubSectionTitle>Community</SubSectionTitle>
          <Ul>
            <Li>
              <a href="https://www.jamstack.org/slack">
                JAMstack community Slack
              </a>
            </Li>
          </Ul>
        </SubSection>
    
      </Section>
    </Chapter>
  );
}
