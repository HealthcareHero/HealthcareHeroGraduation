import { MediaViewerProps } from './types/index.type'
import MediaVisualViewer from 'client/common/components/media-visual-viewer'

export default function MediaViewer({ media }: MediaViewerProps) {
  return <MediaVisualViewer media={media} />  
}
