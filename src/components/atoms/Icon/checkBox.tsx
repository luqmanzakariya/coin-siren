import React, { SVGProps } from 'react';

function IconCheckBox(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      {...props}>
      <rect width="20" height="20" rx="6" fill="#E8ECFF" />
      <path
        d="M14.6666 6.5L8.24992 12.9167L5.33325 10"
        stroke="#2C599B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default IconCheckBox;
