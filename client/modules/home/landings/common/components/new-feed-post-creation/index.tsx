import { useState } from 'react';
import { styles } from './styles/index.style'
import Modal from './components/modal'

export default function NewFeedPostCreation() {
  const [ showMoal, setShowModal ] = useState<boolean>(false);

  const handleClick = (): void => {
    setShowModal(true);
  }

  return (
    <div className={styles.containter}>
      <div className={styles.input} onClick={handleClick}>
        Would you like to leave a message for our heroes?
      </div>

      <Modal isVisible={showMoal} setVisible={setShowModal} />
    </div>
  );
}
