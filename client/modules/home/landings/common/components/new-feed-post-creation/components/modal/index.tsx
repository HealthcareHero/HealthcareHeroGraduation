import { useEffect, useState } from 'react';
import { NewFeedPostModalProps, FormValues } from './types/index.type'
import { Modal as AntdModal, Form as AntdForm, message } from 'antd';
import Form from './components/form'
import Footer from './components/footer'
import { FORM_NAME, formFieldNames } from './configurations'
import { STATUS_UPLOADING } from 'client/common/components/media-uploader/constants'
import { useCreateFeedPost } from 'client/data-access/execute/feed/createFeedPost'
import { useUploadMedia } from 'client/data-access/execute/feed/uploadMedia'
import { getDisplayMessage } from 'client/common/errors'
import { getBase64 } from 'client/common/utils/file-helpers'

export default function Modal({ isVisible, setVisible }: NewFeedPostModalProps) {
  const [form] = AntdForm.useForm();
  const [isSubmitting, setSubmitting] = useState<boolean>(false);
  const [disableSubmit, setDisableSubmit] = useState<boolean>(false);
  const createFeedPost = useCreateFeedPost(null);
  const uploadMedia = useUploadMedia(null);

  useEffect(() => {
    if (createFeedPost.data) {
      setSubmitting(false);
      setVisible(false);
      form.resetFields();
      message.success("Thank you! We are sure to convey your message!")
    } else if (createFeedPost.error) {
      setSubmitting(false);
      message.error(getDisplayMessage(createFeedPost.error))
    }
  }, [createFeedPost.data, createFeedPost.error])

  const handleResetFields = (): void => {
    form.resetFields();
  }

  const handleCancel = (): void => {
    setVisible(false);
  }

  const handleSubmit = async (): Promise<void> => {
    try {
      setSubmitting(true);
      const values = (await form.validateFields()) as FormValues;

      const promiseMediaUrls = values.media.map(async (file) => {
        const base64String = await getBase64(file.originFileObj) as string;
        console.log("BASE 64:", base64String.substr(base64String.length-10))
        const url = await uploadMedia.execute({base64String}) as string
        console.log("URL:", url)
        return url;
      })

      const mediaUrls = await Promise.all(promiseMediaUrls)
      console.log("MEDIAURL:", mediaUrls)

      await createFeedPost.execute({
          author: values.author,
          recipient: values.recipient,
          message: values.message,
          tags: values.tags,
          enableComment: values.enableComment,
          media: [...mediaUrls],
        });

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
