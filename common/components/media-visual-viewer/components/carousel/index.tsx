import { styles } from './styles/index.style'
import { CarouselProps } from '../../common/types/index.type'
import { Carousel as AntdCarousel } from 'antd'

export default function Carousel({
  media,
  autoplay,
  loadingType,
  style,
}: CarouselProps) {
  return (
    <AntdCarousel autoplay={autoplay ?? true}>
      {media.map((item, index) => {
        return (
          <div
            className={style?.container ?? styles.container}
            key={index}
          >
            <img
              src={item}
              alt={item}
              loading={loadingType ?? "eager"}
              className={style?.img ?? styles.img}
            />
          </div>
        );
      })}
    </AntdCarousel>
  );
}
