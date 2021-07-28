import MainLayout from 'layouts/main-layout/MainLayout';
import Navbar from 'components/Navbar/Navbar';
import Link from 'next/link';
import { AppContext } from './_app';
import { useContext } from 'preact/hooks';
import { IAppState } from 'interfaces/app-state';
import BgDark from '../../public/assets/common/bg-dark.png';
import BgLight from '../../public/assets/common/bg-light.png';
import Button from 'components/Button/Button';

export default function Home() {
  const ctx: any = useContext(AppContext);
  const appState: IAppState = { ...ctx };

  const background = appState.data.name === 'DARK' ? BgDark : BgLight;
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
            margin-top: 15vh;
            max-width: 750px;
          }

          .home__subheading {
            color: ${appState.data.style.headerText};
            font-size: 1.5em;
            font-weight: 600;
            letter-spacing: 2px;
            margin-top: 1em;
            margin-bottom: 2em;
          }
        `}
      </style>
    </MainLayout>
  );
}
