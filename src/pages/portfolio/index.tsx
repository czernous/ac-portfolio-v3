import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { useContext, useEffect } from "preact/hooks";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useAmp } from "next/amp";
import { AppContext } from "../_app";
import { IAppState } from "../../interfaces/app-state";
import MainLayout from "../../layouts/main-layout/MainLayout";
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/Button/Button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import IStaticPropsParams from "interfaces/static-props-params";
import IParsedPageData from "interfaces/parsed-page-data";

export const config = { amp: "hybrid" };

export default function Portfolio({ meta }: IParsedPageData) {
  const ctx = useContext(AppContext);
  const appState: IAppState = { ...ctx } as IAppState;
  const isAmp = useAmp();
  gsap.registerPlugin(ScrollTrigger);
  const animateCards = () => {
    gsap.set(".portfolio-item", {
      opacity: 0,
      scale: 0.9,
    });
    gsap.set(".portfolio-item .portfolio-item__title", {
      opacity: 0,
      y: 75,
      scale: 0.9,
    });
    gsap.set(".portfolio-item__image", {
      opacity: 0,
      y: 50,
      scale: 0.9,
    });
    ScrollTrigger.batch(".portfolio-item", {
      onEnter: (batch) => {
        batch.forEach((item, index) => {
          const settings = {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.4,
            delay: index * 0.3,
          };
          gsap.to(item.children, settings);
          gsap.to(item.children[3], settings);
          gsap.to(item, settings);
        });
      },
      once: true,
    });
  };
  useEffect(() => {
    animateCards();
  }, []);

  return (
    <MainLayout theme={appState.data.style}>
      <Head>
        <title>{`${appState.siteName} | Portfolio`}</title>
        <meta
          name="description"
          content="Anton Chernous - Web development and design portfolio. See samples of prior work. Click to browse."
        />
        <meta
          name="keywords"
          content="Websites, apps, landing pages, react, vue, javascript, angular, typescript, developer, .net, c#, nest, express, next"
        />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:url" content={meta.url} />
      </Head>

      <Navbar
        theme={appState.data.style}
        toggleTheme={appState.toggleFunc}
        mobileHeight="0px"
      />
      <div className="container-xxl">
        <h1 className="page-title my-5 mx-3">Portfolio</h1>
        <div className="portfolio">
          {meta.map((item: any, index: number) => {
            const { image, description, title, url, codeUrl } = item;
            return (
              <div key={index} className="portfolio-item">
                <h2 className="portfolio-item__title">{title}</h2>
                {isAmp ? (
                  // @ts-ignore
                  <amp-img
                    className="portfolio-item__image img-fluid"
                    src={`https://res.cloudinary.com/czernous/image/upload/${image}`}
                    height={600}
                    width={1000}
                    alt=""
                    layout="responsive"
                  />
                ) : (
                  <div className="portfolio-item__image">
                    <Image
                      src={image}
                      height={600}
                      width={1000}
                      alt=""
                      layout="responsive"
                      objectFit="cover"
                      blurDataURL={`https://res.cloudinary.com/czernous/image/upload/e_blur:1793/${image}`}
                      placeholder="blur"
                    />
                  </div>
                )}
                <p>{description}</p>
                <div className="portfolio-item__footer d-flex justify-content-between">
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
                  <Link href={codeUrl}>
                    <a
                      className="repo-link-btn"
                      target="_blank"
                      rel="noopener"
                    >{`</>`}</a>
                  </Link>
                </div>
              </div>
            );
          })}
          <style jsx>
            {`
              .portfolio {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(325px, 1fr));
                gap: 1em;
              }

              .portfolio-item {
                padding: 1em;
                margin: 1em;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
              }

              .portfolio-item .portfolio-item__title {
                color: ${appState.data.style.headerText};
                font-weight: 700;
              }

              .portfolio-item__image {
                position: relative;
                width: 100%;
                height: fit-content;
                margin: 1em 0;
              }

              .portfolio-item__footer {
                display: flex;
                align-items: center;
              }
              .portfolio-item__footer > a.repo-link-btn {
                font-size: 1.5em;
                font-weight: 700;
                transition: transform 0.3s cubic-bezier(0.3, 0.33, 0.28, 0.32);
              }
              .portfolio-item__footer > a.repo-link-btn:hover {
                transform: scale3d(1.1, 1.2, 1.1);
              }
            `}
          </style>
        </div>
      </div>
    </MainLayout>
  );
}

export const getStaticProps = async ({}: IStaticPropsParams) => {
  const files = fs.readdirSync(path.resolve("src/static-content/portfolio"));
  const metaData: any[] = [];

  files.map((filename: string) => {
    const slug = filename.replace(".md", "");
    const fileMeta = fs
      .readFileSync(
        path.join(path.resolve("src/static-content/portfolio"), filename),
      )
      .toString();
    const parsedMd = matter(fileMeta);
    const itemData = {
      ...parsedMd.data,
      url: `/portfolio/${slug}`,
    };
    metaData.push(itemData);
  });

  return {
    props: {
      meta: metaData,
    },
  };
};
