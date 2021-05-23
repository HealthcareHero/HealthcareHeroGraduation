import { styles } from './styles/index.style'
import { CarouselProps } from './types/index.type'
import { Carousel as AntdCarousel } from 'antd';

export default function Carousel({ media, autoplay, loading }: CarouselProps) {
  return (
    <AntdCarousel autoplay={autoplay}>
      {
        media.map((item, index) => {
          return (
            <div className={styles.container} key={index}>
              <img src={item} alt={item} loading={loading} className={styles.img}/>
            </div>
          )
        })
      }
    </AntdCarousel>
  );
}
