import { useState } from 'react';
import { FormProps } from './types/index.type'
import { formFieldNames, formFieldDefaultValues, formFieldRules } from '../../configurations'
import { FEED_POST_FILE_LIST_MAX_LENGTH } from 'common/constants'
import { Form as AntdForm, Select, Input, Switch } from 'antd';
import MediaUploader from 'client/common/components/media-uploader'
import EditableTagGroup from 'client/common/components/tags/editable-tag-group'

const { Option } = Select;
const { TextArea } = Input;

export default function Form({ name, form }: FormProps) {
  return (
    <AntdForm
      form={form}
      layout="vertical"
      name={name}
      initialValues={formFieldDefaultValues}
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
          <Option value="PRIYANKA">Priyankadarshni</Option>
        </Select>
      </AntdForm.Item>

      <AntdForm.Item name={formFieldNames.media} label="Media">
        <MediaUploader fileListUpperLimit={FEED_POST_FILE_LIST_MAX_LENGTH}/>
      </AntdForm.Item>

      <AntdForm.Item name={formFieldNames.message} label="Message" rules={formFieldRules.message}>
        <TextArea autoSize={{ minRows: 3, maxRows: 5 }} allowClear placeholder="Write your message here..." />
      </AntdForm.Item>

      <AntdForm.Item name={formFieldNames.tags} label="Tags">
        <EditableTagGroup />
      </AntdForm.Item>

      <AntdForm.Item name={formFieldNames.enableComment} label="Enable Comments" valuePropName="checked">
        <Switch />
      </AntdForm.Item>
    </AntdForm>
  );
}
