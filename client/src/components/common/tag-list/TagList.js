import React from 'react';
import { Tag, Tooltip } from 'antd';

import 'antd/es/tag/style/css';
import 'antd/es/tooltip/style/css';

const gap = "7px"

function TagItem(props) {
  const { text } = {...props};
  return (
    <Tag style={{marginBottom: gap }}>
      #{text}
    </Tag>
  );
}

function TagList(props) {
  const { tagList, displayLength } = {...props};

  return (
    <div style={{display:"flex", flexWrap: "wrap", alignContent:"space-around", paddingTop: gap}}>
      {
        tagList.map((tag, index) => {
          let isLongTag = tag.length > displayLength;
          return (
            isLongTag ? <Tooltip title={tag} key={index}>
                          <TagItem text={`${tag.slice(0, displayLength)}...`}/>
                        </Tooltip>
                      : <TagItem text={tag} key={index}/>
        )})
      }
    </div>
  );
}

export default TagList;