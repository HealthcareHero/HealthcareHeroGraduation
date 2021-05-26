import { MediaVisualViewerProps } from './types/index.type'
import MediaViewer from 'common/components/media-visual-viewer'

export default function MediaVisualViewer({ media }: MediaVisualViewerProps ) {
  return (
    <MediaViewer media={media} />
  );
}
