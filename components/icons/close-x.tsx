import React from 'react'

type Props = {
  className?: string
}

// __Control the color of whole icon via text-<color> or css-color property
const CloseX = ({ className }: Props) => {
  return (
    <svg
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.4398 16.7161L26.1646 28.4441L28.4414 26.1705L16.7134 14.4425L28.4414 2.71768L26.1678 0.440891L14.4398 12.1689L2.71498 0.440891L0.441406 2.71768L12.1662 14.4425L0.441406 26.1673L2.71498 28.4441L14.4398 16.7161Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default CloseX
