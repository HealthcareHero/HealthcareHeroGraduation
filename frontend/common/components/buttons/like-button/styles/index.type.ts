import {
  Css as CommonCss,
  InlineCss as CommonInlineCss,
} from '../../common/styles/index.type'

export interface Css extends CommonCss {
  inline: InlineStyle;
}

export interface InlineStyle {
  filled: FilledStyle;
  outlined: OutlinedStyle;
}

export interface FilledStyle extends CommonInlineCss {
  color: string;
}

export interface OutlinedStyle extends CommonInlineCss {}
