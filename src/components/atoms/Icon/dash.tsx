import React, { SVGProps } from 'react';

function IconDash(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="5"
      viewBox="0 0 16 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      {...props}>
      <path d="M1 0.974365H15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M1 3.96143H15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M1 2.46802H15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default IconDash;
