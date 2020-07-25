import { useMediaQuery } from '../../../../utilities/mediaQuery';

const paddingSide = "8px";
const marginSection = "1.5em";

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

export const useStyle = () => {
  const { isLargeScreen } = useMediaQuery();

  const section = isLargeScreen ? sectionLarge : sectionSmall;

  return {
    page,
    section,
    sectionHeader
  };
}