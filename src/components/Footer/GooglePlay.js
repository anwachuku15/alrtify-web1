import React from "react";

const GooglePlay = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      //   xlinkHref="http://www.w3.org/1999/xlink"
      fill="none"
      height="20"
      width="20"
      viewBox="0 0 50 50"
    >
      <linearGradient
        id="a"
        gradientUnits="userSpaceOnUse"
        x1="25.9199"
        x2="-6.67873"
        y1="3.03416"
        y2="35.6328"
      >
        <stop offset="0" stop-color="#00a0ff" />
        <stop offset=".00657445" stop-color="#00a1ff" />
        <stop offset=".2601" stop-color="#00beff" />
        <stop offset=".5122" stop-color="#00d2ff" />
        <stop offset=".7604" stop-color="#00dfff" />
        <stop offset="1" stop-color="#00e3ff" />
      </linearGradient>
      <linearGradient
        id="b"
        gradientUnits="userSpaceOnUse"
        x1="49.3031"
        x2="2.30229"
        y1="24.9689"
        y2="24.9689"
      >
        <stop offset="0" stop-color="#ffe000" />
        <stop offset=".4087" stop-color="#ffbd00" />
        <stop offset=".7754" stop-color="#ffa500" />
        <stop offset="1" stop-color="#ff9c00" />
      </linearGradient>
      <linearGradient
        id="c"
        gradientUnits="userSpaceOnUse"
        x1="31.7977"
        x2="-12.4087"
        y1="29.4252"
        y2="73.6316"
      >
        <stop offset="0" stop-color="#ff3a44" />
        <stop offset="1" stop-color="#c31162" />
      </linearGradient>
      <linearGradient
        id="d"
        gradientUnits="userSpaceOnUse"
        x1="-2.25256"
        x2="17.4876"
        y1="-13.5406"
        y2="6.19933"
      >
        <stop offset="0" stop-color="#32a071" />
        <stop offset=".0685" stop-color="#2da771" />
        <stop offset=".4762" stop-color="#15cf74" />
        <stop offset=".8009" stop-color="#06e775" />
        <stop offset="1" stop-color="#00f076" />
      </linearGradient>
      <clipPath id="e">
        <path d="m0 0h50v50h-50z" />
      </clipPath>
      <g clip-path="url(#e)">
        <path
          d="m3.77697.684204c-.58273.582726-.77697 1.553946-.77697 2.719396v42.9277c0 1.1655.38849 2.1367.97121 2.7194l.19425.1942 24.08614-24.0861v-.1942-.1943z"
          fill="url(#a)"
        />
        <path
          d="m36.0279 33.3184-7.9639-7.964v-.3885-.1942l7.9639-7.964.1943.1943 9.5179 5.4388c2.7194 1.5539 2.7194 4.0791 0 5.633z"
          fill="url(#b)"
        />
        <path
          d="m36.213 33.1232-8.1582-8.1582-24.28039 24.2803c.97122.9713 2.33092.9713 4.07911.1943z"
          fill="url(#c)"
        />
        <path
          d="m36.213 16.8073-28.35948-16.122143c-1.74819-.971215-3.10789-.7769722-4.07911.194243l24.28039 24.0861z"
          fill="url(#d)"
        />
        <g fill="#000">
          <path
            d="m36.0187 32.9271-28.16518 15.9279c-1.55395.9713-2.91365.777-3.88486 0l-.19425.1943.19425.1942c.97121.777 2.33091.9712 3.88486 0z"
            opacity=".2"
          />
          <path
            d="m3.77697 48.8561c-.58273-.5827-.77697-1.5539-.77697-2.7194v.1943c0 1.1654.38849 2.1366.97121 2.7194v-.1943z"
            opacity=".12"
          />
          <path
            d="m45.7307 27.4901-9.7121 5.4388.1942.1943 9.5179-5.4388c1.3597-.777 1.9424-1.7482 1.9424-2.7194 0 .9712-.7769 1.7482-1.9424 2.5251z"
            opacity=".12"
          />
        </g>
        <path
          d="m7.86633.87955 37.87737 21.56095c1.1655.777 1.9424 1.554 1.9424 2.5252 0-.9712-.5827-1.9424-1.9424-2.7194l-37.87737-21.560992c-2.7194-1.553944-4.85608-.388487-4.85608 2.719402v.19424c0-2.913642 2.13668-4.273343 4.85608-2.7194z"
          fill="#fff"
          opacity=".25"
        />
      </g>
    </svg>
  );
};

export default GooglePlay;
