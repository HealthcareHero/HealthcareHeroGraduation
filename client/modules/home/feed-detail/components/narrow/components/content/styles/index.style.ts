import css from './index.module.css'
import { Css } from './index.type'
import { useGlobalStyleSidePadding } from 'client/common/styles/index.style'

export const styles: Css = {
  header: css.header,
  author: css.author,
  timestamp: css.timestamp,
  message: css.message,
  footer: css.footer,
  buttons: css.buttons,
}

export {
  useGlobalStyleSidePadding
};
