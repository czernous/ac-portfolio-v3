import MainLayout from 'layouts/main-layout/MainLayout';
import Navbar from 'components/Navbar/Navbar';
import Link from 'next/link';
import { AppContext } from './_app';
import { useContext } from 'preact/hooks';
import { IAppState } from 'interfaces/app-state';

export default function Home() {
  const ctx: any = useContext(AppContext);
  const appState: IAppState = { ...ctx };

  return (
    <MainLayout theme={appState.data.style}>
      <Navbar theme={appState.data.style} toggleTheme={appState.toggleFunc} />
      <section className="home container-xxl">
        <h1 className="feature-heading display-1">
          Boost your business with quality websites
        </h1>
        <ul>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/ssr">
              <a>SSR</a>
            </Link>
          </li>
          <li>
            <Link href="/ssg">
              <a>SSG</a>
            </Link>
          </li>
        </ul>
      </section>
      <style jsx>
        {`
          .feature-heading {
            font-family: 'Cinzel Decorative', serif;
            color: ${appState.data.style.mainContrast};
          }
        `}
      </style>
    </MainLayout>
  );
}
