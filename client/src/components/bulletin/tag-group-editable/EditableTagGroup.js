import React, { useState } from 'react';
import { Tag, Input, Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import 'antd/es/tag/style/css';
import 'antd/es/input/style/css';
import 'antd/es/tooltip/style/css';

import './editableTagGroup.css';

const indexNotFound = -1;

function EditableTagGroup(props) {
  const { tagList, onUpdateList, maxTagCount, tagMaxLength, tagDisplayLength } = {...props};
  const [newTagInputVisible, setNewTagInputVisible] = useState(false);
  const [newTagInputValue, setNewTagInputValue] = useState('');
  const [editTagInputValue, setEditTagInputValue] = useState('');
  const [editTagInputIndex, setEditTagInputIndex] = useState(indexNotFound);

  const getValidatedTag = (value) => {
    let text = value.trim();
    let result = text.match(/\w*/i);

    if (result[0] && text.length > tagMaxLength) {
      return result[0].substring(0, tagMaxLength).trim();
    }
    else return result[0];
  }

  const showNewTagInput = (event) => {
    setNewTagInputVisible(true);
  };

  const handleNewTagInputChange = ({ target }) => {
    let text = getValidatedTag(target.value);
    setNewTagInputValue(text);
  };

  const handleNewTagInputConfirm = () => {
    if (newTagInputValue) {
      let index = tagList.findIndex(tag => {
        return tag.toLowerCase() === newTagInputValue.toLowerCase();
      });
      
      if (index === indexNotFound) {
        onUpdateList(tagList.concat(newTagInputValue)); 
      }
    }
    
    setNewTagInputVisible(false);
    setNewTagInputValue('');
  };

  const handleEditTagInputChange = ({ target }) => {
    let text = getValidatedTag(target.value);
    setEditTagInputValue(text);
  };

  const handleEditTagInputConfirm = () => {
    const newTagList = [...tagList];
    if (editTagInputValue) {
      let index = tagList.findIndex((tag, index) => {
        return (index !== editTagInputIndex) && (tag.toLowerCase() === editTagInputValue.toLowerCase());
      })

      if (index === indexNotFound) {
        newTagList[editTagInputIndex] = editTagInputValue;
        onUpdateList(newTagList);
      }
    }

    setEditTagInputIndex(indexNotFound);
    setEditTagInputValue('');
  };

  const handleRemove = removedTag => {
    const filteredTagList = tagList.filter(tag => tag !== removedTag);
    onUpdateList(filteredTagList);
  };

  return (
    <div>
      {tagList.map((tag, index) => {
        if (editTagInputIndex === index) {
          return (
            <Input
              key={tag}
              autoFocus
              size="small"
              className="tag-input"
              value={editTagInputValue}
              onChange={handleEditTagInputChange}
              onBlur={handleEditTagInputConfirm}
              onPressEnter={handleEditTagInputConfirm}
            />
          );
        }

        const isLongTag = tag.length > tagDisplayLength;

        const tagElem = (
          <Tag
            className="edit-tag"
            key={tag}
            closable
            onClose={() => handleRemove(tag)}
          >
            <span
              onDoubleClick={e => {
                  setEditTagInputIndex(index);
                  setEditTagInputValue(tag);
                  e.preventDefault();
              }}
            >
              {isLongTag ? `${tag.slice(0, tagDisplayLength)}...` : tag}
            </span>
          </Tag>
        );

        return isLongTag ? (
          <Tooltip title={tag} key={tag}>
            {tagElem}
          </Tooltip>
        ) : (
            tagElem
          );
      })}

      {newTagInputVisible && (
        <Input
          autoFocus         
          type="text"
          size="small"
          className="tag-input"
          value={newTagInputValue}
          onChange={handleNewTagInputChange}
          onBlur={handleNewTagInputConfirm}
          onPressEnter={handleNewTagInputConfirm}
        />
      )}

      {!newTagInputVisible && tagList.length < maxTagCount && (
        <Tag className="site-tag-plus" onClick={showNewTagInput}>
          <PlusOutlined /> New Tag
        </Tag>
      )}
    </div>
  );

}

export default EditableTagGroup;