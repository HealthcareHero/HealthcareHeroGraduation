import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useMutation } from '@apollo/react-hooks';
import { ADD_FEED_POST } from '../../../api/mutations';
import { Button, Form } from 'antd';
import NavBar from '../../../components/common/navbar/NavBar';
import NewPostForm from './form/NewPostForm';
import { storage } from '../../../firebase'

import { path } from '../../../utilities/paths';
import { theme } from '../../../utilities/theme';

function NewPostPage(props) {
  const [loading, setLoading] = useState();
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [addFeedPost, responseAfterSubmit] = useMutation(ADD_FEED_POST);
  const [form] = Form.useForm();
  const [shouldValidateForm, setValidateForm] = useState(false);
  const [clearForm, setClearForm] = useState(false);
  let history = useHistory();

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

    setLoading(true);
    
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
    setValidateForm(false);
    setClearForm(true);
    history.push(path.bulletin);
    history.go();
  }

  const showSubmitFailure = () => {
    setLoading(false);
    setValidateForm(false);
  }

  return (
    <div className="new-post-page">
      <NavBar title="Create a new post" enableBackButton={true} />

      <div style={{padding: "15px"}}>
        <NewPostForm loading={loading}
                    form={form}
                    shouldValidateForm={shouldValidateForm}
                    setValidateForm={setValidateForm}
                    clearForm={clearForm}
                    setClearForm={setClearForm}
                    onFinish={handleOk}
                    setDisableSubmit={setDisableSubmit}
        />

        <div style={{float:"right", marginBottom: "15px"}}>
          <Button key="submit" style={{backgroundColor:theme.color.blue.primary, color:"white"}} loading={loading} disabled={disableSubmit} onClick={handleOk}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NewPostPage;