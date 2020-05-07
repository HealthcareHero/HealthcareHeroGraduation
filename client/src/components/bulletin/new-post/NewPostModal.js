import React, { useState } from 'react';
import { Button, Modal, Form } from 'antd';
import NewPostForm from './form/NewPostForm';
import { storage } from '../../../firebase'
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

  const uploadFile = async (file) => {
    const folderName = "uploads";
    return new Promise((resolve, reject) => {
      const task = storage.ref(`${folderName}/${file.uid}`).put(file.originFileObj);
      task.on(
        "state_changed",  // 'state_changed' observer
        snapshot => {},   // Observe state change event such as progress, pause and resume
        error => {
          console.log(error);
        },
        async () => {
          let url = await storage.ref(folderName).child(file.uid).getDownloadURL();
          return resolve(url);
        }
      );
    })
  }

  const getMediaSources = async mediaList => { 
    return await Promise.all(mediaList.map(item => {
      return uploadFile(item);
    }));
  }

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
    setLoading(true);
    console.log("Values: ", values);
    
    const { author, message, mediaList, tagList, allowCommenting } = { ...values };
    
    const media = await getMediaSources(mediaList);
    
    addFeedPost({
      variables: {
        author,
        message,
        tagList,
        media,
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