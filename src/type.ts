import type { Lang } from './utils/multilangSpliter';

declare global {
  type BlockProps = {
    lang?: Lang;
  };
}
