import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked';
import Head from 'next/head';
import IStaticPropsParams from 'interfaces/static-props-params';
import IParsedPageData from 'interfaces/parsed-page-data';

const PortfolioDetailItem = ({ content, meta }: IParsedPageData) => (
  <>
    <Head>
      <title>{meta.title}</title>
    </Head>
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </>
);
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
  const htmlString: HTMLCollection = marked(parsedMarkdown.content);

  return {
    props: {
      content: htmlString,
      meta: parsedMarkdown.data,
    },
  };
};

export default PortfolioDetailItem;
