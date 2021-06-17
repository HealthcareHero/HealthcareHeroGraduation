import { useEffect, useState } from 'react';
import { NewFeedPostModalProps } from './types/index.type'
import { Modal as AntdModal, Form as AntdForm, message } from 'antd';
import Form from './components/form'
import Footer from './components/footer'
import { FORM_NAME, formFieldNames } from './configurations'
import { STATUS_UPLOADING } from 'client/common/components/media-uploader/constants'
import { useCreateFeedPost } from 'client/data-access/execute/feed/createFeedPost'

export default function Modal({ isVisible, setVisible }: NewFeedPostModalProps) {
  const [form] = AntdForm.useForm();
  const [isSubmitting, setSubmitting] = useState<boolean>(false);
  const [disableSubmit, setDisableSubmit] = useState<boolean>(false);
  const { execute, data, error } = useCreateFeedPost(null);

  useEffect(() => {
    if (data) {
      setSubmitting(false);
      setVisible(false);
      form.resetFields();
      message.success("Thank you! We are sure to convey your message!")
    } else if (error) {
      setSubmitting(false);
      console.log(error)
      message.error("Sorry, there are many patients ahead of you. Please try again later.")
    }
  }, [data, error])

  const handleResetFields = (): void => {
    form.resetFields();
  }

  const handleCancel = (): void => {
    setVisible(false);
  }

  const handleSubmit = async (): Promise<void> => {
    try {
      setSubmitting(true);
      const values = await form.validateFields();
      const x = await execute(values);
    } catch (error) {
      setSubmitting(false);
    }
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
      // confirmLoading={isSubmitting}
      // okText="Submit"
      // onOk={handleSubmit}
      onCancel={handleCancel}
      footer={
        <Footer 
          onReset={handleResetFields}
          onCancel={handleCancel}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          disabled={disableSubmit}
        />}
    >
      <AntdForm.Provider
        onFormChange={handleFormChange}
      >
        <Form name={FORM_NAME} form={form} />
      </AntdForm.Provider>
    </AntdModal>
  );
}
