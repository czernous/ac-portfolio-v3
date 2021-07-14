import MainLayout from 'layouts/main-layout/MainLayout';
import Link from 'next/link';
import theme from 'styles/theme';
import { useReducer, useEffect } from 'preact/hooks';
import { themeReducer } from 'reducers/theme-reducer';

export default function Home() {
  const initialSate: any = {
    data: {
      style: theme.colors.dark,
      name: 'DARK',
    },
  };

  const [state, dispatch] = useReducer(themeReducer, initialSate);

  const toggleTheme = () => {
    let theme = window.localStorage.getItem('theme-type');
    let color = theme === 'DARK' ? 'LIGHT' : 'DARK';
    dispatch(`SET_${color}_THEME`);
    window.localStorage.setItem('theme-type', color);
    console.log(state, window.localStorage.getItem('theme-type'));
  };

  useEffect(() => {
    let theme = window.localStorage.getItem('theme-type');
    if (!theme) {
      console.log('asd');
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        dispatch('SET_DARK_THEME');
        window.localStorage.setItem('theme-type', 'DARK');
      } else {
        dispatch('SET_LIGHT_THEME');
        window.localStorage.setItem('theme-type', 'LIGHT');
      }
    } else {
      dispatch(`SET_${theme}_THEME`);
    }
  }, []);

  return (
    <MainLayout theme={state.data.style}>
      <div className="home">
        Hello World. <button onClick={() => toggleTheme()}>change theme</button>
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
