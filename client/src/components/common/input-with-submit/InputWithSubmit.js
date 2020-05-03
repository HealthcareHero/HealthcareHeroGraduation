import React, { useState } from 'react';
import { Input, Button } from 'antd';
import SendIcon from '@material-ui/icons/Send';

import 'antd/es/input/style/css';
import './inputWithSubmit.css';

const { TextArea } = Input;

function SubmitButton(props) {
  const { loading, onClick } = {...props};
  return (
    <Button key="submit" type="primary" loading={loading} onClick={onClick} icon={<SendIcon />} >
    {" "}  
    </Button>
  );
}

function InputWithSubmit(props) {
  const { text, setText, onSubmit, loading } = {...props};

  const handleChange = ({ target: {value} }) => {
    setText(value);
  }

  const handleSubmit = () => {
    onSubmit("Guest", text);
    setText("");
  }

  return (
    <div style={{display: "flex", flexDirection: "row"}}>
      <TextArea
          value={text}
          onChange={handleChange}
          autoSize={{ minRows: 1, maxRows: 5 }}
          allowClear
          disabled={loading}
        />
      <SubmitButton loading={loading} onClick={handleSubmit} />
    </div>
  );
}

export default InputWithSubmit;

