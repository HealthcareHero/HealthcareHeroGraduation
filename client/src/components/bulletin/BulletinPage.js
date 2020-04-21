import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { mediaQuery } from '../../utilities/mediaQuery';

import NavBar from '../common/navbar/NavBar';
import SingleViewPanel from './panel-single-view/SingleViewPanel';
import NewPostModal from './new-post/NewPostModal';
import NewPostButton from './button-new-post/NewPostButton';

import { path } from '../../utilities/paths';


import './bulletinPage.css';

function BulletinPage() {
  const [isModalVisible, setModalVisible] = useState(false);
  const isLargeViewPort = useMediaQuery(mediaQuery.minWidth.small);

  const showModal = () => {
    setModalVisible(true);
  }

  return (
    <div className="bulletin-page">
      <NavBar title="Congratulate A Friend" enableMenu={true} />
      <div className="bulletin-header">
        Hello! Do write something to congratulate a friend or anyone. <br />
        Give them some encouragement!
      </div>
      <div>
        { isLargeViewPort ? <div>Nothing here now. Use a mobile phone instead</div> : <SingleViewPanel /> }
      </div>

      { 
        isLargeViewPort ? <NewPostButton onClick={showModal} /> 
                        : <Link to={path.createNewFeedPost}>
                            <NewPostButton />
                          </Link>
      }

      <NewPostModal visible={isModalVisible} setVisible={setModalVisible} />
    </div>
  );
}

export default BulletinPage;