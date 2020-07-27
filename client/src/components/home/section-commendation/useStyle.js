import { useMediaQuery } from '../../../utilities/mediaQuery';
import { theme } from '../../../utilities/theme';

const paddingDefault = "8px";

const containerBase = {
  backgroundColor: "#1D1E22",
  display: "flex",
  paddingTop: paddingDefault,
  paddingBottom: paddingDefault,
  paddingLeft: paddingDefault,
  paddingRight: paddingDefault
}

const containerSmall = {
  ...containerBase,
}

const containerLarge = {
  ...containerBase
}

const imageBase = {
  
  maxHeight: "50vh"
}

const imageSmall = {
  ...imageBase,
  maxWidth: "35%"
}

const imageLarge = {
  ...imageBase,
  maxWidth: "100%"
}

const textBase = {
  color: theme.color.orange.primary,
  fontSize: "7.5vw",
  width: "100%",
  fontWeight: "600",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
}

const textSmall = {
  ...textBase,
}

const textLarge = {
  ...textBase,
  alignItems: "center"
}

export const useStyle = () => {
  const { isSmallScreen, isLargeScreen } = useMediaQuery();

  const container = isSmallScreen ? containerSmall : containerLarge;
  const image = isSmallScreen ? imageSmall : imageLarge;
  const text = isLargeScreen ? textLarge : textSmall;

  return {
    container,
    image,
    text
  };
}