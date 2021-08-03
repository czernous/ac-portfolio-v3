import MainLayout from 'layouts/main-layout/MainLayout';
import Navbar from 'components/Navbar/Navbar';
import Link from 'next/link';
import { AppContext } from './_app';
import { useContext, useEffect } from 'preact/hooks';
import { IAppState } from 'interfaces/app-state';
import BgDark from '../../public/assets/common/bg-dark.png';
import BgLight from '../../public/assets/common/bg-light.png';
import Button from 'components/Button/Button';
import { gsap, Expo } from 'gsap';

export default function Home() {
  const ctx = useContext(AppContext);
  const appState: IAppState = { ...ctx } as IAppState;
  const background = appState.data.name === 'DARK' ? BgDark : BgLight;

  const animateHero = () => {
    const tl = gsap.timeline();
    gsap.set('.home__subheading', { x: '-51%', visibility: 'hidden' });
    gsap.set('.btn', { y: '201%' });
    tl.fromTo(
      '.home__heading',
      {
        duration: 3.5,
        height: 0,
        opacity: 0,
        delay: -0.7,
        ease: Expo.easeInOut,
        force3D: true,
      },
      {
        duration: 3.5,
        height: 'auto',
        opacity: 1,
        delay: -0.7,
        ease: Expo.easeInOut,
        force3D: true,
      }
    )
      .to('.home__subheading', {
        x: '0%',
        visibility: 'visible',
        duration: 2.5,
        delay: -1,
      })
      .to('.btn', {
        y: '0%',
        duration: 1,
        delay: -2,
        ease: 'expo.out',
      });
  };

  useEffect(() => {
    animateHero();
  }, []);
  return (
    <MainLayout theme={appState.data.style}>
      <Navbar
        theme={appState.data.style}
        toggleTheme={appState.toggleFunc}
        mobileHeight="0px"
      />
      <section className="home container-xxl">
        <h1 className="home__heading">
          Your one-stop <br />
          web design solution
        </h1>
        <p className="home__subheading">
          Expand your online presence while cutting costs
        </p>
        <Button
          type="link"
          href="/services"
          text="Learn more"
          fontSize="1.5em"
          fontWeight="700"
          width="2em"
          marginTop="1em"
          borderWidth="4px"
          theme={appState.data.style}
        />
      </section>
      <style jsx global>
        {`
          body {
            background: url(${background.src}) repeat;
          }
        `}
      </style>
      <style jsx>
        {`
          .home {
            height: calc(100vh - 70px);
          }

          .home__heading {
            font-family: 'Cinzel Decorative', serif;
            color: ${appState.data.style.mainContrast};
            font-size: 4em;
            margin-top: 20vh;
            max-width: 750px;
            position: relative;
            overflow: hidden;
          }
          .home__subheading {
            color: ${appState.data.style.headerText};
            font-size: 1.5em;
            font-weight: 600;
            letter-spacing: 2px;
            margin-top: 1em;
            margin-bottom: 2em;
          }
          .split-parent {
            overflow: hidden;
          }
          .split-child {
            display: inline-block;
          }
          @media (max-width: 700px) {
            .home__heading {
              font-size: 3em;
            }
            .home__subheading {
              font-size: 1.2em;
            }
          }
          @media (max-width: 480px) {
            .home__heading {
              font-size: 2em;
            }
            .home__subheading {
              font-size: 1em;
            }
          }
        `}
      </style>
    </MainLayout>
  );
}
