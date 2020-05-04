import useMaterialUiMediaQuery from '@material-ui/core/useMediaQuery';

export const mediaQuery = {
  minWidth: {
    small: '(min-width:480px)',
    medium: '(min-width:768px)'
  }
}

export const useMediaQuery = () => {
  const isMinSmall = useMaterialUiMediaQuery(mediaQuery.minWidth.small);
  const isMinMedium = useMaterialUiMediaQuery(mediaQuery.minWidth.medium);
  
  const isSmallScreen = !isMinSmall;
  const isMediumScreen = isMinSmall && !isMinMedium;
  const isLargeScreen = isMinMedium;
  
  return {
    isSmallScreen,
    isMediumScreen,
    isLargeScreen
  }
}