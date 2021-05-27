import { Css as CommonStyle } from '../../common/styles/index.type'

export interface Css extends CommonStyle {
  filledStyle: FilledStyle;
}

export interface FilledStyle {
  color: string;
}
