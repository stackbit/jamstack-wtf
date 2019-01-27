import React from 'react';
import { Link } from 'gatsby';
import { J, A, M } from '../icons';

const colors = {
  red: '#eb473d',
  yellow: '#f0cd21',
  green: '#4ca741',
  blue: '#478cd4',
  pink: '#e88ea4',
};

export default function() {
  return (
    <div>
      <div>
        <J width="60px" height="60px" style={{ color: colors.red }} />
        <A width="60px" height="60px" style={{ color: colors.yellow }} />
        <M width="60px" height="60px" style={{ color: colors.blue }} />
      </div>
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
