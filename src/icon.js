import React from "react";
import PropTypes from "prop-types";
export const Triangle = (props) => {
  return (
    <svg
      width="8"
      height="6"
      viewBox="0 0 8 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4.06348 6L0.599375 0L7.52758 0L4.06348 6Z" fill="#5C5E60" />
    </svg>
  );
};

Triangle.propTypes = {};

export const SearchDone = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.8783 20.341C16.1148 20.341 20.3599 16.096 20.3599 10.8595C20.3599 5.62296 16.1148 1.37793 10.8783 1.37793C5.64182 1.37793 1.39679 5.62296 1.39679 10.8595C1.39679 16.096 5.64182 20.341 10.8783 20.341Z"
        stroke="#5C5E60"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.4681 8.50391L9.80898 14.163L7.23666 11.5907"
        stroke="#5C5E60"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.7302 22.7112L17.5746 17.5557"
        stroke="#5C5E60"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Save = () => {
  return (
    <svg
      width="12"
      height="17"
      viewBox="0 0 12 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 1.29492H2C1.44772 1.29492 1 1.74264 1 2.29492V16.0869C1 16.1707 1.09699 16.2173 1.16247 16.1649L5.96877 12.3199C5.98703 12.3053 6.01297 12.3053 6.03123 12.3199L10.8375 16.1649C10.903 16.2173 11 16.1707 11 16.0869V2.29492C11 1.74264 10.5523 1.29492 10 1.29492Z"
        stroke="#5C5E60"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export const VerticleDots = () => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1855_4919)">
        <path
          d="M12 8.54492C12.8284 8.54492 13.5 7.87335 13.5 7.04492C13.5 6.21649 12.8284 5.54492 12 5.54492C11.1716 5.54492 10.5 6.21649 10.5 7.04492C10.5 7.87335 11.1716 8.54492 12 8.54492Z"
          fill="#5C5E60"
        />
        <path
          d="M12 13.5449C12.8284 13.5449 13.5 12.8733 13.5 12.0449C13.5 11.2165 12.8284 10.5449 12 10.5449C11.1716 10.5449 10.5 11.2165 10.5 12.0449C10.5 12.8733 11.1716 13.5449 12 13.5449Z"
          fill="#5C5E60"
        />
        <path
          d="M12 18.5449C12.8284 18.5449 13.5 17.8733 13.5 17.0449C13.5 16.2165 12.8284 15.5449 12 15.5449C11.1716 15.5449 10.5 16.2165 10.5 17.0449C10.5 17.8733 11.1716 18.5449 12 18.5449Z"
          fill="#5C5E60"
        />
      </g>
      <defs>
        <clipPath id="clip0_1855_4919">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0 0.544922)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const SearchIcon = () => {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.5">
        <path
          d="M9.50003 16.8682C13.9183 16.8682 17.5001 13.2865 17.5001 8.8682C17.5001 4.4499 13.9183 0.868164 9.50003 0.868164C5.08174 0.868164 1.5 4.4499 1.5 8.8682C1.5 13.2865 5.08174 16.8682 9.50003 16.8682Z"
          stroke="#5C5E60"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.4999 18.8686L15.1499 14.5186"
          stroke="#5C5E60"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
