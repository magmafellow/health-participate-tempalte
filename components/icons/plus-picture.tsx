import React from 'react'

type Props = {
  className?: string
}

// Control the color of whole icon via text-<color> or css-color property
const PlusPicture = ({ className }: Props) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.8574 9.52381H17.8693"
        stroke="currentColor"
        strokeWidth="2.38095"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.8808 25H7.14272C6.19552 25 5.28711 24.6237 4.61734 23.954C3.94756 23.2842 3.57129 22.3758 3.57129 21.4286V7.14286C3.57129 6.19566 3.94756 5.28725 4.61734 4.61748C5.28711 3.9477 6.19552 3.57143 7.14272 3.57143H21.4284C22.3756 3.57143 23.284 3.9477 23.9538 4.61748C24.6236 5.28725 24.9999 6.19566 24.9999 7.14286V14.881"
        stroke="currentColor"
        strokeWidth="2.38095"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.57129 19.0476L9.52367 13.0952C10.6284 12.0321 11.9903 12.0321 13.0951 13.0952L17.857 17.8571"
        stroke="currentColor"
        strokeWidth="2.38095"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.667 16.6667L17.8575 15.4762C18.6551 14.7095 19.5837 14.4952 20.4551 14.8333"
        stroke="currentColor"
        strokeWidth="2.38095"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.0479 22.619H26.1907"
        stroke="currentColor"
        strokeWidth="2.38095"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.6191 19.0476V26.1905"
        stroke="currentColor"
        strokeWidth="2.38095"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default PlusPicture
