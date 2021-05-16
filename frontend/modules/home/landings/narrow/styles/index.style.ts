import css from './index.module.css'
import { GLOBAL_PADDING_XS, GLOBAL_PADDING_SM } from 'common/styles/constant'
import { useMediaQuery } from 'common/utils/media-query'

const getContentSection = (): string => {
  const { isXsOrSmaller } = useMediaQuery();
  if (isXsOrSmaller) {
    return [GLOBAL_PADDING_XS, css.content].join(" ");
  } else {
    return [GLOBAL_PADDING_SM, css.content].join(" ");
  }
};

export const styleMethods = {
  getContentSection
}