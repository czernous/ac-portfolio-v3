import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import Head from "next/head";
import IStaticPropsParams from "interfaces/static-props-params";
import IParsedPageData from "interfaces/parsed-page-data";
import MainLayout from "layouts/main-layout/MainLayout";
import { AppContext } from "../_app";
import { useContext } from "preact/hooks";
import Navbar from "components/Navbar/Navbar";
import { IAppState } from "interfaces/app-state";
import formatKeywords from "utils/formatKeywords";

const ServiceDetailItem = ({ content, meta }: IParsedPageData) => {
  const ctx = useContext(AppContext);
  const appState: IAppState = { ...ctx } as IAppState;
  return (
    <>
      <Head>
        <title>{`${appState.siteName} | ${meta.title}`}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={formatKeywords(meta.tags)} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:url" content={meta.url} />
      </Head>
      <MainLayout theme={appState.data.style}>
        <Navbar theme={appState.data.style} toggleTheme={appState.toggleFunc} />
        <div className="container-xxl">
          <h1 className="page-title my-5 mx-3">{meta.title}</h1>
          <div
            className="mt-3 px-3 d-flex flex-column"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </MainLayout>
    </>
  );
};
export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.resolve("src/static-content/services"));
  return {
    paths: files.map((filename) => ({
      params: {
        slug: filename.replace(".md", ""),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params: { slug },
}: IStaticPropsParams) => {
  const markdownWithMetadata = fs
    .readFileSync(
      path.join(path.resolve("src/static-content/services"), slug + ".md"),
    )
    .toString();
  const parsedMarkdown = matter(markdownWithMetadata);
  const htmlString = marked(parsedMarkdown.content);

  return {
    props: {
      content: htmlString,
      meta: parsedMarkdown.data,
    },
  };
};

export default ServiceDetailItem;
