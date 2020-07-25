import { useMediaQuery } from '../../../../utilities/mediaQuery';
import { theme } from '../../../../utilities/theme';

const paddingSide = "8px";
const marginSection = "1.5em";
const heightImage = "200px";
const paddingBlockQuote = "53px"
const offsetBlockQuote = `-${paddingBlockQuote}`;

const page = {
  paddingTop: paddingSide
}

const sectionSmall = {
  paddingLeft: paddingSide,
  paddingRight: paddingSide,
  marginBottom: marginSection,
  textAlign: "justify"
}

const sectionLarge = {
  width: "70vw",
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: marginSection,
  textAlign: "justify"
}

const sectionHeader = { 
  fontSize: "1.5em",
  fontWeight: "600",
  color: "#fa8c16"
};

const mediaSectionHeaderSmall = {
  ...sectionHeader,
  paddingLeft: paddingSide
}

const mediaSectionHeaderLarge = {
  ...sectionHeader,
}

const mediaSectionSmall = {
  textAlign: "justify",
  marginBottom: marginSection,
}

const mediaSectionMedium = {
  ...sectionSmall
}

const mediaSectionLarge = {
  ...sectionLarge
}

const mediaSectionImageSmall = {
  objectFit: "cover",
  width: "100%",
  height: "250px",
}

const mediaSectionImageLarge = {
  float: "left",
  paddingRight: paddingSide,
  height: heightImage
}

const mediaSectionTextSmall = {
  paddingLeft: paddingSide,
  paddingRight: paddingSide,
  paddingTop: "0.5em",
}

const mediaSectionTextLarge = {
  minHeight: heightImage
}

const blockQuoteSection = {
  marginTop: "2em"
}

const blockQuoteImage = {
  width: "100%",
  maxWidth: "300px",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: offsetBlockQuote,
  position: "relative",
  bottom: offsetBlockQuote,
  zIndex: "12"
}

const blockQuoteOffsetBackground = {
  backgroundColor: theme.color.yellow.secondary,
  paddingTop: paddingBlockQuote,
  paddingBottom: "35px"
}

const blockQuoteMedium = {
  width: "90vw",
  marginLeft: "auto",
  marginRight: "auto"
}

const blockQuoteLarge = {
  width: "70vw",
  marginLeft: "auto",
  marginRight: "auto"
}

export const useStyle = () => {
  const { isSmallScreen, isMediumScreen, isLargeScreen } = useMediaQuery();

  const section = isLargeScreen ? sectionLarge : sectionSmall;

  const mediaSectionHeader = isSmallScreen ? mediaSectionHeaderSmall : mediaSectionHeaderLarge;

  const mediaSection = isLargeScreen ? mediaSectionLarge : isMediumScreen ? mediaSectionMedium : mediaSectionSmall;

  const mediaSectionImage = isSmallScreen ? mediaSectionImageSmall : mediaSectionImageLarge;

  const mediaSectionText = isSmallScreen ? mediaSectionTextSmall : mediaSectionTextLarge;

  const blockQuote = isLargeScreen ? blockQuoteLarge : isMediumScreen ? blockQuoteMedium : {};

  return {
    page,
    section,
    sectionHeader,
    mediaSection,
    mediaSectionHeader,
    mediaSectionImage,
    mediaSectionText,
    blockQuoteSection,
    blockQuoteImage,
    blockQuoteOffsetBackground,
    blockQuote,
  };
}