import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked';
import Head from 'next/head';
import IStaticPropsParams from 'interfaces/static-props-params';
import IParsedPageData from 'interfaces/parsed-page-data';
import MainLayout from 'layouts/main-layout/MainLayout';
import { AppContext } from './_app';
import { useContext } from 'preact/hooks';
import Navbar from 'components/Navbar/Navbar';
import { IAppState } from 'interfaces/app-state';

const PortfolioDetailItem = ({ content, meta }: IParsedPageData) => {
  const ctx = useContext(AppContext);
  const appState: IAppState = {...ctx} as IAppState;
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <MainLayout theme={appState.data.style}>
        <Navbar theme={appState.data.style} toggleTheme={appState.toggleFunc} />
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </MainLayout>
    </>
  );
};
export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.resolve('src/static-content/portfolio'));
  return {
    paths: files.map((filename) => ({
      params: {
        slug: filename.replace('.md', ''),
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
      path.join(path.resolve('src/static-content/portfolio'), slug + '.md')
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

export default PortfolioDetailItem;
