import { styles } from "./styles/index.style";
import { TagGroupProps } from "./types/index.type";
import Tag from "../common/components/tag";

export default function TagGroup({ texts }: TagGroupProps) {
  return (
    <div className={styles.tags}>
      { texts.map((text, index) => <Tag text={text} key={index} />) }
    </div>
  );
}
