import Link from 'next/link';
import { useEffect, useState } from 'preact/hooks';
import animateMenu from './helpers/animate-menu';
const DarkIcon = (
  <svg
    className="theme-toggle__icon"
    width="15"
    height="24"
    viewBox="0 0 15 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 0C3.18 0 1.47 0.5 0 1.35C2.99 3.08 5 6.3 5 10C5 13.7 2.99 16.92 0 18.65C1.47 19.5 3.18 20 5 20C10.52 20 15 15.52 15 10C15 4.48 10.52 0 5 0Z"
      fill="#370B12"
    />
  </svg>
);

const LightIcon = (
  <svg
    className="theme-toggle__icon"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 8.69V4H15.31L12 0.690002L8.69 4H4V8.69L0.690002 12L4 15.31V20H8.69L12 23.31L15.31 20H20V15.31L23.31 12L20 8.69ZM12 18C8.69 18 6 15.31 6 12C6 8.69 8.69 6 12 6C15.31 6 18 8.69 18 12C18 15.31 15.31 18 12 18ZM8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16C9.79 16 8 14.21 8 12Z"
      fill="#F6ACCB"
    />
  </svg>
);

const Navbar = (props: any) => {
  const toggleTheme: VoidFunction = props.toggleTheme;
  const links = ['Home', 'About', 'Services', 'Portfolio', 'Contact'];
  const [activeClass, setActive] = useState('');

  const getThemeIcon = () => {
    const themeType = props.theme.name;
    let themeIcon = LightIcon;
    if (themeType === 'dark') {
      themeIcon = LightIcon;
    }
    if (themeType === 'light') {
      themeIcon = DarkIcon;
    }
    return themeIcon;
  };
  const mobileLinksClr = {
    color: props.theme.background,
  };
  useEffect(() => {
    animateMenu(setActive);
  }, []);
  const createLinks = (type?: string): JSX.Element[] => {
    return links.map((link) => {
      let path = link.toLowerCase() === 'home' ? '/' : `/${link.toLowerCase()}`;
      return (
        <li key={link} className="nav-links__item">
          <Link href={path}>
            <a style={type === 'mobile' ? mobileLinksClr : {}}>
              {link.toLowerCase()}
            </a>
          </Link>
        </li>
      );
    });
  };
  return (
    <>
      <header className="site-header">
        <button
          className={`navbar-toggle ${activeClass}`}
          id="toggle"
          type="button"
        >
          <svg viewBox="0 0 100 100" width="80">
            <path
              className="line top"
              d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
            />
            <path className="line middle" d="m 30,50 h 40" />
            <path
              className="line bottom"
              d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
            />
          </svg>
        </button>
        <nav className="nav container-xxl">
          <ul className="nav-links">{createLinks()}</ul>
          <button className="nav-theme-toggle" onClick={toggleTheme}>
            {getThemeIcon()}
          </button>
        </nav>
        <nav className="nav mobile">
          <ul className="nav-links">{createLinks()}</ul>
        </nav>
        <button className="nav-theme-toggle mobile" onClick={toggleTheme}>
          {getThemeIcon()}
        </button>
      </header>
      <div id="bg-circle"></div>
      <style jsx>{`
        .site-header {
          position: fixed;
          z-index: 2;
          top: 0;
          left: 0;
          display: flex;
          width: 100%;
        }

        .nav {
          width: 100%;
          height: 110px;
          z-index: 5;
          display: flex;
          align-items: center;
        }

        .nav.mobile {
          position: fixed;
          width: 100%;
          height: 100%;
          z-index: 5;
          display: none;
          align-items: center;
          justify-content: center;
        }

        .nav .nav-links {
          width: 100%;
          display: flex;
          gap: 1em;
          list-style: none;
          margin: 0;
          text-transform: capitalize;
          margin-left: -30px;
        }

        .nav.mobile .nav-links {
          display: unset;
          width: 100%;
          max-width: 400px;
          padding: 0;
          text-align: center;
        }

        .nav .nav-links__item {
          margin-right: 2rem;
        }

        .nav.mobile .nav-links__item {
          opacity: 0;
        }
        .nav .nav-links__item a {
          text-decoration: none;
          font-size: 25px;
          display: block;
          text-align: left;
          padding: 20px 0;
          font-weight: normal;
          letter-spacing: 2px;
          cursor: pointer;
          transition: all ease 500ms;
        }

        .nav-theme-toggle {
          background: transparent;
          border: none;
        }

        .nav-theme-toggle.mobile {
          display: none;
        }

        .navbar-toggle {
          display: none;
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
          left: 1rem;
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
          stroke: ${props.theme.mainContrast};
          stroke-width: 5.5;
          stroke-linecap: round;
        }
        .navbar-toggle .line.top {
          stroke-dasharray: 40 139;
        }
        .navbar-toggle .line.bottom {
          stroke-dasharray: 20 180;
          stroke-dashoffset: 0px;
        }
        .navbar-toggle.active {
          transform: rotate(45deg);
        }
        .navbar-toggle.active .line {
          stroke: ${props.theme.background};
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

        #bg-circle {
          transform: scale(0);
          width: 50px;
          height: 50px;
          background: ${props.theme.mainContrast};
          position: fixed;
          top: 2rem;
          left: 2rem;
          border-radius: 50%;
          z-index: 1;
        }

        @media (max-width: 560px) {
          .nav {
            display: none;
          }
          .navbar-toggle {
            display: block;
          }
          .nav-theme-toggle.mobile {
            display: block;
            position: absolute;
            top: 2rem;
            right: 2rem;
          }
        }
      `}</style>
      <style jsx global>{`
        .nav.mobile .nav-links .nav-links__item a {
          color: ${props.theme.background};
        }

        .nav-links__item a,
        .nav.mobile .nav-links .nav-links__item a {
          position: relative;
        }

        .nav-links__item a {
          color: ${props.theme.link};
        }

        .nav-links__item a:after,
        .nav.mobile .nav-links .nav-links__item a:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: ${props.theme.link};
          transform: scaleX(0);
          transform-origin: right center;
          transition: transform 0.6s;
        }
        .nav.mobile .nav-links .nav-links__item a:after {
          height: 1px;
          background: ${props.theme.background};
        }
        .nav-links__item a:hover:after,
        .nav.mobile .nav-links .nav-links__item a:hover:after {
          transition-duration: 0.4s;
          transform: scaleX(1);
          transform-origin: left center;
        }
        .page-wrapper {
          margin-top: 90px;
        }
        @media (max-width: 560px) {
          .nav-theme-toggle .theme-toggle__icon {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
