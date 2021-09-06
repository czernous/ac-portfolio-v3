import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { useContext, useEffect } from "preact/hooks";
import Head from "next/head";
import { AppContext } from "../_app";
import { IAppState } from "../../interfaces/app-state";
import MainLayout from "../../layouts/main-layout/MainLayout";
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/Button/Button";
import { gsap } from "gsap";
import IStaticPropsParams from "interfaces/static-props-params";
import IParsedPageData from "interfaces/parsed-page-data";

export default function Portfolio({ meta }: IParsedPageData) {
  const ctx = useContext(AppContext);
  const appState: IAppState = { ...ctx } as IAppState;
  const animateCards = () => {
    const tl = gsap.timeline();

    tl.fromTo(
      [".services-item"],
      {
        duration: 0.8,
        x: 55,
        opacity: 0,
        delay: 0.2,
        stagger: 0.1,
      },
      {
        duration: 0.8,
        x: 0,
        opacity: 1,
        delay: 0.2,
        stagger: 0.1,
      },
    );
  };

  useEffect(() => {
    animateCards();
  }, []);

  return (
    <MainLayout theme={appState.data.style}>
      <Head>
        <title>{`${appState.siteName} | Services`}</title>
        <meta
          name="description"
          content="Are you looking to build a quality website or app? See available services.  Click to get started."
        />
        <meta
          name="keywords"
          content="Web design services, services, web development, build apps, support, maintenance, troubleshooting, javascript, react, angular, vue"
        />
      </Head>
      <Navbar
        theme={appState.data.style}
        toggleTheme={appState.toggleFunc}
        mobileHeight="0px"
      />
      <div className="container-xxl">
        <h1 className="page-title my-5 mx-3">Services</h1>
        <div className="services">
          {meta
            .sort((a: any, b: any) => a.id - b.id)
            .map((item: any, index: number) => {
              const { description, title, url, icon } = item;
              return (
                <div key={item.id} className="services-item">
                  <div
                    className="services-item__icon"
                    dangerouslySetInnerHTML={{ __html: icon }}
                  ></div>
                  <div className="services-item__content">
                    <h2 className="services-item__title">{title}</h2>
                    <p>{description}</p>
                    <Button
                      type="link"
                      href={url}
                      text="Learn more"
                      fontWeight="700"
                      width="2em"
                      marginTop=""
                      borderWidth="3px"
                      theme={appState.data.style}
                    />
                  </div>
                </div>
              );
            })}
          <style jsx>
            {`
              .services {
                display: flex;
                flex-direction: column;
              }

              .services-item {
                padding: 1em;
                margin: 1em;
                display: flex;
                justify-content: space-between;
                box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
              }

              .services-item .services-item__title {
                color: ${appState.data.style.headerText};
                font-weight: 700;
              }

              .services-item p {
                margin: 1.5em 0;
              }

              .services-item__icon {
                display: flex;
                padding: 0 1em;
                margin-right: 1em;
              }

              @media (max-width: 900px) {
                .services-item__icon {
                  display: none;
                }
              }
            `}
          </style>
          <style jsx global>
            {`
              .services-svg-icon {
                height: 300px !important;
              }
            `}
          </style>
        </div>
      </div>
    </MainLayout>
  );
}

export const getStaticProps = async ({}: IStaticPropsParams) => {
  const files = fs.readdirSync(path.resolve("src/static-content/services"));
  const metaData: any[] = [];

  files.map((filename: string) => {
    const slug = filename.replace(".md", "");
    const fileMeta = fs
      .readFileSync(
        path.join(path.resolve("src/static-content/services"), filename),
      )
      .toString();
    const parsedMd = matter(fileMeta);
    const itemData = {
      ...parsedMd.data,
      url: `/services/${slug}`,
    };
    metaData.push(itemData);
  });

  return {
    props: {
      meta: metaData,
    },
  };
};
