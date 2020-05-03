import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { mediaQuery } from '../../../utilities/mediaQuery';
import BlockQuote from '../../common/quote-block/BlockQuote';
import bernardPeaceImg from '../../../assets/img/hero-bernard/bernard-peace.png';
import involvementImg from '../../../assets/img/hero-bernard/involvement.png';

const quote = "You need to accept the fact that you’re not the best and have all the will to strive to be better than anyone you face.";

const textContainerStyle = {
  paddingLeft: "8px",
  paddingRight: "8px",
  paddingBottom: "1em"
}

function Bernard() {
  const isWideScreen = useMediaQuery(mediaQuery.minWidth.small);

  return (
    <div className="hero-bernard" style={{paddingTop:"8px"}}>
      <div style={textContainerStyle}>
        Bacon ipsum dolor amet beef shankle sunt brisket salami pork chop chislic sed ham hock, picanha ut kevin. Eu dolore meatloaf, brisket shank labore irure biltong hamburger ut duis elit ut sunt chuck. Sirloin et esse kielbasa elit, in frankfurter pig ullamco quis sunt. Jerky dolore pastrami, bacon pork chop buffalo meatball aute velit kevin veniam tenderloin short ribs et cupim. Et nostrud officia ad pork loin. Burgdoggen ham hock drumstick, shoulder do jerky occaecat voluptate reprehenderit ut tempor sed fugiat minim incididunt.
      </div>

      <div style={isWideScreen ? {paddingLeft:"8px", paddingRight:"8px", minHeight:"240px"} : {}}>
        <img src={involvementImg} alt="involvement" style={isWideScreen ? {float:"left", paddingRight:"8px", height:"200px"} : {objectFit: "cover", width: "100%", height: "250px"}} />
        <div style={isWideScreen ? {} : {paddingLeft:"8px", paddingRight:"8px", paddingTop:"0.5em"}}>
          Beef ribs hamburger tempor, aute tenderloin ground round short ribs. Cow tongue in fatback pork belly laboris. Dolore sed jerky reprehenderit lorem nulla jowl chislic, veniam filet mignon kielbasa ball tip laborum do. Beef velit consequat venison id laboris adipisicing chislic aliquip. Ad est boudin magna fugiat. Commodo tempor dolor nisi pancetta tenderloin. Tenderloin spare ribs filet mignon venison in fatback. Swine pastrami excepteur t-bone. Swine cillum pork belly pariatur. Shoulder laboris esse ullamco capicola veniam nulla ribeye anim occaecat. Bacon labore dolore irure pancetta aliquip adipisicing pastrami picanha cupim do in.
        </div>
      </div>

      <div style={{...textContainerStyle, marginTop:"1em"}}>
      Fatback dolore dolor tri-tip turkey tempor jerky swine venison elit. Commodo esse salami, ribeye t-bone picanha in ea tenderloin ham hock pork turducken. Ut salami incididunt doner, meatloaf kevin eu dolor ipsum flank. Fugiat kielbasa short ribs spare ribs pig laborum. Porchetta alcatra shoulder reprehenderit, veniam sunt tri-tip excepteur.
      </div>

      <div style={{marginTop:"1em"}}>
        <img src={bernardPeaceImg} alt="bernard-peace" style={{width:"100%", maxWidth:"300px", display:"block", marginLeft:"auto", marginRight:"auto", marginTop:"-53px", position:"relative", bottom:"-53px", zIndex: "12"}}/>
        <div style={{backgroundColor:"#FBE5A2", paddingTop:"53px", paddingBottom:"20px"}}>
          <div style={isWideScreen ? {width:"50vw", marginLeft:"auto", marginRight:"auto"}: {}}>
            <BlockQuote text={quote} cite="Bernard" />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Bernard;