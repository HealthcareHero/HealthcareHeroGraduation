export interface CarouselProps {
  media: string[];
  autoplay?: boolean;
  loading?: "eager" | "lazy";
  customStyles?: Styles;
}

export interface Styles {
  container: string;
  img: string;
}
