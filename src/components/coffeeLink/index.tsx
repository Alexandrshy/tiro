import React from "react";

import style from "./style.module.css";

/**
 * Link to BuyMeaCoffee project page
 */
export const CoffeeLink: React.FC = () => (
  <a
    className={style.link}
    href="https://www.buymeacoffee.com/R8rhtjI9M"
    rel="noopener noreferrer"
    target="_blank"
  >
    <svg
      className={style.icon}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill="#171a21"
        d="M9,17h4a5,5,0,0,0,5-5V11h1a3,3,0,0,0,0-6H18V4a1,1,0,0,0-1-1H5A1,1,0,0,0,4,4v8A5,5,0,0,0,9,17ZM18,7h1a1,1,0,0,1,0,2H18ZM6,5H16v7a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3ZM21,19H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"
      />
    </svg>
    <span className={style.text}>
      <b>Buy me a coffee</b>
    </span>
  </a>
);
