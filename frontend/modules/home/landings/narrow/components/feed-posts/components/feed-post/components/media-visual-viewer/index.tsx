import { MediaVisualViewerProps } from './types/index.type'
import Carousel from './components/carousel'

export default function MediaVisualViewer({ media }: MediaVisualViewerProps ) {
  return (
    <Carousel media={media} autoplay={true} loading="eager" />
  );
}
