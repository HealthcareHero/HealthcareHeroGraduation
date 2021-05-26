export interface MediaVisualViewerProps {
  media: string[];
  loadingType?: "eager" | "lazy";
  autoplay?: boolean;
  styles?: MediaVisualViewerStyles;
}

export interface MediaVisualViewerStyles {
  container: string;
  img: string;
}
