import { styles } from "./styles/index.style";
import { TagsProps } from "./types/index.type";
import { Tooltip } from "antd";
import Tag from "./components/tag";
import { isLongText, transformText } from './helpers'

export default function Tags({ texts, textDisplayLength }: TagsProps) {
  return (
    <div className={styles.tags}>
      {texts.map((text, index) => {
        return isLongText(text, textDisplayLength) ? (
          <Tooltip title={text} key={index}>
            <Tag text={transformText(text, textDisplayLength)} />
          </Tooltip>
        ) : (
          <Tag text={text} key={index} />
        );
      })}
    </div>
  );
}
