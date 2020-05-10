import { useMediaQuery } from '../../../utilities/mediaQuery';

const container = {
  display: "table",
  minHeight: "100vh",
  width: "100%",
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
  fontSize: "2em",
}

const headerTextLarge = {
  fontWeight: "bold",
  fontSize: "5vw",
}

const contentTextContainer = {
  marginTop: "2vh",
  marginBottom: "7vh"
}

const contentTextSmall = {
  fontSize: "1em"
}

const contentTextLarge = {
  fontSize: "1.75vw"
}

const nurse = {
  maxHeight: "30vh",
  maxWidth: "30vw"
}

const heart = {
  maxHeight: "20vh",
  maxWidth: "15vw",
  paddingBottom: "10vh"
}

export const useStyle = () => {
  const { isSmallScreen, isLargeScreen } = useMediaQuery();

  const headerText = isLargeScreen ? headerTextLarge : headerTextSmall;
  const contentText = isLargeScreen ? contentTextLarge : contentTextSmall;

  return {
    isSmallScreen,
    container,
    section,
    headerText,
    contentTextContainer,
    contentText,
    nurse,
    heart
  };
}