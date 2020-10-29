import fs from "fs";
import path from "path";
import util from "util";
import { DocInfoWithFilePath, SearchDocument } from "../../shared/interfaces";
import { parse } from "./parse";
import { debugVerbose } from "./debug";

const readFileAsync = util.promisify(fs.readFile);

let nextDocId = 0;
const getNextDocId = () => {
  return (nextDocId += 1);
};

export async function scanDocuments(
  DocInfoWithFilePathList: DocInfoWithFilePath[]
): Promise<SearchDocument[][]> {
  const titleDocuments: SearchDocument[] = [];
  const headingDocuments: SearchDocument[] = [];
  const contentDocuments: SearchDocument[] = [];
  const allDocuments = [titleDocuments, headingDocuments, contentDocuments];

  await Promise.all(
    DocInfoWithFilePathList.map(async ({ filePath, url, type }) => {
      debugVerbose(
        `parsing %s file %o of %o`,
        type,
        path.relative(process.cwd(), filePath),
        url
      );

      const html = await readFileAsync(filePath, { encoding: "utf8" });
      const { pageTitle, sections } = parse(html, type, url);

      const titleId = getNextDocId();

      titleDocuments.push({
        i: titleId,
        t: pageTitle,
        u: url,
      });

      for (const section of sections) {
        if (section.title !== pageTitle) {
          headingDocuments.push({
            i: getNextDocId(),
            t: section.title,
            u: url + section.hash,
            p: titleId,
          });
        }

        if (section.content) {
          contentDocuments.push({
            i: getNextDocId(),
            t: section.content,
            u: url + section.hash,
            p: titleId,
          });
        }
      }
    })
  );
  return allDocuments;
}