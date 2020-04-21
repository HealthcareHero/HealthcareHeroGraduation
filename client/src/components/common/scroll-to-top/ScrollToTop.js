import { withRouter } from 'react-router-dom';

function ScrollToTop(props) {
  const { children } = {...props};
  window.scrollTo({
    top: 0,
    left: 0,
  });
  return children || null;
}

export default withRouter(ScrollToTop);