import type { AppProps } from "next/app";
import Script from "next/script";
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
    <>
      {/* Global site tag (gtag.js) - Google Analytics */}
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-Y5JK4HW69N"
      />

      <Script strategy="lazyOnload">
        {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments)}
              var isJsArg = dataLayer.find(i => i[0] === "js") !== undefined
                ? true
                : false;
              var isConfigArg = dataLayer.find(i => i[1] === "config") !== undefined
                ? true
                : false;
             if(!isJsArg && !isConfigArg) {gtag('js', new Date()); gtag('config', 'G-Y5JK4HW69N')};`}
      </Script>
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
    </>
  );
}
export default MyApp;
