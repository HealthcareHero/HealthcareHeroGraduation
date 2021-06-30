import { styles } from './styles/index.style'
import { FooterProps } from './types/index.type'
import { Button } from 'antd';

export default function Footer({ onReset, onCancel, onSubmit, isSubmitting, disabled }: FooterProps) {
  return (
    <div className={styles.container}>
      <div>
        <Button key="reset" type="primary" danger onClick={onReset}>
          Reset Fields
        </Button>
      </div>
      <div>
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>
        <Button key="submit" type="primary" loading={isSubmitting} disabled={disabled} onClick={onSubmit}>
          Submit
        </Button>
      </div>
    </div>
  )
}