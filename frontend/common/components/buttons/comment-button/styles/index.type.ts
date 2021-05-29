import {
  Css as CommonCss,
  InlineCss as CommonInlineCss,
} from '../../common/styles/index.type'

export interface Css extends CommonCss {
  inline: CommonInlineCss;
}
