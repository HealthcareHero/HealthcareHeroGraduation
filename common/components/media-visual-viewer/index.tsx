import { MediaVisualViewerProps } from './types/index.type'
import Carousel from './components/carousel'

export default function MediaVisualViewer({
  media,
  autoplay,
  loadingType,
  style,
}: MediaVisualViewerProps) {
  return (
    <Carousel
      media={media}
      autoplay={autoplay}
      loadingType={loadingType}
      style={style}
    />
  );
}
