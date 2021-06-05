import { NewFeedPostModalProps } from './types/index.type'
import { Modal as AntdModal, Form as AntdForm} from 'antd';
import Form from './components/form'

export default function Modal({ isVisible, setVisible }: NewFeedPostModalProps) {
  const [form] = AntdForm.useForm();

  const handleCancel = (): void => {
    setVisible(false);
  }

  const handleSubmit = () => {
    form
    .validateFields()
    .then(values => {
      form.resetFields();
      console.log("SUBMIT VALUES", values) // TODO: call api to submit
      setVisible(false);
    })
    .catch(error => {
      console.log("ERROR", error)
    })
  }

  return (
    <AntdModal
      title="Write a message"
      visible={isVisible}
      okText="Submit"
      onOk={handleSubmit}
      onCancel={handleCancel}
    >
      <Form form={form} />
    </AntdModal>
  );
}
