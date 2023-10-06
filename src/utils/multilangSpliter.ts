import type { MarkdownInstance } from 'astro';

const langs = ['tw', 'en'] as const;

export type Lang = (typeof langs)[number];
export type MD = MarkdownInstance<Record<string, any>>;

type LangMDs = Partial<Record<(typeof langs)[number], MD[]>>;

const isHidedFileName = (filename: string) => filename.match(/\/_\w+.\w+.md/g);

function splitter(allFiles: MD[], lang, isFiles?: false): MD;
function splitter(allFiles: MD[], lang, isFiles?: true): MD[];
function splitter(allFiles: MD[], lang, isFiles?: boolean): MD | MD[] {
  const mds: LangMDs = {};

  for (const key of langs) {
    if (!mds[key]) {
      mds[key] = [];
    }
    const files = mds[key];
    const filenameMatch = new RegExp(`\.${key}\.md$`);
    const langFiles = allFiles.filter((md) => {
      return md.file.match(filenameMatch) && !isHidedFileName(md.file);
    });
    files.push(...langFiles);
  }

  return isFiles ? mds[lang] : mds[lang][0];
}

export default splitter;
