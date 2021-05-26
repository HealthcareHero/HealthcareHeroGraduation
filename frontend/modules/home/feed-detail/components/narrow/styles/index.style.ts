import css from './index.module.css'
import { Css } from './index.type'
import { useGlobalStyleSidePadding } from 'common/styles/index.style'

export const styles: Css = {
  header: css.header,
  author: css.author,
  timestamp: css.timestamp,
  footer: css.footer,
  buttons: css.buttons,
}

export {
  useGlobalStyleSidePadding
};
