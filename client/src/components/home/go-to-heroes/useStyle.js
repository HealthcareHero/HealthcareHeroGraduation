import { useMediaQuery } from '../../../utilities/mediaQuery';
import { theme } from '../../../utilities/theme';

const container = {
  backgroundColor: theme.color.pink.secondary,
  display: "table",
  minHeight: "100vh",
  width: "100%"
}

const section = {
  height: "100%",
  paddingLeft: "8px",
  paddingRight: "8px",
  display:"table-cell",
  verticalAlign:"middle",
  textAlign: "center"
}

const headerTextSmall = {
  fontWeight: "bold",
  fontSize: "2em"
}

const headerTextLarge = {
  fontWeight: "bold",
  fontSize: "3vw"
}

const contentTextContainer = {
  marginTop: "7vh",
  marginBottom: "5vh"
}

const contentTextSmall = {
  fontSize: "1.25em",
  marginBottom: "7vh"
}

const contentTextLarge = {
  fontSize: "1.75vw",
  marginBottom: "7vh"
}

const hand = {
  maxHeight: "30vh",
  maxWidth: "45vw"
}

export const useStyle = () => {
  const { isLargeScreen } = useMediaQuery();

  const headerText = isLargeScreen ? headerTextLarge : headerTextSmall;
  const contentText = isLargeScreen ? contentTextLarge : contentTextSmall;

  return {
    isLargeScreen,
    container,
    section,
    headerText,
    contentTextContainer,
    contentText,
    hand
  };
}