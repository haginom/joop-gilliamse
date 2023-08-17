import React from "react";
import "../styles/layout.scss";

export default function Bird({ color, border }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="bird"
      data-name="Layer 1"
      viewBox="784.69 120.5 257.81 300.5"
    >
      <path
        className={color}
        d="m922,421h-16v-187h16c-.43,37.76-.6,75.93-.5,114.5.06,24.33.23,48.5.5,72.5Z"
      />
      <rect className={color} x="886" y="234" width="16" height="187" />
      <path
        className={color}
        d="m906.5,161.5c-8.75-21.27-30.91-41.08-54-41-3.44.01-10.33.55-17.93,4.09-17.74,8.27-14.2,30.41-30.07,36.91-9.01,3.69-16.25,8.17-19,12-2.85,3.96,1.11,4.96,23,30,2.19,10.17,11.05,45.21,44,69,35.06,25.31,82.03,26.79,118,8,27.42-14.33,41.45-36.77,47-47,8.33-21,16.67-42,25-63-3.5,3.4-115.08,36.49-124,26-9.51-11.18-5.32-18.77-12-35Z"
      />
      <circle className={border} cx="842" cy="168" r="9.5" />
    </svg>
  );
}
