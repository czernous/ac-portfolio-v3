import type { AppProps } from 'next/app';
import { createContext } from 'preact';
import { useEffect, useReducer } from 'preact/hooks';
import { themeReducer } from 'reducers/theme-reducer';
import theme from 'styles/theme';

const AppContext = createContext({});

function MyApp({ Component, pageProps }: AppProps) {
  const initialSate: any = {
    data: {
      style: theme.colors.dark,
      name: 'DARK',
    },
  };

  const [state, dispatch] = useReducer(themeReducer, initialSate);
  const currentTheme = state;

  const toggleTheme = () => {
    let theme = window.localStorage.getItem('theme-type');
    let color = theme === 'DARK' ? 'LIGHT' : 'DARK';
    dispatch(`SET_${color}_THEME`);
    window.localStorage.setItem('theme-type', color);
  };

  useEffect(() => {
    let theme = window.localStorage.getItem('theme-type');
    if (!theme) {
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
    <AppContext.Provider value={{ ...state, dispatch }}>
      <Component
        {...pageProps}
        theme={currentTheme.data.style}
        toggleTheme={toggleTheme}
      />
    </AppContext.Provider>
  );
}
export default MyApp;
