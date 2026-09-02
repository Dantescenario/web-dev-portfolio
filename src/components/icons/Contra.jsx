import React from 'react';

const Contra = ({ size = 20, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.5 14.5a6 6 0 1 1 0-9 1 1 0 0 1-1.414 1.414 4 4 0 1 0 0 6.172A1 1 0 1 1 15.5 16.5z" />
  </svg>
);

export default Contra;
