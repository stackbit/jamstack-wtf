import React from 'react';
import { Link } from 'gatsby';

export default function() {
  return (
    <div>
      <h1>JAMstack cheatsheet</h1>
      <p>A straight-to-the-point guide to help you get on the JAMstack.</p>
      <p>
        <Link to="/what-is-jamstack">What is JAMstack?</Link>
      </p>
      <p>
        <Link to="/getting-started">Getting started</Link>
      </p>
      <p>
        <Link to="/resources">Resources</Link>
      </p>
      <p>
        <Link to="/examples">Examples</Link>
      </p>
    </div>
  );
}
