
import { styles, styleMethods } from '../../common/styles/index.style'
import ProfileSelection from '../../common/layout'
import { bernard } from '../../common/models/index'

export default function Bernard() {
  return (
    <ProfileSelection name={bernard.pageTitle} description={bernard.pageDescription}>
      <div className={styleMethods.getTextSection()}>
        <div className={styles.textSectionTitle}>
          A True Calling
        </div>
        <div>
          Anyone who had their health compromised would understand the inconvenience and hardship.
          Everyone hopes to have good health to pursue their dreams in life.
          For Bernard, it does not stop there.
          Having the desire to care, serve and help, he takes a step further by facilitating the process of bringing others back on their road of recovery.
        </div>
      </div>
      
      <div className={styleMethods.getTextSection()}>
        <div className={styles.textSectionTitle}>
          Fighting Stereotype
        </div>
        <div>
          Nursing has evolved from just a stereotypical bedside care.
          Today, nurses are equipped with more autonomy and knowledge to function.
          This gives new nurses more choices to branch out into a variety of job scopes within the nursing field.
          Generally, the starting point for most nurses who enter by choice stems from the act of providing face-to-face care through human interactions.
          Nurses can be considered to be the one with the highest element of personal touch.
        </div>
      </div>

      <div className={styleMethods.getTextSection()}>
        <div className={styles.textSectionTitle}>
          Contributing To Society
        </div>
        {/* <img src={involvementImg} alt="involvement"  /> */}
        <div>
          Basic academic studies, projects and skill trainings are nothing out of the ordinary.
          Community work is what interests Bernard the most.
          Bernard believes that life in the nursing academy is only as fruitful as what one intends it to be.
          The more involved he chose to be, the more he understands people from various walks of life.
          It is an eye-opening experience compared to just hearing news or seeing articles online, which can never substitute real-life experience. 
        </div>
      </div>

      <div className={styleMethods.getTextSection()}>
        <div className={styles.textSectionTitle}>
          Learning Through Experience
        </div>
        <div>
          Tutorials and lectures do not spark joy for a kinaesthetic learner like Bernard.
          Instead, most of the lessons learnt are from T2P.
          Technically for most people, it would be their virgin experience of handling patients as in-charge.
          Naturally, it would be stressful as people who have come to seek medical attention are under your responsibility and care. 
          One's decisions, along with other nursing colleagues, would affect the health outcomes of the patients during their hospitalization period.
          It is a huge responsibility.
        </div>
      </div>

      <div className={styleMethods.getTextSection()}>
        <div className={styles.textSectionTitle}>
          To All Aspiring Nurses
        </div>
        <div>
          Bernard would like to offer some advice to prospective nurses.
          <br /><br />
          Before choosing this course, do your research.
          Seek advice and consult others on this profession.
          Attend talks, seminars, open house etc. 
          Apply for attachments, job shadowing, clinically jobs or anything that broadens your perspective of this field before deciding whether it is something you may consider doing. 
          <br /><br />
          After choosing the course, always humble yourself throughout the learning process.
          It’s good to be curious and clarify doubts, but be tactful.
          Learn to take criticism, deal with negative remarks/comments from others, but do not take it personally.
          <br /><br />
          Lastly, find and bond with people who can be there for you on an emotional level when needed.
          Do get along with others, it does not hurt.
        </div>
      </div>

      <div>
        {/* <img src={bernardPeaceImg} alt="bernard-peace"  /> */}
        <div>
          <div>
            {/* <BlockQuote cite="Bernard"> */}
              Accept that the journey will be tough, but you will be strong enough to see it through. 
            {/* </BlockQuote> */}
          </div>
        </div>
      </div>
    </ProfileSelection>
  )
}