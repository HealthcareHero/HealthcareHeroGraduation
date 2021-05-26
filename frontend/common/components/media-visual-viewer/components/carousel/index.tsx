import { styles } from './styles/index.style'
import { CarouselProps } from './types/index.type'
import { Carousel as AntdCarousel } from 'antd'

export default function Carousel({
  media,
  autoplay,
  loading,
  customStyles,
}: CarouselProps) {
  return (
    <AntdCarousel autoplay={autoplay ?? true}>
      {media.map((item, index) => {
        return (
          <div
            className={customStyles?.container ?? styles.container}
            key={index}
          >
            <img
              src={item}
              alt={item}
              loading={loading ?? "eager"}
              className={customStyles?.img ?? styles.img}
            />
          </div>
        );
      })}
    </AntdCarousel>
  );
}
