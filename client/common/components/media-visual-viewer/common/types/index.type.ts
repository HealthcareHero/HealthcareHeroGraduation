export interface CarouselProps {
  media: string[];
  autoplay?: boolean;
  loadingType?: "eager" | "lazy";
  style?: CarouselStyle;
}

export interface CarouselStyle {
  container: string;
  img: string;
}
