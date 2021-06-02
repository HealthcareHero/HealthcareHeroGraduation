import { useMediaQuery } from 'client/common/utils/media-query'
import { GLOBAL_PADDING_XS, GLOBAL_PADDING_SM, GLOBAL_PADDING_MD_OR_LARGER } from './constant'

export const useGlobalStyleSidePadding = (): string => {
  const { isXsOrSmaller, isSmExactly } = useMediaQuery();
  if (isXsOrSmaller) {
    return GLOBAL_PADDING_XS;
  } else if (isSmExactly) {
    return GLOBAL_PADDING_SM;
  } else {
    return GLOBAL_PADDING_MD_OR_LARGER;
  }
};
