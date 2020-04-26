import React, { useState } from 'react';
import { Button, Modal, Form } from 'antd';
import NewPostForm from './form/NewPostForm';
import { useMutation } from '@apollo/react-hooks';
import { ADD_FEED_POST } from '../../../api/mutations';

import { openNotification } from '../../../utilities/notificationSnackbar';
import { SmileOutlined } from '@ant-design/icons';
import { FrownOutlined } from '@ant-design/icons';
import { theme } from '../../../utilities/theme';

const successNotificationStyle = {
  backgroundColor: "#47B881"
}

const errorNotificationStyle = {
  backgroundColor: "#EC4C47"
}

function NewPostModal(props) {
  const { visible, setVisible } = {...props};
  const [loading, setLoading] = useState();
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [addFeedPost, responseAfterSubmit] = useMutation(ADD_FEED_POST);

  const [form] = Form.useForm();
  const [shouldValidateForm, setValidateForm] = useState(false);
  const [clearForm, setClearForm] = useState(false);

  const handleCancel = () => {
    setVisible(false);
  }

  const handleOk = () => {
    console.log("Submitting ...")
    form.validateFields()
        .then(values => { 
          submitForm(values);
        })
        .catch(info => { 
          console.log('Validate Failed:', info);
        });
  }

  const submitForm = async (values) => {
    console.log("Values: ", values);
    
    const { author, message, mediaList, tagList, allowCommenting } = { ...values };
    addFeedPost({
      variables: {
        author,
        message,
        tagList,
        media: "test photo",
        allowCommenting
      }
    }).then(response => {
      showSubmitSuccess();
    }, error => {
      showSubmitFailure();
      console.log(error);
    });
  }

  const showSubmitSuccess = () => {
    setLoading(false);
    setVisible(false);
    openNotification("Thank you!", "The graduates will be touched.", <SmileOutlined />, successNotificationStyle);
    setValidateForm(false);
    setClearForm(true);
  }

  const showSubmitFailure = () => {
    setLoading(false);
    setVisible(false);
    setValidateForm(false);
    openNotification("Oops!", "Something went wrong. Please try again.", <FrownOutlined />, errorNotificationStyle);
  }

  return (
    <Modal visible={visible}
      title="Create a new post"
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Cancel
             </Button>,
        <Button key="submit" style={{backgroundColor:theme.color.blue.primary, color:"white"}} loading={loading} disabled={disableSubmit} onClick={handleOk}>
          Submit
             </Button>
      ]}
    >
      <NewPostForm loading={loading}
                   form={form}
                   shouldValidateForm={shouldValidateForm}
                   setValidateForm={setValidateForm}
                   clearForm={clearForm}
                   setClearForm={setClearForm}
                   onFinish={handleOk}
                   setDisableSubmit={setDisableSubmit}
      />
    </Modal>
  );
}

export default NewPostModal;