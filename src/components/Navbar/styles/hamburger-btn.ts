import css from 'styled-jsx/css';

export default css`
  .navbar-toggle {
    -webkit-tap-highlight-color: transparent;
    transition: transform 400ms;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
    position: fixed;
    z-index: 20;
    top: 1rem;
    right: 1rem;
    background: transparent;
    border: none;
    outline: none;
    padding: 0;
  }
  .navbar-toggle .line {
    fill: none;
    transition-delay: 400ms, 0;
    transition-property: stroke, stroke-dasharray, stroke-dashoffset;
    transition-timing-function: ease;
    transition-duration: 400ms;
    stroke: #000;
    stroke-width: 5.5;
    stroke-linecap: round;
  }
  .navbar-toggle .line.top {
    stroke-dasharray: 40 139;
  }
  .navbar-toggle .line.bottom {
    stroke-dasharray: 20 180;
    stroke-dashoffset: -20px;
  }
  .navbar-toggle.active {
    transform: rotate(45deg);
  }
  .navbar-toggle.active .line {
    stroke: #ffffff;
  }
  .navbar-toggle.active .line.top {
    stroke-dashoffset: -98px;
  }
  .navbar-toggle.active .line.bottom {
    stroke-dashoffset: -138px;
  }
  .navbar-toggle:not(.active):hover .line.bottom {
    stroke-dasharray: 40 180;
    stroke-dashoffset: 0px;
  }
`;
