import React, { useState } from 'react';
import IconButton from '../button-icon/IconButton';

import { HeartOutlined, HeartFilled } from '@ant-design/icons';

import { useMutation } from '@apollo/react-hooks';
import { INCREMENT_LIKE, DECREMENT_LIKE } from '../../../api/mutations';

function HeartButton(props) {
  const { feedPostId, likeCount, setLikeCount }= {...props};
  const [heartIsLit, setHeartLightUp] = useState(false);
  const [incrementLike] = useMutation(INCREMENT_LIKE);
  const [decrementLike] = useMutation(DECREMENT_LIKE);

  const onLikeClick = () => {
    setHeartLightUp(!heartIsLit);

    if (heartIsLit) {
      decrementLike({
        variables: {
          feedPostId
        }
      });
      setLikeCount(likeCount-1);
    }
    else {
      incrementLike({
        variables: {
          feedPostId
        }
      });
      setLikeCount(likeCount+1);
    }
  }

  return (
      heartIsLit ? <IconButton icon={<HeartFilled className="liked" style={{ fontSize: '20px' }}/>} onClick={onLikeClick} />
                 : <IconButton icon={<HeartOutlined style={{ fontSize: '20px' }} />} onClick={onLikeClick} />
  );
}

export default HeartButton;