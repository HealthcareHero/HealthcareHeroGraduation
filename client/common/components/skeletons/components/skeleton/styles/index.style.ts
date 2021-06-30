import css from './index.module.css'
import { useGlobalStyleSidePadding } from 'client/common/styles/index.style'

export const useStyleContentSection = (): string => {
  const sidePadding = useGlobalStyleSidePadding();
  return [sidePadding, css.container].join(" ");
};
