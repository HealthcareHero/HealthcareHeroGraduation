import { useMediaQuery } from '../../../utilities/mediaQuery';
import { theme } from '../../../utilities/theme';

const container = {
  backgroundColor: theme.color.pink.secondary,
  height: "100vh"
}

const sectionSmall = {
  height: "100%",
  paddingLeft: "15px",
  paddingRight: "15px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
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
    sectionText
  };
}