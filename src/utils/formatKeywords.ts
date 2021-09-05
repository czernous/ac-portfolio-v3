export default function formatKeywords(kwArr: string[]): any {
  return kwArr.map((kw: string, index: number) => {
    const whiteSpace = index > 0 ? " " : "";
    const keyword = `${whiteSpace}${kw.split("_").join(" ")}`;
    return keyword;
  });
}
