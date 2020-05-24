import { useMediaQuery } from '../../utilities/mediaQuery';

const paddingSide = "8px";
const contentSpacingSmall = "0.5em";
const contentSpacingLarge = "0.75em";

const container = {
  maxHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
}

const imgSection = {
  width: "100%",
  maxWidth: "300px"
}

const contentSectionSmall = {
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  paddingLeft: paddingSide,
  paddingRight: paddingSide,
  marginTop: "0.5em",
  fontSize: "1.2em"
}

const contentSectionLarge = {
  ...contentSectionSmall,
  marginTop: "0.75em",
  fontSize: "1.75em"
}

const btnSectionSmall = {
  borderWidth:"3px",
  marginTop: contentSpacingSmall
}

const btnSectionLarge = {
  ...btnSectionSmall,
  marginTop: contentSpacingLarge
}

export const useStyle = () => {
  const { isSmallScreen, isMediumScreen, isLargeScreen } = useMediaQuery();

  const contentSection = isSmallScreen || isMediumScreen ? contentSectionSmall : contentSectionLarge;
  const btnSection = isSmallScreen || isMediumScreen ? btnSectionSmall : btnSectionLarge;

  return {
    container,
    imgSection,
    contentSection,
    btnSection
  };
}