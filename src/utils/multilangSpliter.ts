import type { MarkdownInstance } from 'astro';

const langs = ['tw', 'en'] as const;

export type Lang = (typeof langs)[number];
export type LangProps = { lang?: Lang };
export type MD = MarkdownInstance<Record<string, any>>;

type LangMDs = Partial<Record<(typeof langs)[number], MD[]>>;

export default function (allFiles: MD[], lang): MD | MD[] {
  const mds: LangMDs = {};

  for (const key of langs) {
    if (!mds[key]) {
      mds[key] = [];
    }
    const files = mds[key];
    const filenameMatch = new RegExp(`\.${key}\.md$`);
    const langFiles = allFiles.filter((md) => {
      return md.file.match(filenameMatch);
    });
    files.push(...langFiles);
  }

  return mds[lang].length === 1 ? mds[lang][0] : mds[lang];
}
