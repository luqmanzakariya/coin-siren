import React, { SVGProps } from 'react';

function IconPictureSquare(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      {...props}>
      <rect width="56" height="56" rx="8" fill="white" fillOpacity="0.4" />
      <path
        d="M37 14H19C16.2432 14 14 16.2432 14 19V37C14 39.7568 16.2432 42 19 42H37C39.7568 42 42 39.7568 42 37V19C42 16.2432 39.7568 14 37 14ZM37 40H19C17.3457 40 16 38.6543 16 37V29.5H22.7988C24.5283 29.5 26.1396 30.2744 27.2188 31.625C28.6807 33.4521 30.8613 34.5 33.2012 34.5H40V37C40 38.6543 38.6543 40 37 40ZM19 16H37C38.6543 16 40 17.3457 40 19V32.5H33.2012C31.4717 32.5 29.8604 31.7256 28.7812 30.375C27.3193 28.5479 25.1387 27.5 22.7988 27.5H16V19C16 17.3457 17.3457 16 19 16Z"
        fill="white"
      />
      <path
        d="M34 26C36.2061 26 38 24.2061 38 22C38 19.7939 36.2061 18 34 18C31.7939 18 30 19.7939 30 22C30 24.2061 31.7939 26 34 26ZM34 20C35.1025 20 36 20.8975 36 22C36 23.1025 35.1025 24 34 24C32.8975 24 32 23.1025 32 22C32 20.8975 32.8975 20 34 20Z"
        fill="white"
      />
    </svg>
  );
}

export default IconPictureSquare;
