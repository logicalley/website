import React from "react";

import type { AnnieLogoProps } from '../../index.d';


const AnnieLogo: React.FC<AnnieLogoProps> = (props: AnnieLogoProps) => {
  const { height, width } = props;
  const svgStyle = {
    height: height || '40px',
    width: width || '40px'
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="49"
      height="42"
      fill="none"
      viewBox="0 0 49 42"
      style={svgStyle}
    >
      <path
        fill="#000"
        d="M4.762 30.914l1.129.624c.503-1.11 1.423-1.978 2.898-1.978 1.492 0 2.343.868 2.343 2.135v.364l-3.749.364c-1.683.157-2.846.938-2.846 2.465 0 1.51 1.284 2.5 3.176 2.5 1.788 0 2.673-.782 3.21-1.65h.244v1.406h1.284v-5.38c0-2.03-1.336-3.332-3.593-3.332-2.273 0-3.47 1.319-4.096 2.482zm1.129 3.957c0-.816.676-1.267 1.752-1.371l3.489-.33v.139c0 1.84-1.371 2.95-3.21 2.95-1.216 0-2.031-.555-2.031-1.388zM14.005 28.675v8.47h1.337v-4.288c0-2.082 1.145-3.158 2.794-3.158 1.493 0 2.43.763 2.43 2.43v5.015h1.319v-5.137c0-2.308-1.545-3.506-3.367-3.506-1.701 0-2.551.833-2.968 1.701h-.243v-1.527h-1.302zM23.442 28.675v8.47h1.337v-4.288c0-2.082 1.145-3.158 2.794-3.158 1.493 0 2.43.763 2.43 2.43v5.015h1.319v-5.137c0-2.308-1.545-3.506-3.367-3.506-1.701 0-2.551.833-2.968 1.701h-.243v-1.527h-1.302zM32.428 26.02c0 .642.469 1.11 1.11 1.11.643 0 1.129-.468 1.129-1.11 0-.625-.486-1.094-1.128-1.094-.642 0-1.11.469-1.11 1.093zm1.788 2.655h-1.337v8.47h1.337v-8.47zM35.304 32.84c0 2.603 1.77 4.547 4.373 4.547 2.256 0 3.228-1.215 3.801-2.308l-1.163-.59c-.416.937-1.163 1.718-2.655 1.718-1.718 0-2.864-1.145-2.968-2.916h6.942v-.694c0-2.569-1.683-4.165-4.078-4.165-2.465 0-4.252 1.892-4.252 4.408zm1.388-.642c.19-1.58 1.267-2.586 2.864-2.586 1.562 0 2.62.92 2.69 2.586h-5.554z"
      ></path>
      <path
        fill="url(#paint0_linear)"
        fillRule="evenodd"
        d="M21.35 6.214c1.297-2.236 4.54-2.236 5.837 0l4.91 8.462c.197.34.327.693.396 1.048a8.593 8.593 0 01-2.052-1.043c-1.843-1.27-3.08-3.152-3.482-5.302v-.003l-.001-.003a2.576 2.576 0 00-2.563-2.091 2.576 2.576 0 00-2.564 2.091v.006c-.403 2.15-1.64 4.032-3.483 5.302-.726.5-1.507.879-2.32 1.131.064-.384.198-.768.412-1.136l4.91-8.462zm11.13 10.823l.007-.033a9.79 9.79 0 01-2.743-1.32c-2.104-1.45-3.527-3.609-3.99-6.081a1.352 1.352 0 00-1.36-1.102h-.12a1.352 1.352 0 00-1.36 1.102c-.462 2.472-1.886 4.632-3.99 6.08-2.103 1.45-4.635 2.016-7.123 1.576a1.352 1.352 0 00-1.57 1.081 1.289 1.289 0 001.066 1.533c2.17.372 4.364.16 6.395-.6l.049.028c.98-.36 1.923-.846 2.808-1.456a12.444 12.444 0 003.113-3.066c.242-.343.467-.699.672-1.065a12.359 12.359 0 003.786 4.131c2.7 1.86 5.942 2.574 9.131 2.028a1.289 1.289 0 001.066-1.533 1.352 1.352 0 00-1.57-1.081 9.481 9.481 0 01-4.267-.222zm-11.233 1.81c-.46.317-.934.604-1.42.86h9.136c-.487-.256-.96-.543-1.42-.86a13.7 13.7 0 01-3.148-2.998 13.697 13.697 0 01-3.148 2.999z"
        clipRule="evenodd"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="24.349"
          x2="24.349"
          y1="20.052"
          y2="4.537"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6525EC"></stop>
          <stop offset="1" stopColor="#EB85B6"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default AnnieLogo;