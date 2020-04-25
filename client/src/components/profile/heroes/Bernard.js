import React from 'react';
import BlockQuote from '../../common/quote-block/BlockQuote';
import bernardPeaceImg from '../../../assets/img/hero-bernard/bernard-peace.png';

const quote = "You need to accept the fact that you’re not the best and have all the will to strive to be better than anyone you face.";

function Bernard() {
  return (
    <div>
      Bernard
      <img src={bernardPeaceImg} alt="bernard-peace" style={{width:"100%", maxWidth:"300px", display:"block", marginLeft:"auto", marginRight:"auto", marginTop:"-53px", position:"relative", bottom:"-53px", zIndex: "12"}}/>
      <div style={{backgroundColor:"#FBE5A2", paddingTop:"53px", paddingBottom:"20px"}}>
        <BlockQuote text={quote} cite="Bernard" />
      </div>
    </div>
  );
}

export default Bernard;