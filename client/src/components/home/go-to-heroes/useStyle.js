import { useMediaQuery } from '../../../utilities/mediaQuery';
import { theme } from '../../../utilities/theme';

const container = {
  backgroundColor: theme.color.pink.secondary,
  display: "table",
  minHeight: "calc(100vh - 64px)",
  width: "100%"
}

const sectionSmall = {
  height: "100%",
  paddingLeft: "8px",
  paddingRight: "8px",
  display:"table-cell",
  verticalAlign:"middle",
  textAlign: "center"
}

const sectionLarge = {
  width: "70vw",
  marginLeft: "auto",
  marginRight: "auto",
}

const sectionQuoteSmall = {
  fontWeight: "bold",
  fontSize: "2em",
  textAlign: "center"
}

const sectionQuoteLarge = {
  fontWeight: "bold",
  fontSize: "2em"
}

const sectionTextSmall = {
  fontSize: "1.25em",
  textAlign: "center"
}

const sectionTextLarge = {
  fontSize: "1.25em"
}

const hand = {
  maxHeight: "30vh",
  maxWidth: "45vw"
}

export const useStyle = () => {
  const { isLargeScreen } = useMediaQuery();

  const section = isLargeScreen ? sectionLarge : sectionSmall;
  const sectionQuote = isLargeScreen ? sectionQuoteLarge : sectionQuoteSmall;
  const sectionText = isLargeScreen ? sectionTextLarge : sectionTextSmall;

  return {
    isLargeScreen,
    container,
    section,
    sectionQuote,
    sectionText,
    hand
  };
}