import Link from 'next/link';
import { useEffect, useState } from 'preact/hooks';
import animateMenu from './helpers/animate-menu';

const Navbar = (props: any) => {
  const toggleTheme: VoidFunction = props.toggleTheme;
  const links = ['Home', 'About', 'Services', 'Portfolio', 'Contact'];
  const [activeClass, setActive] = useState('');
  useEffect(() => {
    animateMenu(setActive);
  }, []);
  const createLinks = (): JSX.Element[] => {
    return links.map((link) => {
      let path = link.toLowerCase() === 'home' ? '/' : `/${link.toLowerCase()}`;
      return (
        <li key={link} className="nav-links__item">
          <Link href={path}>
            <a>{link.toLowerCase()}</a>
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
        <nav className="nav">
          <ul className="nav-links">{createLinks()}</ul>
        </nav>
        <nav className="nav mobile">
          <ul className="nav-links">{createLinks()}</ul>
        </nav>
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
          padding: 0 0 0 40px;
          margin: 0;
          text-transform: capitalize;
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
          background: white;
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
          font-weight: bold;
          letter-spacing: 2px;
          cursor: pointer;
          transition: all ease 500ms;
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
          stroke: ${props.theme.text};
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
          background: ${props.theme.mobileMenu};
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
        }
      `}</style>
    </>
  );
};

export default Navbar;
