import { styles } from './styles/index.style'
import { MediaViewerProps } from './types/index.type'
import MediaVisualViewer from 'common/components/media-visual-viewer'

export default function MediaViewer({ media }: MediaViewerProps) {
  return <MediaVisualViewer media={media} styles={styles} />  
}
