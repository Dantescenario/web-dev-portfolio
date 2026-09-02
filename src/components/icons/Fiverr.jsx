import React from 'react';

const Fiverr = ({ size = 20, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M16.25 16.25v-7.5h-7.5V7.125A1.125 1.125 0 0 1 9.875 6H12.5V2.375A.375.375 0 0 0 12.125 2H9.875A5.125 5.125 0 0 0 4.75 7.125V8.75H2.375A.375.375 0 0 0 2 9.125V11.5h2.75v4.75H2.375a.375.375 0 0 0-.375.375V19h8.25v-2.375a.375.375 0 0 0-.375-.375H8.75V11.5h5v4.75h-1.125a.375.375 0 0 0-.375.375V19H19v-2.375a.375.375 0 0 0-.375-.375H16.25zM18.5 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
  </svg>
);

export default Fiverr;
