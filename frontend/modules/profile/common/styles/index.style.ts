import styles from "./index.module.css";
import { useMediaQuery } from 'common/utils/media-query'

const getTextSection = () => {
  const { isXsOrSmaller, isSmExactly, isMdOrLarger } = useMediaQuery();
  if (isXsOrSmaller) {
    return styles["text-section-xs"];
  } else if (isSmExactly) {
    return styles["text-section-sm"];
  } else if (isMdOrLarger) {
    return styles["text-section"];
  }
};

export const classNames = {
  textSectionTitle: styles["text-section-title"],
  getTextSection
}