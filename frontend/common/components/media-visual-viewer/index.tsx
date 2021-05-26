import { MediaVisualViewerProps } from './types/index.type'
import Carousel from './components/carousel'

export default function MediaVisualViewer({
  media,
  autoplay,
  loadingType,
  styles,
}: MediaVisualViewerProps) {
  return (
    <Carousel
      media={media}
      autoplay={autoplay}
      loading={loadingType}
      customStyles={styles}
    />
  );
}
