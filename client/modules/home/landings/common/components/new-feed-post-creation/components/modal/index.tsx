import { NewFeedPostModalProps } from './types/index.type'
import { Modal as AntdModal, Form as AntdForm, message} from 'antd';
import Form from './components/form'
import { useState } from 'react';
import { FORM_NAME, formFieldNames } from './configurations'
import { STATUS_UPLOADING } from 'client/common/components/media-uploader/constants'

export default function Modal({ isVisible, setVisible }: NewFeedPostModalProps) {
  const [form] = AntdForm.useForm();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [disableSubmit, setDisableSubmit] = useState<boolean>(false);

  const handleCancel = (): void => {
    setVisible(false);
  }

  const handleSubmit = () => {
    form
    .validateFields()
    .then(values => {
      form.resetFields();
      setLoading(true);
      console.log("SUBMIT VALUES", values) // TODO: call api to submit
      setLoading(false);
      setVisible(false);
    })
    .catch((error => {
      message.error("Unable to submit");
    }))
  }

  const handleFormChange = (name, { changedFields }) => {
    if (name === FORM_NAME) {
      changedFields.map(x => {
        try {
          if (x.name[0] === formFieldNames.media) {
            if (x.value.some(x => x.status === STATUS_UPLOADING)) {
              setDisableSubmit(true);
            } else {
              setDisableSubmit(false);
            }
          }
        } catch {}
      });
    }
  }

  return (
    <AntdModal
      title="Write a message"
      visible={isVisible}
      confirmLoading={isLoading}
      okText="Submit"
      onOk={handleSubmit}
      onCancel={handleCancel}
    >
      <AntdForm.Provider
        onFormChange={handleFormChange}
      >
        <Form name={FORM_NAME} form={form} />
      </AntdForm.Provider>
    </AntdModal>
  );
}
