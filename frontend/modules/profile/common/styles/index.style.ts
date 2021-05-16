import css from './index.module.css'
import { GLOBAL_PADDING_XS, GLOBAL_PADDING_SM, GLOBAL_PADDING_MD_OR_LARGER } from 'common/styles/constant'
import { Css, CssMethods } from './index.type'
import { useMediaQuery } from 'common/utils/media-query'

const getTextSection = (): string => {
  const { isXsOrSmaller, isSmExactly, isMdOrLarger } = useMediaQuery();
  if (isXsOrSmaller) {
    return [GLOBAL_PADDING_XS, css["text-section-xs"]].join(" ");
  } else if (isSmExactly) {
    return [GLOBAL_PADDING_SM, css["text-section-sm"]].join(" ");
  } else if (isMdOrLarger) {
    return [GLOBAL_PADDING_MD_OR_LARGER, css["text-section"]].join(" ");
  }
};

export const styles: Css = {
  textSectionTitle: css["text-section-title"],
}

export const styleMethods: CssMethods = {
  getTextSection,
}