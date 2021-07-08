import css from './index.module.css'
import { Css, MediaCss } from './index.type'

export const styles: Css = {
  container: css.container,
}

export const mediaStyles: MediaCss = {
  container: css["media-container"],
  img: css["media-img"]
}
