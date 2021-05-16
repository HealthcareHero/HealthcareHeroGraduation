import { styles, styleMethods } from '../common/styles/index.style'
import ProfileSelection from '../common/layout'
import { jeanie } from '../common/models/index'

export default function Jeanie() {
  return (
    <ProfileSelection name={jeanie.pageTitle} description={jeanie.pageDescription}>
      <div className={styleMethods.getTextSection()}>
        <div className={styles.textSectionTitle}>
          Living The Moment
        </div>
        <div>
          Working in the healthcare industry gives Jeanie a sense of belonging.
          To her, healthcare offers her the opportunity to be present.
          With her mind completely focused and engaged, she is able to enjoy every moment, every interaction with the people who needs her.
          In being present, Jeanie demonstrates her compassion without dilution while delivering quality care professionally.
        </div>
      </div>

      <div className={styleMethods.getTextSection()}>
        <div className={styles.textSectionTitle}>
          A Will To Serve
        </div>
        <div>
          Jeanie has always strived to do her best to help others and she is glad to be in a nursing career.
          It empowers her to do just that.
          Being able to be there for someone at their lowest is an incredible privilege.
          To make a difference to someone's life is a great honour.
        </div>
      </div>

      <div className={styleMethods.getTextSection()}>
        <div className={styles.textSectionTitle}>
          A Memorable Experience
        </div>
        <div>
          While working at a renal transplant ward during her school attachment, Jeanie saw how the different medical teams work together to bring about a good outcome for the patients.
          It was a great experience, as a nurse, to be able to complement the other medical teams in restoring a healthy and productive life.
          The whole process was much effective when everyone works together to achieve the best result for the patients.
        </div>
      </div>

      <div className={styleMethods.getTextSection()}>
        <div className={styles.textSectionTitle}>
          Rising To The Challenge
        </div>
        <div>
          Everyday can be very challenging for a nurse in the Accident and Emergency (A&E) department.
          From providing quality care to patients, to managing the emotions of the family and friends of the patients who are concerned about their well-being, to meeting the breach time (maximum time it takes to be seen in an A&E department).
          However, all these do not stop Jeanie from delivering professional and quality care.
          In fact, she embraces these challenges and always strive to do her best.
        </div>
      </div>

      <div className={styleMethods.getTextSection()}>
        <div className={styles.textSectionTitle}>
          To All Aspiring Nurses
        </div>
        <div>
          Jeanie recalled that school was an amazing place for her to meet like-minded people, while gaining experience to socialise.
          Amidst all the fun, being professional and tactful in her words and actions is the virtue that Jeanie will always uphold.
          Given the challenging nature of the work of a nurse, one may feel overwhelmed.
          Jeanie believes that by being professional, one can avoid being caught in undesirable situations.
        </div>
      </div>
    </ProfileSelection>
  )
}
