import { FormProps } from './types/index.type'
import { Form as AntdForm, Select, Input, Switch } from 'antd';
import MediaUploader from 'client/common/components/media-uploader'
import { useState } from 'react';

const { Option } = Select;
const { TextArea } = Input;

const formFieldNames = {
  author: "author",
  recipient: "recipient",
  media: "media",
  message: "message",
  enableComment: "enableComment"
}

// TODO: put these values in server:
const messageLengthUpperLimit = 2000;
const fileListUpperLimit = 3;

const defaultValues = {
  [formFieldNames.enableComment]: true
}

const formFieldRules = {
  [formFieldNames.recipient]: [{ required: true, message: 'Please select a recipient' }],
  [formFieldNames.message]: [
    { 
      required: true,
      message: 'Please provide a message'
    }, 
    {
      max: messageLengthUpperLimit,
      message: `Message cannot be longer than ${messageLengthUpperLimit} characters`
    }
  ]
}

export default function Form({ form }: FormProps) {
  const [ isMediaUploading, setMediaUploading ] = useState<boolean>(false);

  return (
    <AntdForm
      form={form}
      layout="vertical"
      name="new-feed-post-form"
      initialValues={defaultValues}
      scrollToFirstError
    >
      <AntdForm.Item name={formFieldNames.author} label="From">
        <Input placeholder="Please input your name" />
      </AntdForm.Item>

      <AntdForm.Item name={formFieldNames.recipient} label="To" rules={formFieldRules.recipient}>
        <Select placeholder="Please select to whom this message is for">
          <Option value="ALL">ALL</Option>
          <Option value="BERNARD">Bernard</Option>
          <Option value="JEANIE">Jeanie</Option>
        </Select>
      </AntdForm.Item>

      <AntdForm.Item name={formFieldNames.media} label="Media">
        <MediaUploader setIsUploading={setMediaUploading} fileListUpperLimit={fileListUpperLimit}/>
      </AntdForm.Item>

      <AntdForm.Item name={formFieldNames.message} label="Message" rules={formFieldRules.message}>
        <TextArea autoSize={{ minRows: 3, maxRows: 5 }} allowClear placeholder="Write your message here..." />
      </AntdForm.Item>

      <AntdForm.Item name={formFieldNames.enableComment} label="Enable Comments" valuePropName="checked">
        <Switch />
      </AntdForm.Item>
    </AntdForm>
  );
}
