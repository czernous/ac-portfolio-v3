import MainLayout from 'layouts/main-layout/MainLayout';
import Navbar from 'components/Navbar';
import Link from 'next/link';

export default function Home(props: any) {
  const toggleTheme = props.toggleTheme;

  return (
    <MainLayout theme={props.theme}>
      <Navbar toggleTheme={toggleTheme} />
      <div className="home">
        Hello World. <button onClick={toggleTheme}>change theme</button>
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
        <style jsx global>{`
          body {
            display: block;
          }
        `}</style>
      </div>
    </MainLayout>
  );
}
