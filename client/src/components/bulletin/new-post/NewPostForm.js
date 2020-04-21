import React, { useState, useEffect } from 'react';

import { Form, Input, Switch } from 'antd';

import MediaUploader from '../upload-media/MediaUploader';
import EditableTagGroup from '../tag-group-editable/EditableTagGroup';

import 'antd/es/form/style/css';
import 'antd/es/input/style/css';
import 'antd/es/switch/style/css';

const { TextArea } = Input;

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

const formField = {
  author: "author",
  message: "message",
  mediaList: "mediaList",
  tagList: "tagList",
  allowCommenting: "allowCommenting"
}

const messageLengthUpperLimit = 2000;
const nameLengthUpperLimit = 30;
const tagMaxCount = 10;
const tagAllowedLength = 75;
const tagMaxDisplayLength = 15;

function NewPostForm(props) {
  const { form, shouldValidateForm, setValidateForm, clearForm, setClearForm, onFinish, setDisableSubmit } = { ...props };
  
  const [isMessageRequired, setMessageRequired] = useState(true);

  const [mediaList, setMediaList] = useState([]);
  const [tagList, setTagList] = useState([]);

  useEffect(() => {
    resetForm();
  }, [clearForm]);

  // So that it will not show the red error text when first open modal
  useEffect(() => {
    if (shouldValidateForm) {
      form.validateFields();
    }
    setValidateForm(true);
    setClearForm(false);
  }, [isMessageRequired]);

  // Media is not required if there is message. Vice Versa
  useEffect(() => {
    updateFormRequiredRules();
  }, [mediaList]);

  const updateMediaListForForm = _mediaList => {
    setMediaList(_mediaList);
    form.setFieldsValue({
      [formField.mediaList]: _mediaList
    });
  }

  const updateTagListForForm = _tagList => {
    setTagList(_tagList);
    form.setFieldsValue({
      [formField.tagList]: _tagList
    })
  }

  const updateFormRequiredRules = () => {
    let hasMedia = mediaList.length > 0;
    setMessageRequired(!hasMedia);
  }

  const resetForm = () => {
    updateMediaListForForm([]);
    updateTagListForForm([]);
    form.setFieldsValue({
      [formField.author]: "",
      [formField.message]: "",
      [formField.allowCommenting]: true
    });
  }

  return (
    <Form form={form}
          onFinish={onFinish}
          name="form_in_modal"
          scrollToFirstError
          initialValues={{
            modifier: 'public',
          }}
          {...formItemLayout}
    >
      <Form.Item name={formField.mediaList} label="Media">
        <MediaUploader mediaList={mediaList} onUpdateList={updateMediaListForForm} onUploading={setDisableSubmit} />
      </Form.Item>

      <Form.Item name={formField.message}
                 label="Message"
                 rules={[
                   {
                    required: isMessageRequired,
                    message: "Please provide a message"
                   },
                   {
                     max: messageLengthUpperLimit,
                     message: `Message cannot be longer than ${messageLengthUpperLimit} characters`
                   }
                 ]}
      >
        <TextArea autoSize={{ minRows: 3, maxRows: 5 }} allowClear />
      </Form.Item>

      <Form.Item name={formField.tagList} label="Tags">
        <EditableTagGroup tagList={tagList} 
                          onUpdateList={updateTagListForForm}
                          maxTagCount={tagMaxCount} 
                          tagMaxLength={tagAllowedLength} 
                          tagDisplayLength={tagMaxDisplayLength} />
      </Form.Item>

      <Form.Item name={formField.author}
        label="Name"
        rules={[
          {
            max: nameLengthUpperLimit,
            message: `Name cannot be longer than ${nameLengthUpperLimit} characters`
          }
        ]}
      >
        <Input allowClear />
      </Form.Item>

      <Form.Item name={formField.allowCommenting} label="Commenting" valuePropName="checked">
        <Switch />
      </Form.Item>

    </Form>
  );
};

export default NewPostForm;