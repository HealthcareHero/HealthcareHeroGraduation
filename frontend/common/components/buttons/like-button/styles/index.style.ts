import { inlineCss as commonInlineCss } from '../../common/styles/index.style'
import commonCcss from '../../common/styles/index.module.css'
import { Css, FilledStyle, OutlinedStyle } from './index.type'

const filled: FilledStyle = {
  ...commonInlineCss,
  color: "#eb2f96",
}

const outlined: OutlinedStyle = {
  ...commonInlineCss,
}; 

export const styles: Css = {
  button: commonCcss.button,
  inline: {
    filled,
    outlined,
  }
}
