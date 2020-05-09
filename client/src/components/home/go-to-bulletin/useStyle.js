import { useMediaQuery } from '../../../utilities/mediaQuery';

const container = {
  display: "table",
  minHeight: "100vh",
  width: "100%",
}

const sectionSmall = {
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
  textAlign: "center",
}

const nurse = {
  maxHeight: "30vh",
  maxWidth: "45vw"
}

export const useStyle = () => {
  const { isLargeScreen } = useMediaQuery();

  const section = isLargeScreen ? {} : sectionSmall;
  const headerText = isLargeScreen ? {} : headerTextSmall;

  return {
    container,
    section,
    headerText,
    nurse
  };
}