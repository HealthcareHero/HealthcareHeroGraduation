import { Grid } from "antd";
import { MediaQueryHook } from './index.type'

const { useBreakpoint } = Grid;

export const useMediaQuery = (): MediaQueryHook => {
  const screens = useBreakpoint();
  return {
    isXsOrSmaller: screens.xs,
    isSmOrLarger: screens.sm,
    isMdOrLarger: screens.md,
    isLgOrLarger: screens.lg,
    isXlOrLarger: screens.xl,
    isSmExactly: !screens.xs && !screens.md,
    isMdExactly: !screens.xs && screens.md && !screens.lg
  }
};
