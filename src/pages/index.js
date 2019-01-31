import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Flex, Box, Card, Text } from 'rebass';
import Layout from '../components/Layout';
import { J, A, M } from '../icons';

export const black = '#161314';
export const grey = '#999999';
export const red = '#eb473d';
export const yellow = '#f0cd21';
export const green = '#4ca741';
export const blue = '#478cd4';
export const pink = '#e88ea4';
export const orange = '#ff871d';
export const turq = '#00f4c5';

const rotate = keyframes`
	0% {
		transform: rotate(0)
	}
	100% {
		transform: rotate(360deg)
	}
`;

export default function() {
  return (
    <Layout>
      <Box p={[4, 5]} bg={black} color="white">
        <Flex flexWrap="wrap">
          <Text as="h1" fontSize={[2, 3]} mr="2" flex="0 0 auto">
            JAMstack
          </Text>
          <Text as="h2" fontSize={[2, 3]} color={grey} flex="0 0 auto">
            Cheatsheet
          </Text>
        </Flex>
        <Box my={[5, 6]} style={{ maxWidth: '720px' }} fontSize={[3, 5]}>
          <Text as="p">
            JAMstack is revolutionising the way we think about workflow by
            providing a simpler developer experience, performance, cost and
            scalability.
          </Text>
          <Text mt="5">
            This simple guide will help you understand why it exists and how to
            get started.
          </Text>
        </Box>
      </Box>

      <Box m={[4, 5]} mt={[-4, -5]} p={[4, 5]} bg={pink} color="white">
        <Text as="h3" fontSize={[2, 3]}>
          Table of contents
        </Text>
        <Box my={[5, 6]} fontSize={[3, 5]}>
          <ul>
            <li>
              <a href="#what-is-jamstack">What is JAMstack?</a>
              <Box as="ul" ml={[4, 5]}>
                <li>
                  <a href="#meaning">Meaning</a>
                </li>
                <li>
                  <a href="#best-practices">Best practices</a>
                </li>
                <li>
                  <a href="#timeline">Timeline</a>
                </li>
                <li>
                  <a href="#workflow">Workflow</a>
                </li>
                <li>
                  <a href="#">Benefits</a>
                </li>
              </Box>
            </li>
            <li>
              <a href="#">Getting started</a>
              <Box as="ul" ml={[4, 5]}>
                <li>
                  <a href="#">Development</a>
                </li>
                <li>
                  <a href="#">Deployment</a>
                </li>
                <li>
                  <a href="#">Dynamic parts</a>
                </li>
                <li>
                  <a href="#">CMS</a>
                </li>
              </Box>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
            <li>
              <a href="#">Examples</a>
            </li>
          </ul>
        </Box>
      </Box>

      <Box p={[4, 5]} bg={black} color="white">
        <Text as="h2" fontSize={[3, 4]} id="what-is-jamstack">
          What is JAMstack?
        </Text>

        <Content>
          <ContentTitle id="meaning">Meaning</ContentTitle>
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

          <Flex
            my={[5, 6]}
            fontSize={[1, 3]}
            style={{ textAlign: 'center' }}
            flexWrap="wrap"
          >
            <Card
              flex="1"
              py={4}
              mx="3px"
              bg={turq}
              color={black}
              style={{ borderRadius: '16px 4px 4px 4px' }}
            >
              Javascript
            </Card>
            <Card
              flex="1"
              py={4}
              mx="3px"
              bg={orange}
              style={{ borderRadius: '4px' }}
            >
              APIs
            </Card>
            <Card
              flex="1"
              py={4}
              mx="3px"
              bg={pink}
              style={{ borderRadius: '4px 16px 4px 4px' }}
            >
              Markup
            </Card>

            <Card
              flex="1 1 100%"
              py={4}
              mt="6px"
              mx="3px"
              bg="white"
              color={black}
              style={{ borderRadius: '4px 4px 16px 16px ' }}
            >
              JAM
            </Card>
          </Flex>

          <Text as="h4" fontSize={[2, 3]} mt={[5, 6]}>
            Javascript
          </Text>
          <p>
            Dynamic functionalities are handled by Javascript. There is no
            restriction on which framework or library you must use.
          </p>

          <Text as="h4" fontSize={[2, 3]} mt={[5, 6]}>
            APIs
          </Text>
          <p>
            Server side operations are abstracted into reusable APIs and
            accessed over HTTPS with Javascript. These can be third party
            services or your custom function.
          </p>

          <Text as="h4" fontSize={[2, 3]} mt={[5, 6]}>
            Markup
          </Text>
          <p>
            Web sites are served as static HTML files. These can be generated
            from source files, such as Markown, using a Static Site Generator.
          </p>
        </Content>

        <Content>
          <ContentTitle id="best-practices">Best practices</ContentTitle>

          <Text as="h4" fontSize={[2, 3]} mt={[5, 6]}>
            Content delivery network
          </Text>
          <p>
            Since all the markup and assets are pre-built, they can be served
            via CDN. This provides better performance and easier scalibility.
          </p>

          <Text as="h4" fontSize={[2, 3]} mt={[5, 6]}>
            Atomic deploys
          </Text>
          <p>
            Each deploy is a full snapshot of the site. This helps guarantee a
            consistent version of the site globally.
          </p>

          <Text as="h4" fontSize={[2, 3]} mt={[5, 6]}>
            Cache invalidation
          </Text>
          <p>
            Once your build is uploaded, the CDN invalidates its cache. This
            means that your new build is live in an instant.
          </p>
          <ReadMore
            title="Read more about cache invalidation"
            href="https://www.netlify.com/blog/2015/09/11/instant-cache-invalidation/"
          >
            Learn more
          </ReadMore>

          <Text as="h4" fontSize={[2, 3]} mt={[5, 6]}>
            Everything in version control
          </Text>
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

          <Text as="h4" fontSize={[2, 3]} mt={[5, 6]}>
            Automated builds
          </Text>
          <p>
            Your server is notified when a new build is required, typically via
            webhooks. Server builds the project, updates the CDNs and the site
            is live.
          </p>
        </Content>

        <Content>
          <ContentTitle id="timeline">Timeline</ContentTitle>

          <Card
            borderRadius="16px 16px 4px 4px"
            bg={turq}
            color={black}
            py={4}
            mt={[5, 6]}
            mb="6px"
            fontSize={[4, 5]}
            style={{ textAlign: 'center' }}
          >
            <Text letterSpacing="4px" fontWeight="bold">
              2015
            </Text>
          </Card>
          <Card
            borderRadius="4px 4px 16px 16px"
            p={4}
            bg="white"
            color={black}
            fontSize={[1, 3]}
          >
            <p>
              Static sites are becoming popular due to the popularity of certain
              SSG such as Jekyll
            </p>
          </Card>

          <Card
            borderRadius="16px 16px 4px 4px"
            bg={orange}
            py={4}
            mt={[4, 5]}
            mb="6px"
            fontSize={[4, 5]}
            color={black}
            style={{ textAlign: 'center' }}
          >
            <Text letterSpacing="4px" fontWeight="bold">
              2016
            </Text>
          </Card>
          <Card
            borderRadius="4px 4px 16px 16px"
            p={4}
            bg="white"
            color={black}
            fontSize={[1, 3]}
          >
            <p>
              A small group of developers believe that Static sites don't have
              to be static and the term "JAMstack" comes to life
            </p>
          </Card>

          <Card
            borderRadius="16px 16px 4px 4px"
            bg={pink}
            py={4}
            mt={[4, 5]}
            mb="6px"
            fontSize={[4, 5]}
            color={black}
            style={{ textAlign: 'center' }}
          >
            <Text letterSpacing="4px" fontWeight="bold">
              2017
            </Text>
          </Card>
          <Card
            borderRadius="4px 4px 16px 16px"
            p={4}
            bg="white"
            color={black}
            fontSize={[1, 3]}
          >
            <p>
              The modern web revolution starts prioritising the importance of
              performance, scalability and developer experience. The term
              JAMstack starts to be adopted by a wider group of developers and
              the first enterprise JAMStack projects are announced
            </p>
          </Card>

          <Card
            borderRadius="16px 16px 4px 4px"
            bg={blue}
            py={4}
            mt={[4, 5]}
            mb="6px"
            fontSize={[4, 5]}
            color={black}
            style={{ textAlign: 'center' }}
          >
            <Text letterSpacing="4px" fontWeight="bold">
              2018
            </Text>
          </Card>
          <Card
            borderRadius="4px 4px 16px 16px"
            p={4}
            bg="white"
            color={black}
            fontSize={[1, 3]}
          >
            <p>
              Tool likes Netlify, Gatsby and Contentful have helped promote the
              term and the community is rapidly growing. This was also the year
              of the first JAMStack Conference.
            </p>
          </Card>

          <Box fontSize={[1, 3]} mt={[4, 5]}>
            <ReadMore href="https://snipcart.com/blog/jamstack">
              Source: SnipCart
            </ReadMore>
          </Box>
        </Content>

        <Content>
          <ContentTitle id="workflow">Workflow</ContentTitle>

          <Flex
            mt={[5, 6]}
            mx="auto"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            fontSize={[1, 3]}
            style={{ maxWidth: '360px' }}
          >
            <Card
              width="100%"
              borderRadius="16px 16px"
              py={4}
              bg={turq}
              color={black}
              style={{ textAlign: 'center' }}
            >
              Develop
            </Card>
            <Box width="3px" pt={[4, 5]} bg="white" />
            <Card
              width="150px"
              borderRadius="100%"
              border="3px solid white"
              fontSize={2}
              style={{
                display: 'flex',
                height: '150px',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
              }}
            >
              Version Control
            </Card>
            <Box width="3px" pt={[4, 5]} bg="white" />
            <Card
              width="100%"
              borderRadius="16px 16px"
              py={4}
              bg={orange}
              color={black}
              style={{ textAlign: 'center' }}
            >
              Deployment
            </Card>
            <Box width="3px" pt={[4, 5]} bg="white" />
            <Card
              width="150px"
              borderRadius="100%"
              border="3px solid white"
              fontSize={2}
              style={{
                display: 'flex',
                height: '150px',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
              }}
            >
              Build static assets
            </Card>
            <Box width="3px" pt={[4, 5]} bg="white" />
            <Card
              width="150px"
              borderRadius="100%"
              border="3px solid white"
              fontSize={2}
              style={{
                display: 'flex',
                height: '150px',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
              }}
            >
              Pre-render &amp; invalidate cache
            </Card>
            <Box width="3px" pt={[4, 5]} bg="white" />
            <Card
              width="100%"
              borderRadius="16px 16px"
              py={4}
              bg={pink}
              color={black}
              style={{ textAlign: 'center' }}
            >
              Project is live
            </Card>
          </Flex>
        </Content>
      </Box>
    </Layout>
  );
}

const Content = ({ children }) => (
  <React.Fragment>
    <Box my={[5, 6]} fontSize={[3, 4]} style={{ maxWidth: '720px' }}>
      {children}
    </Box>
    <Divider />
  </React.Fragment>
);

const ContentTitle = styled(Text)``;

ContentTitle.defaultProps = {
  as: 'h3',
  fontSize: [2, 3],
};

const Divider = styled(Box)`
  border: none;
  border-top: 3px solid #555;
  height: 0;
  max-width: 720px;
`;

Divider.defaultProps = {
  as: 'hr',
  my: [5, 6],
};

const ReadMore = styled(Box)`
  border-bottom: 2px solid ${grey};
  display: inline-block;
  color: ${grey};
  transition: all 100ms ease;

  &:hover {
    color: ${turq};
    border-color: ${turq};
  }
`;

ReadMore.defaultProps = {
  as: 'a',
  my: [2, 3],
  py: 1,
  fontSize: [2, 3],
};
