import React from 'react';
import { red, yellow, blue } from '../styles/colors';

export function J({ color = red, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      color={color}
      {...props}
    >
      <path
        fill="currentColor"
        d="M15.3 38l15.5-21.4c1.9-2.6 4.9-4.1 8.1-4.1h23.2c2 0 3.9.6 5.5 1.7l15.8 10.5c3.8 2.5 5.4 7.3 3.9 11.7l-15.4 44C69.5 87 61.3 89.2 56 84.7L17 51.5c-4.1-3.4-4.8-9.3-1.7-13.5z"
      />
    </svg>
  );
}

export function A({ color = yellow, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      color={color}
      {...props}
    >
      <path
        fill="currentColor"
        d="M10.7 74.1l9.4-53c1.3-7.1 9.4-10.5 15.3-6.5l51.3 34.8c6.9 4.7 5.3 15.3-2.7 17.7L23.4 85.3c-7.1 2.2-13.9-3.9-12.7-11.2z"
      />
    </svg>
  );
}

export function M({ color = blue, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      color={color}
      {...props}
    >
      <path
        fill="currentColor"
        d="M14.3 43.7L27.2 17c1.7-3.4 5.1-5.6 8.9-5.5l21.2.2c3.4 0 6.5 1.8 8.2 4.6l21.4 34.5c3.1 5 1.2 11.5-4.1 14L37 87c-5.4 2.6-11.8-.2-13.6-5.9L13.8 51c-.8-2.4-.6-5 .5-7.3z"
      />
    </svg>
  );
}
