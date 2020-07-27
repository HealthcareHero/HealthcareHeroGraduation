import useMaterialUiMediaQuery from '@material-ui/core/useMediaQuery';
import useWindowSize from 'react-use/lib/useWindowSize';

const mediaQuery = {
  minWidth: {
    small: '(min-width:480px)',
    medium: '(min-width:768px)'
  }
}

export const useMediaQuery = () => {
  const { width, height } = useWindowSize();
  const isMinSmall = useMaterialUiMediaQuery(mediaQuery.minWidth.small);
  const isMinMedium = useMaterialUiMediaQuery(mediaQuery.minWidth.medium);
  
  const isSmallScreen = !isMinSmall;
  const isMediumScreen = isMinSmall && !isMinMedium;
  const isLargeScreen = isMinMedium;
  
  return {
    width, 
    height,
    isSmallScreen,
    isMediumScreen,
    isLargeScreen
  }
}