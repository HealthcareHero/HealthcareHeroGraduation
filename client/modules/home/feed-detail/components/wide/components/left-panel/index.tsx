import { styles, mediaStyles } from './styles/index.style'
import { LeftPanelProps } from './types/index.type'
import MediaVisualViewer from 'client/common/components/media-visual-viewer'

export default function LeftPanel({ media }: LeftPanelProps) {
  return (
    <div className={styles.container}>
      <MediaVisualViewer media={media} style={mediaStyles}/>
    </div>
  )  
}
