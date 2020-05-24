import React from 'react';
import { Link } from 'react-router-dom';
import { useStyle } from './useStyle';
import NavBar from '../common/navbar/NavBar';
import Button from '@material-ui/core/Button';
import nurseImg from '../../assets/img/page-not-found/nurse-injection.svg';
import { path } from '../../utilities/paths';


function PageNotFound() {
  const { container, imgSection, contentSection, btnSection } = useStyle();

  return (
    <div>
      <NavBar title="Page Not Found" enableMenu={true} />
      <div style={container}>
        <img src={nurseImg} alt="nurse-injection" style={imgSection}/>
        <div style={contentSection}>
          Opps! Are you here for injection?
          <Link to={path.home}>
            <Button variant="contained" size="medium" color="primary" style={btnSection}>Return</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;