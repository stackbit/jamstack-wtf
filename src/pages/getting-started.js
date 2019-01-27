import React from 'react';
import 'styled-components/macro';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

export default function({ data }) {
  const nodeData = data.allMarkdownRemark.edges[0].node;
  const { html } = nodeData;
  return (
    <Layout>
      <div
        dangerouslySetInnerHTML={{ __html: html }}
        css={`
          max-width: 640px;
          margin: 0 auto;
        `}
      />
    </Layout>
  );
}

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      filter: { frontmatter: { name: { eq: "getting-started" } } }
    ) {
      edges {
        node {
          html
        }
      }
    }
  }
`;
