import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { mediaQuery } from '../../utilities/mediaQuery';

import NavBar from '../common/navbar/NavBar';
import SingleViewPanel from './panel-single-view/SingleViewPanel';
import MultiViewPanel from './panel-multi-view/MultiViewPanel';
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
      <NavBar title="Thank you Healthcare Heroes" enableMenu={true} />
      <div className="bulletin-header">
        <b>Share a memory, Congratulate a person, Thank someone!</b><br />
        Let us take this oppportunity to congratulate all our healthcare graduates and wish them all the best for their future endeavours.<br />
        We would like to thank our professsors and mentors for all that they have done.<br />
        Finally, a big thank you to all our healthcare heroes out there!
      </div>
      <div>
        { isLargeViewPort ? <MultiViewPanel /> : <SingleViewPanel /> }
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