import type { AppProps } from "next/app";
import { createContext } from "preact";
import { useEffect, useReducer } from "preact/hooks";
import { themeReducer } from "reducers/theme-reducer";
import theme from "styles/theme";
import "../styles/bootstrap/bootstrap-reboot.min.css";
import "../styles/bootstrap/bootstrap-utilities.min.css";
import "../styles/bootstrap/bootstrap-grid.min.css";
import { IAppState } from "interfaces/app-state";
import { Context } from "preact";

export const AppContext = createContext({});

function MyApp({ Component, pageProps }: AppProps) {
  const toggleTheme = () => {
    let theme = window.localStorage.getItem("theme-type");
    let color = theme === "DARK" ? "LIGHT" : "DARK";
    dispatch(`SET_${color}_THEME`);
    window.localStorage.setItem("theme-type", color);
  };

  const initialSate: IAppState | Context<{}> = {
    data: {
      style: theme.colors.dark,
      name: "DARK",
    },
    toggleFunc: toggleTheme,
    siteName: "Anton Chernous",
  };

  const [state, dispatch] = useReducer(themeReducer, initialSate);
  const currentTheme = state;

  useEffect(() => {
    let theme = window.localStorage.getItem("theme-type");
    if (!theme) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        dispatch("SET_DARK_THEME");
        window.localStorage.setItem("theme-type", "DARK");
      } else {
        dispatch("SET_LIGHT_THEME");
        window.localStorage.setItem("theme-type", "LIGHT");
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
      <style jsx global>
        {`
          body,
          html {
            font-family: "Open Sans", sans-serif;
            background-color: ${currentTheme.data.style.background};
            color: ${currentTheme.data.style.text};
          }
          .page-title {
            color: ${currentTheme.data.style.headerText};
            font-weight: 700;
          }
        `}
      </style>
    </AppContext.Provider>
  );
}
export default MyApp;
