import React from 'react';
import { useStyle } from './useStyle';
import BlockQuote from '../../../common/quote-block/BlockQuote';
import bernardPeaceImg from '../../../../assets/img/hero-bernard/bernard-peace.png';
import involvementImg from '../../../../assets/img/hero-bernard/involvement.png';

// const quote = "You need to accept the fact that you’re not the best and have all the will to strive to be better than anyone you face.";

function Bernard() {
  const { section, sectionHeader, mediaSection, mediaSectionImage, mediaSectionText, blockQuoteSection, blockQuoteImage, blockQuoteOffsetBackground, blockQuote } = useStyle();

  return (
    <div className="hero-bernard" style={{ paddingTop: "8px" }}>
      <div style={section}>
        <div style={sectionHeader}>
          A True Calling
        </div>
        <div>
          Everyone hopes to have good health to pursue what they wish in life.
          For Bernard, he took a step further by facilitating the process of bringing others back on the road of recovery.
          Anyone who had their health compromised would understand the inconvenience and hardship.
        </div>
      </div>
      
      <div style={section}>
        <div style={sectionHeader}>
          Fighting Stereotype
        </div>
        <div>
          Nursing has evolved overtime from just a stereotypical bed side care.
          Today, nurses are equipped with more automony and knowledge to function.
          This gives new nurses more choices to branch out into variety of job scopes within the nursing field.
          Generally, the starting point for most nurses who enter by choice stems from the act of providing face-to-face care through human interactions.
          Nurses can be considered to be the one with the highest element of personal touch.
        </div>
      </div>

      <div style={mediaSection}>
        <div style={sectionHeader}>
          Contributing to society
        </div>
        <img src={involvementImg} alt="involvement" style={mediaSectionImage} />
        <div style={mediaSectionText}>
          Basic academic studies, projects and skill training are nothing out of the ordinary.
          Community work is what interest Bernard the most.
          Bernard belives that life in nursing academy is only as fruitful as what one intends it to be.
          The more involved he chose to be, the more he sees in terms of people who are struggling from various walks of life.
          It can be an eye-opening experience compared to just hearing news or seeing articles online, which can never substitute real life experience. 
        </div>
      </div>

      <div style={section}>
        <div style={sectionHeader}>
          Education is primary
        </div>
        <div>
          Tutorials and lectures do not spark joy for a kinaesthetic learner like Bernard.
          Instead, most of the lessons learnt are from T2P.
          Technically for most people it would be their virgin experience of handling patients as in-charge.
          Naturally, it would be stressful as now people who have come to seek medical attention are under your responsibility and care. 
          One's decisions along with other nursing colleagues would affect the health outcomes of the patients during their hospitalization period.
          It is a huge responsibility.
        </div>
      </div>

      <div style={section}>
        <div style={sectionHeader}>
          To all aspiring nurses
        </div>
        <div>
          Even before choosing this course, do your own research.
          Ask around people who are in the field, search for relevant friends to seek advice.
          Attend talks, seminar, open house etc. 
          Apply for attachments, job shadowing, clinically jobs or anything that broadens your perspective of this field before deciding whether it is something you may consider doing. 
          <br /><br />
          After choosing the course, always humble yourself throughout the learning process.
          It’s good to curious and seek understanding, just not be rude.
          Learn to take criticism, deal with negative remarks/comments from people who still have prejudice against nurses. Society is a tough bunch to handle, welcome to adult world. 
          <br /><br />
          Lastly, find and bond with people who can be there for you on a emotional level when needed.
          Try and get along with people, it does not hurt.
        </div>
      </div>

      <div style={blockQuoteSection}>
        <img src={bernardPeaceImg} alt="bernard-peace" style={blockQuoteImage} />
        <div style={blockQuoteOffsetBackground}>
          <div style={blockQuote}>
            <BlockQuote cite="Bernard">
              Accept that the journey will be tough, but you will be strong enough to see it through. 
            </BlockQuote>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Bernard;