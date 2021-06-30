import css from '../../common/styles/index.module.css'
import { inlineCss as commonInlineCss } from '../../common/styles/index.style'
import { Css } from './index.type'

export const styles: Css = {
  button: css.button,
  inline: {
    ...commonInlineCss
  }
}
