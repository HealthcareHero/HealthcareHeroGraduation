import css from './index.module.css'
import { Css } from './index.type'
import { useGlobalStyleSidePadding } from 'client/common/styles/index.style'
import { useMediaQuery } from 'client/common/utils/media-query'

export const styles: Css = {
  textSectionTitle: css["text-section-title"],
};

export const useStyleTextSection = (): string => {
  const globalStyleSidePadding = useGlobalStyleSidePadding();
  const { isXsOrSmaller, isSmExactly, isMdOrLarger } = useMediaQuery();
  if (isXsOrSmaller) {
    return [globalStyleSidePadding, css["text-section-xs"]].join(" ");
  } else if (isSmExactly) {
    return [globalStyleSidePadding, css["text-section-sm"]].join(" ");
  } else if (isMdOrLarger) {
    return [globalStyleSidePadding, css["text-section"]].join(" ");
  }
};
